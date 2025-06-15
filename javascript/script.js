// Toggle mobile nav
document.getElementById("menuToggle").addEventListener("click", function () {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("show");
});

// Scroll to features
function scrollToFeatures() {
  document.getElementById("features").scrollIntoView({ behavior: "smooth" });
}
