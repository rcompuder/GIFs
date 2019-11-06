$("#search").click(function() {
  var gif = $("#giphy-name").val();
  $("#giphy1").html("");
  retrieveGifs(gif);
});

function retrieveGifs(gif) {
  var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=vnc02mWFzSzq7mPvjGnYUBZDl6Dr4pgp&q=" + gif + "&limit=5";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(response) {
    if (response.Response === "False") {
      alert(response.Error);
    }
    else {

      for (i=0; i<response.data.length; i++){
        $("#giphy1").append("<img src=" + response.data[i].images.fixed_width.url + "id=img" + i + ">");
      

      }
    }
});
}
  
 /* function getGiphy(gif) {

    var queryURL = "https://developers.giphy.com/" 
        $.ajax({
            url: queryURL,
            method: "GET"
        }).done(function(response) {
    
        $("#search").click(function() {
    
            var gif = $("#gif-name").val();
            getGif(gif);
    } */