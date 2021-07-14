<template>
	<section class="section-cart-container">
		<div v-if="cart && cart.items.length > 0" class="section-cart">
			<div class="row d-flex justify-content-end">
				<div class="col-2">
					<button class="btn btn-danger" @click="emptyCart">
						Vaciar carrito
					</button>
				</div>
			</div>
			<div class="cart-list">
				<div v-for="(item, index) in cart.items" :key="index" class="cart-box">
					<div class="product-info">
						<div>
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
							<div class="product-option-label">
								<p>Cantidad:</p>
								<p>Precio:</p>
							</div>
							<div class="product-option-value">
								<quantity-selector
									:initialQuantity="item.quantity"
									:validQuantityAction="'validProductQuantity'"
									:quantityGetter="'productQuantity'"
									@select-quantity="selectQuantity(item.product, $event)"
								></quantity-selector>
								<p>{{ (item.product.price * item.quantity) | currency }}</p>
							</div>
						</div>
						<div class="product-option-delete">
							<button
								class="btn btn-danger product-btn-delete"
								title="Eliminar producto del carrito"
								@click="deleteProductFromCart(item.product)"
							>
								Eliminar
							</button>
						</div>
					</div>
				</div>
			</div>
			<div class="row d-flex justify-content-between">
				<div class="col-5 discount-container">
					<input
						class="px-1"
						placeholder="Aplicar promoción"
						v-model="promotion"
					/>
					<button class="btn btn-primary" type="button" @click="applyPromotion">
						Aplicar
					</button>
				</div>
				<div class="col-4 details-container">
					<div>
						<p class="detail-label">Subtotal:</p>
						<p class="detail-label">Promoción:</p>
					</div>
					<div>
						<p class="detail-value">${{ cart.subtotal | currency }}</p>
						<p class="detail-value">{{ cart.promotion }}</p>
					</div>
				</div>
			</div>
			<div class="row d-flex justify-content-end">
				<div class="col-4">
					<button class="btn btn-success w-100" @click="goToCheckout">
						Checkout
					</button>
				</div>
			</div>
		</div>
		<div v-else class="alert alert-warning">
			<p>El carrito está vacío!</p>
		</div>
	</section>
</template>

<script>
import QuantitySelector from './QuantitySelector';
import { localMixinOrder, localMixinUser } from '../localMixins';

export default {
	name: 'the-cart',
	mixins: [localMixinOrder,
	localMixinUser],
	components: {
		QuantitySelector
	},
	data() {
		return {
			cart: this.getOrder(),
			promotion: ''
		};
	},
	methods: {
		selectQuantity(product, quantity) {
			this.addProductToOrder(product, quantity);
			this.updateCart();
		},
		deleteProductFromCart(product) {
			this.deleteProductFromOrder(product);
			this.updateCart();
		},
		emptyCart() {
			this.clearOrder();
			this.updateCart();
		},
		updateCart() {
			this.cart = this.getOrder();
		},
		applyPromotion() {
			console.log('applyPromotion');
			// this.applyPromotionToOrder(this.promotion);
			// this.updateCart();
		},
		async goToCheckout() {
			try{
				let result = await this.axios.get('api/users/validate', { 
					headers: { 'Authorization': `Bearer ${this.authToken}`}
				});
				console.log(result);
				if(result.status == 200 || result.status == 304){
					this.$router.push('/checkout');
					return;
				}
			}catch (error){
				console.log(error);
			}
			this.$store.dispatch('setLoginAttempt', true);
			this.$router.push('/register');
		}
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
	display: flex;
	-ms-flex-direction: column;
	flex-direction: column;
	gap: 2rem;
}

.cart-list {
	padding: 1rem;
	display: flex;
	-ms-flex-direction: column;
	flex-direction: column;
	gap: 1rem;
	border: 1px solid white;
	border-radius: 20px;
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

.product-img {
	width: 7rem;
	height: 7rem
}

.product-options {
	display: grid;
	grid-template-areas: 'details delete';
	align-items: center;
	width: 40%;
	gap: 1rem;
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

.discount-container {
	display: flex;
	gap: 1rem;
}

.details-container {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	text-align: left;
}

.detail-label {
	grid-column: 1 / 2;
}

.detail-value {
	grid-column: 2 / 3;
}
</style>