// Sets the year in the footer
document.getElementById("year").innerHTML = new Date().getFullYear();

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
  const currentPageUrl =
    window.location.href.split(".html")[0].trim().toLowerCase() + ".html";

  const navbarLinks = document.querySelectorAll("li a.nav-link");
  navbarLinks.forEach((link) => {
    const linkUrl = link.href.split(".html")[0].trim().toLowerCase() + ".html";
    if (
      linkUrl === currentPageUrl &&
      !link.classList.contains("dropdown-toggle")
    ) {
      link.classList.add("active");
    }
  });

  // Check dropdown menu items and set active class for dropdown items
  const dropdownItems = document.querySelectorAll(".dropdown-item");
  dropdownItems.forEach((item) => {
    const itemUrl = item.href.split(".html")[0].trim().toLowerCase() + ".html";
    if (itemUrl === currentPageUrl) {
      item.classList.add("active");
      const dropdownToggle = item
        .closest(".dropdown")
        .querySelector(".dropdown-toggle");
      if (dropdownToggle && currentPageUrl.startsWith(itemUrl)) {
        dropdownToggle.classList.add("active");
      }
    }
  });
});

// Map of keywords and the pages a match will send them to
var sampleData = [
  { keywords: "Home", url: "index.html" },
  { keywords: "Kids Care", url: "kidsCare.html" },
  { keywords: "Directions", url: "directions.html" },
  { keywords: "Community", url: "community.html" },
  { keywords: "Services", url: "services.html" },
  { keywords: "Education", url: "education.html" },
  { keywords: "Staff", url: "staff.html" },
  { keywords: "Beliefs", url: "beliefs.html" },
  { keywords: "Worship", url: "worship.html" },
  { keywords: "Ministries", url: "ministries.html" },
  { keywords: "Photos", url: "photos.html" },
  { keywords: "Calendar", url: "calendar.html" },
  { keywords: "Publications", url: "publications.html" },
  { keywords: "Contact Info", url: "contact.html" },
  { keywords: "Prayer Request", url: "prayer-request.html" },
  { keywords: "Building Use Request", url: "building-request.html" },
  { keywords: "Information Request", url: "information-request.html" },
  // Add more data as needed
];

// Website Search Functionality
const autoCompleteJS = new autoComplete({
  selector: "#autoComplete",
  placeHolder: "Search",
  data: {
    src: sampleData.map((item) => item.keywords).flat(), // Use values from sampleData
    cache: true,
  },
  resultsList: {
    element: (list, data) => {
      const info = document.createElement("p");
      info.setAttribute("class", "px-2 mb-0 pb-0");
      if (data.results.length > 0) {
        info.innerHTML = `Displaying <strong>${data.results.length}</strong> out of <strong>${data.matches.length}</strong> results`;
      } else {
        if (!data.results.length) {
          info.setAttribute("class", "p-2 mt-2");
        }
        info.innerHTML = `Found <strong>${data.matches.length}</strong> matching results for <strong>"${data.query}"</strong>`;
      }
      list.prepend(info);
    },
    noResults: true,
  },
  resultItem: {
    highlight: true,
  },
  events: {
    input: {
      selection: (event) => {
        const selection = event.detail.selection.value;
        const selectedData = sampleData.find((item) =>
          Array.isArray(item.keywords)
            ? item.keywords === selection
            : item.keywords.includes(selection)
        );
        if (selectedData) {
          window.location.href = selectedData.url;
        }
      },
      keydown: function (event) {
        if (event.keyCode === 13) {
          autoCompleteJS.select(0);
        }
      },
      focus: function (event) {
        const inputValue = autoCompleteJS.input.value;

        if (inputValue.length) autoCompleteJS.start();
      },
    },
  },
});
