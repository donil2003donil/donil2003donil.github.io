const buttonGroup = document.getElementById("information__menu-list");
let prevButton = document.getElementsByClassName("information__menu-button")[0];
const buttonPressed = (e) => {
    if(e.target.nodeName === 'BUTTON') {
        e.target.classList.add('information__menu-button_active');
        console.log(prevButton);
        if(prevButton !== null) {
            prevButton.classList.remove('information__menu-button_active');
        }
        prevButton = e.target;
    }
}
buttonGroup.addEventListener("click", buttonPressed);
