function toggleMenu(){
    let barButton = document.querySelector(".vini-menu-mobile-button")
    let menuMobile = document.querySelector(".vini-menu-mobile")
    let overlay = document.querySelector(".vini-overlay")
    menuMobile.classList.toggle("vini-menu-mobile-is-closed")
    menuMobile.classList.toggle("vini-menu-mobile-is-open")
    overlay.classList.toggle("vini-is-active")
    
    
    if (barButton.getAttribute('name') == 'close'){
        barButton.setAttribute('name', 'menu')
    }else{
        barButton.setAttribute('name', 'close')
    }
}
