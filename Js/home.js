const MenuToggle = document.getElementById("Toggle");
const menu_bar = document.getElementById("menu_bar")
const close = document.getElementById("close")


MenuToggle.addEventListener("click", () => {
    menu_bar.classList.add("menus")
})
close.addEventListener("click", () => {
    menu_bar.classList.remove("menus")
})
window.addEventListener("scroll", () => {
    menu_bar.classList.remove("menus")
})





$(document).ready(function () {
    $(".owl-carousel").owlCarousel();
});

$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        1000: {
            items: 1,
        },
    },
});
$('.owl-none').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})