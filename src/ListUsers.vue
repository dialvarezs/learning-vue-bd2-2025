<script setup lang="ts">
import { ref, type Ref } from 'vue';
import type { User } from './interfaces';

const props = defineProps<{
    token: string
}>();

const users: Ref<User[]> = ref([])

async function fetchUsers() {
    const headers = new Headers()
    headers.append("Authorization", `Bearer ${props.token}`)
    const response = await fetch("http://localhost:8000/users", { headers })
    users.value = await response.json()
}
</script>

<template>
    <button @click="fetchUsers">Cargar usuarios</button>
    <div>
        <table v-if="users.length > 0">
            <thead>
                <tr>
                    <td>Usuario</td>
                    <td>Nombre</td>
                </tr>
            </thead>
            <tr v-for="user in users">
                <td>{{ user.username }}</td>
                <td>{{ user.fullname }}</td>
            </tr>
        </table>
        <div v-else>
            No hay datos de usuarios cargados.
        </div>
    </div>
</template>

<style scoped>
table,
th,
td {
    border: 1px solid black;
    border-collapse: collapse;
    padding: 10px;
}
</style>