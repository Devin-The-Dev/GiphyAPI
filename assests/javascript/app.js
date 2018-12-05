/*Objectives:
 - have buttons generate gifs from user input
 - change gifs to a fixed width and height
*/
//Upon enter, the code goes to a new page displaying my code. There needs to be "event" somewhere
//Can only get one set of gifs from user. If user types a different word, I want new gifs to appear
//Want to display gifs if user clicks submit button or presses enter. Used this source https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp but no success
$('#userInputButton').on('click', function getData(event) {
  event.preventDefault();
  var input = $("#userInput").val().trim();

  var xhr = $.get(
    "http://api.giphy.com/v1/gifs/search?q="
    + input +
    "&api_key=IjkESGH2V6bmed1LWaCukFWZFrOthKwd&limit=30"
  );

  xhr.done(function (response) {
    console.log("success got data", response);
    var gifs = response.data;
    for (i in gifs) { // for/in loops are when you want to loop an object
      $("#giphy").append("<img src = '" + gifs[i].images.original.url + "'/>");
    };
  });

  $('#buttons').append("<button type='button' id='singleButton'>"
    + input +
    "</button>"
  ).on('click', function getData() { }); //Run an if statement instead?

});
