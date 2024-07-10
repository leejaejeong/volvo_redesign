// ! header
$(window).scroll(function(){

    let h_offset = $('header').offset().top;

    if($(window).scrollTop() === 0){
        $('header').removeClass('back_change');
    }else if($(window).scrollTop() >= h_offset){
        $('header').addClass('back_change');
    }
})

// ! side menu
$(function(){
    $(document).ready(function(){
        $('.side_menu .close_btn .img_box img').click(function(){
            $('.side_menu').removeClass('show');
            $('.side_menu').addClass('hide');
        })
    
        $('.gnb ul li').click(function(){
            $('.side_menu').removeClass('hide');
            $('.side_menu').removeClass('show');
            $('.side_menu').addClass('show');
            $('.side_menu_tab li').removeClass('active');
            $('.side_menu_tab li').eq($(this).index()).addClass('active');
            $('.side_menu_contents > div').eq($(this).index()).show().siblings('.side_menu_contents > div').hide();
        })

        $('.side_menu_btn img').click(function(){
            $('.side_menu').removeClass('show');
            $('.side_menu').addClass('show');
            $('.side_menu_tab li').removeClass('active');
            $('.side_menu_tab li').eq(0).addClass('active');
        })

        $('.models_contents > .tab_list li').click(function(){
            $('.models_contents > .tab_list li').removeClass('active');
            $(this).addClass('active');
            $('.models_contents > .tab_contents_box > div').eq($(this).index()).fadeIn(300).siblings('.models_contents > .tab_contents_box > div').hide();
        }).filter(':eq(0)').click();

        $('.side_menu_tab li').click(function(){
            $('.side_menu_tab li').removeClass('active');
            $(this).addClass('active');
            $('.side_menu_contents > div').eq($(this).index()).fadeIn(300).siblings('.side_menu_contents > div').hide();
        })
    })
})

// ! main page > why volvo
$('.why_swiper_tab .swiper-slide').click(function(){
    $('.why_swiper_tab .swiper-slide').removeClass('active');
    $(this).addClass('active');
})