
//cm m 切替

$(function() {
  //元々cm&sup3;を入力
  $(".js-unit span").html("cm&sup3;");
  //radioボタンが切り替わるとイベント発火
  $('input[name="radio15"]').change(function() {

      //選択したvalue値を変数に格納
      var unit = $(this).val();

      if (unit == "cm") {
          $(".js-unit span").html("cm&sup3;");
      } else if (unit == "m") {
          $(".js-unit span").html("m&sup3;");
      }
  });
});



//箱/パレット　ラジオボタン
$(function() {
  $('.js-radio02').hide();
  $('.js-radio03').hide();
  $('[name="radio1"]:radio').change( function() {
    if($('[id=box]').prop('checked')){
      $('.js-radio_switch1').hide();
      $('.js-radio01').show();
    } else if ($('[id=pallet]').prop('checked')) {
      $('.js-radio_switch1').hide();
      $('.js-radio02').show();
    }else if ($('[id=total]').prop('checked')) {
      $('.js-radio_switch1').hide();
      $('.js-radio03').show();
    }
  });
});

//航空輸送　ラジオボタン
$(function() {
  $('.js-radio05').hide();
  $('.js-radio06').hide();
  $('[name="radio_air"]:radio').change( function() {
    if($('[id=box_air]').prop('checked')){
      $('.js-radio_switch2').hide();
      $('.js-radio04').show();
    } else if ($('[id=pallet_air]').prop('checked')) {
      $('.js-radio_switch2').hide();
      $('.js-radio05').show();
    }else if ($('[id=total_air]').prop('checked')) {
      $('.js-radio_switch2').hide();
      $('.js-radio06').show();
    }
  });
});

//箱/パレット + 航空輸送　ラジオボタン
$(function() {
  $('.js-radio08').hide();
  $('.js-radio09').hide();
  $('[name="radio_lclair"]:radio').change( function() {
    if($('[id=box_lclair]').prop('checked')){
      $('.js-radio_switch3').hide();
      $('.js-radio07').show();
    } else if ($('[id=pallet_lclair]').prop('checked')) {
      $('.js-radio_switch3').hide();
      $('.js-radio08').show();
    }else if ($('[id=total_lclair]').prop('checked')) {
      $('.js-radio_switch3').hide();
      $('.js-radio09').show();
    }
  });
});



