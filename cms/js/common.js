function asideMenu() {
    var isplay = true;
    $(".sideBtn").on("click", function () {
        if (isplay) {
            $(".side_menu").animate({
                width: "60px"
            });
            $(".userImg").animate({
                marginTop: "100px",
                marginLeft: "5px"
            });
            $(".userNmae").css('display', 'none');
            $(".cmsName, .side_menu span").hide();
            $(".side_menu span").hide();
        } else {
            $(".side_menu").animate({
                width: "260px"
            });
            $(".userImg").animate({
                marginTop: "0",
                marginLeft: "20px"
            });
            $(".userNmae").css('display', 'inline-block');
            $(".cmsName, .side_menu span").show();
        }
        isplay = !isplay;

    });




}
asideMenu();

$(window).resize(function () {
    var width = parselnt($(this).width());
    if (width < 1025) {
        $('.manage-form .news_wrap').css('margin-left', '100px');
    }
});



function change_pw() {
    var changePw = $(".change_pass_form");
    changePw.css("display", "block");
    $(".user_info_wrap, .user_project, .user_storage, .profile_footer_btn, .edit_form").css("display", "none");
}

function delete_account() {
    var accountDelete = $(".delete_account_form");
    accountDelete.css("display", "block");
    $(".profile_footer_btn, .edit_form").css("display", "none");
}

function edit_info() {
    var editInfo = $(".edit_form");
    editInfo.css("display", "block");
    $(".profile_footer_btn").css("display", "block");
    $(".user_info_wrap, .user_project, .user_storage, .user_wrap").css("display", "none");
}

function goBack() {
    $(".change_pass_form, .delete_account_form, .edit_form, .profile_footer_btn").css("display", "none");
    $(".user_info_wrap, .user_project, .user_storage, .user_wrap ").css("display", "block");
}


$(".creatmenu").hide();
$(".creatmenu_btn").on("click", function () {
    $(".creatmenu").show();
    $('#modal_bg').show();
});
$(".creatmenu_close_btn").on("click", function () {
    $(".creatmenu").hide();
    $('#modal_bg').hide();
});

$(".sns_icon_control").hide();
$(".share_btn").on("click", function () {
    $(".sns_icon_control").slideToggle().show();
});
$(".share_close_btn").on("click", function () {
    $(".sns_icon_control").slideUp();
})

$(".vr_close_btn, .vr_canvas_wrap").hide();
$(".hotspot_toll_wrap").hide();

$("#preview_btn").on("click", function () {

    $(".project_step_3 .Project_bg").css({
        top: 0
    });
    $(".project_step_3 .vr_footer").css({
        "z-index": "999"
    });
    $(".project_step_3 .vr_footer .foot_thumb_wrap ul li").css("width", "80px");
    $(".project_step_3 .vr_footer .foot_thumb_wrap .foot_thumb_btn").css("display", "block");


    $(".vr_close_btn, .hotspot_toll_wrap, .vr_icon_wrap .floor_icon_btn, .vr_icon_wrap .floor_icon_btn, .vr_canvas_wrap, .preview_control_wrap, .vr_canvas_wrap .project_menu").show();
    $(".left_btn_wrap, .project_step_3 .aside_controls, .sns_icon_control, .project_step_3 .side_controls, .vr_footer_control").hide();
    $("#menu_btn, .project_step_3 .vr_title").hide();


    $(".thumb_slide_btn").css("top", "4px");

});

$(".vr_close_btn").on("click", function () {

    $(".project_step_3 .vr_footer").css({
        "z-index": 0
    });
    $(".project_step_3 .vr_footer .foot_thumb_wrap ul li").css("width", "160px");
    $(".project_step_3 .vr_footer .foot_thumb_wrap .foot_thumb_btn").css("display", "none");
    $(".foot_thumb_wrap ul").show();

    $(".vr_close_btn, #vr_icon_wrap, .vr_icon_wrap .floor_icon_btn").hide();
    $(".left_btn_wrap, .project_step_3 .aside_controls, .sns_icon_control, .project_step_3 .side_controls, .vr_footer_control, #menu_btn, .project_step_3 .vr_title").show();
    $(".hotspot_toll_wrap, .floor_sub_img, .vr_canvas_wrap").hide();

    $(".thumb_slide_btn").css("top", "21.5px");
});

var isplay = true;
$(".floor_sub_img").hide();
$(".right_close").hide();
$(".floor_hotspot_btn").on("click", function () {
    if (isplay) {
        $(".floor_sub_img, .right_close").show();
    } else {
        $(".floor_sub_img, .right_close").hide();
    }
    isplay = !isplay;

});


function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#img_preview').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

$("#imgInp").change(function () {
    readURL(this);
});


$('input[type="range"]').change(function () {
    var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));

    $(this).css('background-image',
        '-webkit-gradient(linear, left top, right top, ' +
        'color-stop(' + val + ', #ff0041), ' +
        'color-stop(' + val + ', #eaeaea)' +
        ')'
    );
});

$("#project_floor_hotspot .floor_modal_content").css("display", "none");

function callFunction() {
    $("#project_floor_hotspot .floor_modal_content").css("display", "block");
}

$("#draggable").draggable();
$(".hotspot_toll_wrap #drag").draggable();
$(".start_view_icon").draggable();



$(".library_popup").hide();

function call_library() {
    $("#bg").css("display", "block");
    $(".library_popup").show();
}

$(".library_close_btn, .library_close_btn_m").on("click", function () {
    $("#bg").css("display", "none");
    $('#modal_bg').hide();
    $(".library_popup").hide();
});

