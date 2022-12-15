// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
const hour = dayjs().hour();
const timeRN = dayjs().format("dddd, MMMM YYYY"); //id current day in html
$("#currentDay").text(timeRN)

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
  else{//remove any previous classes, then add new class
    $(this).removeClass("futre")
    $(this).removeClass("present")
    $(this).addClass("past")
  }
})
}

$(".description").each(function(){
$(".saveBtn").on("click", function(){

  var input = $(this).siblings(".description").val();
  localStorage.setItem("input", input);
  localStorage.getItem("input", input);
  console.log("test");
})
})
//html class called saveBtn
// $(".saveBtn").on("click", function(){ //click event
//   //the text description class is called description.

  


//   localStorage.setItem("description", input);
// })




// //target the whole document to store in local storage?
// $(docuement).ready(function () {
// if(localStorage.getItem)






Time();






  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

