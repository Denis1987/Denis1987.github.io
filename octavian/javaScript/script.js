"use strict";

var presentationBefore = document.querySelector(".presentation_img_before");
var popup = document.querySelector(".popup");
var popupClose = document.querySelector(".popup_close");

presentationBefore.addEventListener("click", function(evt) {
    popup.classList.add("popup_show");

});
popupClose.addEventListener("click", function(evt) {
    popup.classList.remove("popup_show");
});