# Maintaining The Site / What They Do
## Scripts
### Footer.js
No maintance should be required. This script will set the span section with the id "year" to the current year. The span with the id "year" is in the footer section on each page.
### Forms.js
Unless the id's of the fields in the forms change, no maintance should be required. This script is mainly for validation and formatting of the forms fields. 
* The "handleSubmit" function is only used when the "Building Use" form is submitted. This function simply calls these functions: "CheckForCheckedCheckboxes", "formatDate", "formatPhone" and return true allowing the form to submit unless the "CheckForCheckedCheckboxes" function returns false, stopping the form from submitting.

* The "CheckForCheckedCheckboxes" function is only used in the "handleSubmit" function and takes all of the checkboxes in the form (The ones where the user specifies the room they want) and checks to make sure at least one of them is checked, if so the form returns true, otherwise if no checkboxes are checked it will return false.

* The "formatDate" function is only used in the "handleSubmit" function and will take the value in the start date and end date field and convert them into a javascript date object for formatting. It will then format it like the following example, "01-01-2024 at 7:00 AM to 01-01-2024 at 12:00 PM". It will then set the date for the hidden field that is the real date field with the correct name and id for submitting and disable the start and end date field so it isn't included in the submission.

* The "formatPhone" function checks wether the function was called from the "handleSubmit" function or from there being an input in the phone number field. If it is from a input it will check if the input was delete or backspace, if it is one of those it will end the function, otherwise it will get the input field by id and will pass it to a script from Googles called [libphonenumber-js](https://www.npmjs.com/package/libphonenumber-js) that will format the input as you type in your phone number. Then the output  from that scripts function is taken and set to the phone number field.

* The "checkDate" function is only used when the start date is set, it grabs the start date and end date fields and converts them into a javascript date object. It then sets the minimum date that can be selected for the end date to the date and time of the start date and sets the end date to the same value of start date if the end date is empty or before the start date.

* The "document.addEventListener("DOMContentLoaded")" function sets the start dates minimum date that can be selected to the current time if the current page is the Building Request page.

### Navbar.js
No maintance should be required. This script adds or removes the sticky class from the navbar container and adds the active class to the navbar link that is for the current page.
* The "window.addEventListener("scroll)" function gets the height of the banner image and then gets how far the user has scrolled, if the user has scrolled more or equal to the banners height, it will add the sticky class to the navbar container, causing it to stick to the top of the page, if the users scroll possition is less than the banner height, it removes the sticky class from the navbar container.

* The "document.addEventListener("DOMContentLoaded")" function gets the current pages url and checks it against the navbar links urls or dropdown links and adds the active class to any that match, if it is a  dropdown link, it will also add the active class to that navbar link that controls the dropdown.

### Search.js
Maintance of searchData variable required. This script takes the keywords from the searchData variable and sends them to and external script called [autoComplete.js](https://tarekraafat.github.io/autoComplete.js/#/) which handles the suggestions based on what the user types. When the user selects on of the suggestions it will fire and event called selection, which will get the keyword. Then it will find the url associated with that keyword and send the user to that page. The keydown event will auto select the first suggestion if there is one when the user presses enter. The focus event will reshow the suggestions again if the user clicks out of the search box and then clicks back in it when there is still text in the searchbox.

**Maintaing searchData variable**

You can have multiple keywords for a single url. Each keywords - url combo should be surrounded by { } single keywords can be surounded only by " " but if you have multiple keywords for a url it needs to be surrounded by [ ] and each keyword seperated by a comma. 

Single keyword example
```
{keywords: "single keyword" url:"url.html"}
```
Multiple keyword example
```
{keywords: ["keyword 1", "keyword 2"], url: "url.html"}
```
You can also have the url take the user to a certain point on the page by using the id of the element you want to point to
```
url: "url.html#id"
```
Full Examlple
```
var searchData = [
  { keywords: "keyword 1", url: "/url.html#id" },
  { keywords: ["keyword1 ", "keyword 2"], url: "/url.html" },
];
```
## CSS Classes
