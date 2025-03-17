document.addEventListener("DOMContentLoaded", function () {
    let currentPage = window.location.pathname.split("/").pop().split("?")[0].split("#")[0];

    console.log("Current Page:", currentPage);
    
    // Global Functions (Runs on Every Page) //
    function globalFunctions() {
        console.log("Global scripts running...");
        // Highlight active nav link
        let menuBtn = document.querySelector(".menu-btn");
        let navLinks = document.querySelector(".nav-links");

        menuBtn.addEventListener("click", function () {
            navLinks.classList.toggle("active");
    });

    
    

    }

    //Page-Specific Scripts //
    if (currentPage === "index.html" || currentPage === "") {
        homePageScripts();
    } 
    else if (currentPage === "about.html") {
        aboutPageScripts();
    }

    //Home Page Scripts //
    function homePageScripts() {
        console.log("Running scripts for Home Page...");
        
        let slideIndex = 1;
        showSlides(slideIndex);
      
        // Next/Previous controls
        function plusSlides(n) {
            showSlides(slideIndex += n);
        }
      
        // Thumbnail image controls
        function currentSlide(n) {
            showSlides(slideIndex = n);
        }
      
        function showSlides(n) {
            let slides = document.getElementsByClassName("packageSlide");
            let dots = document.getElementsByClassName("dot");
      
            if (n > slides.length) { slideIndex = 1; }
            if (n < 1) { slideIndex = slides.length; }
      
            // Hide all slides
            Array.from(slides).forEach(slide => slide.style.display = "none");
      
            // Show the correct slide
            slides[slideIndex - 1].style.display = "block";
      
        }
      
        // Event listeners for buttons and dots//
        let prevButton = document.querySelector(".prev");
        let nextButton = document.querySelector(".next");

        if (prevButton) prevButton.addEventListener("click", () => plusSlides(-1));
        if (nextButton) nextButton.addEventListener("click", () => plusSlides(1));
      
        document.querySelectorAll(".dot").forEach((dot, index) => {
            dot.addEventListener("click", () => currentSlide(index + 1));
        });
    }

    //About Page Scripts (Accordion)//
    function aboutPageScripts() {
        console.log("Running scripts for About Page...");
        
        let questions = document.querySelectorAll(".question");

        for (let i = 0; i < questions.length; i++){
            questions[i].addEventListener("click", function() {
                this.classList.toggle("active");

                let answer = this.nextElementSibling;

                // Close all other answers before opening a new one
                document.querySelectorAll(".answer").forEach(a => {
                    if (a !== answer) {
                        a.classList.remove("open");
                        a.style.maxHeight = null;
                        a.previousElementSibling.classList.remove("active");
                    }
                });

                // Toggle the clicked answer
                if (answer.style.maxHeight) {
                    answer.style.maxHeight = null;
                } 
                else {
                    answer.style.maxHeight = answer.scrollHeight + "px";
                }
            });
        }
    }
    
    // Run global functions
    globalFunctions();
});
