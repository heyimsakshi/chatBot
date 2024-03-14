export function cardItem(cloudinaryImageId,name,cuisines,avgRating){
    $('#res-card').append(`<div class="card-info card dark-mode" >
    <img class="card-img-top" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/${cloudinaryImageId}" alt="Card image">
    <div class="card-body ">
      <h4 class="card-title">${name}</h4>
      <h4 class="card-title">${cuisines}</h4>
      <h4 class="card-title">${avgRating}</h4>
    </div>
  </div>
    `)
}