(new WOW).init();var body=$("body"),scroll={mousescrollstep:15,cursorcolor:"#3C3F50",cursorwidth:"10px",cursorborder:"none",horizrailenabled:!1,cursoropacitymin:1};body.niceScroll(scroll),$(function(){$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var o=$(this.hash);if((o=o.length?o:$("[name="+this.hash.slice(1)+"]")).length)return $("html,body").animate({scrollTop:o.offset().top},1e3),!1}})});