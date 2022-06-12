const themebttn = document.getElementById("themeSwitch");
const logo = document.getElementById("top-left-logo");


themebttn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme-variables");
    
    if(logo.getAttribute("src") == "../../../Assets/Images/Logotypev4-dark.png"){
        logo.setAttribute("src", "../../../Assets/Images/Logotypev4-ligth.png");
    }
    else{
        logo.setAttribute("src", "../../../Assets/Images/Logotypev4-dark.png");
    }
})

console.log(themebttn);
console.log(logo.src);