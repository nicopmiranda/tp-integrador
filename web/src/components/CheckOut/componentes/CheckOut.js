export default  {
    name: 'src-components-check-out',
    props: [],
    mounted () {

    },
    data () {
      return {
        formDataEnvio: this.getDataEnvio(),
        formDataFacturacion: this.getDataFacturacion(),
        formState: {},
        codigo: null,
        checkEfectivo: false,
        checkOnline: false,
        nroTarjeta: ''
      }
    },
    
    methods: {
      getDataEnvio (){
        return{
          calle: '',
          localidad: '',
          barrio: '',
          codigoPostal: ''
         
        }
      },

      getDataFacturacion (){
        return{
          calle: '',
          localidad: '',
          barrio: '',
          codigoPostal: ''
        }
      },
      
      aplicarCupon(){
        var mensaje = null;
        if (this.codigo != null) {
            mensaje = "Aplica"
            //console.log("aplica");
        } else {
          mensaje = "No aplica"
         // console.log(" no aplica");
        }
       
        return mensaje
       
      },

      vaciarCodigo(){
        this.codigo = ''
      },

      verificarCheck(){
        let mensaje = '';
        if (this.checkEfectivo == true) {
          mensaje = "Efectivo"
        }
        if (this.checkOnline == true) {
          mensaje = "Online"
        }
        return mensaje
      },

     agregarTarjeta(){
      document.getElementById("nroTarjeta").disabled = false;
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

      finalizarCompra(){
        this.formDataEnvio = this.getDataEnvio()
       // this.formDataFacturacion = this.getDataFacturacion()
        this.formState._reset()
      }

    },
    computed: {

    }
}


