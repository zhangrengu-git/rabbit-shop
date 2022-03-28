import { defineStore } from "pinia";
import request from '@/utils/request'
import type { BannerList, CategoryList, GoodsItem } from "@/types/api/home";
import { http } from "@/utils/request"

const useHomeStore = defineStore({
  id: 'home',
  state: () => ({
    // 分类数据
    categoryList: [] as CategoryList,
    // 首页banner数据
    bannerList: [] as BannerList,
    // 新鲜好物
    newList: [] as GoodsItem[]
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
    },
    async getHomeNew() {
      const res = await http<GoodsItem[]>("GET", "home/new")
      this.newList = res.data.result
    }
  }
})

export default useHomeStore