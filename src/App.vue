<script setup lang="ts">
import { ref } from 'vue';
import LoginForm from './LoginForm.vue';
import ListUsers from './ListUsers.vue';

const token = ref('');

function handleLoginSuccess(newToken: string) {
  token.value = newToken;
}
</script>

<template>
  <LoginForm @login-success="handleLoginSuccess" />
  <!-- <div v-if="token"> -->
    <p>Token de autenticación: {{ token }}</p>
    <ListUsers :token="token" />
  <!-- </div> -->
</template>

<style scoped></style>
