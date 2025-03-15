document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    menuBtn.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});


document.addEventListener("DOMContentLoaded", function() {
  let slideIndex = 1;
  showSlides(slideIndex);

  // Next/previous controls
  function plusSlides(n) {
      showSlides(slideIndex += n);
  }

  // Thumbnail image controls
  function currentSlide(n) {
      showSlides(slideIndex = n);
  }

  function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("packageSlide");
      let dots = document.getElementsByClassName("dot");

      if (n > slides.length) { slideIndex = 1; }
      if (n < 1) { slideIndex = slides.length; }

      // Hide all slides
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }

      // Remove active class from dots
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }

      // Show the correct slide
      slides[slideIndex - 1].style.display = "block";

      // Add active class to the correct dot
      if (dots.length > 0) {
          dots[slideIndex - 1].classList.add("active");
      }
  }

  // Event listeners for buttons (Assuming they exist in your HTML)
  document.querySelector(".prev").addEventListener("click", () => plusSlides(-1));
  document.querySelector(".next").addEventListener("click", () => plusSlides(1));

  // Event listeners for dots (if they exist)
  document.querySelectorAll(".dot").forEach((dot, index) => {
      dot.addEventListener("click", () => currentSlide(index + 1));
  });
});
