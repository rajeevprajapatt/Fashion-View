const allLinks = document.querySelectorAll(".AllCategories a");
let currentEle = allLinks[0];

allLinks[0].classList.add("clicked");

allLinks.forEach((element)=>{
    element.addEventListener("click",(event)=>{
        if(currentEle){
            currentEle.classList.remove('clicked');
        }
        currentEle = event.target;

        currentEle.classList.add('clicked');
    })
})
