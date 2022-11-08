const h1Tag = document.querySelector('h1');
const buttons = document.querySelectorAll('button');
console.log(buttons);
console.log(h1Tag)
function thisIsFun() {
    h1Tag.innerHTML = "DOM Manipulation is super cool and fun"
}

buttons.forEach(button => {
    button.addEventListener('click', thisIsFun);
})

