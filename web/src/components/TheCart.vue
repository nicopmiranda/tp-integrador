<template>
	<section class="section-cart-container">
		<div v-if="cart && cart.items.length > 0" class="section-cart">
			<div class="cart-list">
				<div
					v-for="(item, index) in cart.items"
					:key="index"
					class="cart-box"
				>
					<div class="product-info">
						<div class="product-img-container">
							<img
								:src="item.product.imageUrl"
								:title="`Image of ${item.product.name}`"
								class="product-img"
							/>
						</div>
						<h5 class="text-left">{{ item.product.name }}</h5>
					</div>
					<div class="product-options">
						<div class="product-options-details">
							<div>
								<label for="product-quantity" class="product-option-label">Cantidad:</label>
								<p class="product-option-label">Precio:</p>
							</div>
							<div>
								<input id="product-quantity" type="text" class="product-option-value"/>
								<p class="product-option-value">${{ item.product.price }}</p>
							</div>
						</div>
						<div class="product-option-delete">
							<button
								class="btn btn-danger product-btn-delete"
								title="Eliminar producto del carrito"
							>
								Eliminar
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div v-else class="alert alert-warning">
			<p>The cart is empty!</p>
		</div>
	</section>
</template>

<script>
import { localMixinOrder } from '../localMixins';

export default {
	name: 'the-cart',
	mixins: [localMixinOrder],
	data() {
		return {
			cart: this.getOrder()
		};
	}
};
</script>

<style scoped>
* {
	margin: 0;
}

.section-cart-container {
	padding: 2rem 1rem;
}

.section-cart {
	border: 1px solid white;
	border-radius: 20px;
}

.cart-list {
	padding: 1rem;
}

.cart-box {
	display: flex;
	justify-content: space-between;
}

.product-info {
	display: flex;
	gap: 1rem;
}

.product-img-container {
	width: 20%;
}

.product-img {
	width: 100%;
}

.product-options {
	display: grid;
	grid-template-areas: 'details delete';
	align-items: center;
}

.product-options-details {
    grid-area: details;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    text-align: left;
}

.product-option-label {
	grid-column: 1 / 2;
}

.product-option-value {
	grid-column: 2 / 3;
}

.product-option-delete {
	grid-area: delete;
	height: 80%;
}

.product-btn-delete {
	height: 100%;
}
</style>