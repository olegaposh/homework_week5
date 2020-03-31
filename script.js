$(document).ready(function () {

    // grey is past
    // red is the current hour
    // green is the future
    // save input to local storage
    // ex. if the time is 9:30am add class name present to the text area of 9am

    // if (time.isBetween(beforeTime, afterTime)) {

    //     console.log('is between')

    //     } else {

    //       console.log('is not between')

    //     }

    let todaysDate = moment().format("MMMM Do YYYY, h:mm:ss a");


    let currentDayElement = $("#currentDay");
    currentDayElement.text(todaysDate);



    let time = moment();



    let time9am = moment("12:00:00 am", "hh:mm:ss a");
    let time10am = moment("01:00:00 am", "hh:mm:ss a");
    let time11am = moment("11:00:00 am", "hh:mm:ss a");
    let time12pm = moment("12:00:00 pm", "hh:mm:ss a");
    let time1pm = moment("01:00:00 pm", "hh:mm:ss a");
    let time2pm = moment("02:00:00 pm", "hh:mm:ss a");
    let time3pm = moment("03:00:00 pm", "hh:mm:ss a");
    let time4pm = moment("04:00:00 pm", "hh:mm:ss a");
    let time5pm = moment("05:00:00 pm", "hh:mm:ss a");

    
    if (time.isBetween(time9am, time10am)) {

    console.log("it works");        
    let nine = $("#nine");
    nine.attr("class", "form-control present");

    }
    else {

        console.log("It doesn't work");
    }

    



});



