// $(document).ready(function () {
//     $(".screen").fadeOut();
//     $("#keyboard").hover(
//       function () {
//         $(".screen").fadeOut();
//       },
//       function () {
//         $(".screen").fadeIn();
//       }
//     );
//   });
  

$(document).ready(function () {
  $(".screen").fadeOut();
    $("#yikes").hover(
      function () {
        $(".screen").fadeIn();
      },
      function () {
        $(".screen").fadeOut();
      }
    );
  });
  
  $(function () {
    $(
      "#computer2"
    ).draggable();

  });