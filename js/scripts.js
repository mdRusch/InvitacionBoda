$(document).ready(function () {

    /***************** Waypoints ******************/

    $('.wp1').waypoint(function () {
        $('.wp1').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp2').waypoint(function () {
        $('.wp2').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });
    $('.wp3').waypoint(function () {
        $('.wp3').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp4').waypoint(function () {
        $('.wp4').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });
    $('.wp5').waypoint(function () {
        $('.wp5').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp6').waypoint(function () {
        $('.wp6').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });
    $('.wp7').waypoint(function () {
        $('.wp7').addClass('animated fadeInUp');
    }, {
        offset: '75%'
    });
    $('.wp8').waypoint(function () {
        $('.wp8').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp9').waypoint(function () {
        $('.wp9').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });

    /***************** Initiate Flexslider ******************/
    $('.flexslider').flexslider({
        animation: "slide"
    });

    /***************** Initiate Fancybox ******************/

    $('.single_image').fancybox({
        padding: 4
    });

    $('.fancybox').fancybox({
        padding: 4,
        width: 1000,
        height: 800
    });

    /***************** Tooltips ******************/
    $('[data-toggle="tooltip"]').tooltip();

    /***************** Nav Transformicon ******************/

    /* When user clicks the Icon */
    $('.nav-toggle').click(function (event) {
        event.preventDefault();
        $(this).toggleClass('active');
        $('.header-nav').toggleClass('open');      // mostrar/ocultar contenedor del menú
        $('.header-nav nav').toggleClass('open');  // mostrar/ocultar lista de opciones
      });
      
      $('.header-nav li a').click(function () {
        $('.nav-toggle').removeClass('active');
        $('.header-nav').removeClass('open');
        $('.header-nav nav').removeClass('open');
      });

    /***************** Header BG Scroll ******************/

    $(function () {
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();

            if (scroll >= 20) {
                $('section.navigation').addClass('fixed');
                $('header').css({
                    "border-bottom": "none",
                    "padding": "35px 0"
                });
                $('header .member-actions').css({
                    "top": "26px",
                });
                $('header .navicon').css({
                    "top": "34px",
                });
            } else {
                $('section.navigation').removeClass('fixed');
                $('header').css({
                    "border-bottom": "solid 1px rgba(255, 255, 255, 0.2)",
                    "padding": "50px 0"
                });
                $('header .member-actions').css({
                    "top": "41px",
                });
                $('header .navicon').css({
                    "top": "48px",
                });
            }
        });
    });
    /***************** Smooth Scrolling ******************/

    $(function () {

        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 90
                    }, 2000);
                    return false;
                }
            }
        });

    });


    /********************** Toggle Map Content **********************/
    
    $('.btn-show-content').on('click', function () {
        const $wrapper = $(this).closest('.map-content-wrapper');
        $wrapper.find('.map-content').removeClass('toggle-map-content');
        $(this).addClass('toggle-map-content');
    });
    
    $('.btn-show-map').on('click', function () {
        const $wrapper = $(this).closest('.map-content-wrapper');
        $wrapper.find('.map-content').addClass('toggle-map-content');
        $wrapper.find('.btn-show-content').removeClass('toggle-map-content');
    });
    /********************** Add to Calendar **********************/
    var myCalendar = createCalendar({
        options: {
            class: '',
            // You can pass an ID. If you don't, one will be generated for you
            id: ''
        },
        data: {
            // Event title
            title: " Matrimonio Valen & José ",

            // Event start date
            start: new Date('Sept 14, 2019 10:00'),

            // Event duration (IN MINUTES)
            // duration: 120,

            // You can also choose to set an end time
            // If an end time is set, this will take precedence over duration
            end: new Date('Sept 14, 2019 10:00'),

            // Event Address
            address: 'Casa Blanca',

            // Event Description
            description: "No podemos esperar para celebrar junto a ti!."
        }
    });

    $('#add-to-cal').html(myCalendar);


    /********************** RSVP **********************/
    $('#rsvp-form').on('submit', function (e) {
        e.preventDefault();
        var data = $(this).serialize();

        $('#alert-wrapper').html(alert_markup('info', '<strong>Sólo un momento!</strong> Estamos verificando tus detalles.'));

            $.post('https://script.google.com/macros/s/AKfycbzdl4eVM61VKat9d5IkMTW4p6KJSp87PyTa8a7KcNPMt6eOpeWL2s2z5C1lidHi9WF0CA/exec', data)
                .done(function (data) {
                    console.log(data);
                    $('#alert-wrapper').html('');
                    $('#rsvp-modal').modal('show');
                })
                .fail(function (data) {
                    console.log(data);
                    $('#alert-wrapper').html(alert_markup('danger', '<strong>Lo sentimos!</strong> Hubo un problema con el servidor. '));
                });

    });

});

// alert_markup
function alert_markup(alert_type, msg) {
    return '<div class="alert alert-' + alert_type + '" role="alert">' + msg + '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span>&times;</span></button></div>';
}
/********************** Extras **********************/

// Google map
/* function initMap() {
    var itc_kol = {lat: 22.5932759, lng: 88.27027720000001};
    var map = new google.maps.Map(document.getElementById('map-canvas'), {
        zoom: 15,
        center: itc_kol,
        scrollwheel: false
    });

    var marker = new google.maps.Marker({
        position: itc_kol,
        map: map
    });
}

function initBBSRMap() {
    var la_fiesta = {lat: 20.305826, lng: 85.85480189999998};
    var map = new google.maps.Map(document.getElementById('map-canvas'), {
        zoom: 15,
        center: la_fiesta,
        scrollwheel: false
    });

    var marker = new google.maps.Marker({
        position: la_fiesta,
        map: map
    });
} */

// alert_markup


document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("btnContribuir");
    const box = document.getElementById("cbuBox");

    btn.addEventListener("click", function () {
      const isVisible = box.style.display === "block";

      if (isVisible) {
        // Ocultar con animación suave
        box.style.opacity = 0;
        setTimeout(() => {
          box.style.display = "none";
        }, 300);
        btn.textContent = "Contribuir";
        btn.classList.remove("active");
      } else {
        // Mostrar con animación suave
        box.style.display = "block";
        setTimeout(() => {
          box.style.opacity = 1;
        }, 10);
        btn.textContent = "Ocultar";
        btn.classList.add("active");
      }
    });
  });

