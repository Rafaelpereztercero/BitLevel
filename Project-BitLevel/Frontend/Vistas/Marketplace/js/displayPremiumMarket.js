
const sectionLevelup = document.querySelector(".display-levelup");

console.log(sectionLevelup);

const topLink = document.getElementById("top-link-levelup");
topLink.addEventListener("click", () =>{
    sectionLevelup.classList.remove("display-toggle-02");
})

const asideLink = document.getElementById("aside-link-levelup");
asideLink.addEventListener("click", () =>{
    sectionLevelup.classList.remove("display-toggle-02");
})


const closeLevelup = document.getElementById("close-display-levelup");
closeLevelup.addEventListener("click", () => {
    sectionLevelup.classList.add("display-toggle-02");
    // console.log(closeLevelup);
    // console.log(sectionLevelup.classList);
})

