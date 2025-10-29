<template>
  <section class="card">
    <h2>Resultados del Multiple Choice</h2>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>#</th>
          <th>Pregunta</th>
          <th>Respuesta elegida</th>
          <th>Resultado</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(respuesta, index) in respuestas" :key="index" :class="colorFila(respuesta)">
          <td>{{ index + 1 }}</td>
          <td>{{ respuesta.pregunta }}</td>
          <td>{{ respuesta.elegida }}</td>
          <td>{{ respuesta.elegida === respuesta.correcta ? '✅ Correcta' : '❌ Incorrecta' }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const respuestas = ref([
  {
    pregunta: '¿Cuál es la capital de Francia?',
    elegida: 'París',
  },
  {
    pregunta: '¿Cuántos planetas hay en el sistema solar?',
    elegida: '8',
  },
  {
    pregunta: '¿Quién escribió “Cien años de soledad”?',
    elegida: 'Mario Vargas Llosa',
  },
  {
    pregunta: '¿Qué lenguaje se usa en Vue?',
    elegida: 'JavaScript',
  }
])

function colorFila(respuesta) {
  return respuesta.elegida === respuesta.correcta ? 'fila-correcta' : 'fila-incorrecta'
}
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
.fila-correcta {
  background-color: #d4edda;
  color: #155724;
}
.fila-incorrecta {
  background-color: #f8d7da;
  color: #721c24;
}
</style>