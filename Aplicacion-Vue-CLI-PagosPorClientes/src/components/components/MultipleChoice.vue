<template>
  <section class="card">
    <h2>Resultados del Multiple Choice</h2>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>#</th>
          <th>Pregunta</th>
          <th>Respuesta elegida</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(respuesta, index) in respuestas" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ respuesta.pregunta }}</td>
          <td>{{ respuesta.elegida }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const respuestas = ref([
  {
    pregunta: '¿Qué es un componente en Vue.js?',
    elegida: 'a) Son elementos personalizados reutilizables',
  },
  {
    pregunta: '¿Que función cumple el modificador number aplicado a v-model?',
    elegida: 'c) Modifica el dato de entrada para guardarlo como número en la propiedad vinculada',
  },
  {
    pregunta: 'vue create se utiliza para:',
    elegida: 'b) Crear un proyecto base Vue basado en Vue CLI',
  }
])


</script>

<style scoped>
.card {
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
}
.table {
  background-color: #fff;
}

</style>