$(document).ready(function() {

  var quotes = ["Everything is fair in love and war", "life is beautiful be grateful", "Hello World is the program everyone should write", "Hi world is program every girl should write"];
  var author = ["Ram Shrestha", "Hari Chalise", "Gopal Joshi", "Subhendu Bhata"];
  //to show default quote when starting a page
  fetchQuote(quotes, author);
  //Shows next quote when button is clicked
  $("#nxtQuote").click(function() {
    fetchQuote(quotes, author);
    $("#quoteBody").fadeOut("slow").fadeIn("slow");
  });

  //function to fetch and show the quote
  function fetchQuote(q, a) {
    var quoteNum = Math.floor(Math.random() * quotes.length);
    $("#quoteBody").text('" ' + q[quoteNum] + ' "');
    $("#authorBody").text("-" + a[quoteNum]);
    $(".tweet-btn").attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&text=' + encodeURIComponent('"' + q[quoteNum] + '."' + "by - " + a[quoteNum]));
  }
});