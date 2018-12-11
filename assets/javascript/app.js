/*Objectives:
- create array of topics
- have this array create buttons in html
- have user click on paused gif to play it
- dosplay gif rating (let's out a filter on that)
- change gifs to a fixed width and height
*/
//Upon enter, the code goes to a new page displaying my code. There needs to be "event" somewhere
//Can only get one set of gifs from user. If user types a different word, I want new gifs to appear
//Want to display gifs if user clicks submit button or presses enter. Used this source https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp but no success
$(document).ready(function () {
  console.log("ready!");
  var gifArray = ['animals', 'spongebob', 'tacos', 'simpsons'];

  for (j = 0; j < gifArray.length; j++) {
    $('#buttons').append("<button type='button' class='button'>"
      + gifArray[j] +
      "</button>"
    )
  };

  $('#userInputButton').on('click', function getData(event) {
    event.preventDefault();
    var input = $("#userInput").val().trim();
    console.log('click');
    var xhr = $.get(
      "https://api.giphy.com/v1/gifs/search?q="
      + input +
      "&api_key=IjkESGH2V6bmed1LWaCukFWZFrOthKwd&limit=10"
    );

    xhr.done(function (response) {
      //console.log("success got data", response);
      $('#giphy').empty();
      var gifs = response.data;
      for (i in gifs) { // for/in loops are when you want to loop an object/array
        $("#giphy").append("<img src = '" + gifs[i].images.original.url + "'/>");
      };
    });

    $('#buttons').append("<button type = 'button' class = 'button'>"
      + input +
      "</button>"
    );
  });

  $('#buttons').on('click', '.button', function recallData(event) {
    event.preventDefault();
    var savedInput = $(this).text();
    console.log(savedInput);
    var xhr = $.get(
      "https://api.giphy.com/v1/gifs/search?q="
      + savedInput +
      "&api_key=IjkESGH2V6bmed1LWaCukFWZFrOthKwd&limit=10"
    );

    xhr.done(function (response) {
      console.log("success got data", response);
      $('#giphy').empty();
      var gifs = response.data;
      console.log(gifs);
      for (i in gifs) {
        $("#giphy").append("<img src = '" + gifs[i].images.original.url + "'/>");
        console.log(gifs[i].images.original.url);
      };
    });
  });
});

