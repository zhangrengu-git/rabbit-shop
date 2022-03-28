export type ApiRes<T> = {
  code: string;
  msg: string;
  result: T;
};

// 商品类似数据结构
export type GoodsItem = {
  desc: string;
  id: string;
  name: string;
  picture: string;
  price: string;
  title: string;
  alt: string;
};

export type ChildrenItem = {
  id: string;
  name: string;
  picture: string;
  goods: GoodsItem[];
};

export type CategoryItem = {
  id: string;
  name: string;
  children: ChildrenItem[];
  goods: GoodsItem[];
};

// 分类数据列表类型
export type CategoryList = CategoryItem[];

// banner
export type BannerItem = {
  hrefUrl: string,
  id: string,
  imgUrl: string,
  type: string
}
export type BannerList = BannerItem[]




