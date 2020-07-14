function hospot(){
    var num = 0;
    $('#modal_bg').hide();
    $('.project_hotspot').hide();

    $('.side_controls ul li').on("click", function(c){
        $(".project_hotspot").hide();
        $('.mordal_wrap .hotspot_contents').css("display","block");
        $('.mordal_wrap .icons-wrap').css("display","none");

        $('.hotspot-tab ul li').removeClass("tab_on");
        $('.hotspot-tab ul li:first-child').addClass("tab_on");

        num = $(this).index();
        $('.ph').eq(num).show();
        $('#modal_bg').show();
        $('.icon_view').eq(num).show();

        $('li.on').removeClass('on');
        $(this).addClass('on'); 

        return false;
    });

    $('.guide_close_btn').on("click", function(){
        $('.vrDrawing_guide').hide();
        $('.temp_area').show();
    });
    $('.temp_area').on("click", function(){
        $(".vrDrawing_modal").show();
    })
    



} //hotspot popup
hospot();

function closeBtn(){
    $(".close_btn").on("click", function(){
        $(".project_hotspot").hide();
        $('#modal_bg').hide();
        $("#project_floor_hotspot .floor_modal_content").css("display","none");
        $('.icon_view').hide();

        $('.side_controls ul li').hasClass('on')
        $('.side_controls ul li').removeClass('on');

        $('.mordal_wrap .hotspot_contents').css("display","block");
        $('.mordal_wrap .icons-wrap').css("display","none");
        $('.hotspot-tab ul li').removeClass("tab_on");
        $('.hotspot-tab ul li:first-child').addClass("tab_on");

        return false;
    })
} //hotspot 닫기버튼
closeBtn();

