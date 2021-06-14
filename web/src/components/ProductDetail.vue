<template>
	<section class="product-detail-section">
		<div class="container-fluid">
			<div v-if="!product" class="alert alert-info p-2">
				<p>Searching product data...</p>
			</div>
			<div v-else-if="product._id" class="product-card">
				<div class="product-image-container">
					<img
						:src="product.imageUrl"
						title="Imagen del producto"
						class="product-image"
					/>
				</div>
				<div class="product-info">
					<div class="product-text">
						<h3 class="product-name">{{ product.name }}</h3>
						<p>
							{{ product.description }}
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Voluptatibus, doloremque repellat animi
							quibusdam aliquid hic reprehenderit eveniet nulla
							alias tempora, nemo beatae consectetur id esse
							facere labore nihil distinctio exercitationem.
						</p>
					</div>
					<div class="product-price-quantity-container">
						<div>
							<h4 class="product-price">
								${{ calculatedProductPrice }}
							</h4>
						</div>
						<quantity-selector
							class="product-quantity-container"
							:initialQuantity="initialProductQuantity"
							:validQuantityAction="'validProductQuantity'"
							:quantityGetter="'productQuantity'"
							@select-quantity="selectQuantity"
						></quantity-selector>
					</div>
					<div>
						<button
							class="btn btn-primary form-control"
							type="button"
							@click="addToCart"
						>
							Agregar al carrito
						</button>
					</div>
				</div>
			</div>
			<div v-else class="alert alert-danger p-2">
				<p>Product not found</p>
			</div>
		</div>
	</section>
</template>

<script>
import { localMixinOrder } from '../localMixins';
import QuantitySelector from './QuantitySelector.vue';

export default {
	name: 'product-detail',
	mixins: [localMixinOrder],
	props: {
		productId: {
			type: String,
			required: true
		}
	},
	components: {
		QuantitySelector
	},
	async created() {
		this.product = await this.findProductById(this.productId);
	},
	data() {
		return {
			initialProductQuantity: 1,
			productQuantity: 1,
			product: null,
		};
	},
	computed: {
		calculatedProductPrice() {
			return this.product.price * this.productQuantity;
		}
	},
	methods: {
		addToCart() {
			const quantity = this.$store.getters.productQuantity;
			this.addProductToOrder(this.product, quantity, true);
		},
		selectQuantity(quantity) {
			this.productQuantity = quantity
		}
	}
};
</script>

<style scoped>
* {
	margin: 0;
	padding: 0;
}

.product-detail-section {
	padding: 3rem 4rem;
}

.product-card {
	display: flex;
	-ms-flex-direction: column;
	flex-direction: column;
	gap: 2rem;
}

.product-image-container {
	width: 100%;
}

.product-image {
	width: 75%;
}

.product-info {
	text-align: left;
	width: 100%;
	display: flex;
	-ms-flex-direction: column;
	flex-direction: column;
	gap: 2rem;
}

.product-text {
	display: flex;
	-ms-flex-direction: column;
	flex-direction: column;
	gap: 1rem;
}

.product-price-quantity-container {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 0.5rem;
	font-size: 1.7rem;
	height: 3.5rem;
}

.product-quantity-container {
	height: 100%;
	width: 60%;
}

@media only screen and (min-width: 576px) {
	.product-image {
		width: 50%;
	}

	.product-quantity-container {
		width: 50%;
	}
}

@media only screen and (min-width: 768px) {
	.product-image {
		width: 100%;
	}

	.product-card {
		display: flex;
		-ms-flex-direction: row;
		flex-direction: row;
		gap: 4rem;
	}

	.product-image-container {
		width: 50%;
	}

	.product-info {
		width: 50%;
	}

	.product-quantity-container {
		width: 60%;
	}

	.product-price-quantity-container {
		gap: 3rem;
		height: 4rem;
		font-size: 1.8rem;
	}

	.product-quantity-modifier:hover {
		font-size: 2.1rem;
	}
}

@media only screen and (min-width: 1024px) {
	.product-image {
		width: 75%;
	}

	.product-detail-section {
		padding: 5rem;
	}

	.product-quantity-container {
		width: 40%;
	}
}
</style>
