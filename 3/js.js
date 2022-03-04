
const send = document.getElementById('send');
const Reset = document.getElementById("Reset")

send.addEventListener("click", ()=>{
    const text = document.getElementById('text');
    const email = document.getElementById('email');
    const textArea = document.getElementById("textArea");
    localStorage.setItem("name", text.value);
    localStorage.setItem("email",email.value);
    localStorage.setItem("textArea",textArea.value);

});
Reset.addEventListener("click", function (){
    let text = document.getElementById('text');
    let email = document.getElementById('email');
    let textArea = document.getElementById("textArea");

    text.value = "";
    email.value = "";
    textArea.value = "";
    localStorage.clear();
})
