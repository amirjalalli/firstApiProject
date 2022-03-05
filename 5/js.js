
    let subBtn = document.querySelector("#subBtn");


subBtn.addEventListener("click",function(){
    const name_el =document.getElementById("Name")
    const lastName =document.getElementById("lName")
    const locaition_el =document.getElementById("locaition")
    const phone_el =document.getElementById("phone")
    const email_el =document.getElementById("email")
    const img = document.querySelector("#pic");
    
    fetch("https://randomuser.me/api/")
    .then((res) => res.json())
    .then((json) => {
        
        console.log(json)
        const {cell , email, } = json.results[0];
        const {city} = json.results[0].location;
        const {last, first} =json.results[0].name;
        const {large} = json.results[0].picture;
        
        locaition_el.innerHTML = city;
        phone_el.innerHTML = cell;
        email_el.innerHTML = email;
        lastName.innerHTML = last;
        name_el.innerHTML = first;
        img.setAttribute("src",large);
     
    })
    .catch(e);
});