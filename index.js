document.addEventListener("DOMContentLoaded", () => {
  let names = document.querySelectorAll(".name");
  let cathimn = document.querySelectorAll(".cathimn")
  let notCathimn = document.querySelectorAll(".notcathimn");

  let links = document.querySelectorAll("a");
  links.forEach(link => link.classList.add("light-mode"));

  names.forEach(name => name.addEventListener("mouseenter", () => {
    notCathimn.forEach(not => not.classList.add("hidden"));
  }))
  
  names.forEach(name => name.addEventListener("mouseleave", () => {
    notCathimn.forEach(not => not.classList.remove("hidden"));
  }))

  document.getElementById("mode").addEventListener("click", () => {
    document.getElementById("mode").classList.toggle("light-mode");
    document.getElementById("mode").classList.toggle("dark-mode");
    document.querySelector("body").classList.toggle("light-mode")
    document.querySelector("body").classList.toggle("dark-mode")
  })
})
