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
    <!-- Campo documento -->
    <div class="form-group">
      <label for="documento">documento</label>
      <input
        type="text"
        id="documento"
        class="form-control"
        placeholder="Documento"
        v-model.trim="formulario.documento"
      />
      <div v-if="errorDocumento.mostrar" class="alert alert-danger mt-2">
        {{errorDocumento.mensaje}}
      </div>
    </div>
    <!-- Campo Monto a pagar -->
    <div class="form-group">
      <label for="deuda">deuda</label>
      <input
        type="text"
        id="deuda"
        class="form-control"
        placeholder="Deuda"
        v-model.trim="formulario.deuda"
      />
      <div v-if="errorDeuda.mostrar" class="alert alert-danger mt-2">
        {{errorDeuda.mensaje}}
      </div>
    </div>
    <!-- Campo Monto pago -->
    <div class="form-group">
      <label for="pago">pago</label>
      <input
        type="text"
        id="pago"
        class="form-control"
        placeholder="Pago"
        v-model.trim="formulario.pago"
      />
      <div v-if="errorPago.mostrar" class="alert alert-danger mt-2">
        {{errorPago.mensaje}}
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
            <th>Documento</th>
            <th>Deuda</th>
            <th>Pago</th>
            <th>Fecha y hora de envío</th>
            <th>Resultado</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(cliente, index) in clientes" :key="index">
            <td>{{ cliente.nombre }}</td>
            <td>{{ cliente.documento }}</td>
            <td>{{ cliente.deuda }}</td>
            <td>{{ cliente.pago }}</td>
            <td>{{ cliente.horaIngresoInformacion }}</td>
            <td>{{ cliente.resultado }}</td>
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
        documento: '',
        deuda: '',
        pago: '',
        resultado:'',
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
    errorDocumento() {
      let mensaje = '';
      const doc = this.formulario.documento
      if (!this.formulario.documento) {
        mensaje = 'El documento es obligatorio.';
      } else if (!/^\d+$/.test(doc)) {
        mensaje = 'El documento debe contener solo números.';
      } else if (doc.length > 8) {
        mensaje = 'Muchos digitos.';
      } else if (doc.length < 7){
        mensaje = 'Faltan digitos.'
      }


      return{
        mensaje: mensaje,
        mostrar: mensaje != '',
        ok: mensaje == '',
      }
    },
    errorDeuda() {
      let mensaje = '';
      const deuda = this.formulario.deuda;

  if (!deuda && deuda !== 0) {
    mensaje = 'El monto de la deuda es obligatorio.';
  } else if (isNaN(deuda)) {
    mensaje = 'El monto debe ser un número válido.';
  } else if (Number(deuda) <= 0) {
    mensaje = 'El monto debe ser mayor a cero.';
  }

  return {
    mensaje: mensaje,
    mostrar: mensaje != '',
    ok: mensaje == '',

      }
    },
    errorPago() {
      let mensaje = '';
      const pago = this.formulario.pago;

  if (!pago && pago !== 0) {
    mensaje = 'El monto del pago es obligatorio.';
  } else if (isNaN(pago)) {
    mensaje = 'El monto debe ser un número válido.';
  } else if (Number(pago) <= 0) {
    mensaje = 'El monto debe ser mayor a cero.';
  }

  return {
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
        documento : this.formulario.documento,
        deuda : this.formulario.deuda,
        pago : this.formulario.pago,
        resultado : this.resultado(),
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

    resultado() {
    const deuda = Number(this.formulario.deuda);
    const pago = Number(this.formulario.pago);

    if (isNaN(deuda) || isNaN(pago)) return '';
    return deuda - pago;
    },

    resetearFormulario(){
      this.formulario.nombre = '',
      this.formulario.documento = '',
      this.formulario.deuda = '',
      this.formulario.pago = '',
      this.formulario.resultado = '',
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
