//banner animation script//
$(document).ready(function() {

let $sitelading = $('#banner');
$sitelading.polygonizr();

// Update size.
$(window).resize(function () {
  $sitelading.polygonizr("stop");
  $sitelading.polygonizr({
    canvasHeight: $(this).height(),
    canvasWidth: $(this).width()
  });
  $sitelading.polygonizr("refresh");
});

//text animation script//
//-------------------------------------//

    // ELEMENTS
      var $scramble = $(".scramble");
    // OTHER GLOBALS
      var optionsOpen = false;
    // DEMO SCRAMBLE
      $scramble.scramble(3000, 20, "alphabet", true);
    // HELPERS
      var toBoolean = function(input) {
        return input === 'true' ? true : false;
      };
      var scrambleDemo = function() {
        input = $input.val() === "" ? "Text deScrambler" : $input.val();
        duration = Number($(".duration").eq(0).val());
        interval = Number($(".interval").eq(0).val());
        uppercase = toBoolean($("input[name=uppercase]:checked").val());
        characterSet = $("input[name=character-set]:checked").val();
        $scramble.text(input);
        $scramble.scramble(duration, interval, characterSet, uppercase);
      };





      

    });
    