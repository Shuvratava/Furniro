function changeImage(thumb) {
  // Change main image
  document.getElementById("bigImage").src = thumb.src;

  // Remove active border from all
  document.querySelectorAll(".thumb").forEach(img => {
    img.classList.remove("active-thumb");
  });

  // Add active border to clicked one
  thumb.classList.add("active-thumb");
}
