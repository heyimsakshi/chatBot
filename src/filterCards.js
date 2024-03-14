import { fetchRestaurants } from "./fetchRestaurantDetails.js";
export function filterCards(){
  let timeoutId;

  $("#restaurant-search").on("input", function() {
  
    clearTimeout(timeoutId);


    const query = $(this).val();

    
    timeoutId = setTimeout(function() {
      fetchRestaurants(query);
    }, 300);
  });
}