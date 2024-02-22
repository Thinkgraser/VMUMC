window.addEventListener("scroll", function () {
  var bannerHeight = document.getElementById("banner").offsetHeight;
  var navbarContainer = document.getElementById("navbar-container");

  if (window.scrollY >= bannerHeight) {
    navbarContainer.classList.add("sticky");
  } else {
    navbarContainer.classList.remove("sticky");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  console.log("Script loaded");

  // Add active class to the list item containing the current page link
  const currentPageUrl = window.location.href;
  const navbarLinks = document.querySelectorAll("li a.nav-link");
  navbarLinks.forEach((link) => {
    console.log("Checking link:", link.href);
    if (link.href === currentPageUrl) {
      console.log("Match found for link:", link.href);
      link.classList.add("active");
    }
  });

  // Check dropdown menu items and set active class for dropdown items
  const dropdownItems = document.querySelectorAll(".dropdown-item");
  dropdownItems.forEach((item) => {
    console.log("Checking dropdown item:", item.href);
    if (item.href === currentPageUrl) {
      console.log("Match found for dropdown item:", item.href);
      item.classList.add("active");

      // Check if the link is part of a dropdown menu
      const dropdownToggle = item
        .closest(".dropdown")
        .querySelector(".dropdown-toggle");
      if (dropdownToggle) {
        console.log("Dropdown toggle found for link:", item.href);
        dropdownToggle.classList.add("active");
      }
    }
  });
});
