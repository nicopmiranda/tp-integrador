<template>
	<div class="quantity-container">
		<button
			class="quantity-modifier quantity-modifier-left"
			@click="modifyQuantity(-1)"
		>
			-
		</button>
		<input type="text" class="quantity-value" v-model="quantityInput" />
		<button
			class="quantity-modifier quantity-modifier-right"
			@click="modifyQuantity(1)"
		>
			+
		</button>
	</div>
</template>

<script>
export default {
	name: 'quantity-selector',
	props: {
		initialQuantity: {
			type: Number,
			required: true
		},
		validQuantityAction: {
			type: String,
			required: true
		},
		quantityGetter: {
			type: String,
			required: true
		}
	},
	data() {
		return {
			quantity: this.initialQuantity,
			quantityInput: this.quantity,
			quantitySentToValidate: false
		};
	},
	watch: {
		quantityInput(val) {
			if (!this.quantitySentToValidate) {
				this.quantitySentToValidate = true;
				this.validQuantity(val);
				this.quantity = this.$store.getters[this.quantityGetter];
				this.quantityInput = this.quantity
			} else {
				this.quantitySentToValidate = false;
			}
		},
		quantity(val) {
			if (!this.quantitySentToValidate) {
				this.quantitySentToValidate = true;
				this.quantityInput = val
			} else {
				this.quantitySentToValidate = false;
			}
			this.$emit('select-quantity', this.quantity)
		}
	},
	methods: {
		modifyQuantity(quantity) {
			this.validQuantity(this.quantity + quantity)
			this.quantity = this.$store.getters[this.quantityGetter]
		},
		validQuantity(quantity) {
			this.$store.dispatch(this.validQuantityAction, quantity);
		}
	}
};
</script>

<style scoped>
.quantity-container {
	--border-default: 1px solid white;
	display: flex;
	justify-content: flex-end;
	border: var(--border-default);
}

.quantity-value {
	text-align: center;
	border: none;
	width: 50%;
	background-color: transparent;
	height: 100%;
	color: white;
	outline: none;
}

.quantity-modifier {
	background-color: transparent;
	width: 25%;
	height: 100%;
	color: white;
	border: none;
	transition: 0.1s ease;
}

.quantity-modifier-left {
	border-right: var(--border-default);
}
.quantity-modifier-right {
	border-left: var(--border-default);
}
</style>