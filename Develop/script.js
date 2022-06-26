var today = moment(); //top day & month 
$("#currentDay").text(today.format("dddd, MMM Do"));

var time = today.format("hh a"); //hour
var timeRow = $(".hour").find(".hour")
console.log(timeRow)
//console.log(Array.isArray(timeRow))


function colorCode (){
    //if time is past then color set to gray
    timeRow.each((element) => {
        console.log(element.text())
         if (element < time){
            element.addClass("past")
    } else if (element == time){ //if time is present then color set to red
        element.addClass("present")
    } else { //if time is future then color set to green
        element.addClass("future")
    }
    });
   
}

colorCode()
