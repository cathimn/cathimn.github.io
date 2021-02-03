let mode = document.cookie.split("=")[1];

document.addEventListener("DOMContentLoaded", () => {
  let names = document.querySelectorAll(".name");
  let cathimn = document.querySelectorAll(".cathimn");
  let notCathimn = document.querySelectorAll(".notcathimn");
  let body = document.querySelector("body");
  let modeButton = document.getElementById("mode");
  let moonSun = document.getElementById("moon-sun");
  let clicked = false;

  (function() {
    if (!mode) {
      document.cookie = "mode=dark-mode";
      body.classList.add("dark-mode");
      modeButton.classList.add("dark-mode");
      moonSun.classList.add("fa-moon-o");
    }
    body.classList.add(mode);
    modeButton.classList.add(mode);
    moonSun.classList.add(mode === "light-mode" ? "fa-sun-o" : "fa-moon-o")
  })();

  names.forEach(name => {
    name.addEventListener("mouseenter", () => {
      cathimn.forEach(letter => letter.classList.add("pinker"));
      notCathimn.forEach(letter => letter.classList.add("hidden"));
    });
    
    name.addEventListener("click", () => {
      clicked = !clicked;
    })
  })
  
  names.forEach(name => name.addEventListener("mouseleave", () => {
    if (!clicked) {
      cathimn.forEach(letter => letter.classList.remove("pinker"));
      notCathimn.forEach(not => not.classList.remove("hidden"));
    }
  }))


  modeButton.addEventListener("click", () => {
    if (modeButton.classList.contains("light-mode")) {
      modeButton.classList.replace("light-mode", "dark-mode");
      body.classList.replace("light-mode", "dark-mode");
      moonSun.classList.replace("fa-sun-o", "fa-moon-o");
    } else {
      modeButton.classList.replace("dark-mode", "light-mode");
      body.classList.replace("dark-mode", "light-mode");
      moonSun.classList.replace("fa-moon-o", "fa-sun-o");
    }
    document.cookie = body.classList.contains("light-mode") ? "mode=light-mode" : "mode=dark-mode";
  })
})
