<template>
    <div id="app">
        <the-header></the-header>
        <main class="main">
            <router-view></router-view>
        </main>
        <the-footer></the-footer>
    </div>
</template>

<script>
import TheHeader from './components/TheHeader'
import TheFooter from './components/TheFooter'

export default {
    name: 'App',
    components: {
        TheHeader,
        TheFooter
    }
}
</script>

<style>
:root {
  --primary-color: rgb(224, 108, 0);
  --secondary-color: rgb(39, 39, 39);
  --text-shadow-hover: 0 0 2px rgb(224, 108, 0);
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

#app {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: var(--primary-color);
    background-color: var(--secondary-color);
    min-height: 100vh;
}
</style>
