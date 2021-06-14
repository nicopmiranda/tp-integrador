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
								<p class="product-option-label">Cantidad:</p>
								<p class="product-option-label">Precio:</p>
							</div>
							<div>
								<quantity-selector
									class="product-option-value"
									:initialQuantity="item.quantity"
									:validQuantityAction="'validProductQuantity'"
									:quantityGetter="'productQuantity'"
								></quantity-selector>
								<p class="product-option-value">
									${{ item.product.price }}
								</p>
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
			<p>El carrito está vacío!</p>
		</div>
	</section>
</template>

<script>
import QuantitySelector from './QuantitySelector'
import { localMixinOrder } from '../localMixins';

export default {
	name: 'the-cart',
	mixins: [localMixinOrder],
	components: {
		QuantitySelector
	},
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
	display: flex;
	-ms-flex-direction: column;
	flex-direction: column;
	gap: 1rem;
}

.cart-box {
	display: flex;
	justify-content: space-between;
	padding: 1rem;
}

.cart-list .cart-box:not(:nth-child(1)) {
	border-top: 1px solid white;
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
	width: 40%;
}

.product-options-details {
	grid-area: details;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	text-align: left;
}

.product-option-label {
	grid-column: 1 / 2;
	padding-right: 0.5rem;
}

.product-option-value {
	grid-column: 2 / 4;
}

.product-option-delete {
	grid-area: delete;
	height: 80%;
}

.product-btn-delete {
	height: 100%;
}
</style>