$(document).ready(function() {
    $(".hamburguer-bt").click(function() {
      $(this).toggleClass("on");
      $(".burguer-nav-bar").toggleClass("on");
    });
  });