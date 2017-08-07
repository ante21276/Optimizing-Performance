
var $link = $(".image");


$link.click(function(e) {

  $(".rem").remove();
  var overlay = "";
  var $id = "";
  $id = e.target.parentNode.dataset.revealId;
  var numero = e.target.getAttribute("data-size")
  overlay += "<div id='" + $id + "'class='rem reveal-modal' data-reveal aria-hidden='true' role='dialog'>"
  overlay += "<h2 class='modalTitle'>Photo</h2>"
  overlay += "<img src='img/photos/photo" + numero + "tiny.jpg' alt='Photo'>"
  overlay += "<div class='info'>"
  overlay += "<div class='avatar2 aavatar'></div>"
  overlay += "<span class='attribution'>Photo by <b>Werner Bechtelar</b></span></div>"
  overlay += "<a class='close-reveal-modal' aria-label='Close'>&#215;</a></div>"

  $("body").append(overlay);
});
