// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
  //Aedans notes: use last weeks notes! the answer is there!
//event listener for click event save button - saves in local storage

const TimeRN
$(select text).text(TimeRN)

save button when clicked, for each hour?


// match time RN with if stattements to cycle through green, grey, red?


$(savebtn).on("click", function (event) { //target save button click
  
  
  ) //event listener

$(".timeRN").each(function () { //go through each row
  var rowTime = $(this).attr("id")...TimeRN.
  if(rowTime > timeRN){ //remove any previous classes, then add new class
    $(this).removeClass("")
    $(this).removeClass("")
    $(this).addClass("")
  }
  if(rowTime === timeRN){//remove any previous classes, then add new class
    $(this).removeClass("")
    $(this).removeClass("")
    $(this).addClass("")
  }
  else{//remove any previous classes, then add new class
    $(this).removeClass("")
    $(this).removeClass("")
    $(this).addClass("")
  }
  
  )}


//target the whole document to store in local storage?
$(docuement).ready(function () {
if(localStorage.getItem)













  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  



  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //


  // if day > x{
  //   green background <- changes html box to future
  //$().removeClass("past").addClass("future");


  // }
  // if day === x {
  //   background will equal red changes html box to PRESENT
  // $().removeClass("futre").addClass("present");
  // }
  // else{
  //   backghround will be greyed out changes html box to PAST
  //$().removeClass("present").addClass("past");
  // }




  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

