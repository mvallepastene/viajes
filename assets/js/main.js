// función del smooth scroll
$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 500, function(){
        window.location.hash = hash;
      });
    }
  });
});
// fin de la función smooth scroll

// función del tooltip

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

// fin de la función del tooltip
