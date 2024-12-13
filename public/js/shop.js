const allLinks = document.querySelectorAll(".AllCategories div");
const productsDiv = document.querySelectorAll(".products");

let currentDiv = productsDiv[0];
let currentEle = allLinks[0];

productsDiv[0].classList.add("show");
allLinks[0].classList.add("clicked");

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
    })
})

let AllCategories = document.getElementById("AllCategories");
let OverSizedTshirtDiv = AllCategories.getElementsByTagName("div");
console.log(OverSizedTshirtDiv);

let targetContent = "Oversized T-Shirts";
let targetDiv = null;
for(const div of OverSizedTshirtDiv){
    if (div.innerHTML.trim() === targetContent.trim()){
        targetDiv = div;
        break;
    }
}
console.log(targetDiv);
const mediaQuery = window.matchMedia('(max-width: 768px)');
function applyResponsiveStyle(event) {
    if (event.matches) {
        // When max-width is 768px or less
        targetDiv.style.fontSize = "1.2rem";
        targetDiv.style.padding = "0.1rem";
    }
    else{
        targetDiv.style.fontSize = "1.5rem";
        targetDiv.style.padding = "0.5rem";
    }
}
applyResponsiveStyle(mediaQuery);
mediaQuery.addEventListener('change', applyResponsiveStyle);