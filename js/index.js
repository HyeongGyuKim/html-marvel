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

    $('.main_slider').slick({
        centerMode : true,
        centerPadding : '60px',
        dots: false,
        // arrows:true,
        infinite: true,
        // prevArrow: '<button class="slide-arrow prev-arrow"></button>',
        // nextArrow: '<button class="slide-arrow next-arrow"></button>',
        autoplay: false,
        autoplaySpeed : 2500,
        speed: 300,
        slidesToShow: 3,
        adaptiveHeight: true,
        pauseOnHover: true, // 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
        // draggable : false 마우스로 드래그 가능 불가능,
    });

    $('.s4_top_bottom').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        // autoplay: true,
        autoplaySpeed : 2000,
        pauseOnHover: true,
        adaptiveHeight: true,
    });

})

