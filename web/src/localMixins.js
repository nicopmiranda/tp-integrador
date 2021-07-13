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
		getOrder,
        updateOrder(order) {
            if (order) {
                order = calculateOrderSubtotal(order)
                //Revisar
                order = calculateOrderTotal(order)
                const quantity = calculateOrderTotalQuantity(order)
                this.$store.dispatch('modifyCartTotalQuantity', {quantity, increment: false})
                localStorage.setItem('order', JSON.stringify(order));
            }
        },
		clearOrder() {
            createOrder()
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

export function calculateOrderTotalQuantity(order) {
    if (!order) order = getOrder()
    let orderTotalQuantity = 0
    if (order.items.length > 0) {
        orderTotalQuantity = order.items.reduce((accumulator, item) => accumulator + item.quantity, 0)
    }
    return orderTotalQuantity;
}

function getOrder() {
    let order = localStorage.getItem('order');
    if (!order) {
        order = createOrder()
    } else {
        try {
            order = JSON.parse(order);
            if (this) {
                this.updateOrder(order)
            }
        } catch {
            console.log('parseo error order')
            order = createOrder()
        }
    }
    return order
}

function createOrder() {
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
}

function calculateOrderSubtotal(order) {
    if (order.items.length > 0) {
        order.subtotal = order.items.reduce((accumulator, item) => accumulator + item.total, 0);
    }
    return order;
}

function calculateOrderTotal(order){
    //For now, needs to calculate total considering subtotal + shipping price + promotion
    if (order.items.length > 0) {
        order.total = order.items.reduce((accumulator, item) => accumulator + item.total, 0);
    }
    return order;
}