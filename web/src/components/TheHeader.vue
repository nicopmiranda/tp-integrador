<template>
	<header>
		<nav class="navbar navbar-expand-md px-1">
			<div class="navbar-header">
				<a class="navbar-brand">
					<img src="/favicon.ico" alt="Logo" class="logo-img" />
				</a>
				<navbar-search class="navbar-header-search"></navbar-search>
				<div class="navbar-header-options">
					<router-link to="/cart">
						<i class="fas fa-shopping-cart header-icon"></i>
					</router-link>
					<i class="fas fa-user header-icon"></i>
					<icon-toggler
						class="
							fas
							fa-bars
							header-icon
							nav-options-toggler-navigation
						"
						toggle="collapse"
						target="#navbarHiddenNavContainer"
						controls="navbarHiddenNavContainer"
						expanded="false"
						label="Toggle Navigation"
					></icon-toggler>
				</div>
				<div class="navbar-header-togglers">
					<icon-toggler
						class="fas fa-search header-icon navbar-search-icon"
						toggle="collapse"
						target="#navbarHiddenSearch"
						controls="navbarHiddenSearch"
						expanded="false"
						label="Toggle Search Input"
						@click.native="toggleSearch"
					></icon-toggler>
					<icon-toggler
						class="
							fas
							fa-bars
							header-icon
							navbar-toggler-navigation
						"
						toggle="collapse"
						target="#navbarHiddenNavContainer"
						controls="navbarHiddenNavContainer"
						expanded="false"
						label="Toggle Navigation"
					></icon-toggler>
				</div>
			</div>
			<div class="navbar-body">
				<navbar-search
					v-if="showSearchInput"
					class="navbar-body-search collapse navbar-collapse"
					id="navbarHiddenSearch"
				></navbar-search>
				<div
					class="navbar-nav-container collapse navbar-collapse"
					id="navbarHiddenNavContainer"
				>
					<ul class="navbar-nav">
						<li class="nav-item">
							<router-link to="/home" class="nav-link"
								>Inicio</router-link
							>
						</li>
						<li class="nav-item">
							<router-link to="/products" class="nav-link"
								>Productos</router-link
							>
						</li>
						<li class="nav-item">
							<router-link to="/contact" class="nav-link"
								>Contacto</router-link
							>
						</li>
						<li class="nav-item">
							<router-link to="/register" class="nav-link"
								>Registrarse</router-link
							>
						</li>
					</ul>
					<div class="navbar-nav-options">
						<router-link to="/cart">
							<i class="fas fa-shopping-cart header-icon"></i>
						</router-link>
						<i class="fas fa-user header-icon"></i>
					</div>
				</div>
			</div>
		</nav>
	</header>
</template>

<script>
import NavbarSearch from './NavbarSearch'
import IconToggler from './IconToggler'

export default {
	name: 'TheHeader',
	components: {
		NavbarSearch,
		IconToggler
	},
	data() {
		return {
			showSearchInput: false
		}
	},
	mounted() {
		window.addEventListener('resize', () => {
			if (
				document.documentElement.clientWidth >= this.getScreenWidthMd()
			) {
				this.showSearchInput = false
			}
		})
	},
	methods: {
		getScreenWidthMd() {
			return 576
		},
		toggleSearch() {
			this.showSearchInput = !this.showSearchInput
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
	position: sticky;
	top: 0;
	border-bottom: 1px solid var(--primary-color);
    z-index: 1000;
}

.navbar {
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	align-items: flex-start;
	background-color: var(--secondary-color);
}

.navbar-header {
	grid-column: 1 / 13;
	display: grid;
	grid-template-columns: repeat(12, 1fr);
}

.navbar-header-search {
	display: none;
}

.navbar-body {
	grid-column: 1 / 13;
	display: grid;
}

.navbar-header-search {
	display: none;
}

.navbar-brand {
	grid-column: 1 / 2;
	margin: 0;
}

.navbar-header-togglers {
	grid-column: 2 / 13;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	gap: 1rem;
	padding-right: 1rem;
}

.navbar-header-options {
	display: none;
	grid-column: 12 / 13;
}

.navbar-nav-container {
	grid-column: 1 / 13;
	display: flex;
	-ms-flex-direction: column;
	flex-direction: column;
	gap: 1rem;
}

.navbar-nav-options {
	grid-column: 1 / 13;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;
}

.navbar-nav {
	grid-column: 1 / 13;
	width: 100%;
	display: flex;
	justify-content: center;
	list-style-type: none;
	padding: 0;
}

.navbar-body-search {
	grid-column: 1 / 13;
}

.nav-item {
	display: inline-block;
	margin: 0 10px;
}

.nav-link {
	color: var(--primary-color);
}
.nav-link:hover {
	text-shadow: var(--text-shadow-hover);
}

.header-icon {
	color: var(--primary-color);
	font-size: 1.5rem;
	cursor: pointer;
}
.header-icon:hover {
	text-shadow: var(--text-shadow-hover);
}

@media only screen and (min-width: 576px) {
	.navbar-header-togglers {
		padding-right: 0;
	}

	.navbar-body-search {
		display: none;
	}
	.navbar-header-search {
		grid-column: 2 / 10;
		display: block;
	}
	.navbar-toggler-navigation {
		display: none;
	}
	.navbar-search-icon {
		display: none;
	}

	.navbar-header-options {
		grid-column: 10 / 13;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1.5rem;
	}
	.navbar-nav-options {
		display: none;
	}
	.navbar-body {
		display: flex;
		justify-content: center;
	}

	.navbar-nav {
		display: flex;
		-ms-flex-direction: row;
		flex-direction: row;
	}
	.navbar-search {
		grid-column: 2 / 12;
	}
	.navbar-options {
		grid-column: 12 / 13;
	}
	.header-icon {
		font-size: 1.5rem;
	}
}

@media only screen and (min-width: 768px) {
	.navbar-header {
		grid-template-columns: repeat(15, 1fr);
	}
	.navbar-header-search {
		grid-column-end: 14;
	}
	.navbar-header-options {
		grid-column: 14 / 16;
		justify-content: center;
	}
	.nav-options-toggler-navigation {
		display: none;
	}
}
</style>
