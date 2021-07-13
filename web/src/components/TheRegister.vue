<template>
	<div class="jumbotron p-4">
		<div v-if="$store.getters.loginAttempt" class="alert alert-warning">
			<p>Debe estar logueado para realizar una compra.</p>
		</div>
		<div class="row d-flex justify-content-between p-3">
			<div class="col-6">
				<h3>Formulario de registro</h3>
				<br />
				<vue-form :state="formState" @submit.prevent="register()">
					<div class="col-12">
						<!-- campo nombre -->
						<validate tag="div">
							<label for="nombre"></label>
							<input
								type="text"
								id="nombre"
								name="nombre"
								class="form-control"
								autocomplete="off"
								v-model.trim="formData.name"
								required
								placeholder="Nombre"
								:minlength="nombreLengthMin"
								:maxlength="nombreLengthMax"
								no-spaces />
							<field-messages name="nombre" show="$dirty">
								<div
									slot="required"
									class="alert alert-danger mt-1">
									Campo requerido
								</div>
								<div
									slot="no-spaces"
									class="alert alert-danger mt-1">
									No se permiten espacios intermedios en este
									campo
								</div>
								<div
									slot="minlength"
									class="alert alert-danger mt-1">
									Este campo requiere como mínimo
									{{ nombreLengthMin }} caracteres
								</div>
								<div
									v-if="formData.name.length == nombreLengthMax"
									class="alert alert-warning mt-1">
									Este campo debe tener como máximo
									{{ nombreLengthMax }} caracteres
								</div>
							</field-messages>
						</validate>
						<!--br />-->
						<!-- campo apellido -->
						<validate tag="div">
							<label for="apellido"></label>
							<input
								type="text"
								id="apellido"
								name="apellido"
								class="form-control"
								autocomplete="off"
								v-model.trim="formData.surname"
								placeholder="Apellido"
								required />
							<!-- mensajes de validación -->
							<field-messages name="apellido" show="$dirty">
								<div
									slot="required"
									class="alert alert-danger mt-1">Campo requerido</div>
							</field-messages>
						</validate>
						<!--br /-->

						<!-- campo contraseña -->
						<validate tag="div">
							<label for="contraseña"></label>
							<input
								type="password"
								id="contraseña"
								name="contraseña"
								class="form-control"
								autocomplete="off"
								v-model.trim="formData.password"
								placeholder="Contraseña"
								required />
							<!-- mensajes de validación-->
							<field-messages name="contraseña" show="$dirty">
								<div
									slot="required"
									class="alert alert-danger mt-1">
									Campo requerido
								</div>
							</field-messages>
						</validate>

						<!--br />-->
						<!-- campo repetir contraseña -->
						<validate tag="div">
							<label for="repetirContraseña"></label>
							<input
								type="password"
								id="repetirContraseña"
								name="repetirContraseña"
								class="form-control"
								autocomplete="off"
								v-model.trim="formData.passwordRepeat"
								placeholder="Repetir contraseña"
								required />
							<!-- mensajes de validación -->
							<field-messages name="repetirContraseña" show="$dirty">
								<div
									slot="required"
									class="alert alert-danger mt-1">
									Campo requerido
								</div>
								<div
									v-if="
									formData.contraseña !=
										formData.repetirContraseña
								"
									class="alert alert-warning mt-1">
									Las contraseñas no coinciden
								</div>
							</field-messages>
						</validate>
						<!--br />-->
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
								required />
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
						</field-messages-->
						</validate>
						<!--br />-->

						<!-- campo nombre de usuario -->
						<validate tag="div">
							<label for="nombreUsuario"></label>
							<input
								type="text"
								id="nombreUsuario"
								name="nombreUsuario"
								class="form-control"
								autocomplete="off"
								placeholder="Nombre de usuario"
								v-model.trim="formData.username"
								required />
							<!--
								:minlength="nombreLengthMin"
								:maxlength="nombreLengthMax"
								no-spaces
								div slot="required" class="alert alert-danger mt-0">
								Campo requerido
							</div-->
							<!-- mensajes de validación
						<field-messages name="nombreUsuario" show="$dirty">
							<div
								slot="required"
								class="alert alert-danger mt-1"
							>
								Campo requerido
							</div>
							<div
								slot="no-spaces"
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
						</field-messages-->
						</validate>
						<!--br /-->
					</div>
					<div class="col-12">
						<div class="row justify-content-md-center">
							<button
								class="btn btn-primary my-3 w-100"
								:disabled="formState.$invalid"
								type="submit">
								Finalizar registro
							</button>
						</div>
					</div>
				</vue-form>
			</div>
			<div class="col-4">
				<div class="row justifiy-content-start">
					<div class="col-6">
						<h3>Login</h3>
					</div>
				</div>
				<form class="col-6 border border-light p-3 text-left">
					<div v-if="invalidLoginCredentials && formLoginData.username &&
							formLoginData.password" class="alert alert-danger">
						<p>Credenciales inválidas!</p>
					</div>
					<div class="form-group d-flex flex-column my-4">
						<label for="login-user">Usuario</label>
						<input
							type="text"
							class="form-control"
							v-model="formLoginData.username" />
					</div>
					<div class="form-group d-flex flex-column my-4">
						<label for="login-password">Contraseña</label>
						<input
							type="password"
							class="form-control"
							v-model="formLoginData.password" />
					</div>
					<br />
					<div class="form-group d-flex flex-column my-4">
						<button class="btn btn-primary w-50 ml-2" @click="login">Login</button>
						<a href="#">¿Olvidaste tu contraseña?</a>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
import { localMixinUser } from '../localMixins';

export default {
	name: 'TheRegister',
	mixins: [localMixinUser],
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
	created() {
		if (this.isUserLoggedIn()) {
			this.$router.push('/home/Ya se encuentra logueado');
		}
	},
	destroyed() {
		this.$store.dispatch('setLoginAttempt', false);
	},
	methods: {
		getInicialData() {
			return {
				name: '',
				surname: '',
				password: '',
				passwordRepeat: '',
				username: '',
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
				await this.axios.post('/api/users/', {
					name: this.formData.name,
					surname: this.formData.surname,
					email: this.formData.email,
					username: this.formData.username,
					password: this.formData.password
				});
				this.formData = this.getInicialData();
				this.formState._reset();
				this.$router.push('/home/Se ha registrado correctamente!');
			} catch {
				this.$store.dispatch(
					'setAlertMessage',
					'error',
					'Hubo un problema al intentar guardar los datos'
				);
			}
		},
		async login(evt) {
			//Con esto no recarga la página.
			evt.preventDefault();
			let result = null;
			try {
				result = await this.axios.post('/api/users/login', {
					...this.formLoginData
				});
				if (result.status === 200) {
					//this.$store.dispatch('setUser', result.data.username);
					this.$store.dispatch('setAuthToken', result.data.token);
					this.$router.push(
						this.redirectTo
							? `/${this.redirectTo}`
							: '/home/Se ha logueado correctamente!'
					);
					console.log(result.data.token);
				}
			} catch (err) {
				console.log('Invalid credentials');
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

p {
	color: red;
}
</style>
