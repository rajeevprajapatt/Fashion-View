const allLinks = document.querySelectorAll(".AllCategories div");
const productsDiv = document.querySelectorAll(".products");

let currentDiv = productsDiv[0];
let currentEle = allLinks[0];

productsDiv[0].classList.add("show");
allLinks[0].classList.add("clicked");

allLinks.forEach((element,index)=>{
    element.addEventListener("click",(event)=>{
        if(currentEle){
            currentEle.classList.remove('clicked');
            currentDiv.classList.remove('show');
        }
        currentEle = event.target;
        currentDiv = productsDiv[index];
        currentEle.classList.add('clicked');
        currentDiv.classList.add('show');
    })
})

console.log(allLinks);
console.log(productsDiv);