window.addEventListener("DOMContentLoaded", () => {
  const slider__container = document.querySelector(".slider__container"),
    slide = document.querySelectorAll(".slide"),
    slider__wrapper = document.querySelector(".slider__wrapper"),
    slider__inner = document.querySelector(".slider__inner"),
    slider__next = document.querySelector(".slider__next"),
    slider__prev = document.querySelector(".slider__prev"),
    width__wrapper = window.getComputedStyle(slider__wrapper).width,
    slide__length = slide.length;
  let sliderIndex = 1;
  let offsetSlider = 0;

  slider__inner.style.width = `${100 * slide__length}%`;
  slider__inner.style.display = "flex";
  slider__inner.style.transition = '0.5s all';
  slider__wrapper.style.overflow = "hidden";

  slider__next.addEventListener("click", () => {
    if (offsetSlider === +width__wrapper.slice(0, -2) * (slide.length - 1)) {
      offsetSlider = 0;
    } else {
      offsetSlider += +width__wrapper.slice(0, -2);
    }
    slider__inner.style.transform = `translateX(-${offsetSlider}px)`;
  });

  slider__prev.addEventListener("click", () => {
    if (offsetSlider === 0) {
      offsetSlider = +width__wrapper.slice(0, -2) * (slide__length - 1);
    } else {
      offsetSlider -= +width__wrapper.slice(0, -2);
    }

    slider__inner.style.transform = `translateX(-${offsetSlider}px)`;
  });
});
