<template>
	<div class="jumbotron p-4">
		<div v-if="goTo === 'checkout'" class="alert alert-warning">
			<p>Debe estar logueado para realizar una compra.</p>
		</div>
		<div class="row d-flex justify-content-between p-5">
			<div class="col-5">
				<h3>Formulario de registro</h3>
				<br />
				<vue-form :state="formState" @submit.prevent="register()">
					<div class="col-12 form-container">
						<!-- campo nombre -->
						<!-- <validate tag="div"> -->
						<div>
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
						</div>
						<!-- campo apellido -->
						<!-- <validate tag="div"> -->
						<div>
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
						</div>
						<!-- campo contraseña -->
						<!-- <validate tag="div"> -->
						<div>
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
						</div>
						<!-- campo repetir contraseña -->
						<!-- <validate tag="div"> -->
						<div>
							<label for="repetirContraseña"></label>
							<input
								type="text"
								id="repetirContraseña"
								name="repetirContraseña"
								class="form-control"
								autocomplete="off"
								v-model.trim="formData.repetirContraseña"
								placeholder="Repetir contraseña"
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
						</div>
						<!-- campo email -->
						<!-- <validate tag="div"> -->
						<div>
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
						</div>

						<!-- campo nombre de usuario -->
						<!-- <validate tag="div"> -->
						<div>
							<label for="nombreUsuario"></label>
							<input
								type="text"
								id="nombreUsuario"
								name="nombreUsuario"
								class="form-control"
								autocomplete="off"
								placeholder="Nombre de usuario"
								v-model.trim="formData.nombreUsuario"
								required
								:minlength="nombreLengthMin"
								:maxlength="nombreLengthMax"
								no-espacios
							/>
							<div slot="required" class="alert alert-danger mt-0">
								Campo requerido
							</div>
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
					</div>
					<div class="col-12">
						<div class="row justify-content-md-center">
							<button
								class="btn btn-primary my-3 w-100"
								:disabled="formState.$invalid"
								type="submit"
							>
								Finalizar registro
							</button>
						</div>
					</div>
				</vue-form>
			</div>
			<div class="col-5">
				<h3>Login</h3>
				<form class="col-12 border border-light p-3 text-left">
					<div
						v-if="
							invalidLoginCredentials &&
							formLoginData.username &&
							formLoginData.password
						"
						class="alert alert-danger"
					>
						<p>Credenciales inválidas!</p>
					</div>
					<div class="form-group d-flex flex-column my-4">
						<label for="login-user">Nombre de usuario</label>
						<input
							type="text"
							class="form-control"
							placeholder="Nombre de usuario"
							v-model="formLoginData.username"
						/>
					</div>
					<div class="form-group d-flex flex-column my-4">
						<label for="login-password">Contraseña</label>
						<input
							type="password"
							class="form-control"
							placeholder="Contraseña"
							v-model="formLoginData.password"
						/>
					</div>
					<div class="form-group d-flex flex-column my-4">
						<button class="btn btn-primary w-50" @click="login">Login</button>
						<a href="#">¿Olvidaste tu contraseña?</a>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'TheRegister',
	components: {},
	props: {
		goTo: {
			type: String,
			required: false
		}
	},
	data() {
		return {
			formData: this.getInicialData(),
			formLoginData: this.getInitialLoginData(),
			invalidLoginCredentials: false,
			formState: {},
			nombreLengthMin: 3,
			nombreLengthMax: 15,
			notaMin: 0,
			notaMax: 10
		};
	},
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
		getInitialLoginData() {
			return {
				username: '',
				password: ''
			};
		},

		async register() {
			try {
				await this.axios.post('/api/users/', {});
				this.formData = this.getInicialData();
				this.formState._reset();
			} catch {
				this.$store.dispatch(
					'setAlertMessage',
					'error',
					'Hubo un problema al intentar guardar los datos'
				);
			}
		},
		async login(evt) {
			evt.preventDefault();
			let result = null;
			try {
				result = await this.axios.post('/api/users/login', {
					...this.formLoginData
				});
				if (result.status === 200) {
					this.$router.push('/home');
				}
			} catch {
				this.invalidLoginCredentials = true;
			}
			this.invalidLoginCredentials = true;
		}
	}
};
</script>

<style scoped>
* {
	margin: 0;
}

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

.form-container {
	column-count: 2;
}
</style>
