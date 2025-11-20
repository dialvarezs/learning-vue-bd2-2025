<script setup lang="ts">
import type { User } from '@/interfaces';
import { ref, watch } from 'vue';

const props = defineProps<{
    inputUserData?: User | null
}>()
const emit = defineEmits<{
    (e: 'save-user', user: User): void
}>()

const userData = ref({
    username: '',
    fullname: ''
})

watch(props, () => {
    if (props.inputUserData) {
        userData.value.username = props.inputUserData.username
        userData.value.fullname = props.inputUserData.fullname
    }
})
async function saveUser() {
    emit('save-user', {
        username: userData.value.username,
        fullname: userData.value.fullname
    } as User)
}
</script>

<template>
    <div>
        <h1>Formulario de usuario</h1>
        <form>
            <div>
                <label for="username">Usuario:</label>
                <input id="username" type="text" v-model="userData.username" />
            </div>
            <div>
                <label for="fullname">Nombre completo:</label>
                <input id="fullname" type="text" v-model="userData.fullname" />
            </div>
            <div>
                <button type="submit" @click.prevent="saveUser">Guardar</button>
            </div>
        </form>
    </div>
</template>