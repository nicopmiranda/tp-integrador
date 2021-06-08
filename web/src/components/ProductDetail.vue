<template lang="html">
  <section class="">
    <h1>Product Detail</h1>
    <div class="container-fluid">
      <div class="product-card">
        <div class="product-image-container">
          <img :src="product.imageUrl" title="Imagen del producto" class="product-image"/>
        </div>
        <div class="product-info">
          <h3 class="product-name">{{ product.name }}</h3>
          <p>{{ product.description }}</p>
          <div class="product-price-quantity-container">
            <div>
              <h4 class="product-price">${{ product.price }}</h4>
            </div>
            <div class="product-quantity-container">
              <button class="product-quantity-modifier">-</button>
              <input type="text" v-model.number="productQuantity" class="product-quantity-value"/>
              <button class="product-quantity-modifier">+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="js">
import Product from '../models/Product'

  export default  {
    name: 'product-detail',
    props: [],
    data () {
      return {
          product: new Product('0x9052901', 'Computadora', 'Soy una descripcion', 200, 'http://disico.com.mx/wp-content/uploads/2014/03/compu.jpg'),
          productQuantity: 1
      }
    }
}
</script>

<style scoped>
.product-card {
    display: flex;
    gap: 2rem;
}

.product-image-container {
  width: 50%;
}

.product-info {
  text-align: left;
}

.product-image {
  width: 100%;
}

.product-price-quantity-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* gap: 1rem; */
  font-size: 1.5rem;
}

.product-quantity-value {
  text-align: center;
  border-left: none;
  border-right: none;
  width: 25%;  
  /* height: 4rem; */
}

.product-quantity-modifier {
  background-color: transparent;
  /* height: 4rem; */
}
</style>
