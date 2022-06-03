let name = window.localStorage.getItem('name');
let hours = Number(window.localStorage.getItem('hours'));
let job = window.localStorage.getItem('job');
let designation = "";
let money = 0;
switch(job) {
    case "manager":
        money = hours * 90;
        designation = "Manager";
        break;
    case "consultant":
        money = hours * 70;
        designation = "Consultant";
        break;
    default:    // trainee
        money = hours * 40;
        designation = "Trainee";
}
document.querySelector('#header').innerHTML = "" + name + ", who is a " + designation + ", will get $" + money + ".";

