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
  // Add active class to the list item containing the current page link
  const currentPageUrl = window.location.href;
  const navbarLinks = document.querySelectorAll("li a.nav-link");
  navbarLinks.forEach((link) => {
    if (
      (link.href === currentPageUrl ||
        link.href + "#" === currentPageUrl ||
        link.href + "#top" === currentPageUrl) &&
      !link.classList.contains("dropdown-toggle")
    ) {
      console.log("Match found for link:", link.href);
      link.classList.add("active");
    }
  });

  // Check dropdown menu items and set active class for dropdown items
  const dropdownItems = document.querySelectorAll(".dropdown-item");
  dropdownItems.forEach((item) => {
    if (
      item.href === currentPageUrl ||
      item.href + "#" === currentPageUrl ||
      item.href + "#top" === currentPageUrl
    ) {
      item.classList.add("active");

      // Check if the link is part of a dropdown menu
      const dropdownToggle = item
        .closest(".dropdown")
        .querySelector(".dropdown-toggle");
      if (dropdownToggle) {
        const dropdownMenu = dropdownToggle.nextElementSibling;
        if (currentPageUrl.startsWith(item.href)) {
          dropdownToggle.classList.add("active");
        }
      }
    }
  });
});
