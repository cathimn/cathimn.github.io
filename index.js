document.addEventListener("DOMContentLoaded", () => {
  let body = document.querySelector("body");
  let names = document.querySelectorAll(".name");
  let notCathimn = document.querySelectorAll(".notcathimn");
  let modeButton = document.getElementById("mode");
  let moonSun = document.getElementById("moon-sun");

  names.forEach(name => name.addEventListener("mouseenter", () => {
    notCathimn.forEach(not => not.classList.add("hidden"));
  }))
  
  names.forEach(name => name.addEventListener("mouseleave", () => {
    notCathimn.forEach(not => not.classList.remove("hidden"));
  }))

  modeButton.addEventListener("click", () => {
    modeButton.classList.toggle("light-mode");
    modeButton.classList.toggle("dark-mode");
    body.classList.toggle("light-mode")
    body.classList.toggle("dark-mode")
    moonSun.classList.toggle("fa-moon-o");
    moonSun.classList.toggle("fa-sun-o");
  })
})
