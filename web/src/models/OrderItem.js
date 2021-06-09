export default class OrderItem {
    constructor(product, quantity) {
        this.setProduct(product)
        this.setQuantity(quantity)
    }

    setProduct(product) {
        if (!product) throw new Error('product must be specified')
        this.product = product
    }
    
    setQuantity(quantity = 1) {
        if (quantity <= 0)
        this.quantity = quantity
    }

    calculatePrice() {
        return this.product.price * this.quantity
    }
}