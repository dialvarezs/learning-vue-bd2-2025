<script setup lang="ts">
import { login } from '@/api';
import { useAuthStore } from '@/stores/auth';
import { ref } from 'vue';

const username = ref('')
const password = ref('')

const emit = defineEmits<{
    (e: 'login-success', token: string): void
}>()

async function doLogin() {
    const loginData = await login(username.value, password.value)
    const auth = useAuthStore()

    if (loginData) {
        username.value = ''
        password.value = ''
        auth.setToken(loginData.access_token)
    } else {
        alert('Inicio de sesión incorrecto')
    }
}

</script>

<template>
    <div>
        <div>
            <label for="username">Usuario:</label>
            <input id="username" v-model="username"> </input>
        </div>
        <div>
            <label for="password">Contraseña:</label>
            <input type="password" id="password" v-model="password"> </input>
        </div>
        <div>
            <button @click="doLogin"> Iniciar sesión </button>
        </div>
    </div>
</template>