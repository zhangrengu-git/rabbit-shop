import { defineStore } from "pinia";
import request from '@/utils/request'

const useHomeStore = defineStore({
  id:'home',
  state:() => ({
    categoryList:[]
  }),
  actions:{
    async getAllCategory(){
      const res = await request.get('/home/category/head')
      console.log('????',res);
      
    }
  }
})

export default useHomeStore