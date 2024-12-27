"use strict";

$(document).ready(function () {
  svg4everybody({});
});

// Полифилы

// forEach IE 11
if ('NodeList' in window && !NodeList.prototype.forEach) {
  console.info('polyfill for IE11');
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

// closest IE 11
(function () {
  if (!Element.prototype.closest) {
    Element.prototype.closest = function (css) {
      var node = this;
      while (node) {
        if (node.matches(css)) return node;else node = node.parentElement;
      }
      return null;
    };
  }
})();

// matches IE 11
(function () {
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector;
  }
})();

//Array.form IE 11
if (!Array.from) {
  Array.from = function (object) {
    'use strict';

    return [].slice.call(object);
  };
}
$('.top-nav__items').slick({
  infinite: true,
  slidesToShow: 10,
  slidesToScroll: 1,
  speed: 300,
  variableWidth: true,
  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToScroll: 3
    }
  }]
});
$(document).scroll(function () {
  var what = $("footer").offset().top,
    pos = $(window).height() + $(window).scrollTop();
  $("body").toggleClass("mob-nav-hide", what <= pos);
});
$(".header__burger").click(function () {
  $("body").addClass("mob-menu-open");
});
$(".mob-menu__close-btn").click(function () {
  $("body").removeClass("mob-menu-open");
});