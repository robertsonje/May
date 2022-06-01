alert("Hello World!");

function runAlert(){
    alert("Hey! You clicked the button!");
    document.getElementById("content").innerHTML = "You clicked the button, so this message appeared!";
    document.getElementById("content").style.backgroundColor = "salmon";
    document.querySelector("h2").style.fontSize = "2em";
}