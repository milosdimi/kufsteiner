(function ($) {
    "use strict";

    // Spinner
    window.addEventListener("load", () => {
        const spinner = document.getElementById("spinner");
        if (spinner) {
            spinner.classList.remove("show");
        }
    });

    // Initiate WOW.js
    if (typeof WOW !== "undefined") {
        new WOW().init();
    } else {
        console.warn("WOW.js nicht geladen.");
    }

    // Debounce utility
    function debounce(func, wait) {
        let timeout;
        return function (...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    }

    // Sticky Navbar
    $(window).on(
        "scroll",
        debounce(() => {
            if ($(window).scrollTop() > 90) {
                $(".nav-bar").addClass("sticky-top shadow");
            } else {
                $(".nav-bar").removeClass("sticky-top shadow");
            }
        }, 10)
    );

    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";

    $(window).on("load resize", function () {
        if (window.matchMedia("(min-width: 992px)").matches) {
            $dropdown
                .on("mouseenter", function () {
                    const $this = $(this);
                    setTimeout(() => {
                        $this.addClass(showClass);
                        $this.find($dropdownToggle).attr("aria-expanded", "true");
                        $this.find($dropdownMenu).addClass(showClass);
                    }, 200);
                })
                .on("mouseleave", function () {
                    const $this = $(this);
                    setTimeout(() => {
                        $this.removeClass(showClass);
                        $this.find($dropdownToggle).attr("aria-expanded", "false");
                        $this.find($dropdownMenu).removeClass(showClass);
                    }, 200);
                });
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });

    // Back to top button
    $(window).on(
        "scroll",
        debounce(() => {
            if ($(window).scrollTop() > 300) {
                $(".back-to-top").fadeIn("slow");
            } else {
                $(".back-to-top").fadeOut("slow");
            }
        }, 10)
    );

    $(".back-to-top").on("click", () => {
        $("html, body").animate({ scrollTop: 0 }, 300, "swing");
        return false;
    });

    // Facts counter
    function animateCounter(el, start, end, duration) {
        let startTime = null;
        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            el.textContent = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                el.classList.add("counted");
            }
        };
        requestAnimationFrame(step);
    }

    document.querySelectorAll('[data-toggle="counter-up"]').forEach((el) => {
        const value = parseInt(el.textContent, 10);
        if (!isNaN(value) && !el.classList.contains("counted")) {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        animateCounter(el, 0, value, 5000);
                        observer.disconnect();
                    }
                },
                { threshold: 0.9 }
            );
            observer.observe(el);
        }
    });

    // Carousels
    $(document).ready(() => {
        if (typeof $.fn.owlCarousel === "undefined") {
            console.warn("Owl Carousel nicht geladen.");
            return;
        }

        // Header carousel
        $(".header-carousel").owlCarousel({
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 1500,
            items: 1,
            dots: false,
            loop: true,
            nav: true,
            navText: [
                '<i class="fa fa-chevron-left" aria-label="Vorheriges Bild"></i>',
                '<i class="fa fa-chevron-right" aria-label="Nächstes Bild"></i>',
            ],
        });

        // Service carousel
        $(".service-carousel").owlCarousel({
            loop: true,
            margin: 20,
            nav: true,
            dots: false,
            autoplay: true,
            autoplayTimeout: 4000,
            smartSpeed: 1000,
            responsive: {
                0: { items: 1 },
                768: { items: 2 },
                992: { items: 3 },
            },
            onInitialized: function () {
                console.log("Service Carousel initialisiert");
                $(".service-img img").each(function () {
                    if (!this.complete || this.naturalWidth === 0) {
                        console.warn("Bild nicht geladen:", this.src);
                        $(this).attr("src", "https://placehold.co/600x400");
                        $(this).attr("alt", "Platzhalterbild für Dienstleistung");
                    }
                });
            },
        });

        // Testimonial carousel
        $(".testimonial-carousel").owlCarousel({
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 1000,
            center: true,
            dots: false,
            loop: true,
            nav: true,
            navText: [
                '<i class="fa fa-arrow-left"></i>',
                '<i class="fa fa-arrow-right"></i>',
            ],
            responsive: {
                0: { items: 1 },
                768: { items: 2 },
                992: { items: 3 },
            },
        });

        // Datetimepicker mit Tempus Dominus v6 API
        if (typeof tempusDominus !== "undefined") {
            try {
                const dateInput = document.querySelector("#date");
                if (dateInput) {
                    new tempusDominus.TempusDominus(dateInput, {
                        display: {
                            icons: {
                                time: "fa fa-clock",
                                date: "fa fa-calendar",
                                up: "fa fa-arrow-up",
                                down: "fa fa-arrow-down",
                                previous: "fa fa-chevron-left",
                                next: "fa fa-chevron-right",
                                clear: "fa fa-trash",
                            },
                            components: {
                                clock: false, // Nur Datum, keine Uhrzeit
                            },
                        },
                        localization: {
                            locale: "de",
                            format: "dd.MM.yyyy",
                        },
                    });
                } else {
                    console.warn("Datumsfeld #date nicht gefunden.");
                }
            } catch (e) {
                console.error("Fehler beim Initialisieren von Tempus Dominus:", e);
                $("#date").prop("disabled", true);
            }
        } else {
            console.error("Tempus Dominus nicht geladen. Prüfe die Skripte in index.html.");
            $("#date").prop("disabled", true);
        }
    });
})(jQuery);