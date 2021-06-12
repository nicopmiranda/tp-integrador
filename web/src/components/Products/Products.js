import { localMixinOrder } from "../../localMixins"

export default {
  name: 'products',
  mixins: [localMixinOrder],
  async created() {
    this.products = await this.getProducts()
  },
  data () {
    return {
      products: null,
      searchResult: ''
    }
  },
  computed: {
    filteredProducts() {
        if (this.searchResult.length > 0) {
          return this.products.filter((product) => {
            let productName = `${product.name}`
            return productName.toLowerCase().includes(this.searchResult.toLowerCase())
          })
        }
        return this.products;
    }
  }
}


