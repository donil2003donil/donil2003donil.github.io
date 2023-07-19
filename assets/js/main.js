// const buttonGroup = document.getElementById("information__menu-list");
// let prevButton = document.getElementsByClassName("information__menu-button")[0];
// const buttonPressed = (e) => {
//     if(e.target.nodeName === 'BUTTON') {
//         e.target.classList.add('information__menu-button_active');
//         if(prevButton !== null) {
//             prevButton.classList.remove('information__menu-button_active');
//         }
//         prevButton = e.target;
//     }
// }
// buttonGroup.addEventListener("click", buttonPressed);


let burgerWrapper = document.getElementById('burger-icon');
let burger = document.getElementsByClassName('header__burger-menu')[0];
let navigationMenu = document.getElementsByClassName('nav')[0];
let body = document.getElementById("body");

burgerWrapper.addEventListener("click", function (e){
    burger.classList.toggle('burger_active');
    navigationMenu.classList.toggle('nav_active');
    body.classList.toggle('menu_active')
});


let minusUnit = document.getElementsByClassName('product__quantity_plus')[0];
let plusUnit = document.getElementsByClassName('product__quantity_minus')[0];
let countUnit = Number(document.getElementsByClassName('product__quantity_show')[0].value);

minusUnit.onclick = (e) => {
    if (countUnit > 1) {
        document.getElementsByClassName('product__quantity_show')[0].value = --countUnit;
    }
}
plusUnit.onclick = (e) => {
    document.getElementsByClassName('product__quantity_show')[0].value = ++countUnit;
}

let miniSlide = document.getElementsByClassName('product__slide-mini');
let mainSlide = document.getElementById("main-slide");
mainSlide.src = document.getElementsByClassName('product__slide-mini')[0].getAttribute('src');
let activeSlide = document.getElementsByClassName("product__slide-mini")[0];

for (let i = 0; i < miniSlide.length; i++){
    let currentElem = miniSlide[i];
    currentElem.addEventListener("click", function (e){
        activeSlide.classList.remove("product__slide-mini_active");
        activeSlide = e.currentTarget;
        e.currentTarget.classList.toggle("product__slide-mini_active");
        let currentSrc = e.currentTarget.attributes.src.value;
        mainSlide.src = currentSrc;
    })
}

let menuItems = document.getElementsByClassName("information__body");
let informationMenuItem = document.getElementsByClassName("information__menu-button");
for(let i = 0; i < informationMenuItem.length; i++){
    let currentMenuItem = informationMenuItem[i];
    currentMenuItem.addEventListener("click", function (e){
        for (let i = 0; i < informationMenuItem.length; i++)
        {
            informationMenuItem[i].classList.remove("information__menu-button_active");
            menuItems[i].classList.remove("information__body_active");
        }
        e.currentTarget.classList.add("information__menu-button_active");
        let currentIndex = e.currentTarget.getAttribute("information-item");
        menuItems[currentIndex - 1].classList.add("information__body_active");
        console.log(currentIndex);
    });
}

