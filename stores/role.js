import { defineStore } from 'pinia'
import axios from '../plugins/axios'

const $axios = axios().provide.axios

export const useRoleStore = defineStore('role', {
  state: () => ({
    id: '',
    name: '',
    roles: null,
   
    
  }),
  
  actions: {
    async getRoles() {
        let res = await $axios.get('/api/get-roles')
        this.$state.roles = res.data[0].id
    
      },
  },
  persist: true,
})