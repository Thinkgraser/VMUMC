// Makes navbar stick to top of the screen when top of the navbar touches the top of the screen
window.addEventListener("scroll", function () {
  var bannerHeight = document.getElementById("banner").offsetHeight;
  var navbarContainer = document.getElementById("navbar-container");

  if (window.scrollY >= bannerHeight) {
    navbarContainer.classList.add("sticky");
  } else {
    navbarContainer.classList.remove("sticky");
  }
});

// Add active class to the list item containing the current page link
document.addEventListener("DOMContentLoaded", function () {
  let currentPageUrl = window.location.href.split(".html")[0].trim().toLowerCase() + ".html";

  const navbarLinks = document.querySelectorAll("li a.nav-link");
  navbarLinks.forEach((link) => {
    const linkUrl = link.href.split(".html")[0].trim().toLowerCase() + ".html";
    if (linkUrl === currentPageUrl && !link.classList.contains("dropdown-toggle")) {
      link.classList.add("active");
    }
  });

  // Check dropdown menu items and set active class for dropdown items
  const dropdownItems = document.querySelectorAll(".dropdown-item");
  dropdownItems.forEach((item) => {
    const itemUrl = item.href.split(".html")[0].trim().toLowerCase() + ".html";
    if (itemUrl === currentPageUrl) {
      item.classList.add("active");
      const dropdownToggle = item.closest(".dropdown").querySelector(".dropdown-toggle");
      if (dropdownToggle && currentPageUrl.startsWith(itemUrl)) {
        dropdownToggle.classList.add("active");
      }
    }
  });
});
