let mode = document.cookie.split("=")[1];

document.addEventListener("DOMContentLoaded", () => {
  let names = document.querySelectorAll(".name");
  let notCathimn = document.querySelectorAll(".notcathimn");
  let body = document.querySelector("body");
  let modeButton = document.getElementById("mode");
  let moonSun = document.getElementById("moon-sun");

  (function() {
    if (!mode) {
      document.cookie = "mode=light-mode";
      body.classList.add("light-mode");
      modeButton.classList.add("light-mode");
      moonSun.classList.add("fa-sun-o");
    }
    body.classList.add(mode);
    modeButton.classList.add(mode);
    moonSun.classList.add(mode === "light-mode" ? "fa-sun-o" : "fa-moon-o")
  })();

  let kafeen = document.getElementById("kafeen");
  let shinyday = document.getElementById("shinyday");

  kafeen.addEventListener("mouseenter", () => {
    setTimeout(() => {
      [""]
    }, 250);
  })

  names.forEach(name => name.addEventListener("mouseenter", () => {
    notCathimn.forEach(not => not.classList.add("hidden"));
  }))
  
  names.forEach(name => name.addEventListener("mouseleave", () => {
    notCathimn.forEach(not => not.classList.remove("hidden"));
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
