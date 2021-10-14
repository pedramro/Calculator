let display = document.querySelector("#display")
let body = document.body
let themeBtn = document.querySelector(".theme-btn")
let switchBtn = document.querySelector(".switch-btn")

let contain = ""
function typeNum(value){
    display.value += value
    contain = display.value
    
}
function equal(x) {
    let finish = eval(display.value)
    display.value = finish
    
}
function del() {
    display.value = display.value.slice(0, -1)
}
function reset() {
    display.value = ""
}
function changeTheme() {
    if (body.classList.contains("theme")) {
        body.classList.replace("theme","theme2")
        themeBtn.classList.replace("theme","theme2")
        switchBtn.classList.replace("theme","theme2")
    } else if (body.classList.contains("theme2")){
        body.classList.replace("theme2",null)
        themeBtn.classList.replace("theme2",null)
        switchBtn.classList.replace("theme2",null)
    } else {
        body.classList.add("theme")
        themeBtn.classList.add("theme")
        switchBtn.classList.add("theme")
    }
}