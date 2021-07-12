<template>
    <section class="container section">
        <i class="fas fa-check check-icon"></i>
        <p>Su compra se ha realizado con éxito!</p>
        <a class="btn btn-success">Ver detalle de la compra</a>
    </section>
</template>

<script>
export default {
    name: 'the-confirmation-page'
}
</script>

<style scoped>
.section {
    padding: 10rem;
}

.check-icon {
    font-size: 7rem;
    color: green;
    margin-bottom: 2rem;
}
</style>