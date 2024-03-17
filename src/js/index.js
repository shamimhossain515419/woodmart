$(".heroSlider").slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  nextArrow: $(".next-arrow"),
  prevArrow: $(".prev-arrow"),
  autoplay: true,
  autoplaySpeed: 2000,
});
$(".productSlider").slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  nextArrow: $(".next-arrow"),
  prevArrow: $(".prev-arrow"),
  autoplay: true,
  autoplaySpeed: 2000,
});

//  modal javascript code

const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const modal = document.getElementById("modal");

openModalBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

closeModalBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// Close modal when clicking outside of it
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});

// modal tab code

const menuTab = document.getElementById("menuTab");
const categoryTab = document.getElementById("categoryTab");
const menuContent = document.getElementById("menuContent");
const categoryContent = document.getElementById("categoryContent");

menuTab.onclick = function () {
  console.log("first");
};

// menuTab.addEventListener("click", () => {
// menuTab.classList.add("activeTab");
// categoryTab.classList.remove("activeTab");
// menuContent.classList.remove("hidden");
// categoryContent.classList.add("hidden");
// });

// categoryTab.addEventListener("click", () => {
//     console.log("first");
//   categoryTab.classList.add("activeTab");
//   menuTab.classList.remove("activeTab");
//   categoryContent.classList.remove("hidden");
//   menuContent.classList.add("hidden");
// });
