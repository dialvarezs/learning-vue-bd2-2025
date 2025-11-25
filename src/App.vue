<script setup lang="ts">
import { useAuthStore } from './stores/auth'

const auth = useAuthStore()
</script>

<template>
    <nav>
        <router-link :to="{ name: 'home' }"> Home </router-link> |
        <router-link to="/login"> Login </router-link>
    </nav>
    <nav v-if="auth.token">
        <button @click="auth.clearToken()">Cerrar sesión</button>
    </nav>
    <main>
        <RouterView />
    </main>
</template>

<style scoped></style>
