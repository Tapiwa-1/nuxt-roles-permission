<template>
    <div id="ProfileSettingsOverlay"
        class="fixed flex justify-center pt-14  z-50 top-0 left-0 w-full h-full bg-black bg-opacity-50 overflow-auto">
        <div class=" max-w-lg mx-auto sm:px-6 lg:px-8 space-y-6 ">

            <div class=" p-4 sm:p-8 bg-white shadow sm:rounded-lg dark:bg-gray-900">
                <div class="flex">
                    <h3>ADD Details</h3>
                    <button type="button" @click="$generalStore.showOverlay = false"
                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-hide="default-modal">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nesciunt voluptate, ut cumque
                pariatur, aliquam modi molestiae natus asperiores quasi accusamus exercitationem fuga labore quod ex,
                repellat aspernatur neque nobis?
            </div>


        </div>
    </div>
</template>

<script setup>

</script>