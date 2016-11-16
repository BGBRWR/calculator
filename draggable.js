
$( init );

function init() {
  $('.key').draggable();
}

$(".revert").click(function() {
  $(".key").css({left: "", top: "", transition: "all .2s ease-in-out"});
});
