function signup() {
    const fullname = document.getElementById("fullname").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    fetch("http://localhost:3020/signup", {
        method: "POST",
        body: JSON.stringify(
            {
                fullname: fullname,
                username: username,
                email: email,
                password: password
            }
        ),
        headers: {
            "Content-type": "application/json"
        }
    }).then(response => {
        if (response.ok) {
            return response.json();
        }
        else {
            throw new Error("API problem");
        }
    })
        .then(data => {
            console.log(data);
            alert("registration successfull");
            document.getElementById("fullname").value = "";
            document.getElementById("username").value = "";
            document.getElementById("email").value = "";
            document.getElementById("password").value = "";
        })
        .catch(error =>
            console.error(error))

};

document.getElementById("loginButton").addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Inside the login...");
    const userName = document.getElementById("usernameL").value;
    const passWord = document.getElementById("passwordL").value;
    console.log(userName, passWord)

    fetch("http://localhost:3020/login", {
        method: "POST",
        body: JSON.stringify({
            username: userName,
            password: passWord
        }),
        headers: {
            "Content-type": "application/json"
        }
    }).then(async response => {
        if (response.ok) {
            const result = await response.json();
            const user = document.getElementById("user-name");
            if (user) {
                user.innerText = result.data.fullname;
            }
        }
        else {
            alert("Invalid credentials");
        }
    })

})