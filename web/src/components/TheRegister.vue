<template>
	<div class="jumbotron">
		<div class="formulario-de-registro">
			<h1>Formulario de registro</h1>
			<br />

			<vue-form :state="formState" @submit.prevent="enviar()">
				<div class="col-4">
					<!-- campo nombre -->
					<validate tag="div">
						<label for="nombre"></label>
						<input
							type="text"
							id="nombre"
							name="nombre"
							class="form-control"
							autocomplete="off"
							v-model.trim="formData.nombre"
							required
							placeholder="Nombre"
							:minlength="nombreLengthMin"
							:maxlength="nombreLengthMax"
							no-espacios
						/>
						<!-- mensajes de validación
						<field-messages name="nombre" show="$dirty">
							<div
								slot="required"
								class="alert alert-danger mt-1"
							>
								Campo requerido
							</div>
							<div
								slot="no-espacios"
								class="alert alert-danger mt-1"
							>
								No se permiten espacios intermedios en este
								campo
							</div>
							<div
								slot="minlength"
								class="alert alert-danger mt-1"
							>
								Este campo requiere como mínimo
								{{ nombreLengthMin }} caracteres
							</div>
							<div
								v-if="formData.nombre.length == nombreLengthMax"
								class="alert alert-warning mt-1"
							>
								Este campo debe tener como máximo
								{{ nombreLengthMax }} caracteres
							</div>
						</field-messages>
					</validate>
					<br />-->

					<!-- campo apellido -->
					<validate tag="div">
						<label for="apellido"></label>
						<input
							type="text"
							id="apellido"
							name="apellido"
							class="form-control"
							autocomplete="off"
							v-model.trim="formData.apellido"
							placeholder="Apellido"
							required
						/>
						<!-- mensajes de validación 
						<field-messages name="apellido" show="$dirty">
							<div
								slot="required"
								class="alert alert-danger mt-1"
							></div>
						</field-messages>
					</validate>
					<br />
                    -->

					<!-- campo contraseña -->
					<validate tag="div">
						<label for="contraseña"></label>
						<input
							type="text"
							id="contraseña"
							name="contraseña"
							class="form-control"
							autocomplete="off"
							v-model.trim="formData.contraseña"
							placeholder="Contraseña"
							required
						/>
						<!-- mensajes de validación
						<field-messages name="contraseña" show="$dirty">
							<div
								slot="required"
								class="alert alert-danger mt-1"
							>
								Campo requerido
							</div>
						</field-messages>
					</validate>

					<br />-->
					<!-- campo repetir contraseña -->
					<validate tag="div">
						<label for="repetirContraseña"></label>
						<input
							type="text"
							id="repetirContraseña"
							name="repetirContraseña"
							class="form-control"
							autocomplete="off"
							v-model.trim="formData.repetirContraseña"
							placeholder="Repetir constraseña"
							required
						/>
						<!-- mensajes de validación 
						<field-messages name="repetirContraseña" show="$dirty">
							<div
								slot="required"
								class="alert alert-danger mt-1"
							>
								Campo requerido
							</div>
							<div
								v-if="
									formData.contraseña !=
										formData.repetirContraseña
								"
								class="alert alert-warning mt-1"
							>
								Las contraseñas no coinciden
							</div>
						</field-messages>
					</validate>
					<br />-->

					<!-- campo email -->
					<validate tag="div">
						<label for="email"></label>
						<input
							type="email"
							id="email"
							name="email"
							class="form-control"
							autocomplete="off"
							v-model.trim="formData.email"
							placeholder="Email"
							required
						/>
						<!-- mensajes de validación 
						<field-messages name="email" show="$dirty">
							<div
								slot="required"
								class="alert alert-danger mt-1"
							>
								Campo requerido
							</div>
							<div slot="email" class="alert alert-danger mt-1">
								Email no válido
							</div>
						</field-messages>
					</validate>
					<br />-->

					<!-- campo nombre de usuario -->
					<validate tag="div">
						<label for="nombreUsuario"></label>
						<input
							type="text"
							id="nombreUsuario"
							name="nombreUsuario"
							class="form-control"
							autocomplete="off"
							v-model.trim="formData.nombreUsuario"
							required
							:minlength="nombreLengthMin"
							:maxlength="nombreLengthMax"
							no-espacios
						/>
						<!-- mensajes de validación
						<field-messages name="nombreUsuario" show="$dirty">
							<div
								slot="required"
								class="alert alert-danger mt-1"
							>
								Campo requerido
							</div>
							<div
								slot="no-espacios"
								class="alert alert-danger mt-1"
							>
								No se permiten espacios intermedios en este
								campo
							</div>
							<div
								slot="minlength"
								class="alert alert-danger mt-1"
							>
								Este campo requiere como mínimo
								{{ nombreLengthMin }} caracteres
							</div>
							<div
								v-if="
									formData.nombreUsuario.length ==
										nombreLengthMax
								"
								class="alert alert-warning mt-1"
							>
								Este campo debe tener como máximo
								{{ nombreLengthMax }} caracteres
							</div>
						</field-messages>
					</validate>
					<br />
                    -->
				</div>
				<div class="col-5">
					<div class="row justify-content-md-center">
						<button
							class="btn btn-primary my-3"
							:disabled="formState.$invalid"
							type="submit"
						>
							Finalzar registro
						</button>
					</div>
				</div>
			</vue-form>
		</div>
	</div>
</template>

<script>
export default {
	name: 'TheRegister',
	components: {},
	props: [],
	data() {
		return {
			formData: this.getInicialData(),
			formState: {},
			nombreLengthMin: 3,
			nombreLengthMax: 15,
			notaMin: 0,
			notaMax: 10
		};
	},
	computed: {},
	mounted() {},
	methods: {
		getInicialData() {
			return {
				nombre: '',
				apellido: '',
				contraseña: '',
				repetirContraseña: '',
				nombreUsuario: '',
				edad: '',
				email: ''
			};
		},

		enviar() {
			console.log({ ...this.formData });
			this.formData = this.getInicialData();
			this.formState._reset();
		}
	}
};
</script>

<style scoped>
.jumbotron {
	background-color: rgb(39 39 39);
}

hr {
	background-color: #eee;
}

pre {
	color: white;
}

h1 {
	color: rgb(224, 108, 0);
}

.col-4 {
	column-count: 2;
}
</style>
