$(document).ready(function () {
    // 메뉴 애니메이션
    // $(".hamburger").click(function () {
    //     $(this).toggleClass("is-active");
    // });
    // $(".side_1").click(function () {
    //     $(".cross1").toggleClass("is-active");
    // });
    // $(".side_2").click(function () {
    //     $(".cross2").toggleClass("is-active");
    // });
    // $(".side_3").click(function () {
    //     $(".cross3").toggleClass("is-active");
    // });
    // $(".side_4").click(function () {
    //     $(".cross4").toggleClass("is-active");
    // });

    // 메뉴 햄버거 애니메이션 
    $(".hamburger").click(function () {
        $(this).toggleClass("is-active");
    });

    // GNB 애니메이션

    let menu_on_off = true;

    $(".hamburger").click(function () {
        if (menu_on_off) {
            $("#header").addClass("menu_on");
            menu_on_off = false;
        } else {
            $("#header").removeClass("menu_on");
            menu_on_off = true;
        }
    });

    $('.tabmenu-wrap .tab-nav').find('a').on('click', function(e) {
        var $this = $(this);
        var $all_tab_nav = $this.parents('.tab-nav').find('.nav');
        var $tab_contents = $this.parents('.tabmenu-wrap').find('.con-box');
        var id = $this.attr('href');

        e.preventDefault();
        $all_tab_nav.removeClass('on');
        $this.parent().addClass('on');
        $tab_contents.fadeOut();
        $(id).fadeIn();
        // $('.one-time').slick('setPosition');
    });

    $('.movieDrama_tabmenu-wrap .movieDrama_tab-nav').find('a').on('click', function(e) {
        var $this = $(this);
        var $all_tab_nav = $this.parents('.movieDrama_tab-nav').find('.nav');
        var $tab_contents = $this.parents('.movieDrama_tabmenu-wrap').find('.con-box');
        var id = $this.attr('href');

        e.preventDefault();
        $all_tab_nav.removeClass('on');
        $this.parent().addClass('on');
        $tab_contents.fadeOut();
        $(id).fadeIn();
        $('.slider-for').slick('setPosition');
        $('.slider-nav').slick('setPosition');
    });

})

$(document).ready( function() {


    $("#header").load("../include/header1.html");
    $("#subMain").load("../include/subTitle10.html");
    $("#footer").load("../include/footer1.html");

    //~이렇게 한줄만 해주면 알아서 contents에 testContents.html파일을 넣어 준다.


    $('.main_slider').slick({
        centerMode : true,
        centerPadding : '60px',
        dots: true,
        // arrows:true,
        infinite: true,
        // prevArrow: '<button class="slide-arrow prev-arrow"></button>',
        // nextArrow: '<button class="slide-arrow next-arrow"></button>',
        autoplay: false,
        autoplaySpeed : 2000,
        speed: 300,
        slidesToShow: 3,
        adaptiveHeight: true,
        pauseOnHover: true, // 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
        // draggable : false 마우스로 드래그 가능 불가능,
    });

});