function mobileMenu(){
	var display = true;
        var nav = $('#nav_m');
        nav.hide();
        var cnt = 0;
        var isplay = false;
        // $('#nav_m').hide();
        $('#menu_btn').on("click",function(){
            $(this).toggleClass('open');
            if(!isplay){
                nav.fadeIn()
            }else{
                nav.fadeOut();
            }
            isplay = !isplay
        });
}
mobileMenu();

function pricingInfo(){
	$('.price-info').mouseover(function(){
		$(this).closest('li').find('div').show();
	});
	$('.price-info-pop').mouseleave(function(){
		$('.price-info-pop').hide();
	});	
}
pricingInfo();

function tabMenu(){
	$(function () {	
		tab('#tab',0);	
	});

	function tab(e, num){
	    var num = num || 0;
	    var menu = $(e).children();
	    var con = $(e+'_con').children();
	    var select = $(menu).eq(num);
	    var i = num;

	    select.addClass('on');
	    con.eq(num).show();

	    menu.click(function(){
	        if(select!==null){
	            select.removeClass("on");
	            con.eq(i).hide();
	        }

	        select = $(this);	
	        i = $(this).index();

	        select.addClass('on');
	        con.eq(i).show();
	    });
	}
}
tabMenu();



function init() {


	$('.main-contents img').css({bottom:'-50px', opacity:0});

    $(window).scroll( function(){
        $('.main-contents img').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'bottom':'0', opacity: 1},1000);
            }
            
        }); 

    });

}//init
init();


$("#top").on("click", function() {
            $("html, body").animate({scrollTop : 0}, 300);
            return false;
        });

        var scrollTop = $("#top");
        scrollTop.css("opacity","0");

        $(window).scroll(function() {
        
            var topPos = $(this).scrollTop();

            if (topPos > 100) {
                $(scrollTop).css("opacity", "1");
            } else {
                $(scrollTop).css("opacity", "0");
            }
        }); // scroll END


function registerPop(){

    $(".signupbtn").on("click", function(){

        $(".signupbtn .signupBtn").hide();
        $(".signupbtn .loadBtn").show();

        setTimeout(function(){
                $(".complete_wrap").show();
                $(".signupbtn .signupBtn").show();
                $(".signupbtn .loadBtn").css("display","none");
        }, 2000);

    }); 

    // $(".signupbtn").on("click", function(){
    //     $(".complete_wrap").show();
    // });

    $(".btn_wrap .save_btn").on("click", function(){

        $(".save_btn .saveBtn").hide();
        $(".save_btn .loadBtn").show();

        setTimeout(function(){
                $(".save_btn .saveBtn").show();
                $(".save_btn .loadBtn").css("display","none");
        }, 2000);

    });

  

    $(".folder_file .item").click(function (e) {
        var cb = $(this).find(":checkbox")[0];
        if (e.target != cb) cb.checked = !cb.checked;
        $(this).toggleClass("selected", cb.checked);
    });

}

registerPop();

function payPop(){

    $(".pro-plan-btn").on("click", function(){
        $(".pricing_popup, .plan1, .pricing_popup_box").show();
        $(".plan2").hide();
    });

    
    $(".enterprise-plan-btn").on("click", function(){
        $(".pricing_popup, .plan2, .pricing_popup_box").show();
        $(".plan1").hide();
    });
        
    
    $(".pop_up_close").on("click", function(){
        $(".pricing_popup").css("display","none");
    });

    $('.paid_btn').on("click", function(){
        $(".pricing_popup_box").hide();
        $('.auto_card_popup').show();
    });

    $('.popup-modal-close').on("click", function(){
        $('.auto_card_popup').hide();
        $(".pricing_popup").hide();
    })
        

}
payPop();

function contact_pop(){
    $('.contact_btn').on("click", function(){
        $('.contact_popup').show();
    });

    $('.close').on('click', function(){
        $('.contact_popup').hide();
    })
}
contact_pop();






