export const localMixinOrder = {
    methods: {
        addProductToOrder(product, quantity) {
            const order = this.getOrder()
            order.items.push({
                product,
                quantity,
                total: product.price * quantity
            })
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
                const result = await this.axios.get(`http://localhost:4000/api/products/${id}`)
                return result.data
            } catch(err) {
                return null
            }
        },
        async getProducts() {
            let result = []
            try {
                result = await this.axios.get('http://localhost:4000/api/products/')
                return result.data
            } catch (err) {
                return result
            }
        }
    }
}