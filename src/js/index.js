$(document).ready(function () {
  $("#categoryTab").click(function () {
    $("#menuContent").hide();
    $("#categoryTab").addClass(
      "bg-stone-200 border-b-[3px]  border-[#83b735] "
    );
    $("#menuTab").removeClass("bg-stone-200 border-b-[3px]  border-[#83b735] ");
    $("#categoryContent").show();
  });
  $("#menuTab").click(function () {
    $("#menuContent").show();
    $("#menuTab").addClass("bg-stone-200 border-b-[3px]  border-[#83b735] ");
    $("#categoryTab").removeClass(
      "bg-stone-200 border-b-[3px]  border-[#83b735] "
    );
    $("#categoryContent").hide();
  });
});

// slider
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
// product slider
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

// group  or  brand  slider
$(".brandSlider").slick({
  dots: false,
  speed: 300,
  slidesToShow: 7,
  slidesToScroll: 2,
  nextArrow: $(".brand-next-arrow"),
  prevArrow: $(".brand-prev-arrow"),
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 8,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 654,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
});

//  blog slider

$(".blosSlider").slick({
  dots: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: $(".blog-next-arrow"),
  prevArrow: $(".blog-prev-arrow"),
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 654,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

// demo prodcut slider
$(".demoSlider").slick({
  dots: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: $(".demo-next-arrow"),
  prevArrow: $(".demo-prev-arrow"),
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 654,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
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
