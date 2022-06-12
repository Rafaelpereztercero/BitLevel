

const sectionLevelup = document.querySelector(".display-levelup");

const topLink = document.getElementById("top-link-levelup");
topLink.addEventListener("click", () =>{
    sectionLevelup.classList.remove("display-toggle");
})

const asideLink = document.getElementById("aside-link-levelup");
asideLink.addEventListener("click", () =>{
    sectionLevelup.classList.remove("display-toggle");
})


const closeLevelup = document.getElementById("close-display-levelup");
closeLevelup.addEventListener("click", () => {
    sectionLevelup.classList.add("display-toggle");
    console.log(closeLevelup);
    console.log(sectionLevelup.classList);
})

