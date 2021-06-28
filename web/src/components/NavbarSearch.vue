<template>
	<div>
		<div class="navbar-search">
			<input
				type="search"
				v-model="searchResultNavBar"
				class="navbar-search-field"
				placeholder="Buscar"
			/>
			<button
				class="navbar-search-submit"
				type="submit"
				@click="goToProducts()"
			>
				<i class="fas fa-search"></i>
			</button>
		</div>
	</div>
</template>
<script>
import { localMixinOrder } from '../localMixins';

export default {
	mixins: [localMixinOrder],
	name: 'navbar-search',
	data() {
		return {
			products: null,
			searchResultNavBar: ''
		};
	},
	methods: {
		goToProducts() {
			console.log(this.$router.currentRoute.path.split('/'));
			if (this.$router.currentRoute.path.split('/')[1] != 'products') {
				this.$router.push({ path: `/products/${this.searchResultNavBar}` });
			}
		}
	}
};
</script>

<style scoped>
.navbar-search {
	display: flex;
	background-color: white;
	border-radius: 8px;
}
.navbar-search-field {
	box-shadow: none !important;
	background-color: transparent;
	width: 100%;
	padding: 0.5rem;
	border: none;
	outline: none;
}
.navbar-search-submit {
	background-color: transparent;
	border: none;
	padding-right: 0.5rem;
}
</style>
