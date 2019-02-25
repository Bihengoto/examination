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
  });
  $("#radio form").submit(function(event) {
    event.preventDefault();
    var answerOne = parseInt($("input:radio[name=quizOne]:checked").val());
    var answerTwo = parseInt($("input:radio[name=quizTwo]:checked").val());
    var answerThree = parseInt($("input:radio[name=quizThree]:checked").val());
    var answerFour = parseInt($("input:radio[name=quizFour]:checked").val());

    $("#radio").hide();
    $(".registerTwo").show();
  });
});
