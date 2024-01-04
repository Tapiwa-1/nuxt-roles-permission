import { defineStore } from 'pinia'
import axios from '../plugins/axios'

const $axios = axios().provide.axios

export const useRoleStore = defineStore('role', {
  state: () => ({
    id: '',
    name: 'ss',
    roles: null,
  }),
  
  actions: {
    async getRoles() {
        let res = await $axios.get('/api/get-roles')
        this.$state.roles = res.data
    
      },
      async addRole(data) {
        return await $axios.post('/api/add-role',data)
      }
  
  },
  persist: true,
})