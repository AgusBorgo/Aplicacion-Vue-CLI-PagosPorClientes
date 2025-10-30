
<template>
  <div class="container-fluid mt-3">
    <div class="card">
      <div class="card-header">
        <header>
          <h2>Pagos por cliente</h2>
        </header>
      </div>
      <div class="card-body">
        <main>
           <Formulario/>
           <MultipleChoice/>
        </main>
      </div>
    </div>
  </div>
</template>


<script >

import Formulario from './components/components/Formulario.vue';
import MultipleChoice from './components/components/MultipleChoice.vue';


export default {
  name: 'App',
  components: {
    Formulario,
    MultipleChoice,
  },
};
</script>

<style scoped>

</style>
