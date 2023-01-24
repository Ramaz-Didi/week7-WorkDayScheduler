var timeDisplayEl = $('#time-display');
var businessHours = ["9am","10am","11am","12am","1pm","2pm","3pm","4pm","5pm"];
var hoursNumbers = [9,10,11,12,13,14,15,16,17];
var textInput = document.querySelectorAll("calender-block");
 $(document).ready(function(){
setInterval(
  function(){
      $("#time-display").text(moment().format("DDD MMM, YYYY hh:mm:ss A"))
  
  },1000)
})
var timeNow=parseInt(moment().format("H"));
// used to check if js response to time change 
//  timeNow=timeNow-11;
// console.log(timeNow)

// 
 
for (let i = 0; i < businessHours.length; i++) 
{
    const element = businessHours[i];
    var textByTimeSlot = document.getElementById(element);
    var timeSlotData=textByTimeSlot.dataset.time
    // console.log(textByTimeSlot);
    // console.log(timeNow);
    // console.log("slot name"+timeSlotData);
    if (hoursNumbers[i] < timeNow)
    {
        textByTimeSlot.setAttribute("class","past"); 
        // $("textarea").attr("class","future")
    }else
        { if (hoursNumbers[i] == timeNow)
            {textByTimeSlot.setAttribute("class","present"); }
            else
            {textByTimeSlot.setAttribute("class","future");}
        }
}

// $("textarea").attr("class","future")
// or $("textarea").addClass("future")
$(".Btn").on("click", function(event){
    event.preventDefault();
    console.log($(event.target).siblings("textarea").val())

    // var buttonNumber=event.target.
    // var valueEvent=localStorage.getItem("9am")
    // console.log(valueEvent);
    // localStorage.setItem("9am","skjjwdf")
    // console.log("2")
    // var calendarItem = event.target.parentElement.previousElementSibling.children[0].value;
    // localStorage.setItem(event.target.attributes[0].value, calendarItem);
    // $("#projectGrid").append(
    //  `<div class="row">
    //   <div class="col">
    //     ${$("#nameOfProject").val()}
    //   </div>
    //  
    // </div>`)
})
