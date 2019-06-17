$(document).ready(function() {

  var quotes = ["Be the change that you wish to see in the world", "Keep your face to the sunshine and you cannot see a shadow", "A champion is defined not by their wins but by how they can recover when they fall", "Happiness is not by chance, but by choice", "If you're always trying to be normal you will never know how amazing you can be"];
  var author = ["Mahatma Gandhi", "Helen Keller", "Serena Williams", "Jim Rohn", "Maya Angelou"];
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
