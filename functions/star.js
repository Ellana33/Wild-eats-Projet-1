const showAverageStars = (restaurantId, starContainer) => {
    //if (!starContainer) {
    //  starContainer = document.querySelector(".star-container");
    //}
    /**
     * @see https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment
     */
    starContainer ??= document.querySelector(".star-container");
  
    const reviews = restaurantsFeedbacks.find(
      (restaurantsFeedback) => restaurantsFeedback.restaurantId === +restaurantId
    );
    const total =
      reviews.feedback
        .map((review) => review.userStar)
        .reduce((accumulator, currentValue) => {
          return accumulator + currentValue;
        }, 0) / reviews.feedback.length;
    starContainer.innerHTML = `${showStars(Math.round(total))} ${Math.round(
      total
    )}`;
  };
  
  const showStars = (feedback) => {
    const star = "★";
    let notation = "";
  
    while (feedback - 1 >= 0) {
      notation += star;
      feedback--;
    }
    return notation;
  };