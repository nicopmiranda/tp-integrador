<template>
	<section class="product-detail-section">
		<div class="container-fluid">
			<div class="product-card">
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
								${{ calculateProductPrice() }}
							</h4>
						</div>
						<div class="product-quantity-container">
							<button
								class="
									product-quantity-modifier
									product-quantity-modifier-left
								"
								@click="modifyProductQuantity(-1)"
							>
								-
							</button>
							<input
								type="text"
								v-model="productQuantity"
								class="product-quantity-value"
							/>
							<button
								class="
									product-quantity-modifier
									product-quantity-modifier-right
								"
								@click="modifyProductQuantity(1)"
							>
								+
							</button>
						</div>
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
		</div>
	</section>
</template>

<script>
export default {
	name: 'product-detail',
	data() {
		return {
			product: {
				_id: '0x9052901',
				name: 'Monitor, Teclado y Mouse - Mac',
				description: 'Soy una descripcion.',
				price: 200.0,
				brand: 'Apple',
				categories: ['monitor', 'mouse', 'keyboard', 'apple', 'mac'],
				imageUrl:
					'https://images.unsplash.com/photo-1494173853739-c21f58b16055?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
			},
			productQuantity: 1
		}
	},
	watch: {
		productQuantity(val) {
			console.log(val)
			if (val !== '' && (isNaN(val) || val <= 0 || val > 99)) {
				this.productQuantity = 1
			}
		}
	},
	methods: {
		addToCart() {
			if (!this.productQuantity) this.productQuantity = 1
			console.log({...this.product}, this.productQuantity)
		},
		modifyProductQuantity(quantity = 1) {
			this.productQuantity += quantity
		},
		calculateProductPrice() {
			return this.product.price * (this.productQuantity ? this.productQuantity : 1)
		}
	}
}
</script>

<style scoped>
* {
	margin: 0;
	padding: 0;
}

.product-detail-section {
	padding: 3rem;
}

.product-card {
	display: flex;
	-ms-flex-direction: column;
	flex-direction: column;
	gap: 4rem;
}

.product-image-container {
	width: 100%;
}

.product-image {
	width: 100%;
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
	--border-default: 1px solid white;
	display: flex;
	justify-content: flex-end;
	height: 100%;
	width: 60%;
	border: var(--border-default);
}

.product-quantity-value {
	text-align: center;
	border: none;
	width: 50%;
	background-color: transparent;
	height: 100%;
	color: white;
	outline: none;
}

.product-quantity-modifier {
	background-color: transparent;
	width: 25%;
	height: 100%;
	color: white;
	border: none;
}
.product-quantity-modifier:hover {
	font-size: 2rem;
}

.product-quantity-modifier-left {
	border-right: var(--border-default);
}
.product-quantity-modifier-right {
	border-left: var(--border-default);
}

@media only screen and (min-width: 576px) {
	.product-quantity-container {
		width: 50%;
	}
}

@media only screen and (min-width: 768px) {
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
		width: auto;
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
	.product-detail-section {
		padding: 5rem;
	}
}
</style>
