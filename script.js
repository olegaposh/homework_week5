$(document).ready(function () {

    //loop renders any previously stored input
    for (let i = 9; i < 18; i++) {

        if (localStorage[i]) {

            savedNote = localStorage.getItem(i);
            let noteLocation = document.querySelector("#hour" + i);
            noteLocation.value = savedNote;
            console.log(savedNote);
        }

    }
    

    let todaysDate = moment().format("MMMM Do YYYY, h:mm:ss a");

    let currentDayElement = $("#currentDay");
    currentDayElement.text(todaysDate);

    let time = moment();



    let time9am = moment("09:00:00 am", "hh:mm:ss a");
    let time10am = moment("10:00:00 am", "hh:mm:ss a");
    let time11am = moment("11:00:00 am", "hh:mm:ss a");
    let time12pm = moment("12:00:00 pm", "hh:mm:ss a");
    let time1pm = moment("01:00:00 pm", "hh:mm:ss a");
    let time2pm = moment("02:00:00 pm", "hh:mm:ss a");
    let time3pm = moment("03:00:00 pm", "hh:mm:ss a");
    let time4pm = moment("04:00:00 pm", "hh:mm:ss a");
    let time5pm = moment("05:00:00 pm", "hh:mm:ss a");
    let time6pm = moment("06:00:00 pm", "hh:mm:ss a");


    if (time.isBetween(time9am, time10am)) {

        $("#hour9").attr("class", "form-control present");
        $("#hour10").attr("class", "form-control future");
        $("#hour11").attr("class", "form-control future");
        $("#hour12").attr("class", "form-control future");
        $("#hour13").attr("class", "form-control future");
        $("#hour14").attr("class", "form-control future");
        $("#hour15").attr("class", "form-control future");
        $("#hour16").attr("class", "form-control future");
        $("#hour17").attr("class", "form-control future");

    }

    if (time.isBetween(time10am, time11am)) {

        $("#hour9").attr("class", "form-control past");
        $("#hour10").attr("class", "form-control present");
        $("#hour11").attr("class", "form-control future");
        $("#hour12").attr("class", "form-control future");
        $("#hour13").attr("class", "form-control future");
        $("#hour14").attr("class", "form-control future");
        $("#hour15").attr("class", "form-control future");
        $("#hour16").attr("class", "form-control future");
        $("#hour17").attr("class", "form-control future");
    }

    if (time.isBetween(time11am, time12pm)) {

        $("#hour9").attr("class", "form-control past");
        $("#hour10").attr("class", "form-control past");
        $("#hour11").attr("class", "form-control present");
        $("#hour12").attr("class", "form-control future");
        $("#hour13").attr("class", "form-control future");
        $("#hour14").attr("class", "form-control future");
        $("#hour15").attr("class", "form-control future");
        $("#hour16").attr("class", "form-control future");
        $("#five").attr("class", "form-control future");
    }

    if (time.isBetween(time12pm, time1pm)) {

        $("#hour9").attr("class", "form-control past");
        $("#hour10").attr("class", "form-control past");
        $("#hour11").attr("class", "form-control past");
        $("#hour12").attr("class", "form-control present");
        $("#hour13").attr("class", "form-control future");
        $("#hour14").attr("class", "form-control future");
        $("#hour15").attr("class", "form-control future");
        $("#hour16").attr("class", "form-control future");
        $("#hour17").attr("class", "form-control future");
    }

    if (time.isBetween(time1pm, time2pm)) {

        $("#hour9").attr("class", "form-control past");
        $("#hour10").attr("class", "form-control past");
        $("#hour11").attr("class", "form-control past");
        $("#hour12").attr("class", "form-control past");
        $("#hour13").attr("class", "form-control present");
        $("#hour14").attr("class", "form-control future");
        $("#hour15").attr("class", "form-control future");
        $("#hour16").attr("class", "form-control future");
        $("#hour17").attr("class", "form-control future");
    }

    if (time.isBetween(time2pm, time3pm)) {

        $("#hour9").attr("class", "form-control past");
        $("#hour11").attr("class", "form-control past");
        $("#eleven").attr("class", "form-control past");
        $("#hour12").attr("class", "form-control past");
        $("#hour13").attr("class", "form-control past");
        $("#hour14").attr("class", "form-control present");
        $("#hour15").attr("class", "form-control future");
        $("#hour16").attr("class", "form-control future");
        $("#hour17").attr("class", "form-control future");

    }

    if (time.isBetween(time3pm, time4pm)) {

        $("#hour9").attr("class", "form-control past");
        $("#hour10").attr("class", "form-control past");
        $("#hour11").attr("class", "form-control past");
        $("#hour12").attr("class", "form-control past");
        $("#hour13").attr("class", "form-control past");
        $("#hour14").attr("class", "form-control past");
        $("#hour15").attr("class", "form-control present");
        $("#hour16").attr("class", "form-control future");
        $("#hour17").attr("class", "form-control future");

    }

    if (time.isBetween(time4pm, time5pm)) {

        $("#hour9").attr("class", "form-control past");
        $("#hour10").attr("class", "form-control past");
        $("#hour11").attr("class", "form-control past");
        $("#hour12").attr("class", "form-control past");
        $("#hour13").attr("class", "form-control past");
        $("#hour14").attr("class", "form-control past");
        $("#hour15").attr("class", "form-control past");
        $("#hour16").attr("class", "form-control present");
        $("#hour17").attr("class", "form-control future");
    }

    if (time.isBetween(time5pm, time6pm)) {

        $("#hour9").attr("class", "form-control past");
        $("#hour10").attr("class", "form-control past");
        $("#hour11").attr("class", "form-control past");
        $("#hour12").attr("class", "form-control past");
        $("#hour13").attr("class", "form-control past");
        $("#hour14").attr("class", "form-control past");
        $("#hour15").attr("class", "form-control past");
        $("#hour16").attr("class", "form-control past");
        $("#hour17").attr("class", "form-control present");
    }

    // when save is clicked, the input is stored in local storage

    $(".btn").on("click", function (event) {
        event.preventDefault();

        //grab which button value they clicked
        let buttonValue = event.target.value;
        //grabbing the corresponding ID and store the input into note variable
        //let note = $("#hour" + buttonValue).value; (this version doesnt work)
        let note = document.querySelector("#hour" + buttonValue).value;
        //store the input in localstorage
        localStorage.setItem(buttonValue, note);
        

    })



});



