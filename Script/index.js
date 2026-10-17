// VAR INITIALIZATION
var navBar = document.querySelector("header nav#nav-bar");
var navBtn = document.querySelector("header button#nav-open");

var reserveBtn = document.querySelector("button#reserve");
var reservationModal = document.querySelector("div.modal-window#reservation-modal");
var cancelReservation = reservationModal.querySelector("button.modal-close");

// NAV BTN EVENT (hamburger menu reveal)
navBtn.addEventListener("click",()=>{
    if (navBar.classList.contains("active"))
    {
        navBar.classList.remove("active");
        navBtn.querySelectorAll("img")[0].classList.remove("active");
        navBtn.querySelectorAll("img")[1].classList.add("active");
    }
    else
    {
        navBar.classList.add("active");
        navBtn.querySelectorAll("img")[1].classList.remove("active");
        navBtn.querySelectorAll("img")[0].classList.add("active");
    }
})

// RESERVATION BTN EVENT (Reveal reservation form)

reserveBtn.addEventListener("click",()=>{
    if (reservationModal.classList.contains("active"))
        reservationModal.classList.remove("active");
    else
        reservationModal.classList.add("active");
})

cancelReservation.addEventListener("click", ()=>{
    reservationModal.classList.remove("active");
})