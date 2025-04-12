const allLinks = document.querySelectorAll(".categoryBarItems ul li");
const productsDiv = document.querySelectorAll(".products");

let currentDiv = productsDiv[0];
let currentEle = allLinks[0];

productsDiv[0].classList.add("show");
allLinks[0].classList.add("clicked");

const womenHeaderImagePaths = {
    "All": "/images/catban-120230729114515.webp",
    "Shirts": "/images/catban-420250411195333.webp",
    "Tops": "/images/2180120230803120335.webp",
    "Oversized T-Shirts": "/images/catban-1120250327125625.webp",
    "Jeans": "/images/catban-320230729113349.webp",
    "Sneakers": "/images/3563120250321134157.webp"
}
const MenHeaderImagePaths = {
    "All": "/images/catban-120230729114515.webp",
    "Shirts": "/images/catban-1220250404192837.webp",
    "T-Shirts": "/images/catban-820250408183910.webp",
    "Oversized T-Shirts": "/images/catban-1120230730115754.webp",
    "Jeans": "/images/catban-120230803115418.webp",
    "Sneakers": "/images/2731620250405140104.webp"
}
const headingImage = document.querySelector("#headingImg img");
// headingImageDiv.src
console.log(headingImage.getAttribute('src'));
headingImage.src = womenHeaderImagePaths["All"];

allLinks.forEach((element, index) => {
    element.addEventListener("click", (event) => {
        if (currentEle) {
            currentEle.classList.remove('clicked');
            currentDiv.classList.remove('show');
        }
        currentEle = event.target;
        currentDiv = productsDiv[index];
        currentEle.classList.add('clicked');
        currentDiv.classList.add('show');
        console.log(currentEle.innerText);
        if (window.location.href.split("/").pop() === "Women") {
            headingImage.classList.add('fade-out');
            setTimeout(() => {
                headingImage.src = womenHeaderImagePaths[`${currentEle.innerText}`];
                headingImage.onload = () => {
                    headingImage.classList.remove("fade-out");
                }
            }, 100);
        }
        else {
            headingImage.classList.add('fade-out');
            setTimeout(() => {
                headingImage.src = MenHeaderImagePaths[`${currentEle.innerText}`];
                headingImage.onload = () => {
                    headingImage.classList.remove("fade-out");
                }
            }, 100);
        };
    })
    // console.log(element.innerText);
})

// let AllCategories = document.getElementById("AllCategories");
// let OverSizedTshirtDiv = AllCategories.getElementsByTagName("div");

// let targetContent = "Oversized T-Shirts";
// let targetDiv = null;
// for (const div of OverSizedTshirtDiv) {
//     if (div.innerHTML.trim() === targetContent.trim()) {
//         targetDiv = div;
//         break;
//     }
// }

// const mediaQuery = window.matchMedia('(max-width: 768px)');
// function applyResponsiveStyle(event) {
//     if (event.matches) {
//         // When max-width is 768px or less
//         targetDiv.style.fontSize = "1.2rem";
//         targetDiv.style.padding = "0.1rem";
//     }
//     else {
//         targetDiv.style.fontSize = "1.5rem";
//         targetDiv.style.padding = "0.5rem";
//     }
// }
// applyResponsiveStyle(mediaQuery);
// mediaQuery.addEventListener('change', applyResponsiveStyle);

