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
  let currentPageUrl =
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
  { keywords: "Home", url: "/" },
  { keywords: "Kids Care", url: "/kidsCare.html" },
  { keywords: "Directions", url: "/directions.html" },
  { keywords: "Community", url: "/community.html" },
  { keywords: "Services", url: "/services.html" },
  { keywords: "Education", url: "/education.html" },
  { keywords: "Staff", url: "/staff.html" },
  { keywords: "Beliefs", url: "/beliefs.html" },
  { keywords: "Worship", url: "/worship.html" },
  { keywords: "Ministries", url: "/ministries.html" },
  { keywords: "Photos", url: "/photos.html" },
  { keywords: "Calendar", url: "/calendar.html" },
  { keywords: "Publications", url: "/publications.html" },
  { keywords: "Contact Info", url: "/contact.html" },
  { keywords: "Prayer Request", url: "/prayer-request.html" },
  { keywords: "Building Use Request", url: "/building-request.html" },
  { keywords: "Information Request", url: "/information-request.html" },
  {
    keywords: ["GLOW", "God Lights Our Way"],
    url: "/GLOW.html",
  },
  {
    keywords: ["JAM", "J.A.M", "Jesus and Me"],
    url: "/JAM.html",
  },
  { keywords: "Pastors Message", url: "/pastorsmessage.html" },
  {
    keywords: ["Pastors Message Ash Wednesday", "Ash Wednesday"],
    url: "/pastorsmessageAshWednesday.html",
  },
  {
    keywords: ["Pastors Message Lent", "Lent"],
    url: "/pastorsmessageLent.html",
  },
  {
    keywords: ["SWAG", "S.W.A.G", "Youth Group"],
    url: "/ciayouth.html",
  },
  {
    keywords: "Missions of the Month",
    url: "/missionmoment.html",
  },
  {
    keywords: "Mission Team",
    url: "/missionmomentTeams.html",
  },
  {
    keywords: "Bread Ministry",
    url: "/MinistryBread.html",
  },
  {
    keywords: ["VBS", "V.B.S", "Vacation Bible School"],
    url: "/VBS.html",
  },
  {
    keywords: "Kids Shopping Day",
    url: "/MinistryKidsShoppingDay.html",
  },
  {
    keywords: "UMC Scholarships",
    url: "/scholarships.html",
  },
  {
    keywords: "Easter Egg Hunt",
    url: "/MinistryEasterEggHunt.html",
  },
  {
    keywords: "Trunk or Treat",
    url: "/trunkortreat.html",
  },
  {
    keywords: "Alternative Christmas Giving",
    url: "/alternativechristmasgiving.html",
  },
  {
    keywords: "Chancel Choir & Praise Team",
    url: "/choir.html",
  },
  {
    keywords: "Confirmation",
    url: "/MinistryConfirmation.html",
  },
  {
    keywords: ["Bible Giving", "Bible Presentation", "3rd Grade Bible"],
    url: "/3rdGradeBibleClass.html",
  },
  {
    keywords: "Special Services",
    url: "/specialservices.html",
  },
  {
    keywords: "Children's Christmas Program",
    url: "/MinistryChildrensChristmasProgram.html",
  },
  {
    keywords: "Choir Christmas Cantata",
    url: "/MinistryChristmasCantata.html",
  },
  {
    keywords: "Easter Breakfast",
    url: "/MinistryEasterBreakfast.html",
  },
  {
    keywords: "Candlelight Service Christmas Eve",
    url: "/MinistryChristmasEveCandlelight.html",
  },
  {
    keywords: ["Shrove Tuesday Pancake Supper", "Fat Tuesday Supper"],
    url: "/MinistryShroveTuesday.html",
  },
  {
    keywords: ["The Grapevine", "Sunday News Bulletin"],
    url: "/Publications/VMgrapevine.pdf",
  },
  {
    keywords: "Newsletter",
    url: "/Publications/churchnewsletter.pdf",
  },
  {
    keywords: ["Bible Verses for the week", "Liturgy This Week"],
    url: "/Publications/LiturgyThisWeek.pdf",
  },
  {
    keywords: "Church Bulletin",
    url: "/Publications/vmbulletin.pdf",
  },
  {
    keywords: [
      "Adel Ministerial Association (AMA) Emergency Fund",
      "Assistance Fund",
    ],
    url: "/Publications/Adel_Ministerial_Assn_Emergency_Fund.pdf",
  },
  {
    keywords: [
      "Luke DeBoer Update",
      "Missionary in Puerto Rico",
      "DeBoer newsletter",
    ],
    url: "/Publications/LukeDeBoerUpdate.pdf",
  },
  {
    keywords: ["Good Samaritan Food Pantry in Adel", "Missions Food Pantry"],
    url: "/Publications/MissionsFoodPantry.pdf",
  },
  {
    keywords: "Exercise Your Faith Small Group Study",
    url: "/Publications/ExerciseYourFaith.pdf",
  },
  {
    keywords: ["Greeting Cards Recycled by SAM", "VMUMC Senior Adult Ministry"],
    url: "/Publications/SAM_card_ministry.pdf",
  },
  {
    keywords: "Kids Care Parent Handbook",
    url: "/Publications/KidsCare2024ParentHandbook.pdf",
  },
  {
    keywords: "Kids Care Schedule and Fees",
    url: "/Publications/KidsCarePrintable.pdf",
  },
  {
    keywords: "Summer 2024 Kids Care Registration Form",
    url: "/Publications/KidsCare2024SummerRegistration%20form.pdf",
  },
  {
    keywords: "Fall 2024 Kids Care Registration Form",
    url: "/KidsCare2024Preschool(Fall)Registration.pdf",
  },
  {
    keywords: "Spring 2024 Kids Care Registration Form",
    url: "/Publications/KidsCare2023FallRegistrationForm.pdf",
  },
  // Add more data as needed
];

// Website Search Functionality
const autoCompleteJS = new autoComplete({
  selector: "#autoComplete",
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
            ? item.keywords.includes(selection)
            : item.keywords === selection
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
