<script setup lang="ts">
import { fetchUser, patchUser } from '@/api';
import UserForm from '@/components/UserForm.vue';
import type { User } from '@/interfaces';
import { useAuthStore } from '@/stores/auth';
import { ref, type Ref } from 'vue';
import { useRoute } from 'vue-router';

const auth = useAuthStore()
const route = useRoute()
const user: Ref<User | null> = ref(null)

async function loadUser() {
    user.value = await fetchUser(Number(route.params.id), auth.token)
}
async function updateUser(updatedUser: User) {
    await patchUser(Number(route.params.id), updatedUser, auth.token)
}

loadUser()
</script>

<template>
    {{ user }}
    <UserForm :inputUserData="user" @save-user="updateUser" />
</template>