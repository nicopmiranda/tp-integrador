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
			shipmentFormData: this.getShipmentFormData(),
			invoiceFormData: this.getInvoiceFormData(),
			formState: {},
			promotion: null,
			checkEfectivo: false,
			checkOnline: false,
			picked: false,
			paymentMethod: '',
			orderItems: this.getOrder().items,
			order: this.getOrder(),
			paymentForm: this.getDataPayment(),
			paymentFormState: {}
		};
	},
	methods: {
		getShipmentFormData() {
			return {
				address: '',
				locality: '',
				neighborhood: '',
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
		getInvoiceFormData() {
			return {
				address: '',
				locality: '',
				neighborhood: '',
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
			this.formDataEnvio = this.getDataEnvio();
			// this.formDataFacturacion = this.getDataFacturacion()
			this.formState._reset();
		},
		savePayment() {
			this.picked = true;
			/*this.order.paymentCard.cardNumber = this.paymentForm.cardNumber;
        this.order.paymentCard.expiryMonth = this.paymentForm.expiryMonth;
        this.order.paymentCard.expiryYear = this.paymentForm.expiryYear;
        this.order.paymentCard.cardCode = this.paymentForm.cardCode;*/
		},
		setPaymentMethod(paymentMethod) {
			this.paymentMethod = paymentMethod;
		}
	},
	computed: {
		getPaymentMethod() {
			return this.paymentMethod;
		}
	}
};
