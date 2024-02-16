document.addEventListener("DOMContentLoaded", function () {
  var bootstrapScript = document.createElement("script");
  var bootstrapStylesheet = document.createElement("link");
  var stylesheet = document.createElement("link");

  // Adds necessary script and stylesheet to html pages
  bootstrapScript.src =
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js";
  bootstrapStylesheet.rel = "stylesheet";
  bootstrapStylesheet.href =
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css";

  stylesheet.rel = "stylesheet";
  stylesheet.href = "./index.css";
  document.head.appendChild(bootstrapScript);
  document.head.appendChild(bootstrapStylesheet);
  document.head.appendChild(stylesheet);

  // Fetch the navbar HTML file
  fetch("navbar.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch navbar.html");
      }
      return response.text();
    })
    .then((navbarHtml) => {
      // Inject the navbar into the page
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

  // Fetch the banner HTML file
  fetch("banner.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch banner.html");
      }
      return response.text();
    })
    .then((bannerHtml) => {
      // Inject the navbar into the page
      document.getElementById("banner").innerHTML = bannerHtml;
    })
    .catch((error) => {
      console.error("Error fetching banner:", error);
    });

  // Fetch the footer HTML file
  fetch("footer.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch banner.html");
      }
      return response.text();
    })
    .then((footerHtml) => {
      // Inject the footer in the page
      document.getElementById("footer").innerHTML = footerHtml;
    })
    .catch((error) => {
      console.error("Error fetching footer:", error);
    });
});
