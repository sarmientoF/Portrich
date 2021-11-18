
//cm m 切替

$(function() {
    //元々cm&sup3;を入力
    $(".js-unit span").html("cm&sup3;");
    //radioボタンが切り替わるとイベント発火
    $('input[name="radio10"]').change(function() {

        //選択したvalue値を変数に格納
        var unit = $(this).val();

        if (unit == "cm") {
            $(".js-unit span").html("cm&sup3;");
        } else if (unit == "m") {
            $(".js-unit span").html("m&sup3;");
        }
    });
});

//タブコンテナに配送項目変更 ドレージとトラック　ラジオボタン
$(function() {
  $('.js-radio-truck02').hide();
  $('[name="tab"]:radio').change( function() {
    if($('[id=tab02]').prop('checked')){
      $('.js-radio-switch-truck').hide();
      $('.js-radio-truck02').show();
    } else {
      $('.js-radio-switch-truck').hide();
      $('.js-radio-truck01').show();
    }
  });
});

//トラックタブの中で配送項目変更　ドレージとトラック　ラジオボタン
$(function() {
  $('.js-radio10').hide();
  $('[name="radio_truck"]:radio').change( function() {
    if($('[id=truck_container]').prop('checked')){
      $('.js-radio_switch4').hide();
      $('.js-radio10').show();
      $('.js-radio-switch-truck').hide();
      $('.js-radio-truck02').show();
    } else if ($('[id=konzai]').prop('checked')) {
      $('.js-radio_switch4').hide();
      $('.js-radio11').show();
      $('.js-radio-switch-truck').hide();
      $('.js-radio-truck01').show();
    }
  });
});


//箱/パレット　寸法記入欄　ラジオボタン
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

//航空輸送　寸法記入欄　ラジオボタン
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

//箱/パレット + 航空輸送　寸法記入欄　ラジオボタン
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

//トラック　寸法記入欄　ラジオボタン
$(function() {
  $('.js-radio11').hide();
  $('.js-radio12').hide();
  $('.js-radio13').hide();
  $('.js-radio10').show();
  $('[name="radio_truck"]:radio').change( function() {
    if($('[id=box_truck]').prop('checked')){
      $('.js-radio_switch4').hide();
      $('.js-radio10').show();
      $('.js-radio-switch-truck').hide();
      $('.js-radio-truck01').show();
    } else if ($('[id=pallet_truck]').prop('checked')) {
      $('.js-radio_switch4').hide();
      $('.js-radio11').show();
      $('.js-radio-switch-truck').hide();
      $('.js-radio-truck01').show();
    }else if ($('[id=total_truck]').prop('checked')) {
      $('.js-radio_switch4').hide();
      $('.js-radio12').show();
      $('.js-radio-switch-truck').hide();
      $('.js-radio-truck01').show();
    }else if ($('[id=container_truck]').prop('checked')) {
      $('.js-radio_switch4').hide();
      $('.js-radio13').show();
      $('.js-radio-switch-truck').hide();
      $('.js-radio-truck02').show();
    }
  });
});

//トラック配送依頼有無
$(function() {
  $('[name="radio3"]:radio').change( function() {
    if($('[id=truck2]').prop('checked')){
      $('.js-radio-switch-truck2').hide();
    } else if ($('[id=truck1]').prop('checked')) {
      $('.js-radio-switch-truck2 ').hide();
      $('.js-radio-truck04').show();
    }
  });
});

//ドレージ配送依頼有無
$(function() {
  $('[name="radio5"]:radio').change( function() {
    if($('[id=drayage2]').prop('checked')){
      $('.js-radio-switch-truck3').hide();
    } else if ($('[id=drayage1]').prop('checked')) {
      $('.js-radio-switch-truck3 ').hide();
      $('.js-radio-truck05').show();
    }
  });
});
