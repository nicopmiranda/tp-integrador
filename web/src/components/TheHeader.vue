<template>
    <header>
        <nav class="navbar navbar-expand-md navbar-dark bg-dark">
            <div class="navbar-header">
                <a class="navbar-brand">
                    <img src="/favicon.ico" alt="Logo" class="logo-img" />
                </a>
                <div class="navbar-search">
                    <input
                        type="search"
                        class="form-control"
                        placeholder="Buscar productos"
                    />
                    <button class="btn btn-outline-success" type="submit">
                        Buscar
                    </button>
                </div>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarHiddenContent"
                    aria-controls="navbarHiddenContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
            <div
                class="collapse navbar-collapse navbar-body"
                id="navbarHiddenContent"
            >
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a href="#" class="nav-link">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">Productos</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">Contacto</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">Registrarse</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'TheHeader'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    align-items: flex-start;
}

.navbar-header {
    grid-column: 1 / 13;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
}

.navbar-body {
    grid-column: 1 / 13;
}

.navbar-brand {
    grid-column: 1 / 2;
    padding: 0.4rem;
}

.navbar-search {
    grid-column: 2 / 13;
    padding: 0.4rem;
    display: flex;
}

.navbar-nav {
    width: 100%;
    display: flex;
    justify-content: center;
    list-style-type: none;
    padding: 0;
}

.nav-item {
    display: inline-block;
    margin: 0 10px;
}

.nav-link {
    color: var(--secondary-color);
}
.nav-link:hover {
    text-shadow: 0 0 4px black;
}
</style>
