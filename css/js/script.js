// ================= ACTIVE NAVBAR =================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// ================= STICKY NAVBAR =================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (header) {

        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    }

});

// ================= COUNTER ANIMATION =================

const counters = document.querySelectorAll(".counter");

function runCounter() {

    counters.forEach(counter => {

        const target = parseInt(counter.dataset.target);

        let count = 0;

        const speed = Math.max(1, target / 80);

        function update() {

            if (count < target) {

                count += speed;

                if (count > target) count = target;

                counter.innerText = Math.floor(count);

                requestAnimationFrame(update);

            } else {

                if (target === 100) {
                    counter.innerText = target + "%";
                } else {
                    counter.innerText = target + "+";
                }

            }

        }

        update();

    });

}

window.addEventListener("load", runCounter);

// ================= SOLAR CALCULATOR =================

function calculateSolar() {

    let bill = parseInt(document.getElementById("bill").value);

    if (isNaN(bill) || bill <= 0) {

        alert("Please enter a valid electricity bill.");

        return;

    }

    let kw = Math.ceil(bill / 1000);

    let yearly = bill * 12;

    let saving = Math.round(yearly * 0.8);

    document.getElementById("system").innerHTML =
        "Recommended System : " + kw + " kW";

    document.getElementById("saving").innerHTML =
        "Estimated Yearly Saving : ₹" + saving.toLocaleString();

    document.getElementById("payback").innerHTML =
        "Payback Period : 4-5 Years";

}

// ================= BACK TO TOP =================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (!topBtn) return;

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

// ================= LIGHTBOX =================

const galleryImages = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeLightbox = document.querySelector(".close-lightbox");

if (lightbox && lightboxImg && closeLightbox) {

    galleryImages.forEach(img => {

        img.addEventListener("click", () => {

            lightbox.style.display = "flex";
            lightboxImg.src = img.src;

        });

    });

    closeLightbox.addEventListener("click", () => {

        lightbox.style.display = "none";

    });

    lightbox.addEventListener("click", (e) => {

        if (e.target === lightbox) {

            lightbox.style.display = "none";

        }

    });

}

// ================= PRELOADER =================

window.addEventListener("load", function () {

    const preloader = document.getElementById("preloader");

    if (preloader) {

        preloader.style.opacity = "0";

        setTimeout(() => {

            preloader.style.display = "none";

        }, 500);

    }

});

// ================= MOBILE MENU =================

document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-links");

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", function () {

            navMenu.classList.toggle("active");

        });

    }

});
// ================= POPUP QUOTE =================

const quoteModal = document.getElementById("quoteModal");
const closeQuote = document.querySelector(".close-quote");

document.querySelectorAll("#openQuote, .openQuote").forEach(function(button) {

    button.addEventListener("click", function(e) {

        e.preventDefault();

        if (quoteModal) {
            quoteModal.classList.add("active");
        }

    });

});

if (closeQuote && quoteModal) {

    closeQuote.addEventListener("click", function() {

        quoteModal.classList.remove("active");

    });

    quoteModal.addEventListener("click", function(e) {

        if (e.target === quoteModal) {
            quoteModal.classList.remove("active");
        }

    });

}
// ================= AUTO OPEN QUOTE POPUP =================

document.addEventListener("DOMContentLoaded", function () {

    const quoteModal = document.getElementById("quoteModal");

    if (quoteModal) {

        setTimeout(function () {

            quoteModal.classList.add("active");

        }, 1500);

    }

});