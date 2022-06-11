function toggler() {
    const menuMobile = document.querySelector(".menu-mobile");
    if (menuMobile.className.includes("hide")) {
      menuMobile.className = "menu-mobile show";
    } else {
      menuMobile.className = "menu-mobile hide";
    }
  }
  
  