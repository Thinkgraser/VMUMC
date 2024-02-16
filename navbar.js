document.addEventListener("DOMContentLoaded", function () {
  // Fetch the navbar HTML file
  fetch("navbar.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch navbar.html");
      }
      return response.text();
    })
    .then((navbarHtml) => {
      // Inject the navbar HTML into the navbar div
      document.getElementById("navbar").innerHTML = navbarHtml;

      // Add active class to the list item containing the current page link
      const currentPageUrl = window.location.href;
      const navbarLinks = document.querySelectorAll("#navbar li a.nav-link");
      navbarLinks.forEach((link) => {
        if (link.href === currentPageUrl) {
          link.parentNode.classList.add("active");
          link.classList.add("active");
        }
      });
    })
    .catch((error) => {
      console.error("Error fetching navbar:", error);
    });
});
