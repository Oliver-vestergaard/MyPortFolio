window.addEventListener("scroll", hideGitter);
function hideGitter() {
  console.log("der scrolles");
  document.querySelector("#Gitter").classList.add("slowHide");
  document.querySelector("#path_1").classList.add("toRight");
  document.querySelector("#path_2").classList.add("toLeft");
}

const btn = document.querySelector("#seeWork");

btn.addEventListener("click", handleClick);

function handleClick(event) {
  event.preventDefault();

  document.body.classList.add("eye-zoom");

  document.body.addEventListener("animationend", goToWorks, { once: true });
}

function goToWorks() {
  window.location.href = "projects.html";
}
