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
});
