/*********** Baggrundsbillede *********/

window.addEventListener("scroll", opacityDown);
function opacityDown() {
  console.log("der scrolles");
  document.querySelector(".hero_background").classList.add("opacity_down");
}
