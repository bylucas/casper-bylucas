jQuery(document).ready(function($){$body=$("body"),$mainHeader=$("#masthead"),$offcanvasToggle=$(".offcanvas-toggle"),$offcanvasMenu=$("#offcanvas-menu"),$searchToggle=$(".search-toggle"),$searchMenu=$("#search-menu"),lastScrollTop=0,timer=800,setTimeout(function(){$body.addClass("loaded")},1e3),$(window).scroll(function(e){timer&&window.clearTimeout(timer),timer=window.setTimeout(function(){var e=$(this).scrollTop();e>lastScrollTop?e>=10&&$mainHeader.removeClass("active-header dark"):e<=200?$mainHeader.removeClass("dark").addClass("active-header"):$mainHeader.addClass("active-header dark"),lastScrollTop=e},20)}),$offcanvasToggle.click(function(e){e.preventDefault(),$body.hasClass("search-open")?($body.removeClass("search-open"),$searchMenu.fadeOut(300),$offcanvasMenu.delay(300).fadeToggle()):$offcanvasMenu.fadeToggle(300),$body.toggleClass("offcanvas-open"),$mainHeader.toggleClass("remove-dark"),$mainHeader.addClass("active-header")}),$searchToggle.click(function(e){e.preventDefault(),$body.hasClass("offcanvas-open")?($body.removeClass("offcanvas-open"),$offcanvasMenu.fadeOut(300),$searchMenu.delay(300).fadeToggle()):($searchMenu.fadeToggle(300),$("input#s").focus()),$body.toggleClass("search-open"),$mainHeader.toggleClass("remove-dark"),$mainHeader.addClass("active-header")}),$(window).scroll(function(){var e=$(".back-to-top");return $(window).scrollTop()>=200?e.css("bottom","0px"):e.attr("style",""),e.click(function(){$("body,html").stop().animate({scrollTop:0},1e3)}),!1}),$(function(){var e=function(e,a){this.el=e||{},this.multiple=a||!1,this.el.find(".link").on("click",{el:this.el,multiple:this.multiple},this.dropdown)};e.prototype.dropdown=function(e){var a=e.data.el;$this=$(this),$next=$this.next(),$next.slideToggle(),$this.parent().toggleClass("open"),e.data.multiple||a.find(".submenu").not($next).slideUp().parent().removeClass("open")};var a=new e($("#accordion"),!1)}),$(".accordion-tabs-minimal").each(function(e){$(this).children("li").first().children("a").addClass("is-active").next().addClass("is-open").show()}),$(".accordion-tabs-minimal").on("click","li > a.tab-link",function(e){if($(this).hasClass("is-active"))e.preventDefault();else{e.preventDefault();var a=$(this).closest(".accordion-tabs-minimal");a.find(".is-open").removeClass("is-open").hide(),$(this).next().toggleClass("is-open").toggle(),a.find(".is-active").removeClass("is-active"),$(this).addClass("is-active")}}),$(".md-input").focus(function(){$(this).parent().addClass("is-active is-completed")}),$(".md-input").focusout(function(){""===$(this).val()&&$(this).parent().removeClass("is-completed"),$(this).parent().removeClass("is-active")}),$("#search-field").ghostHunter({results:"#search-results",includepages:!0,onKeyUp:!0,info_template:"<h3>Your results returned {{amount}} article(s)</h3>",result_template:"<a id='gh-{{ref}}' class='gh-search-item' href='{{link}}'><h5>{{title}}</h5></a>"}).clear()});