$(document).ready(function() {
  $("#click1").click(function() {
    $("#hide1").fadeToggle();
    $("#click1").fadeToggle("slow");
  });
  $("#hide1").click(function() {
    $("#click1").fadeToggle();
    $("#hide1").fadeToggle("slow");
  });

  $("#click2").click(function() {
    $("#hide2").fadeToggle();
    $("#click2").fadeToggle("slow");
  });
  $("#hide2").click(function() {
    $("#click2").fadeToggle();
    $("#hide2").fadeToggle("slow");
  });

  $("#click3").click(function() {
    $("#hide3").slideToggle();
    $("#click3").slideToggle("slow");
  });
  $("#hide3").click(function() {
    $("#click3").slideToggle();
    $("#hide3").slideToggle("slow");
  });
});
