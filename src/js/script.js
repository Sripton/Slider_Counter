window.addEventListener("DOMContentLoaded", () => {
  const slider__container = document.querySelector(".slider__container"),
    slide = document.querySelectorAll(".slide"),
    slider__wrapper = document.querySelector(".slider__wrapper"),
    slider__inner = document.querySelector(".slider__inner"),
    slider__next = document.querySelector(".slider__next"),
    slider__prev = document.querySelector(".slider__prev"),
    width__wrapper = window.getComputedStyle(slider__wrapper).width,
    current = document.querySelector("#current"),
    total = document.querySelector("#total");
  slide__length = slide.length;
  let sliderIndex = 1;
  let offsetSlider = 0;

  slider__inner.style.width = `${100 * slide__length}%`;
  slider__inner.style.display = "flex";
  slider__inner.style.transition = "0.5s all";
  slider__wrapper.style.overflow = "hidden";


  if(slide__length < 10){
    total.innerHTML = `0${slide__length}`
  }else {
    total.innerHTML = slide__length;
  }

  slider__next.addEventListener("click", () => {
    if (offsetSlider === +width__wrapper.slice(0, -2) * (slide__length - 1)) {
      offsetSlider = 0;
    } else {
      offsetSlider += +width__wrapper.slice(0, -2);
    }
    if (sliderIndex === slide__length) {
      sliderIndex = 1;
    } else {
      sliderIndex++;
    }
    if (sliderIndex < 10) {
      current.innerHTML = `0${sliderIndex}`;
    } else {
      current.innerHTML = sliderIndex;
    }
    slider__inner.style.transform = `translateX(-${offsetSlider}px)`;
  });

  slider__prev.addEventListener("click", () => {
    if (offsetSlider === 0) {
      offsetSlider = +width__wrapper.slice(0, -2) * (slide__length - 1);
    } else {
      offsetSlider -= +width__wrapper.slice(0, -2);
    }
    if (sliderIndex <= 1) {
      sliderIndex = slide__length;
    } else {
      sliderIndex--;
    }
    if (sliderIndex >= 10) {
      current.innerHTML = sliderIndex;
    } else {
      current.innerHTML = `0${sliderIndex}`;
    }
    slider__inner.style.transform = `translateX(-${offsetSlider}px)`;
  });
});
