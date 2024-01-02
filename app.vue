<template>
    <Nuxt-page />
    <FormOverlay v-if="$generalStore.showOverlay" />
</template>
<script setup>
import { storeToRefs } from 'pinia';
const { $generalStore, $userStore } = useNuxtApp()
// const { showOverlay } = storeToRefs($generalStore)


onMounted(async () => {
    try {
        await $generalStore.hasSessionExpired()
        if ($userStore.id) {
            $userStore.getUser()
        }
    } catch (error) {
        console.log(error)
    }
})

</script>