$(".setting_btn").on("click", function () {
    $(".setting_content").show();
    $('#modal_bg').show();
});

$(".setting_content .project_option .btn_wrap .cancel_btn").on("click", function () {
    $(".setting_content").hide();
    $('#modal_bg').hide();
    return false;
});



$(".start_view_icon").hide()
$(".vr_start_link").on("click", function () {
    $(".start_view_icon").show();
});


var m_num = 0;
$(".vr_canvas_wrap .project_menu ul li").on("click", function () {
    m_num = $(this).index();
    if (isplay) {
        $(this).children("ul").slideDown()
    } else {
        $(".vr_canvas_wrap .project_menu ul li ul").slideUp()
    }
    isplay = !isplay;
});


function selectedAll() {
    var isplay = true;
    $(".seleced-all").on("click", function () {
        if (isplay) {
            $(".tour-check").attr("checked", true);
            $(".changeTxt").text("Cancel Selections");
        } else {
            $(".tour-check").removeAttr("checked");
            $(".changeTxt").text("Select All");
            $(".tour_setting").css("display", "none");
        }
        isplay = !isplay;
    });


    $(".tour-check").on("click", function () {
        $(".tour_setting").animate({
            marginTop: 0,
            opacity: 1
        });
        if ($(".tour-check").length == $(".tour-check:checked").length) {
            $(".selectall").attr("checked", "checked");
        } else {
            $(".selectall").removeAttr("checked");
        }
    });


    $(".checkBox").on("click", function () {
        $(".tour_setting").css("display", "block");
    });

}
selectedAll();

function checkedAll() {
    var isplay = true;
    $(".allChecked").on("click", function () {
        if (isplay) {
            $(".library_check").attr("checked", true);
            $(".checkBox").css({
                backgroundColor: "#3e83b5",
                border: "1px solid #3e83b5"
            });
            $(".checkBox:after").css("display", "block");
        } else {
            $(".library_check").removeAttr("checked");
            $(".checkBox").css({
                backgroundColor: "#fff",
                border: "1px solid #000"
            });
        }
        isplay = !isplay;

    });
}
checkedAll();

function itemDeleteBtn() {

    var folderNum = 0;
    var folders = $('.library_wrap .user_folder li').length;
    $('.user_folder li').find('.delete_icon').on("click", function () {
        $(this).find('.delete_btn').css('display', 'block');
        $(this).find('.delete_option_icon').hide();
        return false;
    });

    $(".delete_btn").on("click", function () {
        if (confirm('Are you sure to delete this folder?')) {
            $(this).parent('.user_folder li').hide()
        }else{
            $('.delete_option_icon').show()
            $('.delete_btn').css('display', 'none')
        }
    })

}
itemDeleteBtn();

function confirm_btn() {

}
confirm_btn();

$(".save_btn").on("click", function () {
    $(".saveBtn").hide();
    $(".loadBtn").show();
})


function addFolder() {
    $(".creat_new_folder").css({
        display: "block"
    });
    $('#bg').show();

} //addFolder

function popFolderClose() {
    $(".closeBtn").on("click", function () {
        $('#bg').hide();
        $(".creat_new_folder").css("display", "none");
        document.getElementById("new_folder").reset();

    })
}

popFolderClose();


function libraryPop() {
    $(".library_pop").css({
        display: 'block'
    });
    $(".library-form").css({
        zIndex: '14'
    });
    $("#modal_bg").show();
}

function libraryPopClose() {
    $("#modal_bg").hide();
    $(".library_pop").css({
        display: 'none'
    });
}

function uploade_file() {
    var isplay = true;

    $("input[name = checkbox1]").on("click", function () {
        if (!isplay) {
            $(".project_right > div .upload_file").css({
                backgroundColor: "#3e84b6 !important",
                color: "#fff",
                border: "0"
            });
        } else {
            $(".project_right > div .upload_file").css({
                backgroundColor: "#fff",
                color: "#000",
                border: "solid 1px #e2e2e2"
            });
        }
        isplay = !isplay;

    });

    $("input[name = checkbox2]").on("click", function () {
        if (isplay) {
            $(" .project_option .logo_file").css({
                backgroundColor: "#3e84b6 !important",
                color: "#fff",
                border: "0"
            });
        } else {
            $(" .project_option .logo_file").css({
                backgroundColor: "#fff",
                color: "#000",
                border: "solid 1px #e2e2e2"
            });
        }
        isplay = !isplay;

    });


} //switch
uploade_file();

function m_menu() {
    var sideMenu = $(".side_menu_m");
    sideMenu.css("width", "0");

    $('.menu_btn_m').on("click", function () {
        sideMenu.show().animate({
            width: "100%"
        });
    });

    $(".close_menu").on("click", function () {
        sideMenu.animate({
            width: 0
        });
        sideMenu.hide(100);
    });
}
m_menu();

function projectDelete() {
    $('.delete_btn_p').on('click', function () {
        confirm("Do you want to delete the project?");
    });
}
projectDelete();

function projectConfirm() {
    var copyProject = confirm("Do you want to copy the project?");
    if (copyProject == true) {
        $(".list-project").eq(0).clone().prependTo(".project-wrap");
        $(".list-project:nth-child(1) .tour-info h1").text("카페루시아 copy");
    } else {}
}

function downProject() {
    $('.project-download').on('click', function () {
        $('.payment-popup').show();
    });

    $('.payment-popup .close_btn').on('click', function () {
        $('.payment-popup').hide();
    })
}
downProject();


$('.switch-pass').on('click', function(){
          if(isplay){
              $('.project-password').show()
          }else{
              $('.project-password').hide()
          }
          isplay = !isplay;
      });
