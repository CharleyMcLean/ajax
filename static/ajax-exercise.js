"use strict";


// PART 1: SHOW A FORTUNE

function replaceFortune(results) {
    // Can save results as a variable, but don't have to.
    // var fortune = results;
    $('#fortune-text').html(results);
    console.log("Finished replacing fortune!");
}

function updateFortune(evt) {
    $.get('/fortune', replaceFortune);
    console.log("Finished sending AJAX, also updating fortune.");
}

$('#get-fortune-button').on('click', updateFortune);


// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    var url = "/weather?zipcode=" + $("#zipcode-field").val();

    // TODO: request weather with that URL and show the forecast in #weather-info
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


