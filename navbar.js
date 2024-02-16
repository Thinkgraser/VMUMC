document.addEventListener("DOMContentLoaded", function () {
  // Add active class to the list item containing the current page link
  const currentPageUrl = window.location.href;
  const navbarLinks = document.querySelectorAll("li a.nav-link");
  navbarLinks.forEach((link) => {
    if (link.href === currentPageUrl) {
      link.classList.add("active");
    }
  });
});
