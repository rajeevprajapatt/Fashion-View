searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
}


let arr = ["/images/catban-020230630115529.webp", "/images/catban-320230729113349.webp", "/images/catban-120230729114515.webp", "/images/catban-120230803115418.webp", "/images/catban-120230602125221.webp"]
let box = document.querySelector("#box");
let boxImage = document.querySelector("#boxImage");     

console.log(box,boxImage);

let i = 0;
let slider = () => {


    if (i == 4) {
        i = -1;
    }
    i++;
    boxImage.setAttribute("src", arr[i]);
    // console.log(i);
}
setInterval(slider, 3000);




window.onscroll = () => {
    searchForm.classList.remove('active');
    if (window.screenY > 80) {
        document.querySelector('.header .header-2').classList.add('active');
    }
    else {
        document.querySelector('.header .header-2').classList.remove('active');
    }
}

window.onload = () => {
    if (window.screenY > 80) {
        document.querySelector('.header .header-2').classList.add('active');
    }
    else {
        document.querySelector('.header .header-2').classList.remove('active');
    }
}





var swiper = new Swiper(".featured-slider", {
    spaceBetween: 10,
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            // spaceBetween: 20,
        },
        450: {
            slidesPerView: 2,
            // spaceBetween: 40,
        },
        768: {
            slidesPerView: 3,
            // spaceBetween: 50,
        },
        1024: {
            slidesPerView: 4,
            // spaceBetween: 50,
        },
    },
});




var swiper = new Swiper(".arrivals-slider", {
    spaceBetween: 10,
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            // spaceBetween: 20,
        },
        450: {
            slidesPerView: 2,
            // spaceBetween: 40,
        },
        768: {
            slidesPerView: 3,
            // spaceBetween: 50,
        },
        1024: {
            slidesPerView: 4,
            // spaceBetween: 50,
        },
    },
});



var swiper = new Swiper(".reviews-slider", {
    grabCursor: true,
    spaceBetween: 10,
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            // spaceBetween: 20,
        },
        450: {
            slidesPerView: 2,
            // spaceBetween: 40,
        },
        768: {
            slidesPerView: 3,
            // spaceBetween: 50,
        },
        1024: {
            slidesPerView: 4,
            // spaceBetween: 50,
        },
    },
});






