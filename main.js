const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const fname = "agniv"
    const email = "dasgupta@gmail.com"
    const pass = 12345678;

    const name = document.getElementById("name").value;
    const mail = document.getElementById("mail").value;
    const psd = document.getElementById("pwd").value;
    const result = document.getElementById("result")

    if (name === "" || mail === "" || psd === "") {
        result.innerHTML = "enter input"
    } else if (name === fname || mail === email || psd === pass) {
        window.open('text.html')
    }
    else {
        result.innerHTML = "try again"
    }
})


