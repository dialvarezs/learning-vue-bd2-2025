<script setup lang="ts">
import { ref } from 'vue'

let counter = ref(0)

function decreaseCounter() {
  if (counter.value > 0) {
    counter.value--
  }
  alert("El contador no puede bajar de 0!")
}
</script>

<template>
  <div>
    <h1>You did it!</h1>
    <div class="counter">
      {{ counter }}
    </div>
    <button @click="counter++"> Incrementar </button>
    <button @click="decreaseCounter"> Disminuir </button>
  </div>
</template>

<style scoped>
.counter {
  background-color: darkgray;
  color: blue;
  font-size: xx-large;
  padding: 10px;
}
</style>
