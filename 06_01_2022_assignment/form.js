const saveButton = document.querySelector('.button');
const designationRadioButtons = document.querySelectorAll('input[name="job"]');
saveButton.addEventListener("click", (e) => {
    if(
            document.getElementById("name").value.length == 0 ||
            document.getElementById("employeeID").value.length == 0 ||
            document.getElementById("joinDate").value.length == 0 ||
            document.getElementById("hours").value.length == 0
        )
    {
        alert("Please enter information in all required fields.")
        e.preventDefault();
    } else {
        let name = document.getElementById("name").value;
        let hours = document.getElementById("hours").value;
        let job = "";
        for (const designationRadioButton of designationRadioButtons) {
            if (designationRadioButton.checked) {
                //e.preventDefault();
                job = designationRadioButton.value;
            }
        }
        window.localStorage.setItem('name', name);
        window.localStorage.setItem('hours', hours);
        window.localStorage.setItem('job', job);
    }
});

