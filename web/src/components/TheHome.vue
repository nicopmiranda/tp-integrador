<template>

	<section class="src-components-the-home">
		<div class="row">
    <div class="col-lg-12 d-none d-lg-block mb-1">
        <div id="carouselCaptions" class="carousel slide carousel-fade" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselCaptions" data-slide-to="0" class="active"></li>
                <li data-target="#carouselCaptions" data-slide-to="1"></li>
                <li data-target="#carouselCaptions" data-slide-to="2"></li>
            </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src="">
                        <div class="carousel-caption d-none d-md-block">
                            <h5 class="font-weight-bold text-white">Los mejores cuidados para tu sangre</h5>
                              <a class="btn btn-danger">Registrarse ahora</a>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="" />
                        <div class="carousel-caption d-none d-md-block">
                            <h5 class="font-weight-bold text-white">¿Querés conocer un poco más acerca de nosotros?</h5>
                            <a class="btn btn-danger">Laboratorio VladTepes</a>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="" />
                        <div class="carousel-caption d-none d-md-block">
                            <h5 class="font-weight-bold text-white">Si ya te hiciste análisis ingresá para ver tus resultados!</h5>
                                <a class="btn btn-danger">Ingresar</a>
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
    props: [],
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
</style>
