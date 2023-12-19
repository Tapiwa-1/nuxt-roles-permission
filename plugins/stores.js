
import { useProfileStore } from "~/stores/profile"
import { useUserStore } from "~/stores/user"
import { useGeneralStore } from "~/stores/general"
import { useRoleStore } from "~/stores/role"


export default defineNuxtPlugin((NuxtApp) => {
    return {
        provide: { 
            profileStore: useProfileStore(),
            generalStore: useGeneralStore(),
            userStore: useUserStore(),
            roleStore: useRoleStore(),
        },
    }
})