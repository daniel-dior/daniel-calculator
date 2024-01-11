// let display = document.getElementById('display')
// function addItm(num) {
//     display.value += num
// }
// function equal() {
//     display.value = eval(display.value)
// }
// function clr() {
//     display.value = ''
// }
// function del() {
//     display.value = display.value.slice(0, -1)
// }
let display = document.getElementById('display')
function addItm(num) {
    display.value += num
}
function equal() {
    display.value = eval(display.value)
} 
function clr() {
    display.value = ''
}
function del() {
    display.value = display.value.slice(0, -1)
}