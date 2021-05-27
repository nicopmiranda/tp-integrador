<template>
    <div>
        <div class="navbar-search">
            <input
                type="search"
                class="form-control navbar-search-field"
                placeholder="Escribe lo que quieras buscar"
            />
            <button
                class="btn btn-outline-success navbar-search-submit"
                type="submit"
            >
                Buscar
            </button>
        </div>
    </div>
</template>

<style scoped>
.navbar-search {
    display: flex;
}
.navbar-search-field {
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    box-shadow: none !important;
}
.navbar-search-submit {
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    border-left: none;
}
</style>