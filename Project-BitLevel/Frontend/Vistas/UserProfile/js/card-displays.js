
// CARD NUMBER INPUT FIELD
document.querySelector('.card-number-input').oninput = () => {
    document.querySelector('.card-number-box').innerText = document.querySelector('.card-number-input').value;
}

// CARD NAME INPUT FIELD
document.querySelector('.card-holder-input').oninput = () => {
    document.querySelector('.card-holder-name').innerText = document.querySelector('.card-holder-input').value;
}

// CARD MONTH EXPIRE INPUT FIELD
document.querySelector('.month-input').oninput = () => {
    document.querySelector('.exp-month').innerText = document.querySelector('.month-input').value;
}

// CARD YEAR EXPIRE INPUT FIELD
document.querySelector('.year-input').oninput = () => {
    document.querySelector('.exp-year').innerText = document.querySelector('.year-input').value;
}

// CARD CVV INPUT FIELD
document.querySelector('.cvv-input').onmouseenter = () => {
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
}

document.querySelector('.cvv-input').onmouseleave = () => {
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
}

document.querySelector('.cvv-input').oninput = () => {
    document.querySelector('.cvv-box').innerText = document.querySelector('.cvv-input').value;
}


// DISPLAYS TO CHANGE EMAIL OR PASSWORD
const editEmail = document.getElementById("edit-email");
const editPassword = document.getElementById("edit-password");

const sectionEmail = document.querySelector(".display-change-email");
const sectionPassword = document.querySelector(".display-change-password");

const closeEmail = document.querySelector(".close-display-email");
const closePass = document.querySelector(".close-display-pass");

console.log(sectionEmail);


// ON CLICK EDIT EMAIL DISPLAYS THE CARD TO CHANGE EMAIL
editEmail.addEventListener("click", () => {
    sectionEmail.classList.remove("display-toggle");
})
// ON CLICK CROSS DISPLAY NONE TO CARD
closeEmail.addEventListener("click", () => {
    sectionEmail.classList.add("display-toggle");
})


// ON CLICK EDIT PASSWORD DISPLAYS THE CARD TO CHANGE PASSWORD
editPassword.addEventListener("click", () => {
    sectionPassword.classList.remove("display-toggle");
})
// ON CLICK CROSS DISPLAY NONE TO CARD
closePass.addEventListener("click", () => {
    sectionPassword.classList.add("display-toggle");
})

