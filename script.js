if ($(window).width() < 948) {
  $(".navbar .menu").toggle();

  $(".menu").click(function () {
    $(".navbar .menu").toggle("active");
  });
}

$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
  });

  $(".menu-btn").click(function () {
    $(".navbar .menu").toggle("active");
  });
});
