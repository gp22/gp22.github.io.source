'use strict';
import $ from 'jquery';
import smoothScroll from 'jquery-smooth-scroll';

class SmoothScroll {
  // Add smooth scrolling to all links in the nav
  constructor() {
    this.navLinks = $('.large-hero__nav a');
    this.addSmoothScrolling();
  }

  addSmoothScrolling() {
    this.navLinks.smoothScroll();
  }
}

export default SmoothScroll;
