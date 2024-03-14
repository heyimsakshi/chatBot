import { resList } from "../utils/constants.js";
import { cardItem } from "./cardItem.js";
export function showCards(){
    resList.forEach((restaurant)=>{
        const resData=restaurant.data;
        const { name, cloudinaryImageId, cuisines, deliveryTime, avgRating, costForTwo } = resData;
        cardItem(cloudinaryImageId,name,cuisines,avgRating);
       
   })
}