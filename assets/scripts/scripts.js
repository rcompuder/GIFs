$("#gif-name").append(article);
function getGiphy(gif) {

    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=LIlGWBkrseKHErKVa5iw6BWi9GMehay3&q="
        $.ajax({
            url: queryURL,
            method: "GET"
        }).done(function(response) {

        $("#search").click(function() {

            var gif = $("#gif-name").val();
            getGif(gif);
  }
    
  });
  
  for (var i = 0; i < 5; i++) {

    var giph = giphList[i];
    getMovie(movie);

  }