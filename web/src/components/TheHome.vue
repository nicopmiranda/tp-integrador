<template>

	<section class="src-components-the-home">
		<div class="row">
        <div class="col-12 alert alert-success" v-if="message.length>1">{{message}}</div>
    <div class="col-12 d-block mb-1">
        <div id="carouselCaptions" class="carousel slide carousel-fade h-100" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselCaptions" data-slide-to="0" class="active"></li>
                <li data-target="#carouselCaptions" data-slide-to="1"></li>
                <li data-target="#carouselCaptions" data-slide-to="2"></li>
            </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src="https://i.postimg.cc/NGJf1xnw/First-slide.jpg" />
                        <div class="carousel-caption d-block">
                            <h5 class="font-weight-bold text-white">Agregá tu futuro al carrito</h5>
                            <router-link to="/products" class="btn btn-primary">Productos</router-link>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="https://i.postimg.cc/RhzmZTQJ/MVP-second-slide.jpg" />
                        <div class="carousel-caption d-block">
                            <h5 class="font-weight-bold text-white">¿Querés conocer un poco más acerca de nosotros?</h5>
                            <router-link to="/contact" class="btn btn-primary">Contacto</router-link>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="https://i.postimg.cc/wMS6LppM/Third-slide.jpg" />
                        <div class="carousel-caption d-block">
                            <h5 class="font-weight-bold text-white">Registrate y comprá con nosotros</h5>
                            <router-link to="/register" class="btn btn-primary">Registrarse</router-link>
                        </div>
                    </div>
                </div>
            <a class="carousel-control-prev" href="#carouselCaptions" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselCaptions" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>
</div>
	</section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-the-home',
    props: {
        message: {
            type: String,
            required: false,
            default: ''
        }
    },
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
.src-components-the-home {
}

.carousel{
  height: 50vh;
}

img {
  height: 60rem;
}
</style>
