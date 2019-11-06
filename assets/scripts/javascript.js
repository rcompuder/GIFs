
  $("#search").click(function () {
    var gif = $("#giphy-name").val();
    $("#giphys").html("");
    retrieveGif(gif);
  });
  
  function retrieveGif(gif) {
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=LIlGWBkrseKHErKVa5iw6BWi9GMehay3&q=" + gif + "&limit=10";
  
    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function (response) {
      if (response.Response === "False") {
        alert(response.Error);
      }
      else {
        for (i = 0; i < response.data.length; i++) {
          $("#giphys").append("<img src=" + response.data[i].images.fixed_width.url + "id=img" + i + ">");
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