const buttonGroup = document.getElementById("information__menu-list");
let prevButton = document.getElementsByClassName("information__menu-button")[0];
const buttonPressed = (e) => {
    if(e.target.nodeName === 'BUTTON') {
        e.target.classList.add('information__menu-button_active');
        if(prevButton !== null) {
            prevButton.classList.remove('information__menu-button_active');
        }
        prevButton = e.target;
    }
}
buttonGroup.addEventListener("click", buttonPressed);


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