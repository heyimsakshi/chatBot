import { renderRestaurants } from "./renderRestaurant.js";
import { resList } from "../utils/constants.js";
export function fetchRestaurants(query) {
  
    const filteredRestaurants = resList.filter(function(restaurant) {
      return restaurant.data.name.toLowerCase().includes(query.toLowerCase());
    });
  
   
    renderRestaurants(filteredRestaurants);
  }
  