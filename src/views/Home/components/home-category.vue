<script setup lang="ts">
import { RouterLink } from "vue-router";
import { computed } from "vue";
import useStore from "@/stores/index";
const { home } = useStore()
const newCategoryList = computed(() => {
  return home.categoryList.map(item => ({
    name: item.name,
    id: item.id,
    children: item.children.splice(0, 2),
    goods: item.goods
  }))
})
</script>

<template>
  <div class="home-category">
    <ul class="menu" v-if="newCategoryList.length > 0">
      <li v-for="i in newCategoryList" :key="i.id">
        <RouterLink to="/">{{ i.name }}</RouterLink>
        <RouterLink to="/" v-for="item in i.children" :key="item.id">{{ item.name }}</RouterLink>
        <!-- 弹层layer位置 -->
        <!-- 弹层layer位置 -->
        <div class="layer">
          <h4>
            分类推荐
            <small>根据您的购买或浏览记录推荐</small>
          </h4>
          <ul>
            <li v-for="item in i.goods" :key="item.id">
              <RouterLink to="/">
                <img :src="item.picture" />
                <div class="info">
                  <p class="name ellipsis-2">{{ item.name }}</p>
                  <p class="desc ellipsis">{{ item.desc }}</p>
                  <p class="price">
                    <i>¥</i>
                    {{ item.price }}
                  </p>
                </div>
              </RouterLink>
            </li>
          </ul>
        </div>
      </li>
    </ul>
    <!-- 骨架 -->
    <ul class="menu" v-else>
      <li v-for="i in 9" :key="i">
        <XtxSkeleton :width="40" :height="20" style="margin-right: 5px" bg="rgba(255,255,255,0.2)" />
        <XtxSkeleton :width="50" :height="20" bg="rgba(255,255,255,0.2)" style="margin-right: 5px" />
        <XtxSkeleton :width="50" :height="20" bg="rgba(255,255,255,0.2)" />
      </li>
    </ul>
  </div>
</template>

<style scoped lang="less">
.home-category {
  width: 250px;
  height: 500px;
  background: rgba(0, 0, 0, 0.8);
  position: relative;
  z-index: 99;
  .menu {
    li {
      padding-left: 40px;
      height: 55px;
      line-height: 55px;
      &:hover {
        background: @xtxColor;
      }
      a {
        margin-right: 4px;
        color: #fff;
        &:first-child {
          font-size: 16px;
        }
      }
      .layer {
        width: 990px;
        height: 500px;
        background: rgba(255, 255, 255, 1);
        position: absolute;
        left: 250px;
        top: 0;
        display: none;
        padding: 0 15px;
        h4 {
          font-size: 20px;
          font-weight: normal;
          line-height: 80px;
          small {
            font-size: 16px;
            color: #666;
          }
        }
        ul {
          display: flex;
          flex-wrap: wrap;
          li {
            width: 310px;
            height: 120px;
            margin-right: 15px;
            margin-bottom: 15px;
            border: 1px solid #eee;
            border-radius: 4px;
            background: #fff;
            &:nth-child(3n) {
              margin-right: 0;
            }
            a {
              display: flex;
              width: 100%;
              height: 100%;
              align-items: center;
              padding: 10px;
              &:hover {
                background: #e3f9f4;
              }
              img {
                width: 95px;
                height: 95px;
              }
              .info {
                padding-left: 10px;
                line-height: 24px;
                overflow: hidden;
                .name {
                  font-size: 16px;
                  color: #666;
                }
                .desc {
                  color: #999;
                }
                .price {
                  font-size: 22px;
                  color: @priceColor;
                  i {
                    font-size: 16px;
                  }
                }
              }
            }
          }
        }
      }
      &:hover {
        .layer {
          display: block;
        }
      }
    }
  }
}
</style>