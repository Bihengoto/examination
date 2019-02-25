$(document).ready(function() {
  $("button#start").click(function() {
    $("form#registerIn").slideDown(1000);
    $("form#registerIn").show();
  });
  $("form#registerIn").submit(function(event) {
    event.preventDefault();
    $("#registerOne").hide();
    $("#registerTwo").hide();
    $("#radio").show();
    var name = $("#fullname").val();
    var email = $("#email").val();
    $("#name").text(name);
    $("#name1").text(name);
    $(".card-title").text(name);
    $(".card-text").text(email);
  });
  $("#radio form").submit(function(event) {
    event.preventDefault();
    var answerOne = parseInt($("input:radio[name=quizOne]:checked").val());
    var answerTwo = parseInt($("input:radio[name=quizTwo]:checked").val());
    var answerThree = parseInt($("input:radio[name=quizThree]:checked").val());
    var answerFour = parseInt($("input:radio[name=quizFour]:checked").val());

    $("#radio").hide();
    $(".registerTwo").show();

    var sum = answerOne + answerTwo + answerThree + answerFour;
    var percent = (sum / 40) * 100;

    $("#marks").text(percent);

    if (percent > 80) {
      $("#remarks").text("You have EXCELLENTLY passed");
    } else if (percent < 80 && percent > 50) {
      $("#remarks").text("You have FAIRLY passed");
    } else {
      $("#remarks").text("You have POORLY passed");
    }
  });
});
