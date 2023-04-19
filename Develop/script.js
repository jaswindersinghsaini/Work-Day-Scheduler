var today = dayjs().format("MMM DD YYYY");
$("#currentDay").append("Today is " + today);


var hour9 = $("9").text();
var hour10 = $("10").text();
var hour11 = $("11").text();
var hour12 = $("12").text();
var hour01 = $("13").text();
var hour02 = $("14").text();
var hour03 = $("15").text();
var hour04 = $("16").text();
var hour05 = $("17").text();



$(document).ready(function () {
  

  $("#notes1").html(localStorage.getItem("hour9"));
  $("#notes2").html(localStorage.getItem("hour10"));
  $("#notes3").html(localStorage.getItem("hour11"));
  $("#notes4").html(localStorage.getItem("hour12"));
  $("#notes5").html(localStorage.getItem("hour13"));
  $("#notes6").html(localStorage.getItem("hour14"));
  $("#notes7").html(localStorage.getItem("hour15"));
  $("#notes8").html(localStorage.getItem("hour16"));
  $("#notes9").html(localStorage.getItem("hour17"));
 

  $(".saveBtn").on("click", function () {
    localStorage.setItem("hour9", $("#notes1").val());
    localStorage.setItem("hour10", $("#notes2").val());
    localStorage.setItem("hour11", $("#notes3").val());
    localStorage.setItem("hour12", $("#notes4").val());
    localStorage.setItem("hour13", $("#notes5").val());
    localStorage.setItem("hour14", $("#notes6").val());
    localStorage.setItem("hour15", $("#notes7").val());
    localStorage.setItem("hour16", $("#notes8").val());
    localStorage.setItem("hour17", $("#notes9").val());
    
  });
  
  var currentTime = dayjs().hour();

  function timeSlot() {
    $(".time-block").each(function () {
      var timeBlock = parseInt($(this).attr("id"));

      if (currentTime < timeBlock) {
        $(this).addClass("future").removeClass("present past");
      }
      if (currentTime > timeBlock) {
        $(this).addClass("past").removeClass("future present");
      }
      if (currentTime == timeBlock) {
        $(this).addClass("present").removeClass("past future");
      }
    });
  }

  timeSlot();
});

