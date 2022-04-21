const submitBtn = document.querySelector(".card_submit_btn");
const card1 = document.querySelector(".card_container-1");
const card2 = document.querySelector(".card_container-2");
const ratingNum = document.querySelector(".rating_num");
const ratingBtn = document.querySelectorAll(".rating_btn");
const arrayBtns = Array.from(ratingBtn);

// Function to show Thanks Page With btn NUM
// Preview only   //
let endTime = 5000;
// then Return after [ endTime ] for preview only !!
// Preview only   //
function thankYou() {
  if (card2.classList.contains("none")) {
    card1.classList.add("none");
    card2.classList.remove("none");

    //For Preview Only
    if (card1.classList.contains("none")) {
      setTimeout(() => {
        card2.classList.add("none");
        card1.classList.remove("none");
      }, endTime /*Integer Value */);
    }
  }
}
//Loop To get every element seperate
// Then call function on click Event
arrayBtns.forEach((Element) => {
  Element.addEventListener("click", (e) => {
    arrayBtns.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    ratingNum.innerHTML = e.currentTarget.dataset.num;
  });
});

// Call Function[Thankyou] When click button
submitBtn.addEventListener("click", thankYou);
