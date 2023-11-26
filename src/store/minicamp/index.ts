import {defineStore} from 'pinia'
import type { IMinicamp, IMinicampState } from './interface'
import axios from 'axios'
const token = localStorage.getItem("token")



export const useMinicampStore = defineStore('minicamp', {
  state: ():IMinicampState => {
    return{
      list: {
        data: [],
        isError: false,
        isLoading: false,
      },
      detail: {
        data: null,
        isError: false,
        isLoading: false,
      }
    }
  },

  actions : {
    async getAll() {
      try {
        this.list.isLoading = true
        const { data } = await axios.get("https://fazz-track-sample-api.vercel.app/minicamp", 
        {
          headers: {
            Authorization: token
          },
        })
        this.list.data = data.data
      } catch (error) {
        this.list.isError = true
      } finally {
        this.list.isLoading = false
      }
    },
    
    async getDetail(minicampId: string) {
      try {
        this.detail.isLoading = true
        const { data } = await axios.get("https://fazz-track-sample-api.vercel.app/minicamp/" + minicampId, 
        {
          headers: {
            Authorization: token
          },
        })
        this.detail.data = data.data
      } catch (error) {
        this.detail.isError = true
      } finally {
        this.detail.isLoading = false
      }
    }
  }
})