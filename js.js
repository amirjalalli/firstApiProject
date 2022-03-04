window.addEventListener("load", function(){
   const inputTxt = document.getElementById('inputtxt');
    const btnClick = document.getElementById('btn');
    const text = document.getElementById("txt");
    btnClick.addEventListener("click", function (){
        const x = inputTxt.value.length;
        text.innerHTML = `<h1>${x}</h1>`;
    })


});
