<template>
    <div>
        <div class="navbar-search">
            <input
                type="search"
                class="navbar-search-field"
                placeholder="Buscar"
            />
            <button
                class="navbar-search-submit"
                type="submit"
            >
                <i class="fas fa-search"></i>
            </button>
        </div>
    </div>
</template>

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
    padding: .5rem;
    border: none;
    outline: none;
}
.navbar-search-submit {
    background-color: transparent;
    border: none;
    padding-right: .5rem;
}
</style>