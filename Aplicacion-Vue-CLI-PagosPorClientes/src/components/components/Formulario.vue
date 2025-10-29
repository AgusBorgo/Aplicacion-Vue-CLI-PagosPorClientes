<template>
  <section class="card">
    <div class="card-hearder">
        <h3>Formulario</h3>
    </div>

    <form @submit.prevent="enviarFormulario">

      

       <button type="submit" class="btn btn-success my-3">Enviar</button>

    </form>
  </section>
</template>

<script>
export default {
  name: 'Formulario',

    props: {
    // Definición de props
    },

  data() {
    return {
      clientes: [
        {
        nombre : null,
        documento : null,
        montoAPagar : null,
        pagoRealizado : null,
        horaIngresoInformacion: null,
        }
      ],
    };
  },

  computed: {
    // Propiedades computadas, son como getters
    
  },

  watch: {
    // Observadores para reaccionar a cambios en datos o props
  },

  methods: {

    enviarFormulario(){
      this.horaEnvioFormulario()
    }
    
    ,horaEnvioFormulario(){
      const hora = new Date()
      this.clientes.horaIngresoInformacion = hora.toLocaleString()
      console.log('Formulario enviado: ', this.clientes.horaIngresoInformacion)
    }
  },

  created() {
    // Código que se ejecuta cuando el componente se crea
  },

  mounted() {
    // Código que se ejecuta cuando el componente se monta
  },

  unmounted() {
    // Código que se ejecuta cuando el componente se desmonta
  },
};
</script>

<style scoped>

</style>
