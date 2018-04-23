var api = "http://api.giphy.com/v1/gifs/search?";
var apiKey = "&api_key=dc6zaTOxFJmzC";
var query = "&q=pear";
var input;
var images;

function setup() {
  noCanvas();
  
var button = select('#submit');
button.mousePressed(giphyAsk);
input = select('#keyword');
  
images = select('#images');
}

function giphyAsk() {
  query = '&q=' + input.value();
  var url = api + apiKey + query;
  loadJSON(url, gotData);
}
function gotData(giphy) {
  images.html("");
  for (var i = 0; i < giphy.data.length; i++) {
    var img = createImg(giphy.data[i].images.original.url);
    img.size(200, 200);
    images.child(img);
  }
}