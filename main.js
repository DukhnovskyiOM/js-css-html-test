const point = document.querySelectorAll(".point");

window.addEventListener("click", function (e) {
  let elClass = e.target;
  if (elClass.className === "wrapper") {
    point.forEach((e) => {
      e.classList.remove("active");
      e.lastElementChild.classList.add("notes");
      e.firstElementChild.src = "./img/plus.png";
    });
  } else if (elClass.className === "img") {
    elClass.parentNode.classList.toggle("active");
    if (elClass.parentNode.className.includes("active")) {
      elClass.parentNode.lastElementChild.classList.remove("notes");
      elClass.parentNode.firstElementChild.src = "./img/minus.png";
    } else {
      elClass.parentNode.lastElementChild.classList.add("notes");
      elClass.parentNode.firstElementChild.src = "./img/plus.png";
    }
  }
});
