// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
const hour = dayjs().hour();
const DMY = dayjs().format("dddd, MMMM YYYY"); //id current day in html
$("#currentDay").text(DMY)
$(document).ready(function() {

//anything involving time, contain in function
function Time() {
console.log(hour)
//try to parse int - converting the string to a number and compare to hour
$(".time-block").each(function () { //go through each row with loop!
  var rowTime = parseInt($(this).attr("id")) //applies to all rows target the ID
  if(rowTime > hour){ //remove any previous classes, then add new class
    $(this).removeClass("present") //comments say use class past, present and future
    $(this).removeClass("part")
    $(this).addClass("future")
  }
  if(rowTime === hour){//remove any previous classes, then add new class
    $(this).removeClass("past")
    $(this).removeClass("future")
    $(this).addClass("present")
  }
  if(rowTime < hour){//remove any previous classes, then add new class
    $(this).removeClass("future")
    $(this).removeClass("present")
    $(this).addClass("past")
  }
})
}
//save each description
$(".saveBtn").on("click", function(){
localStorage.setItem("9", $(".description9").val());
localStorage.setItem("10", $(".description10").val());
localStorage.setItem("11", $(".description11").val());
localStorage.setItem("12", $(".description12").val());
localStorage.setItem("13", $(".description13").val());
localStorage.setItem("14", $(".description14").val());
localStorage.setItem("15", $(".description15").val());
localStorage.setItem("16", $(".description16").val());
localStorage.setItem("17", $(".description17").val());
})

$(".description9").val(localStorage.getItem("9"));
$(".description10").val(localStorage.getItem("10"));
$(".description11").val(localStorage.getItem("11"));
$(".description12").val(localStorage.getItem("12"));
$(".description13").val(localStorage.getItem("13"));
$(".description14").val(localStorage.getItem("14"));
$(".description15").val(localStorage.getItem("15"));
$(".description16").val(localStorage.getItem("16"));
$(".description17").val(localStorage.getItem("17"));

Time();
})




  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

