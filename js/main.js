// Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach((item) => item.classList.add("show"));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach((item) => item.classList.remove("show"));

    // Set Menu State
    showMenu = false;
  }
}

// ------------ Contact form -------------

$(document).ready(function () {
  //material contact form
  $(".contact-form")
    .find(".form-control")
    .each(function () {
      var targetItem = $(this).parent();
      if ($(this).val()) {
        $(targetItem).find("label").css({
          top: "10px",
          fontSize: "14px",
        });
      }
    });
  $(".contact-form")
    .find(".form-control")
    .focus(function () {
      $(this).parent(".input-block").addClass("focus");
      $(this).parent().find("label").animate(
        {
          top: "10px",
          fontSize: "14px",
        },
        300
      );
    });
  $(".contact-form")
    .find(".form-control")
    .blur(function () {
      if ($(this).val().length == 0) {
        $(this).parent(".input-block").removeClass("focus");
        $(this).parent().find("label").animate(
          {
            top: "25px",
            fontSize: "18px",
          },
          300
        );
      }
    });
});
