$(document).ready(function(){

  // Your code goes here

  $email = $("#email");

  $email.on("keyup", function(){
    $this = $(this);
    $avatar = $("#avatar");
    hash = MD5($this.val().trim().toLowerCase());
    $avatar.attr("src", "http://www.gravatar.com/avatar/" + hash + "?s=256")
  });





});