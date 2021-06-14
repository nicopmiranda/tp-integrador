export const localMixinOrder = {
    methods: {
        addProductToOrder(product, quantity) {
            console.log('product:', product)
            const order = this.getOrder()
            let itemFound = null
            let i = order.items.length - 1
            while (!itemFound && i >= 0) {
                const currentItem = order.items[i]
                itemFound = currentItem.product._id === product._id
                if (itemFound) {
                    currentItem.quantity += quantity
                    currentItem.total = currentItem.product.price * quantity
                } else {
                    order.items.push({
                        product,
                        quantity,
                        total: product.price * quantity
                    })
                    i--
                }
            }
            this.updateOrder(order)
        },
        getOrder() {
            const order = localStorage.getItem('order')
            try {
                return JSON.parse(order)
            } catch (err) {
                return order
            }
        },
        updateOrder(order) {
            if (order) {
                localStorage.setItem('order', JSON.stringify(order))
            }
        },
        clearOrder() {
            localStorage.removeItem('orderDetail')
        },
        async findProductById(id) {
            try {
                const result = await this.axios.get(`/api/products/${id}`)
                return result.data
            } catch(err) {
                return {}
            }
        },
        async getProducts() {
            let result = []
            try {
                result = await this.axios.get('/api/products/')
                return result.data
            } catch (err) {
                return result
            }
        }
    }
}