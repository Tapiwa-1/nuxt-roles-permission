<template>
    <h2 class="font-semibold text-xl text-gray-800 dark:text-white leading-tight">Add Roles</h2>

    <div class=" mx-auto   ">
        <div class=" overflow-hidden shadow-sm sm:rounded-lg">
            <div class="bg-white dark:bg-gray-900 overflow-hidden shadow-sm sm:rounded-lg">
                <div class=" shadow-md sm:rounded-lg">
                    <div class="">
                        <div class=" mx-auto ">
                            <div class=" overflow-hidden shadow-sm sm:rounded-lg">
                                <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
                                    {{ status }}
                                </div>

                                <form class="m-1">
                                    <div>
                                        <InputLabel for="name" value="name" />

                                        <TextInput id="name" type="text" class="mt-1 block w-full" autofocus
                                            autocomplete="name" v-model:model-value="name" />

                                        <InputError class="mt-2" :message="errors && errors.name ? errors.name[0] : ''" />
                                    </div>
                                    <div class="flex items-center justify-end mt-4">

                                        <PrimaryButton role="button" class="ml-4" @click="addRole()">
                                            Add Role
                                        </PrimaryButton>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const { $roleStore, $generalStore } = useNuxtApp()

const router = useRouter()
let errors = ref(null)
let name = ref(null)

const addRole = async () => {
    errors.value = null

    try {
        let data = new FormData()

        data.append('text', name.value || '')
        let res = await $roleStore.addRole(data)

        if (res.status === 200) {
            setTimeout(() => {
                router.push('admin/role/roles')
                $generalStore.showOverlay = false
            }, 1000)
        }


    } catch (error) {
        errors.value = error.response.data.errors
        isUploading.value = false

    }
}
</script>