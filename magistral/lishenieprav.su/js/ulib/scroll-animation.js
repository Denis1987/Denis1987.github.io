"use strict";var _Mathmin=Math.min;!function(){window.constructorMode||require(["jquery"],function(n){var t=null,o=n(window),i=o.height(),e=o.scrollTop(),r=e+i,a=_Mathmin(100,i),u=n([".ul-widget",".ul-blog-post"].join(","),"#main"),l=n([".ul-absolute-widgets .ul-widget",".ul-w-spacer"].join(","),"#main"),c=u.not(l).filter(function(){return n(this).offset().top>r}).addClass("ul-scroll-animate").attr("data-animation-type","fade"),s=function(){return function(){if(!c.length)return n(window).off(".scrollAnimation"),n(document).off(".scrollAnimation"),void t.disconnect();var e=o.scrollTop(),r=e+i,u=n();c.each(function(){var t=n(this),o=t.offset().top,i=o+t.outerHeight()-20;(o>=e&&r>=i||r>o+a&&o>e||e>i)&&(u=u.add(t))}),u.attr("data-was-animated","true"),c=c.not(u)}}(),d=function(){return function(n,t){var o,i,e=!1;return i=function(){return function(){o=arguments,e||(n.apply(null,o),e=!0,c.length&&setTimeout(function(){e=!1,i.apply(null,o)},t))}}()}}();n(window).on("scroll.scrollAnimation",d(s,500)).on("resize.scrollAnimation",function(){i=o.height(),a=_Mathmin(100,i)}),("ontouchstart"in window||"onmsgesturechange"in window)&&n(document).on("touchmove.scrollAnimation MSPointerMove.scrollAnimation pointermove.scrollAnimation",d(s,500)),t=new MutationObserver(d(s,500)),t.observe(document.body,{childList:!0,attributes:!1,characterData:!1,subtree:!0})})}();
//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map