function sideControl(){

    $(".map_pj_Btn").on("click", function(){

        $(".project_step_3 .Project_bg").animate({})
        $(".control_contents").animate({width:"450px"})
        $(".vr_project_map").show();
        $(".close_control_btn, .control_contents").show();
    });

    $(".info_pj_Btn").on("click", function(){

        $(".project_step_3 .Project_bg").animate({})
        $(".control_contents").animate({width:"450px"})
        $(".vr_project_info").show();
        $(".close_control_btn, .control_contents").show();
    });

    $(".qrcode_pj_Btn").on("click", function(){

        $(".project_step_3 .Project_bg").animate({})
        $(".control_contents").animate({width:"450px"})
        $(".vr_project_qrcode").show();
        $(".close_control_btn, .control_contents").show();
    });

    $(".close_control_btn").on("click", function(){

        $(".project_step_3 .Project_bg").animate({})
        $(".control_contents").animate({width:"0"})
        $(".close_control_btn, .control_contents").hide();

        $(".vr_project_map, .vr_project_info, .vr_project_qrcode").hide();
    });

} //preview side_controlBtn



    $(".creatmenu").hide();
    $(".creatmenu_btn").on("click", function(){
        $(".creatmenu").show();
        $('#modal_bg').show();
    });
    $(".creatmenu_close_btn").on("click", function(){
        $(".creatmenu").hide();
        $('#modal_bg').hide();
    });

    $(".sns_icon_control").hide();
    $(".share_btn").on("click", function(){
        $(".sns_icon_control").slideToggle().show();
    });
    $(".share_close_btn").on("click", function(){
        $(".sns_icon_control").slideUp();
    })

    $(".vr_close_btn, .vr_canvas_wrap").hide();
    $(".hotspot_toll_wrap").hide();

    var windowWidth = $(window).width();
    
    $("#preview_btn").on("click", function(){
       
        $(".project_step_3 .Project_bg").css({top:0});
        $(".project_step_3 .vr_footer .foot_thumb_wrap ul li").css("width","80px");
        $(".project_step_3 .vr_footer .foot_thumb_wrap .foot_thumb_btn, .floormap_btn").css("display","block");
        
        $(".vr_close_btn, .hotspot_toll_wrap, .vr_icon_wrap .floor_icon_btn, .vr_icon_wrap .floor_icon_btn, .vr_canvas_wrap, .preview_control_wrap, .vr_canvas_wrap .project_menu").show();
        $(".left_btn_wrap, .project_step_3 .aside_controls, .sns_icon_control, .project_step_3 .side_controls, .vr_footer_control").hide();
        $("#menu_btn, .project_step_3 .vr_title").hide();


        $(".thumb_slide_btn").css("top","4px");

        if(windowWidth < 480){
            //$(".project_step_3 .vr_footer").css({ "z-index":"10", paddingBottom:"50px"});
            $(".foot_thumb_wrap").css({padding:"0"});
            $(".foot_thumb_img").css({height:"40px"});
        }else{
            $(".project_step_3 .vr_footer").css({ "z-index":"8"});
            $(".foot_thumb_wrap").css({padding:"0 100px"});
            $(".foot_thumb_img").css({height:"37px"});
        }
        
    });

    $(".vr_close_btn").on("click",function(){

        
        $(".foot_thumb_wrap").css({padding : "0 20px"});
        $(".project_step_3 .vr_footer").css({ "z-index" : 0});
        $(".project_step_3 .vr_footer .foot_thumb_wrap .foot_thumb_btn").css("display","none");
        $(".foot_thumb_wrap ul").show();

        $(".vr_close_btn, #vr_icon_wrap, .vr_icon_wrap .floor_icon_btn, .floormap_btn").hide();
        $(".left_btn_wrap, .project_step_3 .aside_controls, .sns_icon_control, .project_step_3 .side_controls, .vr_footer_control, #menu_btn, .project_step_3 .vr_title").show();
        $(".hotspot_toll_wrap, .floor_sub_img, .vr_canvas_wrap").hide();

        $(".thumb_slide_btn").css("top","21.5px");

        if(windowWidth < 480){
            $(".project_step_3 .vr_footer").css({ "z-index":"10", paddingBottom:"20px"});
            
            $(".foot_thumb_img").css({height:"49px"});
            $(".project_step_3 .vr_footer .foot_thumb_wrap ul li").css("width","100px");
        }else{
            
            $(".foot_thumb_img").css({height:"72px"});
            $(".project_step_3 .vr_footer .foot_thumb_wrap ul li").css("width","160px");
        }
    });

    function miniMap(){

    var isplay = true;
    $(".floor_sub_img").hide();
    $(".right_close").hide();
    $(".floor_hotspot_btn").on("click", function(){
        if(isplay){
            $(".floor_sub_img, .right_close").show();
        }else{
            $(".floor_sub_img, .right_close").hide();
        }
        isplay = !isplay;
        
    });

    }
    miniMap();


    var num = 0;
    document.getElementById("FileAttachment").onchange = function () {
        document.getElementById("fileuploadurl").value = this.value.replace(/C:\\fakepath\\/i, '');
    };

    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            
            reader.onload = function (e) {
                $('#img_preview').attr('src', e.target.result);
            }
            
            reader.readAsDataURL(input.files[0]);
        }
    }
    
    $("#imgInp").change(function(){
        readURL(this);
    });


    $('input[type="range"]').change(function () {
        var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
    
        $(this).css('background-image',
                '-webkit-gradient(linear, left top, right top, '
                + 'color-stop(' + val + ', #3e84b6), '
                + 'color-stop(' + val + ', #eaeaea)'
                + ')'
        );
    });

    $("#project_floor_hotspot .floor_modal_content").css("display","none");
    
    function callFunction(){
        $("#project_floor_hotspot .floor_modal_content").css("display","block");
    }

    $( "#draggable" ).draggable();
    $(".hotspot_toll_wrap #drag").draggable();
    $(".start_view_icon").draggable();



    $(".library_popup").hide();
    function call_library(){
        $("#modal_bg").css("display","block");
        $(".library_popup").show();
    }

    $(".library_close_btn").on("click", function(){
        $("#modal_bg").css("display","none");
        $(".library_popup").hide();
    });

    $(".setting_btn").on("click",function(){
        $(".setting_content").show();
        $('#modal_bg').show();
    });

    $(".setting_content .project_option .btn_wrap .cancel_btn").on("click",function(){
        $(".setting_content").hide();
        $('#modal_bg').hide();
        return false;
    });


    $(".start_view_frame").hide()
    $(".vr_start_link").on("click", function(){
        $(".start_view_frame").show();
    });
    $(".view_save_btn").on("click", function(){
        $(".start_view_frame").hide();
    })


    var m_num =0;
    // $(".vr_canvas_wrap .project_menu ul li").on("click",function(){
    //     m_num = $(this).index();
    //     if(isplay){
    //         $(this).children("ul").slideDown()
    //     }else{
    //         $(".vr_canvas_wrap .project_menu ul li ul").slideUp()
    //     }
    //     isplay = !isplay;
    // })

     $(".vr_canvas_wrap .project_menu ul li").on("click",function(){
        m_num = $(this).index();
        $(this).children("ul").slideDown()
        
    });
     $(".vr_canvas_wrap .project_menu ul li").on("mouseleave",function(){
        m_num = $(this).index();
        $(this).children("ul").slideUp()
        
    });


