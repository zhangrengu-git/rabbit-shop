import useHomeStore from "./modules/home";

 const useStore = () => {
   return {
     home:useHomeStore()
   }
 }

 export default useStore