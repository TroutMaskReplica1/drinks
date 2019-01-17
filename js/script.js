$(document).ready(function() {
  var over21 = confirm("Over 21? Click OK to continue or Cancel for no.");

  if (over21) {
    $("#drinks").show();
  } else {
    $("#under-21").show();
  }
});
