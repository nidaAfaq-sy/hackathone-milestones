const togglebutton = document.getElementById("toggle-skills") as HTMLButtonElement
const Skills = document.getElementById("skills") as HTMLElement

togglebutton.addEventListener("click", ()=>{
  if(Skills.style.display ==="none") {
    Skills.style.display ="block"
  } else {
    Skills.style.display = "none"
  }
});