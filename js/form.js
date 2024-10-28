function sameAddress(button) {
    console.log("clicked the button");

    if (button.checked == true) {
        document.querySelector("#bill-street").value = document.querySelector("#street").value;
        document.querySelector("#bill-city").value = document.querySelector("#city").value;
        document.querySelector("#bill-state").value = document.querySelector("#state").value;
        document.querySelector("#bill-zip").value = document.querySelector("#zip").value;
        document.querySelector("#bill-country").value = document.querySelector("#country").value;
    }

    else {
        document.querySelector("#bill-street").value = "";
        document.querySelector("#bill-city").value = "";
        document.querySelector("#bill-state").value = "";
        document.querySelector("#bill-zip").value = "";
        document.querySelector("#bill-country").value = "";
    }
}

function checkemail() {
    console.log("Changed the email");

    let email1 = document.querySelector("#email1")
    let email2 = document.querySelector("#email1")

    if (email1.value != email2.value) {
        alert("The two emails must match!")
        email2.focus();
        return false;
    }

    return true;

}