function hotspot_tab(evt, tabName) {

  var number, hotspot_contents, tabBtn;
  
  hotspot_contents = document.getElementsByClassName("hotspot_contents");

  for (number = 0; number < hotspot_contents.length; number++) {
    hotspot_contents[number].style.display = "none";
  }

  tabBtn = document.getElementsByClassName("tabBtn");

  for (number = 0; number < tabBtn.length; number++) {
    tabBtn[number].className = tabBtn[number].className.replace(" tab_on", "");
  }

  document.getElementById(tabName).style.display = "block";

  evt.currentTarget.className += " tab_on";
}

function rotation_on(){
  $(".transform-wrap a").click(function(){
    $(".transform-wrap a").removeClass("control_on");
    $(this).addClass("control_on");
  });
  $(".transform-option a").click(function(){
    $(".transform-option a").removeClass("control_on");
    $(this).addClass("control_on");
  });
}
rotation_on();


function sideControl(){

    $(".control_content").css("width","320px");

    $(".close_control_btn_s").on("click", function(){

        $(".project_step_3 .vr_footer").css("z-index","9");
        $(".control_content").animate({width:"0"})
        $(".close_control_btn_s").hide();

    });

    $(".control_btn").on("click", function(){
        $(".project_step_3 .vr_footer").css("z-index","8");
        $(".control_content").animate({ width : "320px" });
        $(".close_control_btn_s").show();

        $(".control_content_m").animate({height:"70%"});

    });

    $(".control_close").on("click", function(){
        $(".project_step_3 .vr_footer").css("z-index","10");
        $(".control_content_m").animate({height:0});
    })


} //preview side_controlBtn
sideControl();


$('.qr_pop').on("click", function(){

    $('.qr_modal').css("display","block");
});

$('.qr_close').on("click", function(){

    $('.qr_modal').css("display","none");
});

// var isplay = true;
// $(".foot_info").on("click", function(){

//     if(isplay){
//         $(".control_content_m").animate({height:"70%"});
//         $(".foot_thumb_wrap").hide();
//     }else{
//         $(".control_content_m").animate({height:0});
//         $(".foot_thumb_wrap").show();
//     }
    
//     isplay = !isplay;
// });



function closeMiniMap(){
    $('.floor_sub_img, .right_close').css('display','none');
}

$(".upBtn").hide();
$(".showBtn").show();
var isplay = true;

function toggleThumb(){

    if(!isplay){
        $(".foot_thumb_wrap ul").slideDown()
        $(".upBtn").hide();
        $(".showBtn").show();
    }else{
        $(".foot_thumb_wrap ul").slideUp()
        $(".upBtn").show();
        $(".showBtn").hide();
    }


    isplay = !isplay;
    
}


function selectScene() {
    $('.select').on("click", function(){
        $('.creatmenu').css("margin-left","-480px");
        $('.scene_form').css("display","block");

    });

    $('.scene_form li a').on("click", function(){
        $('.creatmenu').css("margin-left","-360px");
        $('.scene_form').css("display","none");
    });
}
selectScene();

function share() {
    var isplay = true;
    $('.share_link').on("click", function(){
        if(isplay){
            $('.copy_contents').css("display","block");
        }else{
            $('.copy_contents').css("display","none");
        }

        isplay = !isplay;

    })
}

share();


function vr_drawing_hotspot(){
    var n = 0;
    var actionSelect = $('.action-select');
    var selectOption = $('.action-select li');
    $('.action-select').hide();
    $('.vrDrawing_action li').on('click', function(){
        actionSelect.slideDown();
    });

    selectOption.on('click', function(){
        n = $(this).index();
        $('.action-form').hide();
        $('.action-form').eq(n).show();
        $('.vrDrawing_action li span').text($(this).text());
        actionSelect.slideUp();

        return false;
    });

    var vrDrawing_color = $(".vrDrawing_tab ul li")
    vrDrawing_color.click(function(){
      vrDrawing_color.removeClass("tab_on");
      $(this).addClass("tab_on");
    });

}
vr_drawing_hotspot();


function videoControl(){
    $(".number-up").on('click', function() {
            var plusValue = parseInt($('.numberCount').val());
            if (!isNaN(plusValue)) {
                $('.numberCount').val(plusValue + 1);
            } else {
                $('.numberCount').val(1);
            }
        });

        // decrement value minus one
        $(".number-down").on('click', function() {
            var minusValue = parseInt($('.numberCount').val());
            if (!isNaN(minusValue) && minusValue > 1) {
                $('.numberCount').val(minusValue - 1);
            } else {
                $('.numberCount').val(1);
            }
        });
}
videoControl();



















