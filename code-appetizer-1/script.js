$(document).ready(function(){

  var $email = $("#email");

  $email.on("keyup", function(){
    var val = $(this).val();
    val = val.trim();
    val = val.toLowerCase();
    val = MD5(val);

    var url = "http://www.gravatar.com/avatar/" + val + "?s=256";

    $("#avatar").attr("src", url);
  })

});
