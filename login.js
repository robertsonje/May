const submitButton = document.querySelector('#submitButton');
submitButton.addEventListener("click", (e) => {
    let uName = document.querySelector('#uName').value;
    let pwd = document.querySelector('#pwd').value;
    window.localStorage.setItem('user', uName);
    window.localStorage.setItem('password', pwd);
    alert("Welcome " + uName);
});
