(function( $ ) {
    'use strict';

    /*-----------------------------------
    One Page Nav
    -----------------------------------*/
    if ($('#one-page-nav').length > 0) {
        $('#one-page-nav').onePageNav({
            currentClass: 'active',
            filter: ':not(#search-toggle):not(.pages)'
        });
    }

    /*-----------------------------------
    Header Search Toggle 
    -----------------------------------*/
    $('#search-toggle, #search-toggle-mobile').on('click', function (st) {
        st.preventDefault();
        $('#header-search').slideToggle();
        $(this).children('.fa').toggleClass('fa-search fa-close');
    });

    /*-----------------------------------
    Mobile Navigation
    -----------------------------------*/
    function mobileNav() {
        $('.navbar-nav .dropdown').unbind('click');
        if ($(window).width() < 992) {
            $('.navbar-toggle').slideDown();
            $('.navbar-collapse').slideUp();

            $('body').on('click', function (e) {
                if ($('.navbar-collapse').is(':visible') && $('.navbar-toggle').is(':visible') && !$(e.target).is(".dropdown")) {
                    $('.navbar-collapse').collapse('hide');
                }
            });

            $('.navbar-nav .dropdown').on('click', function () {
                $(this).children('.dropdown-menu').slideToggle();
                $(this).toggleClass('submenu-opened');
            });
        } else {
            $('.navbar-toggle').slideUp();
            $('.navbar-collapse').slideDown();
        }
    }

    mobileNav();

    /*-----------------------------------
    CountTo 
    -----------------------------------*/
    function animateCountTo(ct) {
        if ($.fn.visible && $(ct).visible() && !$(ct).hasClass('animated')) {
            $(ct).countTo({
                speed: 2000
            });
            $(ct).addClass('animated');
        }
    }

    function initCountTo() {
        var counter = $('.count');
        counter.each(function () {
            animateCountTo(this);
        });
    }

    initCountTo();




    /*-----------------------------------
    Commingsoon Height
    -----------------------------------*/
    function commingsoonHeight() {
        if ($('#commingsoon-wrap').length > 0) {
            $('#commingsoon-wrap').css('height', $(window).height());
        }
    }

    commingsoonHeight();

    /*-----------------------------------
    Contact Form
    -----------------------------------*/
    // Function for email address validation
    function isValidEmail(emailAddress) {
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

        return pattern.test(emailAddress);

    }
    $("#contactForm").on('submit', function (e) {
        e.preventDefault();
        var data = {
            name: $("#name").val() || 'Username',
            phone: $("#phone").val(),
            message: $("#whenCall").val() || ''
        };
        console.log(data);

        sendForm(data, 'contactForm');
        return false;
    });

    $("#sendRegistrationForm").on('click', function (e) {
        e.preventDefault();
        var data = {
            name: $("#modalName").val() || 'Username',
            phone: $("#modalPhone").val()||'phone',
            message: $("#modalWhenCall").val() || 'message'
        };
        console.log(data);

        sendForm(data, 'registrationForm');
        return false;
    });

    $("#subscribeForm").on('submit', function (e) {
        e.preventDefault();
        var data = {
            name: 'Username',
            phone: $("#phoneOnly").val(),
            message: ''
        };
        console.log(data);

        sendForm(data, 'subscribeForm');
        return false;
    });

    $("#bannerForm").on('submit', function (e) {
        e.preventDefault();

        var data = {
            name: $('#bannerName').val(),
            phone: $("#bannerPhone").val(),
            message: ''
        };
        console.log(data);

        sendForm(data, 'bannerForm');
        return false;
    });




    function sendForm (data, id) {
      var btn = $(`#${id}`).find('button');
      var btnText = btn.find('span').text();

      console.log(btnText)

      disableButton(btn);

      if ((data['phone']) && (data['name'].length > 1)) {
        $.ajax({
          type: "POST",
          url: "ajax.php",
          data: data,
          success: function (data) {
            console.log(data);

            $(`#${id}`)[0].reset();

            enableButton(btn, btnText);

            showSuccessMsg();
          },
          error: function (jqXHR, textStatus, errorThrown) {
            console.error(jqXHR, textStatus, errorThrown);
            showErrorMsg();
            enableButton(btn, btnText);
          }
        });
      } else {
        showErrorMsg();
      }
    }

    function showSuccessMsg () {
      iziToast.success({
        title: 'Отлично!',
        message: 'Ваша заявка успешно отправлена.'
      });
    }

    function showErrorMsg () {
      iziToast.error({
        title: 'Упсс!',
        message: 'Что-то пошло не так, попробуйте еще раз.'
      });
    }


    /*-----------------------------------
    Phone mask
    -----------------------------------*/
    $("input[name='phone']").mask("+7(999)999-99-99");

    /*-----------------------------------
    Magnific Popup
    -----------------------------------*/
    $('.image-large').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    $('.play-video').magnificPopup({
        type: 'iframe'
    });
    $.extend(true, $.magnificPopup.defaults, {
        iframe: {
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: 'v=',
                    src: 'http://www.youtube.com/embed/%id%?autoplay=1'
                }
            }
        }
    });

    /*-----------------------------------
    Testimonial Carousel
    -----------------------------------*/
    // $('.testimonials-for').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: false,
    //     fade: true,
    //     asNavFor: '.testimonial-nav',
    //     autoplay: true,
    // });
    // $('.testimonial-nav').slick({
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     asNavFor: '.testimonials-for',
    //     dots: false,
    //     centerMode: true,
    //     focusOnSelect: true,
    //     prevArrow: '<button class=\"slick-prev\"><i class=\"fa fa-angle-left\"></i></button>',
    //     nextArrow: '<button class=\"slick-next\"><i class=\"fa fa-angle-right\"></i></button>',
    //     responsive: [
    //         {
    //             breakpoint: 991,
    //             settings: {
    //                 slidesToShow: 3
    //             }
			// },
    //         {
    //             breakpoint: 480,
    //             settings: {
    //                 slidesToShow: 1
    //             }
			// }
    // ]
    // });

    /*-----------------------------------
    Case Filter
    -----------------------------------*/
    if ($.fn.imagesLoaded && $('#cases').length > 0) {
        var $grid = $('#cases').isotope({
            itemSelector: '.grid-item',
        });

        $('.case-filter').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
            $('.case-filter button').removeClass('active');
            $(this).addClass('active');
        });
    }

    /*-----------------------------------
    Result chart
    -----------------------------------*/
    if ($('#result-chart').length > 0) {
        var ctx = $('#result-chart');
        var dataValue = ctx.data('value');
        var dataBg = ctx.data('bg');
        var dataLabel = ctx.data('label');

        var resultChart = new Chart(ctx, {
            type: 'polarArea',
            data: {
                datasets: [{
                    data: dataValue,
                    backgroundColor: dataBg,
                    label: 'My dataset' // for legend
            }],
                labels: dataLabel
            },
            options: {
                responsive: true,
                legend: {
                    position: 'bottom',
                },
                scale: {
                    ticks: {
                        beginAtZero: true
                    },
                    reverse: false
                },
                animation: {
                    animateRotate: true,
                    animateScale: true
                }
            }
        });
    }

    /*-----------------------------------
    Progess Bar
    -----------------------------------*/
    function animateProgressBar(pb) {
        if ($.fn.visible && $(pb).visible() && !$(pb).hasClass('animated')) {
            $(pb).css('width', $(pb).attr('aria-valuenow') + '%');
            $(pb).addClass('animated');
        }
    }

    function initProgressBar() {
        var progressBar = $('.progress-bar');
        progressBar.each(function () {
            animateProgressBar(this);
        });
    }

    initProgressBar();

    /*-----------------------------------
    Go to top
    -----------------------------------*/
    $('.scrollup').on('click',function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });


    /*-----------------------------------
    Window Scroll
    -----------------------------------*/
    $(window).on('scroll', function () {
        initCountTo();
        initProgressBar();

        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $(window).on('resize orientationchange', function () {
        mobileNav();
        commingsoonHeight();
    });
 /*-----------------------------------
    IziModal
    -----------------------------------*/
        $("#modal").iziModal();
        $(document).on('click', '.modal_open', function (event) {
            event.preventDefault();
               $('.iziModal-overlay').css("left","0");
               $('#modal').css("left","0");
            // $('#modal').iziModal('setZindex', 99999);
            // $('#modal').iziModal('open', { zindex: 99999 });
            $('#modal').iziModal('open');
        });

        $("#modalTimer").iziModal();

        $(document).on('click', '.gift', () => {
          $("#modalTimer").iziModal('open');
        });


  if (window.innerWidth <= 480) {
      $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items: 1
      });
  }

  AOS.init();


})(jQuery);