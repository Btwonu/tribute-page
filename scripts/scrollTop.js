'use strict';

const scrollTopBtn = document.getElementById('top-btn');
const mouseScrollIcon = document.querySelector('.icon-scroll');

function scrolled() {
  let yScroll = window.scrollY;
  //Scroll icon
  if (yScroll > 150) {
    //add show class to mouseScrollIcon
    mouseScrollIcon.classList.remove('show');
  } else {
    //remove show class from mouseScrollIcon
    mouseScrollIcon.classList.add('show');
  }
  //Top scroll button
  if (yScroll > 1000) {
    //add show class to scrollTopBtn
    scrollTopBtn.classList.add('show');
  } else {
    //remove show class from scrollTopBtn
    scrollTopBtn.classList.remove('show');
  }
}

window.addEventListener('scroll', scrolled);
