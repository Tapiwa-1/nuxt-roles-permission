<script setup>
const { $roleStore, $profileStore, $generalStore } = useNuxtApp()

</script>
<template>
    <NuxtLayout name="authenticated-layout">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Roles</h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class=" shadow-md sm:rounded-lg">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            @click="$generalStore.showOverlay = true">
                            Button {{ $generalStore.showOverlay }}
                        </button>
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-900 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        Name
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Action
                                    </th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="role in $roleStore.roles" :key="role.id"
                                    class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                    <th scope="row"
                                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {{ role.name }}
                                    </th>
                                    <td class="px-6 py-4">
                                        <NuxtLink class="font-medium mr-1 text-blue-600 dark:text-blue-500 hover:underline">
                                            Edit
                                        </NuxtLink>
                                        <NuxtLink method="delete" as="button"
                                            class="font-medium text-red-600 dark:text-red-500 hover:underline">Delete
                                        </NuxtLink>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    </NuxtLayout>
</template>

