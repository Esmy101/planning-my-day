var today = moment(); //top day & month 
$("#currentDay").text(today.format("dddd, MMM Do"));

var time = today.format("hh a"); //hour
var timeRows = $(".container").find(".hour")
console.log(timeRows)
//console.log(Array.isArray(timeRow))


function colorCode (){
    //if time is past then color set to gray
    timeRows.each(function() {
        let rowMoment = moment($(this).text(),"hh a")

    if (rowMoment.isSame(moment(time, "hh a"))){
         $(this).parent().parent().find("#timeChange").addClass(["present"])

    } else if (rowMoment.isBefore(moment(time, "hh a"))){ //if time is present then color set to red
        $(this).parent().parent().find("#timeChange").addClass("past")

    } else { //if time is future then color set to green
        $(this).parent().parent().find("#timeChange").addClass("future")
    }
    });
}

colorCode()




