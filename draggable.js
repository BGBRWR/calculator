var divClone;
$(document).ready(function() {
 divClone = $(".keys").clone();
});
$( init );
var revert = false;
function init() {
  $('.key').draggable();
}
  $(".revert").click(function() {
    //This breaks the calculator when reset
    // $(".keys").replaceWith(divClone.clone());
    // $( init );
    $(".key").css({left: "", top: "", transition: "all .2s ease-in-out"});
    // setTimeout($(".key").css({transition: "all 0s ease-in-out"}), 3000);
  });
