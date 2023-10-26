const signup = () => {
    if (
        document.getElementById("Name").value === "" || document.getElementById("password").value === ""
    ){
        alert("Enter your credentials")
    }else{
        let username = document.getElementById("Name").value
        let password = document.getElementById("password").value
        let dob = document.getElementById("dob").value
        localStorage.setItem("name", username)
        localStorage.setItem("pass", password)
        localStorage.setItem("dob", dob)
        document.getElementById("Name").value = ""
        document.getElementById("password").value = ""
        alert("Registered")
        console.log(username)
        console.log(password)
        window.location.href="./show.html"
    }
}