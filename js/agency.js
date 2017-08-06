// Agency Theme JavaScript

(function($) {
    "use strict"; // Start of use strict
    window.fnames = new Array();
    window.ftypes = new Array();
    fnames[0]='EMAIL';
    ftypes[0]='email';
    fnames[1]='FNAME';
    ftypes[1]='text';
    fnames[2]='LNAME';
    ftypes[2]='text';
    fnames[3]='BIRTHDAY';
    ftypes[3]='birthday';

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })
    
    $.extend($.validator.messages, {
       required: "Campo obbligatorio.",
       remote: "Controlla questo campo.",
       email: "Inserisci un indirizzo email valido.",
       url: "Inserisci un indirizzo web valido.",
       date: "Inserisci una data valida.",
       dateISO: "Inserisci una data valida (ISO).",
       number: "Inserisci un numero valido.",
       digits: "Inserisci solo numeri.",
       creditcard: "Inserisci un numero di carta di credito valido.",
       equalTo: "Il valore non corrisponde.",
       accept: "Inserisci un valore con un&apos;estensione valida.",
       maxlength: $.validator.format("Non inserire pi&ugrave; di {0} caratteri."),
       minlength: $.validator.format("Inserisci almeno {0} caratteri."),
       rangelength: $.validator.format("Inserisci un valore compreso tra {0} e {1} caratteri."),
       range: $.validator.format("Inserisci un valore compreso tra {0} e {1}."),
       max: $.validator.format("Inserisci un valore minore o uguale a {0}."),
       min: $.validator.format("Inserisci un valore maggiore o uguale a {0}.")
});

}(jQuery));
var $mcj = jQuery.noConflict(true);
 // End of use strict
 
 