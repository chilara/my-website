
  

  const menuMobile = document.querySelector(".menu-mobile");
function toggler() {
  if (menuMobile.className.includes("hide")) {
    menuMobile.className = "menu-mobile show";
  } else {
    menuMobile.className = "menu-mobile hide";
  }
}

function resizeHandler() {
  if (window.innerWidth > 802) {
    menuMobile.className = "menu-mobile hide";
  }
}

window.onresize = resizeHandler;
  