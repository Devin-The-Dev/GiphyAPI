/*Objectives:
 - add buttons of saved gifs
*/
function getData() {
  var input = $("#userInput")
    .val()
    .trim();

  var xhr = $.get(
    "http://api.giphy.com/v1/gifs/search?q=cat&api_key=IjkESGH2V6bmed1LWaCukFWZFrOthKwd&limit=30"
  );
  xhr.done(function(response) {
    console.log("success got data", response);
    var gifs = response.data;
    for (i in gifs) {
      //for in loops are when you want to loop objects
      $("#giphy").append("<img src = '" + gifs[i].images.original.url + "'/>");
    }
  });
}
