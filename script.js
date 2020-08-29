let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];

let swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    breakpoints: {
        992: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 30
        }
    }
});

// Model Box

btn.onclick = function () {
    modal.style.display = "block";
};
span.onclick = function () {
    modal.style.display = "none";
};
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

//Pattern

document.getElementById("ep").pattern= "[09]{2}[0-9]{9}";

