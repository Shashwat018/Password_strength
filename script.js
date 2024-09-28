let password = document.getElementById("password");
let power = document.getElementById("power-point");
let feedback = document.getElementById("strength-feedback");

password.oninput = function () {
    let point = 0;
    let value = password.value;
    let widthPower = ["1%", "25%", "50%", "75%", "100%"];
    let colorPower = ["#D73F40", "#DC6551", "#F2B84F", "#BDE952", "#3ba62f"];
    
    if (value.length === 0) {
        power.style.width = "0%";
        power.style.backgroundColor = "#ccc"; // Default color for empty
        feedback.textContent = "";
        return;
    }

    if (value.length >= 6) {
        let arrayTest = [/[0-9]/, /[a-z]/, /[A-Z]/, /[^0-9a-zA-Z]/];
        arrayTest.forEach((item) => {
            if (item.test(value)) {
                point += 1;
            }
        });
    }
    
    power.style.width = widthPower[point];
    power.style.backgroundColor = colorPower[point];

    const strengthLabels = ["Very Weak", "Weak", "Moderate", "Strong", "Very Strong"];
    feedback.textContent = strengthLabels[point];
};
