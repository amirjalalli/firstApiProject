// const gray = document.getElementById("gray");
// const white = document.getElementById("white");
// const blue = document.getElementById("blue");
// const yellow = document.getElementById("yellow");
const body = document.querySelector('body');


// gray.addEventListener("click", () =>{
//     body.style.backgroundColor = "gray"
// })
// white.addEventListener("click", () =>{
//     body.style.backgroundColor = "white"
// })
// blue.addEventListener("click", () =>{
//     body.style.backgroundColor = "blue"
// })
// yellow.addEventListener("click", () =>{
//     body.style.backgroundColor = "yellow"
// });
const cical = document.querySelectorAll(".cical");

console.log(cical)

cical.forEach(function(btn){
    btn.addEventListener('click', function(e){
        body.style.backgroundColor = e.target.id;
    });
});