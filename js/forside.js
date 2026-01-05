document.querySelector(".Forside_svg").addEventListener("mouseover", hideGitter);
function hideGitter() {
  console.log("der scrolles");
  document.querySelector("#Gitter").classList.add("slowHide");
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
