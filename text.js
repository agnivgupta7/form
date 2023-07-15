const form1 = document.querySelector("form")
form1.addEventListener("click", (e) => {
    e.preventDefault()

    const name = "Rajagniv";
    const last = "Dasgupta"
    const add = "Nagerbazar, Jessore road";
    const idmail = "dasgupta.agniv@gmail.com"
    const mob = 9836990910;

    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const address = document.getElementById("address").value;
    const id = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const show = document.getElementById("show");

    if (fname === "" || lname === "" || address === "" || id === "" || phone === "") {
        show.innerHTML = "enter input"
    }else if(fname === name || lname === last || address === add || id === idmail || phone === mob){
        window.open("https://www.youtube.com/")
    }else{
        show.innerHTML = "try again"
    }
})