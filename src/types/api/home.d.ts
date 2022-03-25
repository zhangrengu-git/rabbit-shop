export type ApiRes<T> = {
  code: string;
  msg: string;
  result: T;
};

// 分类数据单项类型
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
