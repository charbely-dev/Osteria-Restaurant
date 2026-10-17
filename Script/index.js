// VAR INITIALIZATION
var navBar = document.querySelector("header nav#nav-bar");
var navBtn = document.querySelector("header button#nav-open");

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