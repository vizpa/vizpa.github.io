var nystories = document.querySelector("h1").offsetTop;
var all = document.getElementById("content")
window.onscroll = function() {
  if (window.pageYOffset > 0) {
    var opac = window.pageYOffset / nystories;
    all.style.opacity = 1 - opac
	}
}