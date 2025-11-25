<script setup lang="ts">
import { ref, type Ref } from 'vue'
import type { User } from '@/interfaces'
import { useAuthStore } from '@/stores/auth'
import { fetchUsers } from '@/api'
import { useRouter } from 'vue-router'

const router = useRouter()
const auth = useAuthStore()
const users: Ref<User[]> = ref([])

async function getUsers() {
    users.value = await fetchUsers(auth.token)
}
async function goToEditUser(userId: number) {
    await router.push({ name: 'userEdit', params: { id: userId } })
}
</script>

<template>
    <button @click="getUsers">Cargar usuarios</button>
    <div>
        <table v-if="users.length > 0">
            <thead>
                <tr>
                    <td>Usuario</td>
                    <td>Nombre</td>
                    <td></td>
                </tr>
            </thead>
            <tr v-for="user in users">
                <td>{{ user.username }}</td>
                <td>{{ user.fullname }}</td>
                <td>
                    <button @click="goToEditUser(user.id)">Editar</button>
                </td>
            </tr>
        </table>
        <div v-else>No hay datos de usuarios cargados.</div>
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
