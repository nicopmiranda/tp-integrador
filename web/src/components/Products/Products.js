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
  method: {
		async getProducts() {
			let result = [];
			try {
				result = await this.axios.get('/api/products/');
				return result.data;
			} catch (err) {
				return result;
			}
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


