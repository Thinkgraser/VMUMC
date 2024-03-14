# Maintaining The Site / What They Do
## Scripts
### Footer.js
No maintance should be required. This script will set the span section with the id "year" to the current year. The span with the id "year" is in the footer section on each page.
### Forms.js
Unless the id's of the fields in the forms change, no maintance should be required. This script is mainly for validation and formatting of the forms fields. 
1. The "handleSubmit" function is only used when the "Building Use" form is submitted. This function simply calls these functions: "CheckForCheckedCheckboxes", "formatDate", "formatPhone" and return true allowing the form to submit unless the "CheckForCheckedCheckboxes" function returns false, stopping the form from submitting.

2. The "CheckForCheckedCheckboxes" function is only used in the "handleSubmit" function and takes all of the checkboxes in the form (The ones where the user specifies the room they want) and checks to make sure at least one of them is checked, if so the form returns true, otherwise if no checkboxes are checked it will return false.

3. The "formatDate" function is only used in the "handleSubmit" function and will take the value in the start date and end date field and convert them into a javascript date object for formatting. It will then format it like the following example, "01-01-2024 at 7:00 AM to 01-01-2024 at 12:00 PM". It will then set the date for the hidden field that is the real date field with the correct name and id for submitting and disable the start and end date field so it isn't included in the submission.

4. The "formatPhone" function checks wether the function was called from the "handleSubmit" function or from there being an input in the phone number field. If it is from a input it will check if the input was delete or backspace, if it is one of those it will end the function, otherwise it will get the input field by id and will pass it to a script from Googles called "libphonenumber" that will format the input as you type in your phone number. Then the output  from that scripts function is taken and set to the phone number field.

5. The "checkDate" function is only used when the start date is set, it grabs the start date and end date fields and converts them into a javascript date object. It then sets the minimum date that can be selected for the end date to the date and time of the start date and sets the end date to the same value of start date if the end date is empty or before the start date.

6. The "document.addEventListener" function sets the start dates minimum date that can be selected to the current time.
