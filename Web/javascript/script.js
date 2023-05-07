var slider = document.querySelector(".slider");
var slides = slider.querySelectorAll("img");
var slideWidth = slider.offsetWidth / 3;
var slideIndex = 0;

var slideSpeed = 3000; // kaydırma hızı (ms)

for (var i = 0; i < slides.length; i++) {
  slides[i].style.width = slideWidth + "px";
}

var prevBtn = document.querySelector(".prev-btn");
var nextBtn = document.querySelector(".next-btn");

prevBtn.addEventListener("click", function () {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  slider.style.transform = "translateX(-" + slideIndex * slideWidth + "px)";
});

nextBtn.addEventListener("click", function () {
  slideIndex++;
  if (slideIndex > slides.length - 1) {
    slideIndex = 0;
  }
  slider.style.transform = "translateX(-" + slideIndex * slideWidth + "px)";
});
function slide() {
  slideIndex++;
  if (slideIndex == slider.children.length) {
    slideIndex = 0;
  }
  for (var i = 0; i < slider.children.length; i++) {
    slider.children[i].classList.remove("active");
    sliderButtons[i].classList.remove("active");
  }
  slider.children[slideIndex].classList.add("active");
  sliderButtons[slideIndex].classList.add("active");
  slideTimeout = setTimeout(slide, slideSpeed);
}

slideTimeout = setTimeout(slide, slideSpeed);

var sliderButtons = document.querySelectorAll(".slider-button");
for (var i = 0; i < sliderButtons.length; i++) {
  sliderButtons[i].addEventListener("click", function () {
    slideIndex = this.getAttribute("data-index");
    clearTimeout(slideTimeout);
    slide();
  });
}
