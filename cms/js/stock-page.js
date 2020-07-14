function stock_submit(){
    $('.stock-submit-btn').on("click", function(){
        $('.stock-modal-container, .stock-modal1').show();
    });
    $('.stock-modal-head img').on("click", function(){
        $('.stock-modal-container, .stock-modal1, .stock-modal2, .stock-modal3, .stock-modal4, .stock-modal5').hide();
    });
    $('.prev1').on('click', function(){
        $('.stock-modal2').hide();
        $('.stock-modal1').show();
    });
    $('.prev2').on('click', function(){
        $('.stock-modal3').hide();
        $('.stock-modal2').show();
    });
    $('.prev3').on('click', function(){
        $('.stock-modal4').hide();
        $('.stock-modal3').show();
    });
    $('.prev4').on('click', function(){
        $('.stock-modal5').hide();
        $('.stock-modal4').show();
    });
    $('.next-btn').on('click', function(){
        $('.stock-modal1').hide();
        $('.stock-modal2').show();
    });
    $('.next1').on('click', function(){
        $('.stock-modal2').hide();
        $('.stock-modal3').show();
    });
    $('.next2').on('click', function(){
        $('.stock-modal3').hide();
        $('.stock-modal4').show();
    });
    $('.next3').on('click', function(){
        $('.stock-modal4').hide();
        $('.stock-modal5').show();
    });

}
stock_submit();


function stock_item(){

    var isplay = true;

    $('.pano-item').on('click', function(){

        $('.pano-checkbox').css('border','1px solid #fff');
        $('.checkbox').hide();

        $(this).children('.pano-checkbox').css('border','1px solid #00aeef');
        $(this).find('.checkbox').show();
    })

    $('.stock-tour-items').on("click", function(){
        $(this).parent().children('.stock-pano-list').slideToggle();
        if(isplay){
            $(this).children('.pano-btn').children('img').css({transform:"rotate(180deg)"},3000);
        }else{
            $(this).children('.pano-btn').children('img').css({transform:"rotate(0)"},3000);
        }
        isplay = !isplay;        
    });
}
stock_item();


function stockEdit(){
    $('.mult-edit-button').on('click', function(){
        $('.mult-edit-btn').hide();
        $('.multi-edit-list').show();
    });
    
    $('.multi-close').on('click', function(){
        $('.mult-edit-btn').show();
        $('.multi-edit-list').hide();  
    });
}
stockEdit();

function submissionPop(){
    $('.edit-popup-container, .edit-popup1').show();
    $('.edit-popup .edit-pop-txt').css('padding-top','78px');
}
function removePop(){
    $('.edit-popup-container, .edit-popup2').show();
    $('.edit-popup .edit-pop-txt').css('padding-top','77px');
}
function discontinuedPop(){
    $('.edit-popup-container, .edit-popup3').show();
    $('.edit-popup .edit-pop-txt').css('padding-top','54px');
}

function stockPopClose(){
    $('.close-btn').on('click', function(){
        $('.edit-popup-container, .edit-popup2, .edit-popup2, .edit-popup3').hide();
    });
}
stockPopClose();





