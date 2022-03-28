// 导入 .vue 源文件
import Button from "./Button/index.vue";
import Skeleton from "./Skeleton/Skeleton.vue";
import Slider from './Slider/Slider.vue'

// 全局组件类型声明文件 for Volar
declare module "vue" {
  // 全局组件需要定义 interface GlobalComponents
  export interface GlobalComponents {
    // typeof 获取 TS 类型
    XtxButton: typeof Button;
    XtxSkeleton: typeof Skeleton;
    XtxSlider: typeof Slider;
  }
}

export { };