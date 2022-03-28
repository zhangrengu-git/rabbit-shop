import { defineStore } from "pinia";
import request from '@/utils/request'
import type { BannerList, CategoryList } from "@/types/api/home";
import { http } from "@/utils/request"

const useHomeStore = defineStore({
  id: 'home',
  state: () => ({
    categoryList: [] as CategoryList,
    bannerList: [] as BannerList
  }),
  actions: {
    async getAllCategory() {
      // const res = await request.get('/home/category/head')
      // console.log('????', res.data);
      const res = await http<CategoryList>("GET", "/home/category/head")
      console.log(res);
      this.categoryList = res.data.result
    },
    async getHomeBanner() {
      const res = await http<BannerList>("GET", "/home/banner")
      console.log(res.data.result);
      this.bannerList = res.data.result
    }
  }
})

export default useHomeStore