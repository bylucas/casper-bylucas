
jQuery(document).ready(function ($) {

$body              = $('body'),
$mainHeader        = $('#masthead'),
$offcanvasToggle   = $('.offcanvas-toggle'),
$offcanvasMenu     = $('#offcanvas-menu'),
$searchToggle      = $('.search-toggle'),
$searchMenu        = $('#search-menu'),
 lastScrollTop     = 0,
 timer             = 800;


// Wait for window load
  setTimeout(function(){
    $body.addClass('loaded');
  }, 1000);

 $(window).scroll(function(event){
            if(timer) {
                window.clearTimeout(timer);
            }

            timer = window.setTimeout(function() {
              var st = $(this).scrollTop();
              if (st > lastScrollTop){
                // Scroll down
                if (st >= 10) {
                  $mainHeader.removeClass('active-header dark');
                }
              } else {
                // Scroll up
                if (st <= 200) {
                  $mainHeader.removeClass('dark').addClass('active-header');
                } else {
                  $mainHeader.addClass('active-header dark');
                }
              }
              lastScrollTop = st;
            }, 20);
          });

////////////////////////////////////////////////

$offcanvasToggle.click( function(e) {
            // Remove default action
              e.preventDefault();
            // Toggle open/close classes
              if ($body.hasClass('search-open')){
                $body.removeClass('search-open');
                $searchMenu.fadeOut(300);
                $offcanvasMenu.delay(300).fadeToggle();
              } else {
                $offcanvasMenu.fadeToggle(300);
              }
              $body.toggleClass('offcanvas-open');
              $mainHeader.toggleClass('remove-dark');
               $mainHeader.addClass('active-header');

          });

///

 $searchToggle.click( function(e) {
            // Remove default action
              e.preventDefault();
            // Toggle open/close classes
              if ($body.hasClass('offcanvas-open')){
                $body.removeClass('offcanvas-open');
                $offcanvasMenu.fadeOut(300);
                $searchMenu.delay(300).fadeToggle();
              } else {
                $searchMenu.fadeToggle(300);
                $('input#s').focus();
              }
              $body.toggleClass('search-open');
               $mainHeader.toggleClass('remove-dark');
               $mainHeader.addClass('active-header');

          });

    // Back to top
    $(window).scroll(function() {
  var backToTopButton = $(".back-to-top");
  if ($(window).scrollTop() >= 200) {
    backToTopButton.css("bottom", "0px");
  } else {
    backToTopButton.attr('style', '');
  }
  backToTopButton.click(function() {
    $('body,html').stop().animate({
      scrollTop: 0
    }, 1000);
  });
  return false;
});

 //Menu
   $(function() {
  var Accordion = function(el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    // Variables privadas
    var links = this.el.find('.link');
    // Evento
    links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
  }

  Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el;
      $this = $(this),
      $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('open');

    if (!e.data.multiple) {
      $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
    };
  } 

  var accordion = new Accordion($('#accordion'), false);
});

    /////////////////////

    $(".accordion-tabs-minimal").each(function(i){$(this).children("li").first().children("a").addClass("is-active").next().addClass("is-open").show()}),$(".accordion-tabs-minimal").on("click","li > a.tab-link",function(i){if($(this).hasClass("is-active"))i.preventDefault();else{i.preventDefault();var s=$(this).closest(".accordion-tabs-minimal");s.find(".is-open").removeClass("is-open").hide(),$(this).next().toggleClass("is-open").toggle(),s.find(".is-active").removeClass("is-active"),$(this).addClass("is-active")}})

$(".md-input").focus(function() {
  $(this).parent().addClass("is-active is-completed");
});

$(".md-input").focusout(function() {
  if ($(this).val() === "") {
    $(this).parent().removeClass("is-completed");
  }
  $(this).parent().removeClass("is-active");
});

//////////////////
var searchField = $("#search-field").ghostHunter({
    results   : "#search-results",
    includepages  : true,
    onKeyUp     : true,
    info_template : "<h3>Your results returned {{amount}} article(s)</h3>",
    result_template : "<a id='gh-{{ref}}' class='gh-search-item' href='{{link}}'><h5>{{title}}</h5></a>"
});

searchField.clear();


}); // end page load scripts



















































































































