$(document).ready(function() {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 350;
            const sectionBottom = sectionTop+ section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        })

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });


    ScrollReveal().reveal('.main', {
        origin: 'right',
        duration: 3000,
        distance: '20%'
    })

    ScrollReveal().reveal('.itens-Tenda', {
        origin: 'left',
        duration: 4000,
        distance: '20%'
    });

    ScrollReveal().reveal('#compra-tenda', {
        origin: 'top',
        duration: 4000,
        distance: '50%'
    });


});