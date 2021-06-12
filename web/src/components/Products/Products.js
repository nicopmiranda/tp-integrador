import { localMixinOrder } from "../../localMixins"

export default {
  name: 'products',
  mixins: [localMixinOrder],
  async created() {
    this.products = await this.getProducts()
  },
  data () {
    return {
      products: [],
      // products: 
      // [
      //   {
      //     name: "Mouse Logitech Pro Series",
      //     description: "Mouse Logitech gamer",
      //     price: 4000.0,
      //     stock: 3,
      //     image: "https://i.postimg.cc/vZrRDgCj/mouse-resize.webp",
      //     brand: "Logitech",
      //     category: "Mouses"
      //   },
      //   {
      //     name: "Monitor Gamer Samsung",
      //     description: "Monitor gamer Samsung 24 pulgadas",
      //     price: 6000.0,
      //     stock : 3,
      //     image: "https://i.postimg.cc/wTBrJPLz/monitor.webp",
      //     brand : "Samsung",
      //     category: "Monitors"
      //   },
      //   {
      //     name: "Teclado Redragon Vishnu K596",
      //     description: "Este teclado Redragon de alto rendimiento permite que puedas disfrutar de horas ilimitadas de juegos. Está diseñado especialmente para que puedas expresar tanto tus habilidades como tu estilo. Mejorá tu experiencia de gaming, ya seas un aficionado o todo un experto, y hacé que tus jugadas alcancen otro nivel.",
      //     price: 8799.0,
      //     stock : 3,
      //     image: "https://i.postimg.cc/Dzcz8ydk/teclado-Redragon.webp://i.postimg.cc/wTBrJPLz/monitor.webp",
      //     brand : "Logitech",
      //     category: "Keyboards"
      //   },
      //   {
      //     name: "Mouse Logitech Pro Series",
      //     description: "Mouse Logitech gamer",
      //     price: 4000.0,
      //     stock : 3,
      //     image: "https://i.postimg.cc/wTBrJPLz/monitor.webp",
      //     brand : "Logitech",
      //     category: "Mouses"
      //   },
      //   {
      //     name: "Mouse Logitech Pro Series",
      //     description: "Mouse Logitech gamer",
      //     price: 4000.0,
      //     stock : 3,
      //     image: "https://i.postimg.cc/wTBrJPLz/monitor.webp",
      //     brand : "Logitech",
      //     category: "Mouses"
      //   },
      //   {
      //     name: "Mouse Logitech Pro Series",
      //     description: "Mouse Logitech gamer",
      //     price: 4000.0,
      //     stock : 3,
      //     image: "https://i.postimg.cc/wTBrJPLz/monitor.webp",
      //     brand : "Logitech",
      //     category: "Mouses"
      //   },
      //   {
      //     name: "Mouse Logitech Pro Series",
      //     description: "Mouse Logitech gamer",
      //     price: 4000.0,
      //     stock : 3,
      //     image: "https://i.postimg.cc/wTBrJPLz/monitor.webp",
      //     brand : "Logitech",
      //     category: "Mouses"
      //   },
      //   {
      //     name: "Mouse Logitech Pro Series",
      //     description: "Mouse Logitech gamer",
      //     price: 4000.0,
      //     stock: 3,
      //     image: "https://i.postimg.cc/wTBrJPLz/monitor.webp",
      //     brand: "Logitech",
      //     category: "Mouses"
      //   },
      //   {
      //     name: "Mouse Logitech Pro Series",
      //     description: "Mouse Logitech gamer",
      //     price: 4000.0,
      //     stock: 3,
      //     image: "https://i.postimg.cc/wTBrJPLz/monitor.webp",
      //     brand: "Logitech",
      //     category: "Mouses"
      //   },
      //   {
      //     name: "Mouse Logitech Pro Series",
      //     description: "Mouse Logitech gamer",
      //     price: 4000.0,
      //     stock: 3,
      //     image: "https://i.postimg.cc/wTBrJPLz/monitor.webp",
      //     brand: "Logitech",
      //     category: "Mouses"
      //   },
      //   {
      //     name: "Mouse Logitech Pro Series",
      //     description: "Mouse Logitech gamer",
      //     price: 4000.0,
      //     stock: 3,
      //     image: "https://i.postimg.cc/wTBrJPLz/monitor.webp",
      //     brand: "Logitech",
      //     category: "Mouses"
      //   },
      //   {
      //     name: "Mouse Logitech Pro Series",
      //     description: "Mouse Logitech gamer",
      //     price: 4000.0,
      //     stock: 3,
      //     image: "https://i.postimg.cc/wTBrJPLz/monitor.webp",
      //     brand: "Logitech",
      //     category: "Mouses"
      //   },
      //   {
      //     name: "Mouse Logitech Pro Series",
      //     description: "Mouse Logitech gamer",
      //     price: 4000.0,
      //     stock: 3,
      //     image: "https://i.postimg.cc/wTBrJPLz/monitor.webp",
      //     brand: "Logitech",
      //     category: "Mouses"
      //   },
      //   {
      //     name: "Mouse Logitech Pro Series",
      //     description: "Mouse Logitech gamer",
      //     price: 4000.0,
      //     stock: 3,
      //     image: "https://i.postimg.cc/wTBrJPLz/monitor.webp",
      //     brand: "Logitech",
      //     category: "Mouses"
      //   }
      // ],
      searchResult: ''
    }
  },
  computed: {
    filteredProducts : function() {
        if (this.searchResult.length > 0) {
          return this.products.filter((product) => {
            let productName = `${product.name}`
            console.log(productName.toLowerCase());
            return productName.toLowerCase().includes(this.searchResult.toLowerCase())
          })
        } else {
          console.log('products:', this.products)
          return this.products;
        }
    }

  },
  mounted () {

  },
  methods: {


  }
}


