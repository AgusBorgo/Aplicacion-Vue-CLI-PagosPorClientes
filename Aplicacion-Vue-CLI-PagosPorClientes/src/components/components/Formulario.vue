<template>
  <section class="card">
    <div class="card-hearder">
        <h3>Formulario</h3>
    </div>

    <form @submit.prevent="enviarFormulario">

      <!-- Campo nombre -->
    <div class="form-group">
      <label for="nombre">Nombre</label>
      <input
        type="text"
        id="nombre"
        class="form-control"
        placeholder="Nombre"
        v-model.trim="formulario.nombre"
      />
      <div v-if="errorNombre.mostrar" class="alert alert-danger mt-2">
        {{errorNombre.mensaje}}
      </div>
    </div>

       <button type="submit" class="btn btn-success my-3" :disabled="estadoBotonDesabilitado()">Enviar</button>
   
      </form>

      <div v-if="clientes.length" class="mt-4">
      <h4>Registros enviados</h4>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Fecha y hora de envío</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(cliente, index) in clientes" :key="index">
            <td>{{ cliente.nombre }}</td>
            <td>{{ cliente.horaIngresoInformacion }}</td>
          </tr>
        </tbody>
      </table>
    </div>

      

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
      formulario:{
        nombre: '',
        horaIngresoInformacion: ''
      },
      clientes: [
      ],
    };
  },

  computed: {
    // Propiedades computadas, son como getters
    errorNombre() {
      let mensaje = '';
      if (!this.formulario.nombre) {
        mensaje = 'El nombre es obligatorio.';
      } else if (this.formulario.nombre.length < 3) {
        mensaje = 'El nombre debe tener al menos 3 caracteres.';
      } else if (this.formulario.nombre.length > 20) {
        mensaje = 'El nombre no debe exceder los 20 caracteres.';
      } else if (!/^[a-zA-Z]+$/.test(this.formulario.nombre)) {
        mensaje = 'El nombre solo debe contener letras.';
      } else if (this.formulario.nombre.includes(' ')) {
        mensaje = 'El nombre no debe contener espacios.';
      }

      return{
        mensaje: mensaje,
        mostrar: mensaje != '',
        ok: mensaje == '',
      }
    },
  },

  watch: {
    // Observadores para reaccionar a cambios en datos o props
  },

  methods: {

    enviarFormulario(){
      const hora = this.horaEnvioFormulario()

      this.clientes.push({
        nombre : this.formulario.nombre,
        horaIngresoInformacion : hora
      })

      this.resetearFormulario()

    }
    
    ,horaEnvioFormulario(){
      const hora = new Date()
      return hora.toLocaleString()
    },

    estadoBotonDesabilitado(){
      return !this.errorNombre.ok
    },

    resetearFormulario(){
      this.formulario.nombre = '',
      this.horaIngresoInformacion = ''
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
.card {
  padding: 20px;
}
.table {
  background-color: #fff;
}

</style>
