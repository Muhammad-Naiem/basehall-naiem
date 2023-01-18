(function ($) {
    $(function () {



        // Phone nav click function
        $('.hamburger-btn, .home-hamburger-btn').click(function () {
            $("body").toggleClass("navShown");
        });

        $('.menu-close').click(function () {
            $("body").removeClass("navShown");
        });

        $('.contact-modal').click(function (e) {
            e.preventDefault();
            $("body").toggleClass("contactShown")
        });
        $('.contact-menu-close').click(function () {
            $("body").removeClass("contactShown")
        });

        $('.order-modal-trigger').click(function (e) {
            e.preventDefault();
            $("body").toggleClass("orderShown");
        });
        $('.order-modal-close').click(function () {
            $("body").removeClass("orderShown");
        });

        $('.legals-modal').click(function (e) {
            $("body").toggleClass("legalsShown");
            e.preventDefault();
        });
        $('.legals-modal-close').click(function () {
            $("body").removeClass("legalsShown");
        });
        
        
        $('.filter-trigger-btn').click(function () {
            $(".select-flavour-modal-wrap").fadeIn()
            $(".select-flavour-modal-wrap").addClass("flavour-modal-show");
        });
        $('.select-flavour-modal-wrap, .select-flavour-btns a').click(function (e) {
            e.preventDefault()
            $(".select-flavour-modal-wrap").removeClass("flavour-modal-show");
            $(".select-flavour-modal-wrap").fadeOut()
        });
        $('.select-flavour-modal-inner').click(function (e) {
            e.stopPropagation()
        });
        
        $('.lets-eat').click(function () {
            $(".lets-eat-popup").fadeIn()
            $(".lets-eat-popup").addClass("lets-eat-popup-show");
        });
        $('.lets-eat-popup, .lets-eat-popup-close').click(function (e) {
            e.preventDefault()
            $(".lets-eat-popup").removeClass("lets-eat-popup-show");
            $(".lets-eat-popup").fadeOut()
        });
        $('.lets-eat-popup-main').click(function (e) {
            e.stopPropagation()
        });
        
        $('.career-vacanies-content a').click(function (e) {
            e.preventDefault()
            $(".career-popup-wrap").fadeIn()
            $(".career-popup-wrap").addClass("career-popup-show");
        });
        $('.career-popup-wrap, .btn-close').click(function (e) {
            e.preventDefault()
            $(".career-popup-wrap").removeClass("career-popup-show");
            $(".career-popup-wrap").fadeOut()
        });
        $('.career-popup-main').click(function (e) {
            e.stopPropagation()
        });
        
        $('.space-filter-trigger').click(function () {
            $(".space-filter-popup").fadeIn()
            $(".space-filter-popup").addClass("space-filter-popup-show");
        });
        $('.space-filter-popup, .space-filter-close a').click(function (e) {
            e.preventDefault()
            $(".space-filter-popup").removeClass("space-filter-popup-show");
            $(".space-filter-popup").fadeOut()
        });
        $('.space-filter-popup-main').click(function (e) {
            e.stopPropagation()
        });
        
        
        $('.contact-popup-trigger').click(function () {
            $(".contact-popup-wrap").fadeIn()
            $(".contact-popup-wrap").addClass("contact-popup-show");
        });
        $('.contact-popup-wrap, .contact-popup-btn a').click(function (e) {
            e.preventDefault()
            $(".contact-popup-wrap").removeClass("contact-popup-show");
            $(".contact-popup-wrap").fadeOut()
        });
        $('.contact-popup-main').click(function (e) {
            e.stopPropagation()
        });
        
        $('.events-filter-trigger, .events-popup-trigger a').click(function (e) {
            e.preventDefault()
            $(".events-popup").fadeIn()
            $(".events-popup").addClass("events-popup-show");
        });
        $('.events-popup, .event-filter-btns a').click(function (e) {
            e.preventDefault()
            $(".events-popup").removeClass("events-popup-show");
            $(".events-popup").fadeOut()
        });
        $('.events-popup-main').click(function (e) {
            e.stopPropagation()
        });
        
        $('.stories-filter-trigger').click(function (e) {
            e.preventDefault()
            $(".stories-popup").fadeIn()
            $(".stories-popup").addClass("stories-popup-show");
        });
        $('.stories-popup, .stories-filter-btns a').click(function (e) {
            e.preventDefault()
            $(".stories-popup").removeClass("stories-popup-show");
            $(".stories-popup").fadeOut()
        });
        $('.stories-popup-main').click(function (e) {
            e.stopPropagation()
        });

        if ($('.marquee-slider-wrap').length) {
            $('.marquee-slider-wrap').marquee({
                direction: 'left',
                duration: 20000,
                gap: 0,
                delayBeforeStart: 0,
                duplicated: true,
                startVisible: true
            });
        }

        if ($('.vendor-highlight-wrap').length) {
            $('.vendor-highlight-wrap').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                mobileFirst: true,
                arrows: false,
                dots: false,
                infinite: false,
                responsive: [
                    {
                        breakpoint: 991,
                        settings: 'unslick'
            },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 2,
                        }
      }
        ]
            });

            $(window).on('resize', function () {
                $('.vendor-highlight-wrap').slick('resize');
            });

        }

        if ($('.explore-more-item-wrap').length) {
            $('.explore-more-item-wrap').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                mobileFirst: true,
                arrows: false,
                dots: false,
                infinite: false,
                responsive: [
                    {
                        breakpoint: 991,
                        settings: 'unslick'
            },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                        }
      }
        ]
            });

            $(window).on('resize', function () {
                $('.explore-more-item-wrap').slick('resize');
            });

        }
        if ($('.vendor-heighlight-thumb-wrap').length) {
            $('.vendor-heighlight-thumb-wrap').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                mobileFirst: true,
                arrows: false,
                dots: true,
                infinite: false,
                responsive: [
                    {
                        breakpoint: 991,
                        settings: 'unslick'
            },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                        }
      }
        ]
            });

            $(window).on('resize', function () {
                $('.vendor-heighlight-thumb-wrap').slick('resize');
            });

        }
        if ($('.related-item-wrap').length) {
            $('.related-item-wrap').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                mobileFirst: true,
                arrows: false,
                dots: false,
                infinite: false,
                responsive: [
                    {
                        breakpoint: 991,
                        settings: 'unslick'
            },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                        }
      }
        ]
            });

            $(window).on('resize', function () {
                $('.related-item-wrap').slick('resize');
            });

        }

        if ($('.our-space-item-wrap').length) {
            $('.our-space-item-wrap').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                mobileFirst: true,
                arrows: false,
                dots: false,
                infinite: false,
                responsive: [
                    {
                        breakpoint: 480,
                        settings: 'unslick'
            }
        ]
            });

            $(window).on('resize', function () {
                $('.our-space-item-wrap').slick('resize');
            });

        }

        if ($('.first-thumb').length) {
            $('.first-thumb').slick({
                arrows: false,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 1800,
                navigation: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                centerMode: false,
                focusOnSelect: false,
                fade: true,
            });
            $(window).on('resize', function () {
                $('.first-thumb').slick('resize');
            });
        }

        if ($('.stories-single-slider-wrap').length) {
            $('.stories-single-slider-wrap').slick({
                arrows: false,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 1800,
                navigation: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                centerMode: false,
                focusOnSelect: false,
            });
            $(window).on('resize', function () {
                $('.stories-single-slider-wrap').slick('resize');
            });
        }

        if ($('.stories-slider-wrap').length) {
            $('.stories-slider-wrap').slick({
                arrows: false,
                infinite: true,
                autoplay: false,
                autoplaySpeed: 1800,
                navigation: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                centerMode: false,
                focusOnSelect: false,
            });
            $(window).on('resize', function () {
                $('.stories-slider-wrap').slick('resize');
            });
        }
        if ($('.second-thumb').length) {
            setTimeout(function () {
                $('.second-thumb').slick({
                    arrows: false,
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 1800,
                    navigation: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    centerMode: false,
                    focusOnSelect: false,
                    fade: true,
                });
                $(window).on('resize', function () {
                    $('.second-thumb').slick('resize');

                });
            }, 700)
        }
        if ($('.third-thumb').length) {
            setTimeout(function () {
                $('.third-thumb').slick({
                    arrows: false,
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 1800,
                    navigation: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    centerMode: false,
                    focusOnSelect: false,
                    fade: true,
                });
                $(window).on('resize', function () {
                    $('.third-thumb').slick('resize');

                });
            }, 1200)

        }
        if ($('.home-content-item-slider').length) {
            $('.home-content-item-slider').slick({
                arrows: false,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 1400,
                navigation: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                centerMode: false,
                focusOnSelect: false,
                fade: true,
            });
            $(window).on('resize', function () {
                $('.home-content-item-slider').slick('resize');

            });
        }
        if ($('.event-slider-item-wrap').length) {
            $('.event-slider-item-wrap').slick({
                arrows: false,
                infinite: true,
                autoplay: false,
                autoplaySpeed: 1400,
                navigation: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                centerMode: false,
                focusOnSelect: false,
            });
            $(window).on('resize', function () {
                $('.event-slider-item-wrap').slick('resize');

            });
        }
        if ($('.fourth-thumb').length) {
            setTimeout(function () {
                $('.fourth-thumb').slick({
                    arrows: false,
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 1800,
                    navigation: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    centerMode: false,
                    focusOnSelect: false,
                    fade: true,
                });
                $(window).on('resize', function () {
                    $('.fourth-thumb').slick('resize');

                });
            }, 200)
        }

        $(".footer-bottom-item").each(function () {
            var $this = $(this);
            $this.find(" > h5").on("click touch", function () {
                $(".footer-bottom-item").removeClass("active")
                $(".footer-accordion-content").slideUp();
                if ($this.find(".footer-accordion-content:visible").length) {
                    $(".footer-bottom-item").removeClass("active")
                    $(".footer-accordion-content").slideUp();
                } else {
                    $this.addClass("active")
                    $(".footer-accordion-content").slideUp();
                    $this.find(" > .footer-accordion-content").slideDown();
                }
            })
        })

        if ($(window).width() > 600) {  
            $('.legal-privacy-inner aside ul li').eq(0).addClass('page-active')
            $('.legal-privacy-content-wrap .legal-privacy-content').eq(0).show()
            $('.legal-privacy-inner aside ul li').click(function () {
                $('.legal-privacy-inner aside ul li').removeClass('page-active');
                $(this).addClass('page-active');
                $('.legal-privacy-content').hide();

                var activeTab = $(this).find('> a').attr('href');
                $(activeTab).fadeIn()
                return false;
            });
        }
        if ($(window).width() < 601) {
            $(".legal-privacy-content").eq(0).show();
            $(".legal-privacy-inner aside ul li").each(function (e) {
                var $this = $(this);
                $this.find(" > a").on("click touch", function () {
                    $(".legal-privacy-inner aside ul li").removeClass("page-active")
                    $(".legal-privacy-content").slideUp();
                    if ($this.find(".legal-privacy-content:visible").length) {
                        $(".legal-privacy-inner aside ul li").removeClass("page-active")
                        $(".legal-privacy-content").slideUp();
                    } else {
                        $this.addClass("page-active")
                        $(".legal-privacy-content").slideUp();
                        $this.find(" > .legal-privacy-content").slideDown();
                    }
                })
            })

        }
        
        if($('.event-page').length){
            $('body').addClass('bg-concrete')
        }
        
        
    }) // End ready function.





})(jQuery)