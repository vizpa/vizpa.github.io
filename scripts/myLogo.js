// Get the top offset of the heading and the main content element
const nyStories = document.querySelector("h1")?.offsetTop;
const content = document.getElementById("content");

window.onscroll = function () {
  if (!nyStories || !content) return;

  const scrollY = window.pageYOffset;

  if (scrollY > 0) {
    const opacity = 1 - scrollY / nyStories;
    content.style.opacity = Math.max(opacity, 0); // Prevent negative opacity
  } else {
    content.style.opacity = 1;
  }
};
