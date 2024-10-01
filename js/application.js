//= require_self

$(function () {
  // ScrollAppear
  if (typeof $.fn.scrollAppear === 'function') {
    $('.scrollappear').scrollAppear();
  }

  // Fluidbox
  $('.fluidbox-trigger').fluidbox();

});
