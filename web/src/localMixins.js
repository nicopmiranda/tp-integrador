import jwt from 'jsonwebtoken';
console.log(jwt);

export const localMixinOrder = {
	methods: {
		addProductToOrder(product, quantity, incrementQuantity = false) {
			const order = this.getOrder();
			let itemFound = false;
			let i = order.items.length - 1;
			while (!itemFound && i >= 0) {
				if (order.items[i].product._id === product._id) {
                    itemFound = true
					order.items[i].quantity = incrementQuantity ? order.items[i].quantity + quantity : quantity;
					order.items[i].total = order.items[i].product.price * order.items[i].quantity;
				}
                i--
			}
            if (!itemFound) {
                order.items.push({
                    product,
                    quantity,
                    total: product.price * quantity
                });
            }
			this.updateOrder(order);
		},
        deleteProductFromOrder(product) {
            const order = this.getOrder()
            const indexOfItem = order.items.findIndex(item => item.product._id === product._id)
            if (indexOfItem >= 0) {
                order.items.splice(indexOfItem, 1)
            }
            this.updateOrder(order)
        },
        applyPromotionToOrder(promotion = null) {
            const order = this.getOrder()
            order.promotion = promotion ? promotion : 'No aplica'
            this.updateOrder(order)
        },
        calculateOrderSubtotal(order) {
            order.subtotal = order.items.reduce((accumulator, item) => accumulator + item.total, 0)
            // order.subtotal *= order.promotion ? 0.9 : 1
            return order
        },
        calculateOrderTotalQuantity(order) {
            if (!order) order = this.getOrder()
            let orderTotalQuantity = order.items.reduce((accumulator, item) => accumulator + item.quantity, 0)
            return orderTotalQuantity;
        },
		getOrder() {
			let order = localStorage.getItem('order');
            if (!order) {
                order = this.createOrder()
            } else {
                try {
                    order = JSON.parse(order);
                    this.updateOrder(order)
                } catch {
                    order = this.createOrder()
                }
            }
            return order
		},
        createOrder() {
            const order = {
                items: [],
                subtotal: 0,
                total: 0,
                shippingTotal: 0,
                promotion: 'No aplica',
                paymentMethod: {
                    type: 'No seleccionado'
                }
            };
            localStorage.setItem('order', JSON.stringify(order));
            return order
        },
		updateOrder(order) {
			if (order) {
                order = this.calculateOrderSubtotal(order)
                this.$store.dispatch('modifyCartTotalQuantity', this.calculateOrderTotalQuantity(order), false)
				localStorage.setItem('order', JSON.stringify(order));
			}
		},
		clearOrder() {
			localStorage.removeItem('order');
            this.createOrder()
		},
		async findProductById(id) {
			try {
				const result = await this.axios.get(`/api/products/${id}`);
				return result.data;
			} catch (err) {
				return {};
			}
		},
		async getProducts() {
			let result = [];
			try {
				result = await this.axios.get('/api/products/');
				return result.data;
			} catch (err) {
				return result;
			}
		}
	}
};

export const localMixinUser = {
    computed: {
        authToken() {
            return this.$store.getters.authToken
        }
    },
    methods: {
        isUserLoggedIn() {
            return this.$store.getters.authToken
        },
        logout() {
            this.$store.dispatch('setAuthToken', null)
        }
    }
}