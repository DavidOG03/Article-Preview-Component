const shareBtn = document.querySelector(".share")
const shareBtn_desktop = document.querySelector(".share-desktop")
const active_shareBtn = document.querySelector(".share.show")
const active_shareBtn_desktop = document.querySelector(".active-share-desktop")
const socials = document.querySelector(".social")
const desktop_socials = document.querySelector(".social-desktop")


shareBtn.addEventListener("click", () => {
    socials.classList.add("active")
})

shareBtn_desktop.addEventListener("click", () => {
    desktop_socials.classList.add("active")
    active_shareBtn_desktop.classList.add("active")
    shareBtn_desktop.classList.remove("active")
})

active_shareBtn.addEventListener("click", () => {
    socials.classList.remove("active")
})

active_shareBtn_desktop.addEventListener("click", () => {
    desktop_socials.classList.remove("active")
    shareBtn_desktop.classList.add("active")
    active_shareBtn_desktop.classList.remove("active")
})

window.addEventListener("mouseup", (e) => {
    if(e.target != desktop_socials){
        desktop_socials.classList.remove("active")
        active_shareBtn_desktop.classList.remove("active")
    }
})