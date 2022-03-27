import axios, { type Method } from "axios";

const instance = axios.create({
  baseURL: "http://pcapi-xiaotuxian-front-devtest.itheima.net/",
  timeout: 5000,
});

// 请求拦截器
instance.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器
instance.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error)
  }
)
// 后端返回的接口数据格式
export interface ResponseData<T = any> {
  data: {
    code: string;
    msg: string;
    result: T;
  };
}

/**
 * axios 二次封装，整个 TS 类型
 * @param url  请求地址
 * @param method  请求类型
 * @param submitData  对象类型，提交数据
 */
export const http = <T>(method: Method, url: string, submitData?: unknown) => {
  return instance.request<T, ResponseData<T>>({
    url,
    method,
    // 🔔 自动设置合适的 params/data 键名称，如果 method 为 get 用 params 传请求参数，否则用 data
    [method.toUpperCase() === "GET" ? "params" : "data"]: submitData,
  });
};

export default instance
