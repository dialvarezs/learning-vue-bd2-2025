<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';
import { ref } from 'vue';

const username = ref('')
const password = ref('')

const emit = defineEmits<{
    (e: 'login-success', token: string): void
}>()

async function login() {
    const body = new URLSearchParams({
        username: username.value,
        password: password.value,
    })
    const response = await fetch("http://localhost:8000/auth/login", {
        method: "POST",
        body: body,
    })
    if (response.ok) {
        const data = await response.json()
        const auth = useAuthStore()

        username.value = ''
        password.value = ''
        auth.setToken(data.access_token)
    } else {
        alert("Error en el inicio de sesión")
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
            <button @click="login"> Iniciar sesión </button>
        </div>
    </div>
</template>