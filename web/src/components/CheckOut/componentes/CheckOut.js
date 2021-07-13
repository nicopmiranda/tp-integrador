import { localMixinOrder } from '../../../localMixins';

export default {
	name: 'src-components-check-out',
	mixins: [localMixinOrder],
  created() {
    if (this.orderItems.length == 0) {
      this.$router.push('/home')
    }
  },
	data() {
		return {
			formState: {},
			promotion: null,
			checkEfectivo: false,
			checkOnline: false,
			paymentMethod: '',
			orderItems: this.getOrder().items,
			order: this.getOrder(),
			paymentForm: this.getDataPayment(),
			paymentFormState: {},
			paymentCompleted: false,
			shippingFormData: this.getShippingFormData(),
			shippingFormState: {},
			shippingCompleted: false,
			billingFormData: this.getBillingFormData(),
			billingFormState: {},
			billingCompleted: false,
		};
	},
	methods: {
		getShippingFormData() {
			return {
				address: '',
				state: '',
				city: '',
				zipCode: ''
			};
		},
		getDataPayment() {
			return {
				cardHolderName: '',
				cardNumber: '',
				expiryMonth: '',
				expiryYear: '',
				cardCode: ''
			};
		},
		getBillingFormData() {
			return {
				address: '',
				state: '',
				city: '',
				zipCode: ''
			};
		},
		aplicarCupon() {
			var mensaje = null;
			if (this.promotion != null) {
				mensaje = 'Aplica';
				//console.log("aplica");
			} else {
				mensaje = 'No aplica';
				// console.log(" no aplica");
			}
			return mensaje;
		},
		vaciarCodigo() {
			this.promotion = '';
		},
		verificarCheck() {
			let mensaje = '';
			if (this.checkEfectivo == true) {
				mensaje = 'Efectivo';
			}
			if (this.checkOnline == true) {
				mensaje = 'Online';
			}
			return mensaje;
		},
		agregarTarjeta() {
			document.getElementById('nroTarjeta').disabled = false;
		},
		/*check(){
      var check = document.getElementById("checkDireccionFacturacion").cheked
       if (check == true) {
         this.formDataFacturacion.calle = this.formDataEnvio.calle
         this.formDataFacturacion.localidad = this.formDataEnvio.localidad
         this.formDataFacturacion.barrio = this.formDataEnvio.barrio
         this.formDataFacturacion.codigoPostal = this.formDataEnvio.codigoPostal
       }
      
     },*/
		finalizarCompra() {
			/*let payment = {
				trxAmount: {
					total: this.order.total,
					currency: "032"
				},
				paymentCard: {
					cardNumber: this.paymentForm.cardNumber,
					expiryMonth: this.paymentForm.expiryMonth,
					expiryYear: this.paymentForm.expiryYear,
					cardCode: this.paymentForm.cardCode
				},
				shippingDetails: {
					address: this.shippingFormData.address,
					city: this.shippingFormData.city,
					state: this.shippingFormData.state,
					zipCode: this.shippingFormData.zipCode
				},
				billingDetails: {
					address: this.billingFormData.address,
					city: this.billingFormData.city,
					state: this.billingFormData.state,
					zipCode: this.billingFormData.zipCode
				}
			}
			let resultPayment = [];
			let resultOrder = [];
			console.log(`Bearer ${this.$store.getters.authToken}`);
			try{
				resultPayment = await this.axios.post('/api/payments', {
					headers: { 'Authorization': `Bearer ${this.$store.getters.authToken}`},
					data: {
						trxAmount: payment.trxAmount,
						paymentCard: payment.paymentCard,
						shippingDetails: payment.shippingDetails,
						billingDetails: payment.billingDetails
					}
				});
				if(resultPayment != null){
					resultOrder = await this.axios.post('/api/orders', {
						headers: { 'Authorization': `Bearer ${this.$store.getters.authToken}`},
						data: {
							username: this.$store.getters.username,
							products: this.order.items,
							shippingTotal: this.order.shippingTotal,
							promotion: this.order.promotion,
							paymentMethod: this.order.paymentMethod,
							subtotal: this.order.subtotal,
							total: this.order.total,
							shippingDetails: payment.shippingDetails,
							billingDetails: payment.billingDetails
						}
					});
				}
			} catch(err){
				console.log(err);
				console.log(resultPayment);
				console.log(resultOrder);
			}
			*/
			this.shippingFormData = this.getShippingFormData();
			this.billingFormData = this.getBillingFormData();
			this.paymentForm = this.getDataPayment();
			// this.formDataFacturacion = this.getDataFacturacion()
			this.formState._reset();
		},
		savePayment() {
			this.paymentCompleted = true;
			/*this.order.paymentCard.cardNumber = this.paymentForm.cardNumber;
        	this.order.paymentCard.expiryMonth = this.paymentForm.expiryMonth;
        	this.order.paymentCard.expiryYear = this.paymentForm.expiryYear;
        	this.order.paymentCard.cardCode = this.paymentForm.cardCode;*/
		},
		saveBilling() {
			this.billingCompleted = true;
		},
		saveShipping() {
			this.shippingCompleted = true;
		},
		setPaymentMethod(paymentMethod) {
			this.paymentMethod = paymentMethod;
		}
	},
	computed: {
		getPaymentMethod() {
			return this.paymentMethod;
		},
		getPurchaseButtonStatus(){
			if(this.billingCompleted == false || this.shippingCompleted == false || this.paymentCompleted == false){
				return true;
			} else {
				return false;
			}
		}
	}
};
