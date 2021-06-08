export default class Product {
    constructor(id, name, description, price, imageUrl) {
        this.setId(id)
        this.setName(name)
        this.setDescription(description)
        this.setPrice(price)
        this.setImageUrl(imageUrl)
    }

    setId(id = null) {
        if (!id) throw new Error('ID must be specified')
        this.id = id
    }

    setName(name = null) {
        if (!name) throw new Error('Name must be specified')
        this.name = name
    }

    setDescription(description = '') {
        if (!description) throw new Error('Description must be specified')
        this.description = description
    }
    
    setPrice(price = null) {
        if (!price) throw new Error('Price must be specified')
        this.price = price
    }

    setImageUrl(url = '') {
        this.url = url
    }
}