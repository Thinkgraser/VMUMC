function handleSubmit(id) {
  // Checks if at least 1 checkbox is checked and cancels submission if not
  if (!CheckForCheckedCheckbox()) {
    return false;
  }
  // Formats Date For Submission
  formatDate();
  // Ensure phone number is formatted correctly before submitting
  formatPhone(id);

  return true;
}
// Formats Phone Number
function formatPhone(event, id) {
  // end function if delete or backspace is key pressed
  if (event && (event.keyCode == 46 || event.keyCode == 8)) {
    return;
  }
  const phoneInput = document.getElementById(id);
  const phoneString = new libphonenumber.AsYouType("US").input(phoneInput.value);
  phoneInput.value = phoneString;
}

// Sets end date to selected start date if empty or before start date
function checkDate() {
  var startDateInput = document.getElementById("date");
  var startDate = new Date(startDateInput.value);
  var endDateInput = document.getElementById("date2");
  var endDate = new Date(endDateInput.value);
  endDateInput.setAttribute("min", startDate.toISOString().slice(0, 16));

  // Check if end time is not set or if it's set to a date before start time
  if (!endDateInput.value || endDate < startDate) {
    // Set end time to start time
    endDateInput.value = startDateInput.value;
  }
}

function formatDate() {
  // Get the date input value
  var startDate = new Date(document.getElementById("date").value);
  var endDate = new Date(document.getElementById("date2").value);

  // Formats the date inputs
  var formattedDate =
    startDate.toLocaleDateString("en-US") +
    " at " +
    startDate.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }) +
    " to " +
    endDate.toLocaleDateString("en-US") +
    " at " +
    endDate.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  // Set the formatted date to the input
  document.getElementById("field-c5b0d72b8c09b1c").value = formattedDate;
  // Disable Date Fields So Not Included In Submission
  document.getElementById("date").disabled = true;
  document.getElementById("date2").disabled = true;
}
// Checks if at least one checkbox is checked
function CheckForCheckedCheckbox() {
  var checkBoxes = document.getElementsByClassName("form-check-input");
  var isChecked = false;
  for (var i = 0; i < checkBoxes.length; i++) {
    if (checkBoxes[i].checked) {
      isChecked = true;
    }
  }
  if (isChecked) {
    return true;
  } else {
    alert("Please select at least 1 room that will be needed!");
    return false;
  }
}
// Checks if phone number field input is a number and rejects it if it is not
function isNumber(evt) {
  evt = evt ? evt : window.event;
  var charCode = evt.which ? evt.which : evt.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    return false;
  }
  return true;
}
