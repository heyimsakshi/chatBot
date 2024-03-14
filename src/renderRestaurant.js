import { cardItem } from "./cardItem.js";
export function renderRestaurants(restaurants) {
  
    $("#res-card").empty();
  
   
    restaurants.forEach((restaurant)=>{
      const resData=restaurant.data;
      const { name, cloudinaryImageId, cuisines, deliveryTime, avgRating, costForTwo } = resData;
     cardItem(cloudinaryImageId,name,cuisines,avgRating)
     
  })

  }