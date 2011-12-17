Drupal.locale = { 'pluralFormula': function ($n) { return Number((($n==1)?(0):((($n==0)||((($n%100)>0)&&(($n%100)<20)))?(1):2))); }, 'strings': {"An AJAX HTTP error occurred.":"A ap\u0103rut o eroare AJAX HTTP.","An AJAX HTTP request terminated abnormally.":"O cerere AJAX HTTP s-a terminat anormal.","Path: !uri":"Cale: !uri","StatusText: !statusText":"StatusText: !statusText","Loading":"Se \u00eencarc\u0103","(active tab)":"(tab activ)","Hide":"Ascundere","Show":"Afi\u015fare","Configure":"Configureaz\u0103","Not restricted":"Nerestric\u0163ionat","Restricted to certain pages":"Restric\u0163ionat la unele pagini.","Not customizable":"Nu se poate personaliza","The changes to these blocks will not be saved until the \u003cem\u003eSave blocks\u003c\/em\u003e button is clicked.":"Modific\u0103rile la aceste blocuri nu vor fi salvate p\u00e2n\u0103 c\u00e2nd nu da\u021bi clic pe butonul \u003cem\u003eSalvare blocuri\u003c\/em\u003e.","The block cannot be placed in this region.":"Blocul nu poate fi plasat \u00een aceast\u0103 regiune.","Show row weights":"Afi\u015fare coloana greutate","Hide row weights":"Ascundere coloana greutate","Drag to re-order":"Trage pentru a reordona","Changes made in this table will not be saved until the form is submitted.":"Modific\u0103rile f\u0103cute acestui tabel nu vor fi salvate p\u00e2n\u0103 c\u00e2nd formularul nu este trimis.","Not in menu":"Nu este \u00een meniu","New revision":"Revizie nou\u0103","No revision":"Nicio revizie","By @name on @date":"De @name la @date","By @name":"De @name","Not published":"Nepublicat","Alias: @alias":"Alias: @alias","No alias":"F\u0103r\u0103 alias","@number comments per page":"@number comentarii pe pagin\u0103","Autocomplete popup":"Popup autocompletare","Searching for matches...":"Se caut\u0103 potriviri...","Please wait...":"V\u0103 rug\u0103m, a\u015ftepta\u0163i...","Select all rows in this table":"Selecteaz\u0103 toate r\u00e2ndurile din acest tabel","Deselect all rows in this table":"Deselecteaz\u0103 toate r\u00e2ndurile din acest tabel","Customize dashboard":"Personalizare tablou de bord","Done":"Gata","Edit":"Modific\u0103","Requires a title":"Titlul este obligatoriu","Cancel":"Renun\u0163\u0103"} };;
// ColorBox v1.3.17.1 - a full featured, light-weight, customizable lightbox based on jQuery 1.3+
// Copyright (c) 2011 Jack Moore - jack@colorpowered.com
// Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
(function(a,b,c){function bc(b){if(!T){O=b,_(a.extend(J,a.data(O,e))),x=a(O),P=0,J.rel!=="nofollow"&&(x=a("."+X).filter(function(){var b=a.data(this,e).rel||this.rel;return b===J.rel}),P=x.index(O),P===-1&&(x=x.add(O),P=x.length-1));if(!R){R=S=!0,q.show();if(J.returnFocus)try{O.blur(),a(O).one(k,function(){try{this.focus()}catch(a){}})}catch(c){}p.css({opacity:+J.opacity,cursor:J.overlayClose?"pointer":"auto"}).show(),J.w=Z(J.initialWidth,"x"),J.h=Z(J.initialHeight,"y"),W.position(0),n&&y.bind("resize."+o+" scroll."+o,function(){p.css({width:y.width(),height:y.height(),top:y.scrollTop(),left:y.scrollLeft()})}).trigger("resize."+o),ba(g,J.onOpen),I.add(C).hide(),H.html(J.close).show()}W.load(!0)}}function bb(){var a,b=f+"Slideshow_",c="click."+f,d,e,g;J.slideshow&&x[1]?(d=function(){E.text(J.slideshowStop).unbind(c).bind(i,function(){if(P<x.length-1||J.loop)a=setTimeout(W.next,J.slideshowSpeed)}).bind(h,function(){clearTimeout(a)}).one(c+" "+j,e),q.removeClass(b+"off").addClass(b+"on"),a=setTimeout(W.next,J.slideshowSpeed)},e=function(){clearTimeout(a),E.text(J.slideshowStart).unbind([i,h,j,c].join(" ")).one(c,d),q.removeClass(b+"on").addClass(b+"off")},J.slideshowAuto?d():e()):q.removeClass(b+"off "+b+"on")}function ba(b,c){c&&c.call(O),a.event.trigger(b)}function _(b){for(var c in b)a.isFunction(b[c])&&c.substring(0,2)!=="on"&&(b[c]=b[c].call(O));b.rel=b.rel||O.rel||"nofollow",b.href=b.href||a(O).attr("href"),b.title=b.title||O.title,typeof b.href=="string"&&(b.href=a.trim(b.href))}function $(a){return J.photo||/\.(gif|png|jpg|jpeg|bmp)(?:\?([^#]*))?(?:#(\.*))?$/i.test(a)}function Z(a,b){b=b==="x"?y.width():y.height();return typeof a=="string"?Math.round(/%/.test(a)?b/100*parseInt(a,10):parseInt(a,10)):a}function Y(c,d){var e=b.createElement("div");c&&(e.id=f+c),e.style.cssText=d||"";return a(e)}var d={transition:"elastic",speed:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,inline:!1,html:!1,iframe:!1,fastIframe:!0,photo:!1,href:!1,title:!1,rel:!1,opacity:.9,preloading:!0,current:"image {current} of {total}",previous:"previous",next:"next",close:"close",open:!1,returnFocus:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:!1},e="colorbox",f="cbox",g=f+"_open",h=f+"_load",i=f+"_complete",j=f+"_cleanup",k=f+"_closed",l=f+"_purge",m=a.browser.msie&&!a.support.opacity,n=m&&a.browser.version<7,o=f+"_IE6",p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J={},K,L,M,N,O,P,Q,R,S,T,U,V,W,X=f+"Element";W=a.fn[e]=a[e]=function(b,c){var f=this,g;if(!f[0]&&f.selector)return f;b=b||{},c&&(b.onComplete=c);if(!f[0]||f.selector===undefined)f=a("<a/>"),b.open=!0;f.each(function(){a.data(this,e,a.extend({},a.data(this,e)||d,b)),a(this).addClass(X)}),g=b.open,a.isFunction(g)&&(g=g.call(f)),g&&bc(f[0]);return f},W.init=function(){y=a(c),q=Y().attr({id:e,"class":m?f+(n?"IE6":"IE"):""}),p=Y("Overlay",n?"position:absolute":"").hide(),r=Y("Wrapper"),s=Y("Content").append(z=Y("LoadedContent","width:0; height:0; overflow:hidden"),B=Y("LoadingOverlay").add(Y("LoadingGraphic")),C=Y("Title"),D=Y("Current"),F=Y("Next"),G=Y("Previous"),E=Y("Slideshow").bind(g,bb),H=Y("Close")),r.append(Y().append(Y("TopLeft"),t=Y("TopCenter"),Y("TopRight")),Y(!1,"clear:left").append(u=Y("MiddleLeft"),s,v=Y("MiddleRight")),Y(!1,"clear:left").append(Y("BottomLeft"),w=Y("BottomCenter"),Y("BottomRight"))).children().children().css({"float":"left"}),A=Y(!1,"position:absolute; width:9999px; visibility:hidden; display:none"),a("body").prepend(p,q.append(r,A)),s.children().hover(function(){a(this).addClass("hover")},function(){a(this).removeClass("hover")}).addClass("hover"),K=t.height()+w.height()+s.outerHeight(!0)-s.height(),L=u.width()+v.width()+s.outerWidth(!0)-s.width(),M=z.outerHeight(!0),N=z.outerWidth(!0),q.css({"padding-bottom":K,"padding-right":L}).hide(),F.click(function(){W.next()}),G.click(function(){W.prev()}),H.click(function(){W.close()}),I=F.add(G).add(D).add(E),s.children().removeClass("hover"),p.click(function(){J.overlayClose&&W.close()}),a(b).bind("keydown."+f,function(a){var b=a.keyCode;R&&J.escKey&&b===27&&(a.preventDefault(),W.close()),R&&J.arrowKey&&x[1]&&(b===37?(a.preventDefault(),G.click()):b===39&&(a.preventDefault(),F.click()))})},W.remove=function(){q.add(p).remove(),a("."+X).removeData(e).removeClass(X)},W.position=function(a,c){function g(a){t[0].style.width=w[0].style.width=s[0].style.width=a.style.width,B[0].style.height=B[1].style.height=s[0].style.height=u[0].style.height=v[0].style.height=a.style.height}var d,e=0,f=0;q.hide(),J.fixed&&!n?q.css({position:"fixed"}):(e=y.scrollTop(),f=y.scrollLeft(),q.css({position:"absolute"})),J.right!==!1?f+=Math.max(y.width()-J.w-N-L-Z(J.right,"x"),0):J.left!==!1?f+=Z(J.left,"x"):f+=Math.max(y.width()-J.w-N-L,0)/2,J.bottom!==!1?e+=Math.max(b.documentElement.clientHeight-J.h-M-K-Z(J.bottom,"y"),0):J.top!==!1?e+=Z(J.top,"y"):e+=Math.max(b.documentElement.clientHeight-J.h-M-K,0)/2,q.show(),d=q.width()===J.w+N&&q.height()===J.h+M?0:a,r[0].style.width=r[0].style.height="9999px",q.dequeue().animate({width:J.w+N,height:J.h+M,top:e,left:f},{duration:d,complete:function(){g(this),S=!1,r[0].style.width=J.w+N+L+"px",r[0].style.height=J.h+M+K+"px",c&&c()},step:function(){g(this)}})},W.resize=function(a){if(R){a=a||{},a.width&&(J.w=Z(a.width,"x")-N-L),a.innerWidth&&(J.w=Z(a.innerWidth,"x")),z.css({width:J.w}),a.height&&(J.h=Z(a.height,"y")-M-K),a.innerHeight&&(J.h=Z(a.innerHeight,"y"));if(!a.innerHeight&&!a.height){var b=z.wrapInner("<div style='overflow:auto'></div>").children();J.h=b.height(),b.replaceWith(b.children())}z.css({height:J.h}),W.position(J.transition==="none"?0:J.speed)}},W.prep=function(b){function h(b){W.position(b,function(){function o(){m&&q[0].style.removeAttribute("filter")}var b,d,g,h,j=x.length,k,n;!R||(n=function(){clearTimeout(V),B.hide(),ba(i,J.onComplete)},m&&Q&&z.fadeIn(100),C.html(J.title).add(z).show(),j>1?(typeof J.current=="string"&&D.html(J.current.replace(/\{current\}/,P+1).replace(/\{total\}/,j)).show(),F[J.loop||P<j-1?"show":"hide"]().html(J.next),G[J.loop||P?"show":"hide"]().html(J.previous),b=P?x[P-1]:x[j-1],g=P<j-1?x[P+1]:x[0],J.slideshow&&E.show(),J.preloading&&(h=a.data(g,e).href||g.href,d=a.data(b,e).href||b.href,h=a.isFunction(h)?h.call(g):h,d=a.isFunction(d)?d.call(b):d,$(h)&&(a("<img/>")[0].src=h),$(d)&&(a("<img/>")[0].src=d))):I.hide(),J.iframe?(k=a("<iframe/>").addClass(f+"Iframe")[0],J.fastIframe?n():a(k).one("load",n),k.name=f+ +(new Date),k.src=J.href,J.scrolling||(k.scrolling="no"),m&&(k.frameBorder=0,k.allowTransparency="true"),a(k).appendTo(z).one(l,function(){k.src="//about:blank"})):n(),J.transition==="fade"?q.fadeTo(c,1,o):o(),y.bind("resize."+f,function(){W.position(0)}))})}function g(){J.h=J.h||z.height(),J.h=J.mh&&J.mh<J.h?J.mh:J.h;return J.h}function d(){J.w=J.w||z.width(),J.w=J.mw&&J.mw<J.w?J.mw:J.w;return J.w}if(!!R){var c=J.transition==="none"?0:J.speed;y.unbind("resize."+f),z.remove(),z=Y("LoadedContent").html(b),z.hide().appendTo(A.show()).css({width:d(),overflow:J.scrolling?"auto":"hidden"}).css({height:g()}).prependTo(s),A.hide(),a(Q).css({"float":"none"}),n&&a("select").not(q.find("select")).filter(function(){return this.style.visibility!=="hidden"}).css({visibility:"hidden"}).one(j,function(){this.style.visibility="inherit"}),J.transition==="fade"?q.fadeTo(c,0,function(){h(0)}):h(c)}},W.load=function(b){var c,d,g=W.prep;S=!0,Q=!1,O=x[P],b||_(a.extend(J,a.data(O,e))),ba(l),ba(h,J.onLoad),J.h=J.height?Z(J.height,"y")-M-K:J.innerHeight&&Z(J.innerHeight,"y"),J.w=J.width?Z(J.width,"x")-N-L:J.innerWidth&&Z(J.innerWidth,"x"),J.mw=J.w,J.mh=J.h,J.maxWidth&&(J.mw=Z(J.maxWidth,"x")-N-L,J.mw=J.w&&J.w<J.mw?J.w:J.mw),J.maxHeight&&(J.mh=Z(J.maxHeight,"y")-M-K,J.mh=J.h&&J.h<J.mh?J.h:J.mh),c=J.href,V=setTimeout(function(){B.show()},100),J.inline?(Y().hide().insertBefore(a(c)[0]).one(l,function(){a(this).replaceWith(z.children())}),g(a(c))):J.iframe?g(" "):J.html?g(J.html):$(c)?(a(Q=new Image).addClass(f+"Photo").error(function(){J.title=!1,g(Y("Error").text("This image could not be loaded"))}).load(function(){var a;Q.onload=null,J.scalePhotos&&(d=function(){Q.height-=Q.height*a,Q.width-=Q.width*a},J.mw&&Q.width>J.mw&&(a=(Q.width-J.mw)/Q.width,d()),J.mh&&Q.height>J.mh&&(a=(Q.height-J.mh)/Q.height,d())),J.h&&(Q.style.marginTop=Math.max(J.h-Q.height,0)/2+"px"),x[1]&&(P<x.length-1||J.loop)&&(Q.style.cursor="pointer",Q.onclick=function(){W.next()}),m&&(Q.style.msInterpolationMode="bicubic"),setTimeout(function(){g(Q)},1)}),setTimeout(function(){Q.src=c},1)):c&&A.load(c,J.data,function(b,c,d){g(c==="error"?Y("Error").text("Request unsuccessful: "+d.statusText):a(this).contents())})},W.next=function(){!S&&x[1]&&(P<x.length-1||J.loop)&&(P=P<x.length-1?P+1:0,W.load())},W.prev=function(){!S&&x[1]&&(P||J.loop)&&(P=P?P-1:x.length-1,W.load())},W.close=function(){R&&!T&&(T=!0,R=!1,ba(j,J.onCleanup),y.unbind("."+f+" ."+o),p.fadeTo(200,0),q.stop().fadeTo(300,0,function(){q.add(p).css({opacity:1,cursor:"auto"}).hide(),ba(l),z.remove(),setTimeout(function(){T=!1,ba(k,J.onClosed)},1)}))},W.element=function(){return a(O)},W.settings=d,U=function(a){a.button!==0&&typeof a.button!="undefined"||a.ctrlKey||a.shiftKey||a.altKey||(a.preventDefault(),bc(this))},a.fn.delegate?a(b).delegate("."+X,"click",U):a("."+X).live("click",U),a(W.init)})(jQuery,document,this);
(function ($) {

Drupal.behaviors.initColorbox = {
  attach: function (context, settings) {
    if (!$.isFunction($.colorbox)) {
      return;
    }
    $('a, area, input', context)
      .filter('.colorbox')
      .once('init-colorbox-processed')
      .colorbox(settings.colorbox);
  }
};

{
  $(document).bind('cbox_complete', function () {
    Drupal.attachBehaviors('#cboxLoadedContent');
  });
}

})(jQuery);
;
(function ($) {

Drupal.behaviors.initColorboxStockholmsyndromeStyle = {
  attach: function (context, settings) {
    $(document).bind('cbox_open', function () {
      // Hide close button initially.
      $('#cboxClose', context).css('opacity', 0);
    });
    $(document).bind('cbox_load', function () {
      // Hide close button. (It doesn't handle the load animation well.)
      $('#cboxClose', context).css('opacity', 0);
    });
    $(document).bind('cbox_complete', function () {
      // Show close button with a delay.
      $('#cboxClose', context).fadeTo('fast', 0, function () {$(this).css('opacity', 1)});
    });
  }
};

})(jQuery);
;
(function ($) {

Drupal.behaviors.initColorboxLoad = {
  attach: function (context, settings) {
    if (!$.isFunction($.colorbox)) {
      return;
    }
    $.urlParams = function (url) {
      var p = {},
          e,
          a = /\+/g,  // Regex for replacing addition symbol with a space
          r = /([^&=]+)=?([^&]*)/g,
          d = function (s) { return decodeURIComponent(s.replace(a, ' ')); },
          q = url.split('?');
      while (e = r.exec(q[1])) {
        e[1] = d(e[1]);
        e[2] = d(e[2]);
        switch (e[2].toLowerCase()) {
          case 'true':
          case 'yes':
            e[2] = true;
            break;
          case 'false':
          case 'no':
            e[2] = false;
            break;
        }
        if (e[1] == 'width') { e[1] = 'innerWidth'; }
        if (e[1] == 'height') { e[1] = 'innerHeight'; }
        p[e[1]] = e[2];
      }
      return p;
    };
    $('a, area, input', context)
      .filter('.colorbox-load')
      .once('init-colorbox-load-processed', function () {
        var params = $.urlParams($(this).attr('href'));
        $(this).colorbox($.extend({}, settings.colorbox, params));
      });
  }
};

})(jQuery);
;
(function ($) {

Drupal.behaviors.initColorboxInline = {
  attach: function (context, settings) {
    if (!$.isFunction($.colorbox)) {
      return;
    }
    $.urlParam = function(name, url){
      if (name == 'fragment') {
        var results = new RegExp('(#[^&#]*)').exec(url);
      }
      else {
        var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(url);
      }
      if (!results) { return ''; }
      return results[1] || '';
    };
    $('a, area, input', context).filter('.colorbox-inline').once('init-colorbox-inline-processed').colorbox({
      transition:settings.colorbox.transition,
      speed:settings.colorbox.speed,
      opacity:settings.colorbox.opacity,
      slideshow:settings.colorbox.slideshow,
      slideshowAuto:settings.colorbox.slideshowAuto,
      slideshowSpeed:settings.colorbox.slideshowSpeed,
      slideshowStart:settings.colorbox.slideshowStart,
      slideshowStop:settings.colorbox.slideshowStop,
      current:settings.colorbox.current,
      previous:settings.colorbox.previous,
      next:settings.colorbox.next,
      close:settings.colorbox.close,
      overlayClose:settings.colorbox.overlayClose,
      maxWidth:settings.colorbox.maxWidth,
      maxHeight:settings.colorbox.maxHeight,
      innerWidth:function(){
        return $.urlParam('width', $(this).attr('href'));
      },
      innerHeight:function(){
        return $.urlParam('height', $(this).attr('href'));
      },
      title:function(){
        return decodeURIComponent($.urlParam('title', $(this).attr('href')));
      },
      iframe:function(){
        return $.urlParam('iframe', $(this).attr('href'));
      },
      inline:function(){
        return $.urlParam('inline', $(this).attr('href'));
      },
      href:function(){
        return $.urlParam('fragment', $(this).attr('href'));
      }
    });
  }
};

})(jQuery);
;

/*
 * Superfish v1.4.8 - jQuery menu widget
 * Copyright (c) 2008 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 * 	http://www.opensource.org/licenses/mit-license.php
 * 	http://www.gnu.org/licenses/gpl.html
 *
 * CHANGELOG: http://users.tpg.com.au/j_birch/plugins/superfish/changelog.txt
 */

;(function($){
	$.fn.superfish = function(op){

		var sf = $.fn.superfish,
			c = sf.c,
			$arrow = $(['<span class="',c.arrowClass,'"> &#187;</span>'].join('')),
			over = function(){
				var $$ = $(this), menu = getMenu($$);
				clearTimeout(menu.sfTimer);
				$$.showSuperfishUl().siblings().hideSuperfishUl();
			},
			out = function(){
				var $$ = $(this), menu = getMenu($$), o = sf.op;
				clearTimeout(menu.sfTimer);
				menu.sfTimer=setTimeout(function(){
					o.retainPath=($.inArray($$[0],o.$path)>-1);
					$$.hideSuperfishUl();
					if (o.$path.length && $$.parents(['li.',o.hoverClass].join('')).length<1){over.call(o.$path);}
				},o.delay);	
			},
			getMenu = function($menu){
				var menu = $menu.parents(['ul.',c.menuClass,':first'].join(''))[0];
				sf.op = sf.o[menu.serial];
				return menu;
			},
			addArrow = function($a){ $a.addClass(c.anchorClass).append($arrow.clone()); };
			
		return this.each(function() {
			var s = this.serial = sf.o.length;
			var o = $.extend({},sf.defaults,op);
			o.$path = $('li.'+o.pathClass,this).slice(0,o.pathLevels).each(function(){
				$(this).addClass([o.hoverClass,c.bcClass].join(' '))
					.filter('li:has(ul)').removeClass(o.pathClass);
			});
			sf.o[s] = sf.op = o;
			
			$('li:has(ul)',this)[($.fn.hoverIntent && !o.disableHI) ? 'hoverIntent' : 'hover'](over,out).each(function() {
				if (o.autoArrows) addArrow( $('>a:first-child',this) );
			})
			.not('.'+c.bcClass)
				.hideSuperfishUl();
			
			var $a = $('a',this);
			$a.each(function(i){
				var $li = $a.eq(i).parents('li');
				$a.eq(i).focus(function(){over.call($li);}).blur(function(){out.call($li);});
			});
			o.onInit.call(this);
			
		}).each(function() {
			var menuClasses = [c.menuClass];
			if (sf.op.dropShadows  && !($.browser.msie && $.browser.version < 7)) menuClasses.push(c.shadowClass);
			$(this).addClass(menuClasses.join(' '));
		});
	};

	var sf = $.fn.superfish;
	sf.o = [];
	sf.op = {};
	sf.IE7fix = function(){
		var o = sf.op;
		if ($.browser.msie && $.browser.version > 6 && o.dropShadows && o.animation.opacity!=undefined)
			this.toggleClass(sf.c.shadowClass+'-off');
		};
	sf.c = {
		bcClass     : 'sf-breadcrumb',
		menuClass   : 'sf-js-enabled',
		anchorClass : 'sf-with-ul',
		arrowClass  : 'sf-sub-indicator',
		shadowClass : 'sf-shadow'
	};
	sf.defaults = {
		hoverClass	: 'sfHover',
		pathClass	: 'overideThisToUse',
		pathLevels	: 1,
		delay		: 800,
		animation	: {opacity:'show'},
		speed		: 'normal',
		autoArrows	: true,
		dropShadows : true,
		disableHI	: false,		// true disables hoverIntent detection
		onInit		: function(){}, // callback functions
		onBeforeShow: function(){},
		onShow		: function(){},
		onHide		: function(){}
	};
	$.fn.extend({
		hideSuperfishUl : function(){
			var o = sf.op,
				not = (o.retainPath===true) ? o.$path : '';
			o.retainPath = false;
			var $ul = $(['li.',o.hoverClass].join(''),this).add(this).not(not).removeClass(o.hoverClass)
					.find('>ul').hide().css('visibility','hidden');
			o.onHide.call($ul);
			return this;
		},
		showSuperfishUl : function(){
			var o = sf.op,
				sh = sf.c.shadowClass+'-off',
				$ul = this.addClass(o.hoverClass)
					.find('>ul:hidden').css('visibility','visible');
			sf.IE7fix.call($ul);
			o.onBeforeShow.call($ul);
			$ul.animate(o.animation,o.speed,function(){ sf.IE7fix.call($ul); o.onShow.call($ul); });
			return this;
		}
	});

})(jQuery);
;
/* Copyright (c) 2006 Brandon Aaron (http://brandonaaron.net)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) 
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * $LastChangedDate: 2007-06-19 20:25:28 -0500 (Tue, 19 Jun 2007) $
 * $Rev: 2111 $
 *
 * Version 2.1
 */
(function($){$.fn.bgIframe=$.fn.bgiframe=function(s){if($.browser.msie&&parseInt($.browser.version)<=6){s=$.extend({top:'auto',left:'auto',width:'auto',height:'auto',opacity:true,src:'javascript:false;'},s||{});var prop=function(n){return n&&n.constructor==Number?n+'px':n;},html='<iframe class="bgiframe"frameborder="0"tabindex="-1"src="'+s.src+'"'+'style="display:block;position:absolute;z-index:-1;'+(s.opacity!==false?'filter:Alpha(Opacity=\'0\');':'')+'top:'+(s.top=='auto'?'expression(((parseInt(this.parentNode.currentStyle.borderTopWidth)||0)*-1)+\'px\')':prop(s.top))+';'+'left:'+(s.left=='auto'?'expression(((parseInt(this.parentNode.currentStyle.borderLeftWidth)||0)*-1)+\'px\')':prop(s.left))+';'+'width:'+(s.width=='auto'?'expression(this.parentNode.offsetWidth+\'px\')':prop(s.width))+';'+'height:'+(s.height=='auto'?'expression(this.parentNode.offsetHeight+\'px\')':prop(s.height))+';'+'"/>';return this.each(function(){if($('> iframe.bgiframe',this).length==0)this.insertBefore(document.createElement(html),this.firstChild);});}return this;};if(!$.browser.version)$.browser.version=navigator.userAgent.toLowerCase().match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)[1];})(jQuery);;
﻿/**
* hoverIntent r5 // 2007.03.27 // jQuery 1.1.2+
* <http://cherne.net/brian/resources/jquery.hoverIntent.html>
* 
* @param  f  onMouseOver function || An object with configuration options
* @param  g  onMouseOut function  || Nothing (use configuration options object)
* @author    Brian Cherne <brian@cherne.net>
*/
(function($){$.fn.hoverIntent=function(f,g){var cfg={sensitivity:7,interval:100,timeout:0};cfg=$.extend(cfg,g?{over:f,out:g}:f);var cX,cY,pX,pY;var track=function(ev){cX=ev.pageX;cY=ev.pageY;};var compare=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);if((Math.abs(pX-cX)+Math.abs(pY-cY))<cfg.sensitivity){$(ob).unbind("mousemove",track);ob.hoverIntent_s=1;return cfg.over.apply(ob,[ev]);}else{pX=cX;pY=cY;ob.hoverIntent_t=setTimeout(function(){compare(ev,ob);},cfg.interval);}};var delay=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);ob.hoverIntent_s=0;return cfg.out.apply(ob,[ev]);};var handleHover=function(e){var p=(e.type=="mouseover"?e.fromElement:e.toElement)||e.relatedTarget;while(p&&p!=this){try{p=p.parentNode;}catch(e){p=this;}}if(p==this){return false;}var ev=jQuery.extend({},e);var ob=this;if(ob.hoverIntent_t){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);}if(e.type=="mouseover"){pX=ev.pageX;pY=ev.pageY;$(ob).bind("mousemove",track);if(ob.hoverIntent_s!=1){ob.hoverIntent_t=setTimeout(function(){compare(ev,ob);},cfg.interval);}}else{$(ob).unbind("mousemove",track);if(ob.hoverIntent_s==1){ob.hoverIntent_t=setTimeout(function(){delay(ev,ob);},cfg.timeout);}}};return this.mouseover(handleHover).mouseout(handleHover);};})(jQuery);;

// This uses Superfish 1.4.8
// (http://users.tpg.com.au/j_birch/plugins/superfish)

// Add Superfish to all Nice menus with some basic options.
(function ($) {
  $(document).ready(function() {
    $('ul.nice-menu').superfish({
      // Apply a generic hover class.
      hoverClass: 'over',
      // Disable generation of arrow mark-up.
      autoArrows: false,
      // Disable drop shadows.
      dropShadows: false,
      // Mouse delay.
      delay: Drupal.settings.nice_menus_options.delay,
      // Animation speed.
      speed: Drupal.settings.nice_menus_options.speed
    // Add in Brandon Aaron’s bgIframe plugin for IE select issues.
    // http://plugins.jquery.com/node/46/release
    }).find('ul').bgIframe({opacity:false});
    $('ul.nice-menu ul').css('display', 'none');
  });
})(jQuery);
;

(function ($) {
  Drupal.Panels = {};

  Drupal.Panels.autoAttach = function() {
    if ($.browser.msie) {
      // If IE, attach a hover event so we can see our admin links.
      $("div.panel-pane").hover(
        function() {
          $('div.panel-hide', this).addClass("panel-hide-hover"); return true;
        },
        function() {
          $('div.panel-hide', this).removeClass("panel-hide-hover"); return true;
        }
      );
      $("div.admin-links").hover(
        function() {
          $(this).addClass("admin-links-hover"); return true;
        },
        function(){
          $(this).removeClass("admin-links-hover"); return true;
        }
      );
    }
  };

  $(Drupal.Panels.autoAttach);
})(jQuery);
;
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */;
/*!
 * jQuery Cycle Plugin (with Transition Definitions)
 * Examples and documentation at: http://jquery.malsup.com/cycle/
 * Copyright (c) 2007-2009 M. Alsup
 * Version: 2.72 (09-SEP-2009)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * Requires: jQuery v1.2.6 or later
 *
 * Originally based on the work of:
 *	1) Matt Oakes
 *	2) Torsten Baldes (http://medienfreunde.com/lab/innerfade/)
 *	3) Benjamin Sterling (http://www.benjaminsterling.com/experiments/jqShuffle/)
 */
;(function($) {

var ver = '2.72';

// if $.support is not defined (pre jQuery 1.3) add what I need
if ($.support == undefined) {
	$.support = {
		opacity: !($.browser.msie)
	};
}

function debug(s) {
	if ($.fn.cycle.debug)
		log(s);
}		
function log() {
	if (window.console && window.console.log)
		window.console.log('[cycle] ' + Array.prototype.join.call(arguments,' '));
	//$('body').append('<div>'+Array.prototype.join.call(arguments,' ')+'</div>');
};

// the options arg can be...
//   a number  - indicates an immediate transition should occur to the given slide index
//   a string  - 'stop', 'pause', 'resume', or the name of a transition effect (ie, 'fade', 'zoom', etc)
//   an object - properties to control the slideshow
//
// the arg2 arg can be...
//   the name of an fx (only used in conjunction with a numeric value for 'options')
//   the value true (only used in conjunction with a options == 'resume') and indicates
//	 that the resume should occur immediately (not wait for next timeout)

$.fn.cycle = function(options, arg2) {
	var o = { s: this.selector, c: this.context };

	// in 1.3+ we can fix mistakes with the ready state
	if (this.length === 0 && options != 'stop') {
		if (!$.isReady && o.s) {
			log('DOM not ready, queuing slideshow');
			$(function() {
				$(o.s,o.c).cycle(options,arg2);
			});
			return this;
		}
		// is your DOM ready?  http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
		log('terminating; zero elements found by selector' + ($.isReady ? '' : ' (DOM not ready)'));
		return this;
	}

	// iterate the matched nodeset
	return this.each(function() {
		var opts = handleArguments(this, options, arg2);
		if (opts === false)
			return;

		// stop existing slideshow for this container (if there is one)
		if (this.cycleTimeout)
			clearTimeout(this.cycleTimeout);
		this.cycleTimeout = this.cyclePause = 0;

		var $cont = $(this);
		var $slides = opts.slideExpr ? $(opts.slideExpr, this) : $cont.children();
		var els = $slides.get();
		if (els.length < 2) {
			log('terminating; too few slides: ' + els.length);
			return;
		}

		var opts2 = buildOptions($cont, $slides, els, opts, o);
		if (opts2 === false)
			return;

		var startTime = opts2.continuous ? 10 : getTimeout(opts2.currSlide, opts2.nextSlide, opts2, !opts2.rev);

		// if it's an auto slideshow, kick it off
		if (startTime) {
			startTime += (opts2.delay || 0);
			if (startTime < 10)
				startTime = 10;
			debug('first timeout: ' + startTime);
			this.cycleTimeout = setTimeout(function(){go(els,opts2,0,!opts2.rev)}, startTime);
		}
	});
};

// process the args that were passed to the plugin fn
function handleArguments(cont, options, arg2) {
	if (cont.cycleStop == undefined)
		cont.cycleStop = 0;
	if (options === undefined || options === null)
		options = {};
	if (options.constructor == String) {
		switch(options) {
		case 'stop':
			cont.cycleStop++; // callbacks look for change
			if (cont.cycleTimeout)
				clearTimeout(cont.cycleTimeout);
			cont.cycleTimeout = 0;
			$(cont).removeData('cycle.opts');
			return false;
		case 'pause':
			cont.cyclePause = 1;
			return false;
		case 'resume':
			cont.cyclePause = 0;
			if (arg2 === true) { // resume now!
				options = $(cont).data('cycle.opts');
				if (!options) {
					log('options not found, can not resume');
					return false;
				}
				if (cont.cycleTimeout) {
					clearTimeout(cont.cycleTimeout);
					cont.cycleTimeout = 0;
				}
				go(options.elements, options, 1, 1);
			}
			return false;
		case 'prev':
		case 'next':
			var opts = $(cont).data('cycle.opts');
			if (!opts) {
				log('options not found, "prev/next" ignored');
				return false;
			}
			$.fn.cycle[options](opts);
			return false;
		default:
			options = { fx: options };
		};
		return options;
	}
	else if (options.constructor == Number) {
		// go to the requested slide
		var num = options;
		options = $(cont).data('cycle.opts');
		if (!options) {
			log('options not found, can not advance slide');
			return false;
		}
		if (num < 0 || num >= options.elements.length) {
			log('invalid slide index: ' + num);
			return false;
		}
		options.nextSlide = num;
		if (cont.cycleTimeout) {
			clearTimeout(cont.cycleTimeout);
			cont.cycleTimeout = 0;
		}
		if (typeof arg2 == 'string')
			options.oneTimeFx = arg2;
		go(options.elements, options, 1, num >= options.currSlide);
		return false;
	}
	return options;
};

function removeFilter(el, opts) {
	if (!$.support.opacity && opts.cleartype && el.style.filter) {
		try { el.style.removeAttribute('filter'); }
		catch(smother) {} // handle old opera versions
	}
};

// one-time initialization
function buildOptions($cont, $slides, els, options, o) {
	// support metadata plugin (v1.0 and v2.0)
	var opts = $.extend({}, $.fn.cycle.defaults, options || {}, $.metadata ? $cont.metadata() : $.meta ? $cont.data() : {});
	if (opts.autostop)
		opts.countdown = opts.autostopCount || els.length;

	var cont = $cont[0];
	$cont.data('cycle.opts', opts);
	opts.$cont = $cont;
	opts.stopCount = cont.cycleStop;
	opts.elements = els;
	opts.before = opts.before ? [opts.before] : [];
	opts.after = opts.after ? [opts.after] : [];
	opts.after.unshift(function(){ opts.busy=0; });

	// push some after callbacks
	if (!$.support.opacity && opts.cleartype)
		opts.after.push(function() { removeFilter(this, opts); });
	if (opts.continuous)
		opts.after.push(function() { go(els,opts,0,!opts.rev); });

	saveOriginalOpts(opts);

	// clearType corrections
	if (!$.support.opacity && opts.cleartype && !opts.cleartypeNoBg)
		clearTypeFix($slides);

	// container requires non-static position so that slides can be position within
	if ($cont.css('position') == 'static')
		$cont.css('position', 'relative');
	if (opts.width)
		$cont.width(opts.width);
	if (opts.height && opts.height != 'auto')
		$cont.height(opts.height);

	if (opts.startingSlide)
		opts.startingSlide = parseInt(opts.startingSlide);

	// if random, mix up the slide array
	if (opts.random) {
		opts.randomMap = [];
		for (var i = 0; i < els.length; i++)
			opts.randomMap.push(i);
		opts.randomMap.sort(function(a,b) {return Math.random() - 0.5;});
		opts.randomIndex = 0;
		opts.startingSlide = opts.randomMap[0];
	}
	else if (opts.startingSlide >= els.length)
		opts.startingSlide = 0; // catch bogus input
	opts.currSlide = opts.startingSlide = opts.startingSlide || 0;
	var first = opts.startingSlide;

	// set position and zIndex on all the slides
	$slides.css({position: 'absolute', top:0, left:0}).hide().each(function(i) {
		var z = first ? i >= first ? els.length - (i-first) : first-i : els.length-i;
		$(this).css('z-index', z)
	});

	// make sure first slide is visible
	$(els[first]).css('opacity',1).show(); // opacity bit needed to handle restart use case
	removeFilter(els[first], opts);

	// stretch slides
	if (opts.fit && opts.width)
		$slides.width(opts.width);
	if (opts.fit && opts.height && opts.height != 'auto')
		$slides.height(opts.height);

	// stretch container
	var reshape = opts.containerResize && !$cont.innerHeight();
	if (reshape) { // do this only if container has no size http://tinyurl.com/da2oa9
		var maxw = 0, maxh = 0;
		for(var j=0; j < els.length; j++) {
			var $e = $(els[j]), e = $e[0], w = $e.outerWidth(), h = $e.outerHeight();
			if (!w) w = e.offsetWidth;
			if (!h) h = e.offsetHeight;
			maxw = w > maxw ? w : maxw;
			maxh = h > maxh ? h : maxh;
		}
		if (maxw > 0 && maxh > 0)
			$cont.css({width:maxw+'px',height:maxh+'px'});
	}

	if (opts.pause)
		$cont.hover(function(){this.cyclePause++;},function(){this.cyclePause--;});

	if (supportMultiTransitions(opts) === false)
		return false;

	// apparently a lot of people use image slideshows without height/width attributes on the images.
	// Cycle 2.50+ requires the sizing info for every slide; this block tries to deal with that.
	var requeue = false;
	options.requeueAttempts = options.requeueAttempts || 0;
	$slides.each(function() {
		// try to get height/width of each slide
		var $el = $(this);
		this.cycleH = (opts.fit && opts.height) ? opts.height : $el.height();
		this.cycleW = (opts.fit && opts.width) ? opts.width : $el.width();

		if ( $el.is('img') ) {
			// sigh..  sniffing, hacking, shrugging...  this crappy hack tries to account for what browsers do when
			// an image is being downloaded and the markup did not include sizing info (height/width attributes);
			// there seems to be some "default" sizes used in this situation
			var loadingIE	= ($.browser.msie  && this.cycleW == 28 && this.cycleH == 30 && !this.complete);
			var loadingFF	= ($.browser.mozilla && this.cycleW == 34 && this.cycleH == 19 && !this.complete);
			var loadingOp	= ($.browser.opera && ((this.cycleW == 42 && this.cycleH == 19) || (this.cycleW == 37 && this.cycleH == 17)) && !this.complete);
			var loadingOther = (this.cycleH == 0 && this.cycleW == 0 && !this.complete);
			// don't requeue for images that are still loading but have a valid size
			if (loadingIE || loadingFF || loadingOp || loadingOther) {
				if (o.s && opts.requeueOnImageNotLoaded && ++options.requeueAttempts < 100) { // track retry count so we don't loop forever
					log(options.requeueAttempts,' - img slide not loaded, requeuing slideshow: ', this.src, this.cycleW, this.cycleH);
					setTimeout(function() {$(o.s,o.c).cycle(options)}, opts.requeueTimeout);
					requeue = true;
					return false; // break each loop
				}
				else {
					log('could not determine size of image: '+this.src, this.cycleW, this.cycleH);
				}
			}
		}
		return true;
	});

	if (requeue)
		return false;

	opts.cssBefore = opts.cssBefore || {};
	opts.animIn = opts.animIn || {};
	opts.animOut = opts.animOut || {};

	$slides.not(':eq('+first+')').css(opts.cssBefore);
	if (opts.cssFirst)
		$($slides[first]).css(opts.cssFirst);

	if (opts.timeout) {
		opts.timeout = parseInt(opts.timeout);
		// ensure that timeout and speed settings are sane
		if (opts.speed.constructor == String)
			opts.speed = $.fx.speeds[opts.speed] || parseInt(opts.speed);
		if (!opts.sync)
			opts.speed = opts.speed / 2;
		while((opts.timeout - opts.speed) < 250) // sanitize timeout
			opts.timeout += opts.speed;
	}
	if (opts.easing)
		opts.easeIn = opts.easeOut = opts.easing;
	if (!opts.speedIn)
		opts.speedIn = opts.speed;
	if (!opts.speedOut)
		opts.speedOut = opts.speed;

	opts.slideCount = els.length;
	opts.currSlide = opts.lastSlide = first;
	if (opts.random) {
		opts.nextSlide = opts.currSlide;
		if (++opts.randomIndex == els.length)
			opts.randomIndex = 0;
		opts.nextSlide = opts.randomMap[opts.randomIndex];
	}
	else
		opts.nextSlide = opts.startingSlide >= (els.length-1) ? 0 : opts.startingSlide+1;

	// run transition init fn
	if (!opts.multiFx) {
		var init = $.fn.cycle.transitions[opts.fx];
		if ($.isFunction(init))
			init($cont, $slides, opts);
		else if (opts.fx != 'custom' && !opts.multiFx) {
			log('unknown transition: ' + opts.fx,'; slideshow terminating');
			return false;
		}
	}

	// fire artificial events
	var e0 = $slides[first];
	if (opts.before.length)
		opts.before[0].apply(e0, [e0, e0, opts, true]);
	if (opts.after.length > 1)
		opts.after[1].apply(e0, [e0, e0, opts, true]);

	if (opts.next)
		$(opts.next).bind(opts.prevNextEvent,function(){return advance(opts,opts.rev?-1:1)});
	if (opts.prev)
		$(opts.prev).bind(opts.prevNextEvent,function(){return advance(opts,opts.rev?1:-1)});
	if (opts.pager)
		buildPager(els,opts);

	exposeAddSlide(opts, els);

	return opts;
};

// save off original opts so we can restore after clearing state
function saveOriginalOpts(opts) {
	opts.original = { before: [], after: [] };
	opts.original.cssBefore = $.extend({}, opts.cssBefore);
	opts.original.cssAfter  = $.extend({}, opts.cssAfter);
	opts.original.animIn	= $.extend({}, opts.animIn);
	opts.original.animOut   = $.extend({}, opts.animOut);
	$.each(opts.before, function() { opts.original.before.push(this); });
	$.each(opts.after,  function() { opts.original.after.push(this); });
};

function supportMultiTransitions(opts) {
	var i, tx, txs = $.fn.cycle.transitions;
	// look for multiple effects
	if (opts.fx.indexOf(',') > 0) {
		opts.multiFx = true;
		opts.fxs = opts.fx.replace(/\s*/g,'').split(',');
		// discard any bogus effect names
		for (i=0; i < opts.fxs.length; i++) {
			var fx = opts.fxs[i];
			tx = txs[fx];
			if (!tx || !txs.hasOwnProperty(fx) || !$.isFunction(tx)) {
				log('discarding unknown transition: ',fx);
				opts.fxs.splice(i,1);
				i--;
			}
		}
		// if we have an empty list then we threw everything away!
		if (!opts.fxs.length) {
			log('No valid transitions named; slideshow terminating.');
			return false;
		}
	}
	else if (opts.fx == 'all') {  // auto-gen the list of transitions
		opts.multiFx = true;
		opts.fxs = [];
		for (p in txs) {
			tx = txs[p];
			if (txs.hasOwnProperty(p) && $.isFunction(tx))
				opts.fxs.push(p);
		}
	}
	if (opts.multiFx && opts.randomizeEffects) {
		// munge the fxs array to make effect selection random
		var r1 = Math.floor(Math.random() * 20) + 30;
		for (i = 0; i < r1; i++) {
			var r2 = Math.floor(Math.random() * opts.fxs.length);
			opts.fxs.push(opts.fxs.splice(r2,1)[0]);
		}
		debug('randomized fx sequence: ',opts.fxs);
	}
	return true;
};

// provide a mechanism for adding slides after the slideshow has started
function exposeAddSlide(opts, els) {
	opts.addSlide = function(newSlide, prepend) {
		var $s = $(newSlide), s = $s[0];
		if (!opts.autostopCount)
			opts.countdown++;
		els[prepend?'unshift':'push'](s);
		if (opts.els)
			opts.els[prepend?'unshift':'push'](s); // shuffle needs this
		opts.slideCount = els.length;

		$s.css('position','absolute');
		$s[prepend?'prependTo':'appendTo'](opts.$cont);

		if (prepend) {
			opts.currSlide++;
			opts.nextSlide++;
		}

		if (!$.support.opacity && opts.cleartype && !opts.cleartypeNoBg)
			clearTypeFix($s);

		if (opts.fit && opts.width)
			$s.width(opts.width);
		if (opts.fit && opts.height && opts.height != 'auto')
			$slides.height(opts.height);
		s.cycleH = (opts.fit && opts.height) ? opts.height : $s.height();
		s.cycleW = (opts.fit && opts.width) ? opts.width : $s.width();

		$s.css(opts.cssBefore);

		if (opts.pager)
			$.fn.cycle.createPagerAnchor(els.length-1, s, $(opts.pager), els, opts);

		if ($.isFunction(opts.onAddSlide))
			opts.onAddSlide($s);
		else
			$s.hide(); // default behavior
	};
}

// reset internal state; we do this on every pass in order to support multiple effects
$.fn.cycle.resetState = function(opts, fx) {
	fx = fx || opts.fx;
	opts.before = []; opts.after = [];
	opts.cssBefore = $.extend({}, opts.original.cssBefore);
	opts.cssAfter  = $.extend({}, opts.original.cssAfter);
	opts.animIn	= $.extend({}, opts.original.animIn);
	opts.animOut   = $.extend({}, opts.original.animOut);
	opts.fxFn = null;
	$.each(opts.original.before, function() { opts.before.push(this); });
	$.each(opts.original.after,  function() { opts.after.push(this); });

	// re-init
	var init = $.fn.cycle.transitions[fx];
	if ($.isFunction(init))
		init(opts.$cont, $(opts.elements), opts);
};

// this is the main engine fn, it handles the timeouts, callbacks and slide index mgmt
function go(els, opts, manual, fwd) {
	// opts.busy is true if we're in the middle of an animation
	if (manual && opts.busy && opts.manualTrump) {
		// let manual transitions requests trump active ones
		$(els).stop(true,true);
		opts.busy = false;
	}
	// don't begin another timeout-based transition if there is one active
	if (opts.busy)
		return;

	var p = opts.$cont[0], curr = els[opts.currSlide], next = els[opts.nextSlide];

	// stop cycling if we have an outstanding stop request
	if (p.cycleStop != opts.stopCount || p.cycleTimeout === 0 && !manual)
		return;

	// check to see if we should stop cycling based on autostop options
	if (!manual && !p.cyclePause &&
		((opts.autostop && (--opts.countdown <= 0)) ||
		(opts.nowrap && !opts.random && opts.nextSlide < opts.currSlide))) {
		if (opts.end)
			opts.end(opts);
		return;
	}

	// if slideshow is paused, only transition on a manual trigger
	if (manual || !p.cyclePause) {
		var fx = opts.fx;
		// keep trying to get the slide size if we don't have it yet
		curr.cycleH = curr.cycleH || $(curr).height();
		curr.cycleW = curr.cycleW || $(curr).width();
		next.cycleH = next.cycleH || $(next).height();
		next.cycleW = next.cycleW || $(next).width();

		// support multiple transition types
		if (opts.multiFx) {
			if (opts.lastFx == undefined || ++opts.lastFx >= opts.fxs.length)
				opts.lastFx = 0;
			fx = opts.fxs[opts.lastFx];
			opts.currFx = fx;
		}

		// one-time fx overrides apply to:  $('div').cycle(3,'zoom');
		if (opts.oneTimeFx) {
			fx = opts.oneTimeFx;
			opts.oneTimeFx = null;
		}

		$.fn.cycle.resetState(opts, fx);

		// run the before callbacks
		if (opts.before.length)
			$.each(opts.before, function(i,o) {
				if (p.cycleStop != opts.stopCount) return;
				o.apply(next, [curr, next, opts, fwd]);
			});

		// stage the after callacks
		var after = function() {
			$.each(opts.after, function(i,o) {
				if (p.cycleStop != opts.stopCount) return;
				o.apply(next, [curr, next, opts, fwd]);
			});
		};

		if (opts.nextSlide != opts.currSlide) {
			// get ready to perform the transition
			opts.busy = 1;
			if (opts.fxFn) // fx function provided?
				opts.fxFn(curr, next, opts, after, fwd);
			else if ($.isFunction($.fn.cycle[opts.fx])) // fx plugin ?
				$.fn.cycle[opts.fx](curr, next, opts, after);
			else
				$.fn.cycle.custom(curr, next, opts, after, manual && opts.fastOnEvent);
		}

		// calculate the next slide
		opts.lastSlide = opts.currSlide;
		if (opts.random) {
			opts.currSlide = opts.nextSlide;
			if (++opts.randomIndex == els.length)
				opts.randomIndex = 0;
			opts.nextSlide = opts.randomMap[opts.randomIndex];
		}
		else { // sequence
			var roll = (opts.nextSlide + 1) == els.length;
			opts.nextSlide = roll ? 0 : opts.nextSlide+1;
			opts.currSlide = roll ? els.length-1 : opts.nextSlide-1;
		}

		if (opts.pager)
			$.fn.cycle.updateActivePagerLink(opts.pager, opts.currSlide);
	}

	// stage the next transtion
	var ms = 0;
	if (opts.timeout && !opts.continuous)
		ms = getTimeout(curr, next, opts, fwd);
	else if (opts.continuous && p.cyclePause) // continuous shows work off an after callback, not this timer logic
		ms = 10;
	if (ms > 0)
		p.cycleTimeout = setTimeout(function(){ go(els, opts, 0, !opts.rev) }, ms);
};

// invoked after transition
$.fn.cycle.updateActivePagerLink = function(pager, currSlide) {
	$(pager).find('a').removeClass('activeSlide').filter('a:eq('+currSlide+')').addClass('activeSlide');
};

// calculate timeout value for current transition
function getTimeout(curr, next, opts, fwd) {
	if (opts.timeoutFn) {
		// call user provided calc fn
		var t = opts.timeoutFn(curr,next,opts,fwd);
		while ((t - opts.speed) < 250) // sanitize timeout
			t += opts.speed;
		debug('calculated timeout: ' + t + '; speed: ' + opts.speed);
		if (t !== false)
			return t;
	}
	return opts.timeout;
};

// expose next/prev function, caller must pass in state
$.fn.cycle.next = function(opts) { advance(opts, opts.rev?-1:1); };
$.fn.cycle.prev = function(opts) { advance(opts, opts.rev?1:-1);};

// advance slide forward or back
function advance(opts, val) {
	var els = opts.elements;
	var p = opts.$cont[0], timeout = p.cycleTimeout;
	if (timeout) {
		clearTimeout(timeout);
		p.cycleTimeout = 0;
	}
	if (opts.random && val < 0) {
		// move back to the previously display slide
		opts.randomIndex--;
		if (--opts.randomIndex == -2)
			opts.randomIndex = els.length-2;
		else if (opts.randomIndex == -1)
			opts.randomIndex = els.length-1;
		opts.nextSlide = opts.randomMap[opts.randomIndex];
	}
	else if (opts.random) {
		if (++opts.randomIndex == els.length)
			opts.randomIndex = 0;
		opts.nextSlide = opts.randomMap[opts.randomIndex];
	}
	else {
		opts.nextSlide = opts.currSlide + val;
		if (opts.nextSlide < 0) {
			if (opts.nowrap) return false;
			opts.nextSlide = els.length - 1;
		}
		else if (opts.nextSlide >= els.length) {
			if (opts.nowrap) return false;
			opts.nextSlide = 0;
		}
	}

	if ($.isFunction(opts.prevNextClick))
		opts.prevNextClick(val > 0, opts.nextSlide, els[opts.nextSlide]);
	go(els, opts, 1, val>=0);
	return false;
};

function buildPager(els, opts) {
	var $p = $(opts.pager);
	$.each(els, function(i,o) {
		$.fn.cycle.createPagerAnchor(i,o,$p,els,opts);
	});
   $.fn.cycle.updateActivePagerLink(opts.pager, opts.startingSlide);
};

$.fn.cycle.createPagerAnchor = function(i, el, $p, els, opts) {
	var a;
	if ($.isFunction(opts.pagerAnchorBuilder))
		a = opts.pagerAnchorBuilder(i,el);
	else
		a = '<a href="#">'+(i+1)+'</a>';
		
	if (!a)
		return;
	var $a = $(a);
	// don't reparent if anchor is in the dom
	if ($a.parents('body').length === 0) {
		var arr = [];
		if ($p.length > 1) {
			$p.each(function() {
				var $clone = $a.clone(true);
				$(this).append($clone);
				arr.push($clone);
			});
			$a = $(arr);
		}
		else {
			$a.appendTo($p);
		}
	}

	$a.bind(opts.pagerEvent, function(e) {
		e.preventDefault();
		opts.nextSlide = i;
		var p = opts.$cont[0], timeout = p.cycleTimeout;
		if (timeout) {
			clearTimeout(timeout);
			p.cycleTimeout = 0;
		}
		if ($.isFunction(opts.pagerClick))
			opts.pagerClick(opts.nextSlide, els[opts.nextSlide]);
		go(els,opts,1,opts.currSlide < i); // trigger the trans
		return false;
	});
	
	if (opts.pagerEvent != 'click')
		$a.click(function(){return false;}); // supress click
	
	if (opts.pauseOnPagerHover)
		$a.hover(function() { opts.$cont[0].cyclePause++; }, function() { opts.$cont[0].cyclePause--; } );
};

// helper fn to calculate the number of slides between the current and the next
$.fn.cycle.hopsFromLast = function(opts, fwd) {
	var hops, l = opts.lastSlide, c = opts.currSlide;
	if (fwd)
		hops = c > l ? c - l : opts.slideCount - l;
	else
		hops = c < l ? l - c : l + opts.slideCount - c;
	return hops;
};

// fix clearType problems in ie6 by setting an explicit bg color
// (otherwise text slides look horrible during a fade transition)
function clearTypeFix($slides) {
	function hex(s) {
		s = parseInt(s).toString(16);
		return s.length < 2 ? '0'+s : s;
	};
	function getBg(e) {
		for ( ; e && e.nodeName.toLowerCase() != 'html'; e = e.parentNode) {
			var v = $.css(e,'background-color');
			if (v.indexOf('rgb') >= 0 ) {
				var rgb = v.match(/\d+/g);
				return '#'+ hex(rgb[0]) + hex(rgb[1]) + hex(rgb[2]);
			}
			if (v && v != 'transparent')
				return v;
		}
		return '#ffffff';
	};
	$slides.each(function() { $(this).css('background-color', getBg(this)); });
};

// reset common props before the next transition
$.fn.cycle.commonReset = function(curr,next,opts,w,h,rev) {
	$(opts.elements).not(curr).hide();
	opts.cssBefore.opacity = 1;
	opts.cssBefore.display = 'block';
	if (w !== false && next.cycleW > 0)
		opts.cssBefore.width = next.cycleW;
	if (h !== false && next.cycleH > 0)
		opts.cssBefore.height = next.cycleH;
	opts.cssAfter = opts.cssAfter || {};
	opts.cssAfter.display = 'none';
	$(curr).css('zIndex',opts.slideCount + (rev === true ? 1 : 0));
	$(next).css('zIndex',opts.slideCount + (rev === true ? 0 : 1));
};

// the actual fn for effecting a transition
$.fn.cycle.custom = function(curr, next, opts, cb, speedOverride) {
	var $l = $(curr), $n = $(next);
	var speedIn = opts.speedIn, speedOut = opts.speedOut, easeIn = opts.easeIn, easeOut = opts.easeOut;
	$n.css(opts.cssBefore);
	if (speedOverride) {
		if (typeof speedOverride == 'number')
			speedIn = speedOut = speedOverride;
		else
			speedIn = speedOut = 1;
		easeIn = easeOut = null;
	}
	var fn = function() {$n.animate(opts.animIn, speedIn, easeIn, cb)};
	$l.animate(opts.animOut, speedOut, easeOut, function() {
		if (opts.cssAfter) $l.css(opts.cssAfter);
		if (!opts.sync) fn();
	});
	if (opts.sync) fn();
};

// transition definitions - only fade is defined here, transition pack defines the rest
$.fn.cycle.transitions = {
	fade: function($cont, $slides, opts) {
		$slides.not(':eq('+opts.currSlide+')').css('opacity',0);
		opts.before.push(function(curr,next,opts) {
			$.fn.cycle.commonReset(curr,next,opts);
			opts.cssBefore.opacity = 0;
		});
		opts.animIn	   = { opacity: 1 };
		opts.animOut   = { opacity: 0 };
		opts.cssBefore = { top: 0, left: 0 };
	}
};

$.fn.cycle.ver = function() { return ver; };

// override these globally if you like (they are all optional)
$.fn.cycle.defaults = {
	fx:			  'fade', // name of transition effect (or comma separated names, ex: fade,scrollUp,shuffle)
	timeout:	   4000,  // milliseconds between slide transitions (0 to disable auto advance)
	timeoutFn:	 null,  // callback for determining per-slide timeout value:  function(currSlideElement, nextSlideElement, options, forwardFlag)
	continuous:	   0,	  // true to start next transition immediately after current one completes
	speed:		   1000,  // speed of the transition (any valid fx speed value)
	speedIn:	   null,  // speed of the 'in' transition
	speedOut:	   null,  // speed of the 'out' transition
	next:		   null,  // selector for element to use as click trigger for next slide
	prev:		   null,  // selector for element to use as click trigger for previous slide
	prevNextClick: null,  // callback fn for prev/next clicks:	function(isNext, zeroBasedSlideIndex, slideElement)
	prevNextEvent:'click',// event which drives the manual transition to the previous or next slide
	pager:		   null,  // selector for element to use as pager container
	pagerClick:	   null,  // callback fn for pager clicks:	function(zeroBasedSlideIndex, slideElement)
	pagerEvent:	  'click', // name of event which drives the pager navigation
	pagerAnchorBuilder: null, // callback fn for building anchor links:  function(index, DOMelement)
	before:		   null,  // transition callback (scope set to element to be shown):	 function(currSlideElement, nextSlideElement, options, forwardFlag)
	after:		   null,  // transition callback (scope set to element that was shown):  function(currSlideElement, nextSlideElement, options, forwardFlag)
	end:		   null,  // callback invoked when the slideshow terminates (use with autostop or nowrap options): function(options)
	easing:		   null,  // easing method for both in and out transitions
	easeIn:		   null,  // easing for "in" transition
	easeOut:	   null,  // easing for "out" transition
	shuffle:	   null,  // coords for shuffle animation, ex: { top:15, left: 200 }
	animIn:		   null,  // properties that define how the slide animates in
	animOut:	   null,  // properties that define how the slide animates out
	cssBefore:	   null,  // properties that define the initial state of the slide before transitioning in
	cssAfter:	   null,  // properties that defined the state of the slide after transitioning out
	fxFn:		   null,  // function used to control the transition: function(currSlideElement, nextSlideElement, options, afterCalback, forwardFlag)
	height:		  'auto', // container height
	startingSlide: 0,	  // zero-based index of the first slide to be displayed
	sync:		   1,	  // true if in/out transitions should occur simultaneously
	random:		   0,	  // true for random, false for sequence (not applicable to shuffle fx)
	fit:		   0,	  // force slides to fit container
	containerResize: 1,	  // resize container to fit largest slide
	pause:		   0,	  // true to enable "pause on hover"
	pauseOnPagerHover: 0, // true to pause when hovering over pager link
	autostop:	   0,	  // true to end slideshow after X transitions (where X == slide count)
	autostopCount: 0,	  // number of transitions (optionally used with autostop to define X)
	delay:		   0,	  // additional delay (in ms) for first transition (hint: can be negative)
	slideExpr:	   null,  // expression for selecting slides (if something other than all children is required)
	cleartype:	   !$.support.opacity,  // true if clearType corrections should be applied (for IE)
	cleartypeNoBg: false, // set to true to disable extra cleartype fixing (leave false to force background color setting on slides)
	nowrap:		   0,	  // true to prevent slideshow from wrapping
	fastOnEvent:   0,	  // force fast transitions when triggered manually (via pager or prev/next); value == time in ms
	randomizeEffects: 1,  // valid when multiple effects are used; true to make the effect sequence random
	rev:		   0,	 // causes animations to transition in reverse
	manualTrump:   true,  // causes manual transition to stop an active transition instead of being ignored
	requeueOnImageNotLoaded: true, // requeue the slideshow if any image slides are not yet loaded
	requeueTimeout: 250   // ms delay for requeue
};

})(jQuery);


/*!
 * jQuery Cycle Plugin Transition Definitions
 * This script is a plugin for the jQuery Cycle Plugin
 * Examples and documentation at: http://malsup.com/jquery/cycle/
 * Copyright (c) 2007-2008 M. Alsup
 * Version:	 2.72
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 */
(function($) {

//
// These functions define one-time slide initialization for the named
// transitions. To save file size feel free to remove any of these that you
// don't need.
//
$.fn.cycle.transitions.none = function($cont, $slides, opts) {
	opts.fxFn = function(curr,next,opts,after){
		$(next).show();
		$(curr).hide();
		after();
	};
}

// scrollUp/Down/Left/Right
$.fn.cycle.transitions.scrollUp = function($cont, $slides, opts) {
	$cont.css('overflow','hidden');
	opts.before.push($.fn.cycle.commonReset);
	var h = $cont.height();
	opts.cssBefore ={ top: h, left: 0 };
	opts.cssFirst = { top: 0 };
	opts.animIn	  = { top: 0 };
	opts.animOut  = { top: -h };
};
$.fn.cycle.transitions.scrollDown = function($cont, $slides, opts) {
	$cont.css('overflow','hidden');
	opts.before.push($.fn.cycle.commonReset);
	var h = $cont.height();
	opts.cssFirst = { top: 0 };
	opts.cssBefore= { top: -h, left: 0 };
	opts.animIn	  = { top: 0 };
	opts.animOut  = { top: h };
};
$.fn.cycle.transitions.scrollLeft = function($cont, $slides, opts) {
	$cont.css('overflow','hidden');
	opts.before.push($.fn.cycle.commonReset);
	var w = $cont.width();
	opts.cssFirst = { left: 0 };
	opts.cssBefore= { left: w, top: 0 };
	opts.animIn	  = { left: 0 };
	opts.animOut  = { left: 0-w };
};
$.fn.cycle.transitions.scrollRight = function($cont, $slides, opts) {
	$cont.css('overflow','hidden');
	opts.before.push($.fn.cycle.commonReset);
	var w = $cont.width();
	opts.cssFirst = { left: 0 };
	opts.cssBefore= { left: -w, top: 0 };
	opts.animIn	  = { left: 0 };
	opts.animOut  = { left: w };
};
$.fn.cycle.transitions.scrollHorz = function($cont, $slides, opts) {
	$cont.css('overflow','hidden').width();
	opts.before.push(function(curr, next, opts, fwd) {
		$.fn.cycle.commonReset(curr,next,opts);
		opts.cssBefore.left = fwd ? (next.cycleW-1) : (1-next.cycleW);
		opts.animOut.left = fwd ? -curr.cycleW : curr.cycleW;
	});
	opts.cssFirst = { left: 0 };
	opts.cssBefore= { top: 0 };
	opts.animIn   = { left: 0 };
	opts.animOut  = { top: 0 };
};
$.fn.cycle.transitions.scrollVert = function($cont, $slides, opts) {
	$cont.css('overflow','hidden');
	opts.before.push(function(curr, next, opts, fwd) {
		$.fn.cycle.commonReset(curr,next,opts);
		opts.cssBefore.top = fwd ? (1-next.cycleH) : (next.cycleH-1);
		opts.animOut.top = fwd ? curr.cycleH : -curr.cycleH;
	});
	opts.cssFirst = { top: 0 };
	opts.cssBefore= { left: 0 };
	opts.animIn   = { top: 0 };
	opts.animOut  = { left: 0 };
};

// slideX/slideY
$.fn.cycle.transitions.slideX = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$(opts.elements).not(curr).hide();
		$.fn.cycle.commonReset(curr,next,opts,false,true);
		opts.animIn.width = next.cycleW;
	});
	opts.cssBefore = { left: 0, top: 0, width: 0 };
	opts.animIn	 = { width: 'show' };
	opts.animOut = { width: 0 };
};
$.fn.cycle.transitions.slideY = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$(opts.elements).not(curr).hide();
		$.fn.cycle.commonReset(curr,next,opts,true,false);
		opts.animIn.height = next.cycleH;
	});
	opts.cssBefore = { left: 0, top: 0, height: 0 };
	opts.animIn	 = { height: 'show' };
	opts.animOut = { height: 0 };
};

// shuffle
$.fn.cycle.transitions.shuffle = function($cont, $slides, opts) {
	var i, w = $cont.css('overflow', 'visible').width();
	$slides.css({left: 0, top: 0});
	opts.before.push(function(curr,next,opts) {
		$.fn.cycle.commonReset(curr,next,opts,true,true,true);
	});
	// only adjust speed once!
	if (!opts.speedAdjusted) {
		opts.speed = opts.speed / 2; // shuffle has 2 transitions
		opts.speedAdjusted = true;
	}
	opts.random = 0;
	opts.shuffle = opts.shuffle || {left:-w, top:15};
	opts.els = [];
	for (i=0; i < $slides.length; i++)
		opts.els.push($slides[i]);

	for (i=0; i < opts.currSlide; i++)
		opts.els.push(opts.els.shift());

	// custom transition fn (hat tip to Benjamin Sterling for this bit of sweetness!)
	opts.fxFn = function(curr, next, opts, cb, fwd) {
		var $el = fwd ? $(curr) : $(next);
		$(next).css(opts.cssBefore);
		var count = opts.slideCount;
		$el.animate(opts.shuffle, opts.speedIn, opts.easeIn, function() {
			var hops = $.fn.cycle.hopsFromLast(opts, fwd);
			for (var k=0; k < hops; k++)
				fwd ? opts.els.push(opts.els.shift()) : opts.els.unshift(opts.els.pop());
			if (fwd) {
				for (var i=0, len=opts.els.length; i < len; i++)
					$(opts.els[i]).css('z-index', len-i+count);
			}
			else {
				var z = $(curr).css('z-index');
				$el.css('z-index', parseInt(z)+1+count);
			}
			$el.animate({left:0, top:0}, opts.speedOut, opts.easeOut, function() {
				$(fwd ? this : curr).hide();
				if (cb) cb();
			});
		});
	};
	opts.cssBefore = { display: 'block', opacity: 1, top: 0, left: 0 };
};

// turnUp/Down/Left/Right
$.fn.cycle.transitions.turnUp = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,true,false);
		opts.cssBefore.top = next.cycleH;
		opts.animIn.height = next.cycleH;
	});
	opts.cssFirst  = { top: 0 };
	opts.cssBefore = { left: 0, height: 0 };
	opts.animIn	   = { top: 0 };
	opts.animOut   = { height: 0 };
};
$.fn.cycle.transitions.turnDown = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,true,false);
		opts.animIn.height = next.cycleH;
		opts.animOut.top   = curr.cycleH;
	});
	opts.cssFirst  = { top: 0 };
	opts.cssBefore = { left: 0, top: 0, height: 0 };
	opts.animOut   = { height: 0 };
};
$.fn.cycle.transitions.turnLeft = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,false,true);
		opts.cssBefore.left = next.cycleW;
		opts.animIn.width = next.cycleW;
	});
	opts.cssBefore = { top: 0, width: 0  };
	opts.animIn	   = { left: 0 };
	opts.animOut   = { width: 0 };
};
$.fn.cycle.transitions.turnRight = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,false,true);
		opts.animIn.width = next.cycleW;
		opts.animOut.left = curr.cycleW;
	});
	opts.cssBefore = { top: 0, left: 0, width: 0 };
	opts.animIn	   = { left: 0 };
	opts.animOut   = { width: 0 };
};

// zoom
$.fn.cycle.transitions.zoom = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,false,false,true);
		opts.cssBefore.top = next.cycleH/2;
		opts.cssBefore.left = next.cycleW/2;
		opts.animIn	   = { top: 0, left: 0, width: next.cycleW, height: next.cycleH };
		opts.animOut   = { width: 0, height: 0, top: curr.cycleH/2, left: curr.cycleW/2 };
	});
	opts.cssFirst = { top:0, left: 0 };
	opts.cssBefore = { width: 0, height: 0 };
};

// fadeZoom
$.fn.cycle.transitions.fadeZoom = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,false,false);
		opts.cssBefore.left = next.cycleW/2;
		opts.cssBefore.top = next.cycleH/2;
		opts.animIn	= { top: 0, left: 0, width: next.cycleW, height: next.cycleH };
	});
	opts.cssBefore = { width: 0, height: 0 };
	opts.animOut  = { opacity: 0 };
};

// blindX
$.fn.cycle.transitions.blindX = function($cont, $slides, opts) {
	var w = $cont.css('overflow','hidden').width();
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts);
		opts.animIn.width = next.cycleW;
		opts.animOut.left   = curr.cycleW;
	});
	opts.cssBefore = { left: w, top: 0 };
	opts.animIn = { left: 0 };
	opts.animOut  = { left: w };
};
// blindY
$.fn.cycle.transitions.blindY = function($cont, $slides, opts) {
	var h = $cont.css('overflow','hidden').height();
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts);
		opts.animIn.height = next.cycleH;
		opts.animOut.top   = curr.cycleH;
	});
	opts.cssBefore = { top: h, left: 0 };
	opts.animIn = { top: 0 };
	opts.animOut  = { top: h };
};
// blindZ
$.fn.cycle.transitions.blindZ = function($cont, $slides, opts) {
	var h = $cont.css('overflow','hidden').height();
	var w = $cont.width();
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts);
		opts.animIn.height = next.cycleH;
		opts.animOut.top   = curr.cycleH;
	});
	opts.cssBefore = { top: h, left: w };
	opts.animIn = { top: 0, left: 0 };
	opts.animOut  = { top: h, left: w };
};

// growX - grow horizontally from centered 0 width
$.fn.cycle.transitions.growX = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,false,true);
		opts.cssBefore.left = this.cycleW/2;
		opts.animIn = { left: 0, width: this.cycleW };
		opts.animOut = { left: 0 };
	});
	opts.cssBefore = { width: 0, top: 0 };
};
// growY - grow vertically from centered 0 height
$.fn.cycle.transitions.growY = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,true,false);
		opts.cssBefore.top = this.cycleH/2;
		opts.animIn = { top: 0, height: this.cycleH };
		opts.animOut = { top: 0 };
	});
	opts.cssBefore = { height: 0, left: 0 };
};

// curtainX - squeeze in both edges horizontally
$.fn.cycle.transitions.curtainX = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,false,true,true);
		opts.cssBefore.left = next.cycleW/2;
		opts.animIn = { left: 0, width: this.cycleW };
		opts.animOut = { left: curr.cycleW/2, width: 0 };
	});
	opts.cssBefore = { top: 0, width: 0 };
};
// curtainY - squeeze in both edges vertically
$.fn.cycle.transitions.curtainY = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,true,false,true);
		opts.cssBefore.top = next.cycleH/2;
		opts.animIn = { top: 0, height: next.cycleH };
		opts.animOut = { top: curr.cycleH/2, height: 0 };
	});
	opts.cssBefore = { left: 0, height: 0 };
};

// cover - curr slide covered by next slide
$.fn.cycle.transitions.cover = function($cont, $slides, opts) {
	var d = opts.direction || 'left';
	var w = $cont.css('overflow','hidden').width();
	var h = $cont.height();
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts);
		if (d == 'right')
			opts.cssBefore.left = -w;
		else if (d == 'up')
			opts.cssBefore.top = h;
		else if (d == 'down')
			opts.cssBefore.top = -h;
		else
			opts.cssBefore.left = w;
	});
	opts.animIn = { left: 0, top: 0};
	opts.animOut = { opacity: 1 };
	opts.cssBefore = { top: 0, left: 0 };
};

// uncover - curr slide moves off next slide
$.fn.cycle.transitions.uncover = function($cont, $slides, opts) {
	var d = opts.direction || 'left';
	var w = $cont.css('overflow','hidden').width();
	var h = $cont.height();
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,true,true,true);
		if (d == 'right')
			opts.animOut.left = w;
		else if (d == 'up')
			opts.animOut.top = -h;
		else if (d == 'down')
			opts.animOut.top = h;
		else
			opts.animOut.left = -w;
	});
	opts.animIn = { left: 0, top: 0 };
	opts.animOut = { opacity: 1 };
	opts.cssBefore = { top: 0, left: 0 };
};

// toss - move top slide and fade away
$.fn.cycle.transitions.toss = function($cont, $slides, opts) {
	var w = $cont.css('overflow','visible').width();
	var h = $cont.height();
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,true,true,true);
		// provide default toss settings if animOut not provided
		if (!opts.animOut.left && !opts.animOut.top)
			opts.animOut = { left: w*2, top: -h/2, opacity: 0 };
		else
			opts.animOut.opacity = 0;
	});
	opts.cssBefore = { left: 0, top: 0 };
	opts.animIn = { left: 0 };
};

// wipe - clip animation
$.fn.cycle.transitions.wipe = function($cont, $slides, opts) {
	var w = $cont.css('overflow','hidden').width();
	var h = $cont.height();
	opts.cssBefore = opts.cssBefore || {};
	var clip;
	if (opts.clip) {
		if (/l2r/.test(opts.clip))
			clip = 'rect(0px 0px '+h+'px 0px)';
		else if (/r2l/.test(opts.clip))
			clip = 'rect(0px '+w+'px '+h+'px '+w+'px)';
		else if (/t2b/.test(opts.clip))
			clip = 'rect(0px '+w+'px 0px 0px)';
		else if (/b2t/.test(opts.clip))
			clip = 'rect('+h+'px '+w+'px '+h+'px 0px)';
		else if (/zoom/.test(opts.clip)) {
			var top = parseInt(h/2);
			var left = parseInt(w/2);
			clip = 'rect('+top+'px '+left+'px '+top+'px '+left+'px)';
		}
	}

	opts.cssBefore.clip = opts.cssBefore.clip || clip || 'rect(0px 0px 0px 0px)';

	var d = opts.cssBefore.clip.match(/(\d+)/g);
	var t = parseInt(d[0]), r = parseInt(d[1]), b = parseInt(d[2]), l = parseInt(d[3]);

	opts.before.push(function(curr, next, opts) {
		if (curr == next) return;
		var $curr = $(curr), $next = $(next);
		$.fn.cycle.commonReset(curr,next,opts,true,true,false);
		opts.cssAfter.display = 'block';

		var step = 1, count = parseInt((opts.speedIn / 13)) - 1;
		(function f() {
			var tt = t ? t - parseInt(step * (t/count)) : 0;
			var ll = l ? l - parseInt(step * (l/count)) : 0;
			var bb = b < h ? b + parseInt(step * ((h-b)/count || 1)) : h;
			var rr = r < w ? r + parseInt(step * ((w-r)/count || 1)) : w;
			$next.css({ clip: 'rect('+tt+'px '+rr+'px '+bb+'px '+ll+'px)' });
			(step++ <= count) ? setTimeout(f, 13) : $curr.css('display', 'none');
		})();
	});
	opts.cssBefore = { display: 'block', opacity: 1, top: 0, left: 0 };
	opts.animIn	   = { left: 0 };
	opts.animOut   = { left: 0 };
};

})(jQuery);
;

/*jslint bitwise: true, eqeqeq: true, immed: true, newcap: true, nomen: false,
 onevar: false, plusplus: false, regexp: true, undef: true, white: true, indent: 2
 browser: true */

/*global jQuery: true Drupal: true window: true */

(function ($) {
  Drupal.behaviors.rotatingBanner = {
    attach: function (context) {
      $('.rotating-banner', context).once('jCycleActivated', function () {
        if (!Drupal.settings.rotatingBanners) {
          return;
        }
        var settings = Drupal.settings.rotatingBanners[this.id].cycle;
        if ($.fn.cycle === 'undefined' || $.fn.cycle === undefined) {
          alert(Drupal.t('Jquery Cycle is not installed and is required by the rotating_banner module.\n\nSee the README.txt'));
          return;
        }

        settings.fit = 1;
        settings.cleartypeNoBg = true;

        if(Drupal.settings.rotatingBanners[this.id].controls == 'prev_next') {
          settings.prev = "#" + this.id + " .prev";
          settings.next = "#" + this.id + " .next";
        } else {
          settings.pager = "#" + this.id + " .controls";
        }
				
        $('.rb-slides', this).cycle(settings);
      });
    }
  };
})(jQuery);
;
(function ($) {

/**
 * Attaches sticky table headers.
 */
Drupal.behaviors.tableHeader = {
  attach: function (context, settings) {
    if (!$.support.positionFixed) {
      return;
    }

    $('table.sticky-enabled', context).once('tableheader', function () {
      $(this).data("drupal-tableheader", new Drupal.tableHeader(this));
    });
  }
};

/**
 * Constructor for the tableHeader object. Provides sticky table headers.
 *
 * @param table
 *   DOM object for the table to add a sticky header to.
 */
Drupal.tableHeader = function (table) {
  var self = this;

  this.originalTable = $(table);
  this.originalHeader = $(table).children('thead');
  this.originalHeaderCells = this.originalHeader.find('> tr > th');

  // Clone the table header so it inherits original jQuery properties. Hide
  // the table to avoid a flash of the header clone upon page load.
  this.stickyTable = $('<table class="sticky-header"/>')
    .insertBefore(this.originalTable)
    .css({ position: 'fixed', top: '0px' });
  this.stickyHeader = this.originalHeader.clone(true)
    .hide()
    .appendTo(this.stickyTable);
  this.stickyHeaderCells = this.stickyHeader.find('> tr > th');

  this.originalTable.addClass('sticky-table');
  $(window)
    .bind('scroll.drupal-tableheader', $.proxy(this, 'eventhandlerRecalculateStickyHeader'))
    .bind('resize.drupal-tableheader', { calculateWidth: true }, $.proxy(this, 'eventhandlerRecalculateStickyHeader'))
    // Make sure the anchor being scrolled into view is not hidden beneath the
    // sticky table header. Adjust the scrollTop if it does.
    .bind('drupalDisplaceAnchor.drupal-tableheader', function () {
      window.scrollBy(0, -self.stickyTable.outerHeight());
    })
    // Make sure the element being focused is not hidden beneath the sticky
    // table header. Adjust the scrollTop if it does.
    .bind('drupalDisplaceFocus.drupal-tableheader', function (event) {
      if (self.stickyVisible && event.clientY < (self.stickyOffsetTop + self.stickyTable.outerHeight()) && event.$target.closest('sticky-header').length === 0) {
        window.scrollBy(0, -self.stickyTable.outerHeight());
      }
    })
    .triggerHandler('resize.drupal-tableheader');

  // We hid the header to avoid it showing up erroneously on page load;
  // we need to unhide it now so that it will show up when expected.
  this.stickyHeader.show();
};

/**
 * Event handler: recalculates position of the sticky table header.
 *
 * @param event
 *   Event being triggered.
 */
Drupal.tableHeader.prototype.eventhandlerRecalculateStickyHeader = function (event) {
  var self = this;
  var calculateWidth = event.data && event.data.calculateWidth;

  // Reset top position of sticky table headers to the current top offset.
  this.stickyOffsetTop = Drupal.settings.tableHeaderOffset ? eval(Drupal.settings.tableHeaderOffset + '()') : 0;
  this.stickyTable.css('top', this.stickyOffsetTop + 'px');

  // Save positioning data.
  var viewHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
  if (calculateWidth || this.viewHeight !== viewHeight) {
    this.viewHeight = viewHeight;
    this.vPosition = this.originalTable.offset().top - 4 - this.stickyOffsetTop;
    this.hPosition = this.originalTable.offset().left;
    this.vLength = this.originalTable[0].clientHeight - 100;
    calculateWidth = true;
  }

  // Track horizontal positioning relative to the viewport and set visibility.
  var hScroll = document.documentElement.scrollLeft || document.body.scrollLeft;
  var vOffset = (document.documentElement.scrollTop || document.body.scrollTop) - this.vPosition;
  this.stickyVisible = vOffset > 0 && vOffset < this.vLength;
  this.stickyTable.css({ left: (-hScroll + this.hPosition) + 'px', visibility: this.stickyVisible ? 'visible' : 'hidden' });

  // Only perform expensive calculations if the sticky header is actually
  // visible or when forced.
  if (this.stickyVisible && (calculateWidth || !this.widthCalculated)) {
    this.widthCalculated = true;
    // Resize header and its cell widths.
    this.stickyHeaderCells.each(function (index) {
      var cellWidth = self.originalHeaderCells.eq(index).css('width');
      // Exception for IE7.
      if (cellWidth == 'auto') {
        cellWidth = self.originalHeaderCells.get(index).clientWidth + 'px';
      }
      $(this).css('width', cellWidth);
    });
    this.stickyTable.css('width', this.originalTable.css('width'));
  }
};

})(jQuery);
;
// MSDropDown - jquery.dd.js
// author: Marghoob Suleman - Search me on google
// Date: 12th Aug, 2009
// Version: 2.36 {date: 18 Dec, 2010}
// Revision: 31
// web: www.giftlelo.com | www.marghoobsuleman.com
/*
// msDropDown is free jQuery Plugin: you can redistribute it and/or modify
// it under the terms of the either the MIT License or the Gnu General Public License (GPL) Version 2
*/
;eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}(';(5($){3 1J="";3 34=5(p,q){3 r=p;3 s=1b;3 q=$.35({1g:3S,2g:7,3a:23,1K:11,1L:3T,3b:\'1Y\',1M:15,3c:\'3U\',2A:\'\',1k:\'\'},q);1b.1U=2h 3d();3 t="";3 u={};u.2B=11;u.2i=15;u.2j=1m;3 v=15;3 w={2C:\'3V\',1N:\'3W\',1O:\'3X\',1P:\'3Y\',1f:\'3Z\',2D:\'41\',2E:\'42\',43:\'44\',2k:\'45\',3e:\'46\'};3 x={1Y:q.3b,2F:\'2F\',2G:\'2G\',2H:\'2H\',1q:\'1q\',1j:.30,2I:\'2I\',2l:\'2l\',2m:\'2m\'};3 y={3f:"2n,2J,2K,1Q,2o,2p,1r,1B,2q,1R,47,1Z,2L",48:"1C,1s,1j,49"};1b.1D=2h 3d();3 z=$(r).12("19");4(3g(z)=="1a"||z.1c<=0){z="4a"+$.1S.3h++;$(r).12("19",z)};3 A=$(r).12("1k");q.1k+=(A==1a)?"":A;3 B=$(r).3i();v=($(r).12("1C")>1||$(r).12("1s")==11)?11:15;4(v){q.2g=$(r).12("1C")};3 C={};3 D=5(a){18 z+w[a]};3 E=5(a){3 b=a;3 c=$(b).12("1k");18 c};3 F=5(a){3 b=$("#"+z+" 2r:8");4(b.1c>1){1t(3 i=0;i<b.1c;i++){4(a==b[i].1h){18 11}}}1d 4(b.1c==1){4(b[0].1h==a){18 11}};18 15};3 G=5(a,b,c,d){3 e="";3 f=(d=="2M")?D("2E"):D("2D");3 g=(d=="2M")?f+"2N"+(b)+"2N"+(c):f+"2N"+(b);3 h="";3 i="";4(q.1M!=15){i=\' \'+q.1M+\' \'+a.3j}1d{h=$(a).12("1V");h=(h.1c==0)?"":\'<3k 3l="\'+h+\'" 3m="3n" /> \'};3 j=$(a).1o();3 k=$(a).4b();3 l=($(a).12("1j")==11)?"1j":"21";C[g]={1E:h+j,22:k,1o:j,1h:a.1h,19:g};3 m=E(a);4(F(a.1h)==11){e+=\'<a 3o="3p:3q(0);" 1p="8 \'+l+i+\'"\'}1d{e+=\'<a  3o="3p:3q(0);" 1p="\'+l+i+\'"\'};4(m!==15&&m!==1a){e+=" 1k=\'"+m+"\'"};e+=\' 19="\'+g+\'">\';e+=h+\'<1u 1p="\'+x.1q+\'">\'+j+\'</1u></a>\';18 e};3 H=5(){3 f=B;4(f.1c==0)18"";3 g="";3 h=D("2D");3 i=D("2E");f.2O(5(c){3 d=f[c];4(d.4c=="4d"){g+="<1v 1p=\'4e\'>";g+="<1u 1k=\'3r-4f:4g;3r-1k:4h; 4i:4j;\'>"+$(d).12("4k")+"</1u>";3 e=$(d).3i();e.2O(5(a){3 b=e[a];g+=G(b,c,a,"2M")});g+="</1v>"}1d{g+=G(d,c,"","")}});18 g};3 I=5(){3 a=D("1N");3 b=D("1f");3 c=q.1k;1W="";1W+=\'<1v 19="\'+b+\'" 1p="\'+x.2H+\'"\';4(!v){1W+=(c!="")?\' 1k="\'+c+\'"\':\'\'}1d{1W+=(c!="")?\' 1k="2s-1w:4l 4m #4n;1x:2t;1y:2P;\'+c+\'"\':\'\'};1W+=\'>\';18 1W};3 J=5(){3 a=D("1O");3 b=D("2k");3 c=D("1P");3 d=D("3e");3 e="";3 f="";4(6.9(z).1F.1c>0){e=$("#"+z+" 2r:8").1o();f=$("#"+z+" 2r:8").12("1V")};f=(f.1c==0||f==1a||q.1K==15||q.1M!=15)?"":\'<3k 3l="\'+f+\'" 3m="3n" /> \';3 g=\'<1v 19="\'+a+\'" 1p="\'+x.2F+\'"\';g+=\'>\';g+=\'<1u 19="\'+b+\'" 1p="\'+x.2G+\'"></1u><1u 1p="\'+x.1q+\'" 19="\'+c+\'">\'+f+\'<1u 1p="\'+x.1q+\'">\'+e+\'</1u></1u></1v>\';18 g};3 K=5(){3 c=D("1f");$("#"+c+" a.21").1I("1Q");$("#"+c+" a.21").1e("1Q",5(a){a.24();N(1b);4(!v){$("#"+c).1I("1B");P(15);3 b=(q.1K==15)?$(1b).1o():$(1b).1E();T(b);s.25()};X()})};3 L=5(){3 d=15;3 e=D("1N");3 f=D("1O");3 g=D("1P");3 h=D("1f");3 i=D("2k");3 j=$("#"+z).2Q();j=j+2;3 k=q.1k;4($("#"+e).1c>0){$("#"+e).2u();d=11};3 l=\'<1v 19="\'+e+\'" 1p="\'+x.1Y+\'"\';l+=(k!="")?\' 1k="\'+k+\'"\':\'\';l+=\'>\';l+=J();l+=I();l+=H();l+="</1v>";l+="</1v>";4(d==11){3 m=D("2C");$("#"+m).2R(l)}1d{$("#"+z).2R(l)};4(v){3 f=D("1O");$("#"+f).2v()};$("#"+e).14("2Q",j+"1T");$("#"+h).14("2Q",(j-2)+"1T");4(B.1c>q.2g){3 n=26($("#"+h+" a:3s").14("28-3t"))+26($("#"+h+" a:3s").14("28-1w"));3 o=((q.3a)*q.2g)-n;$("#"+h).14("1g",o+"1T")}1d 4(v){3 o=$("#"+z).1g();$("#"+h).14("1g",o+"1T")};4(d==15){S();O(z)};4($("#"+z).12("1j")==11){$("#"+e).14("2w",x.1j)};R();$("#"+f).1e("1B",5(a){2S(1)});$("#"+f).1e("1R",5(a){2S(0)});K();$("#"+h+" a.1j").14("2w",x.1j);4(v){$("#"+h).1e("1B",5(c){4(!u.2i){u.2i=11;$(6).1e("1Z",5(a){3 b=a.3u;u.2j=b;4(b==39||b==40){a.24();a.2x();U();X()};4(b==37||b==38){a.24();a.2x();V();X()}})}})};$("#"+h).1e("1R",5(a){P(15);$(6).1I("1Z");u.2i=15;u.2j=1m});$("#"+f).1e("1Q",5(b){P(15);4($("#"+h+":3v").1c==1){$("#"+h).1I("1B")}1d{$("#"+h).1e("1B",5(a){P(11)});s.3w()}});$("#"+f).1e("1R",5(a){P(15)});4(q.1K&&q.1M!=15){W()}};3 M=5(a){1t(3 i 2y C){4(C[i].1h==a){18 C[i]}};18-1};3 N=5(a){3 b=D("1f");4($("#"+b+" a.8").1c==1){t=$("#"+b+" a.8").1o()};4(!v){$("#"+b+" a.8").1G("8")};3 c=$("#"+b+" a.8").12("19");4(c!=1a){3 d=(u.1X==1a||u.1X==1m)?C[c].1h:u.1X};4(a&&!v){$(a).1z("8")};4(v){3 e=u.2j;4($("#"+z).12("1s")==11){4(e==17){u.1X=C[$(a).12("19")].1h;$(a).4o("8")}1d 4(e==16){$("#"+b+" a.8").1G("8");$(a).1z("8");3 f=$(a).12("19");3 g=C[f].1h;1t(3 i=2T.4p(d,g);i<=2T.4q(d,g);i++){$("#"+M(i).19).1z("8")}}1d{$("#"+b+" a.8").1G("8");$(a).1z("8");u.1X=C[$(a).12("19")].1h}}1d{$("#"+b+" a.8").1G("8");$(a).1z("8");u.1X=C[$(a).12("19")].1h}}};3 O=5(a){3 b=a;6.9(b).4r=5(e){$("#"+b).1S(q)}};3 P=5(a){u.2B=a};3 Q=5(){18 u.2B};3 R=5(){3 b=D("1N");3 c=y.3f.4s(",");1t(3 d=0;d<c.1c;d++){3 e=c[d];3 f=Y(e);4(f==11){3x(e){1n"2n":$("#"+b).1e("4t",5(a){6.9(z).2n()});1i;1n"1Q":$("#"+b).1e("1Q",5(a){$("#"+z).1H("1Q")});1i;1n"2o":$("#"+b).1e("2o",5(a){$("#"+z).1H("2o")});1i;1n"2p":$("#"+b).1e("2p",5(a){$("#"+z).1H("2p")});1i;1n"1r":$("#"+b).1e("1r",5(a){$("#"+z).1H("1r")});1i;1n"1B":$("#"+b).1e("1B",5(a){$("#"+z).1H("1B")});1i;1n"2q":$("#"+b).1e("2q",5(a){$("#"+z).1H("2q")});1i;1n"1R":$("#"+b).1e("1R",5(a){$("#"+z).1H("1R")});1i}}}};3 S=5(){3 a=D("2C");$("#"+z).2R("<1v 1p=\'"+x.2I+"\' 1k=\'1g:4u;4v:4w;1y:3y;\' 19=\'"+a+"\'></1v>");$("#"+z).4x($("#"+a))};3 T=5(a){3 b=D("1P");$("#"+b).1E(a)};3 U=5(){3 a=D("1P");3 b=D("1f");3 c=$("#"+b+" a.21");1t(3 d=0;d<c.1c;d++){3 e=c[d];3 f=$(e).12("19");4($(e).3z("8")&&d<c.1c-1){$("#"+b+" a.8").1G("8");$(c[d+1]).1z("8");3 g=$("#"+b+" a.8").12("19");4(!v){3 h=(q.1K==15)?C[g].1o:C[g].1E;T(h)};4(26(($("#"+g).1y().1w+$("#"+g).1g()))>=26($("#"+b).1g())){$("#"+b).29(($("#"+b).29())+$("#"+g).1g()+$("#"+g).1g())};1i}}};3 V=5(){3 a=D("1P");3 b=D("1f");3 c=$("#"+b+" a.21");1t(3 d=0;d<c.1c;d++){3 e=c[d];3 f=$(e).12("19");4($(e).3z("8")&&d!=0){$("#"+b+" a.8").1G("8");$(c[d-1]).1z("8");3 g=$("#"+b+" a.8").12("19");4(!v){3 h=(q.1K==15)?C[g].1o:C[g].1E;T(h)};4(26(($("#"+g).1y().1w+$("#"+g).1g()))<=0){$("#"+b).29(($("#"+b).29()-$("#"+b).1g())-$("#"+g).1g())};1i}}};3 W=5(){4(q.1M!=15){3 a=D("1P");3 b=6.9(z).1F[6.9(z).1l].3j;4(b.1c>0){3 c=D("1f");3 d=$("#"+c+" a."+b).12("19");3 e=$("#"+d).14("2a-4y");3 f=$("#"+d).14("2a-1y");3 g=$("#"+d).14("28-3A");4(e!=1a){$("#"+a).2b("."+x.1q).12(\'1k\',"2a:"+e)};4(f!=1a){$("#"+a).2b("."+x.1q).14(\'2a-1y\',f)};4(g!=1a){$("#"+a).2b("."+x.1q).14(\'28-3A\',g)};$("#"+a).2b("."+x.1q).14(\'2a-3B\',\'4z-3B\');$("#"+a).2b("."+x.1q).14(\'28-3t\',\'4A\')}}};3 X=5(){3 a=D("1f");3 b=$("#"+a+" a.8");4(b.1c==1){3 c=$("#"+a+" a.8").1o();3 d=$("#"+a+" a.8").12("19");4(d!=1a){3 e=C[d].22;6.9(z).1l=C[d].1h};4(q.1K&&q.1M!=15)W()}1d 4(b.1c>1){3 f=$("#"+z+" > 2r:8").4B("8");1t(3 i=0;i<b.1c;i++){3 d=$(b[i]).12("19");3 g=C[d].1h;6.9(z).1F[g].8="8"}};3 h=6.9(z).1l;s.1U["1l"]=h};3 Y=5(a){4($("#"+z).12("4C"+a)!=1a){18 11};3 b=$("#"+z).2U("4D");4(b&&b[a]){18 11};18 15};3 Z=5(){3 b=D("1f");4(Y(\'2K\')==11){3 c=C[$("#"+b+" a.8").12("19")].1o;4($.3C(t)!==$.3C(c)&&t!==""){$("#"+z).1H("2K")}};4(Y(\'1r\')==11){$("#"+z).1H("1r")};4(Y(\'2J\')==11){$(6).1e("1r",5(a){$("#"+z).2n();$("#"+z)[0].2J();X();$(6).1I("1r")})}};3 2S=5(a){3 b=D("2k");4(a==1)$("#"+b).14({3D:\'0 4E%\'});1d $("#"+b).14({3D:\'0 0\'})};3 3E=5(){1t(3 i 2y 6.9(z)){4(3g(6.9(z)[i])!=\'5\'&&6.9(z)[i]!==1a&&6.9(z)[i]!==1m){s.1A(i,6.9(z)[i],11)}}};3 3F=5(a,b){4(M(b)!=-1){6.9(z)[a]=b;3 c=D("1f");$("#"+c+" a.8").1G("8");$("#"+M(b).19).1z("8");3 d=M(6.9(z).1l).1E;T(d)}};3 3G=5(i,a){4(a==\'d\'){1t(3 b 2y C){4(C[b].1h==i){4F C[b];1i}}};3 c=0;1t(3 b 2y C){C[b].1h=c;c++}};3 2V=5(){3 a=D("1f");3 b=D("1N");3 c=$("#"+b).1y();3 d=$("#"+b).1g();3 e=$(3H).1g();3 f=$(3H).29();3 g=$("#"+a).1g();3 h={1L:q.1L,1w:(c.1w+d)+"1T",1x:"2c"};3 i=q.3c;3 j=15;3 k=x.2m;$("#"+a).1G(x.2m);$("#"+a).1G(x.2l);4((e+f)<2T.4G(g+d+c.1w)){3 l=c.1w-g;4((c.1w-g)<0){l=10};h={1L:q.1L,1w:l+"1T",1x:"2c"};i="2W";j=11;k=x.2l};18{2X:j,3I:i,14:h,2s:k}};1b.3w=5(){4((s.2d("1j",11)==11)||(s.2d("1F",11).1c==0))18;3 c=D("1f");4(1J!=""&&c!=1J){$("#"+1J).3J("2Y");$("#"+1J).14({1L:\'0\'})};4($("#"+c).14("1x")=="2c"){t=C[$("#"+c+" a.8").12("19")].1o;$(6).1e("1Z",5(a){3 b=a.3u;4(b==39||b==40){a.24();a.2x();U()};4(b==37||b==38){a.24();a.2x();V()};4(b==27||b==13){s.25();X()};4($("#"+z).12("3K")!=1a){6.9(z).3K()}});$(6).1e("2L",5(a){4($("#"+z).12("3L")!=1a){6.9(z).3L()}});$(6).1e("1r",5(a){4(Q()==15){s.25()}});3 d=2V();$("#"+c).14(d.14);4(d.2X==11){$("#"+c).14({1x:\'2t\'});$("#"+c).1z(d.2s);4(s.1D["2z"]!=1m){2e(s.1D["2z"])(s)}}1d{$("#"+c)[d.3I]("2Y",5(){$("#"+c).1z(d.2s);4(s.1D["2z"]!=1m){2e(s.1D["2z"])(s)}})};4(c!=1J){1J=c}}};1b.25=5(){3 b=D("1f");$(6).1I("1Z");$(6).1I("2L");$(6).1I("1r");3 c=2V();4(c.2X==11){$("#"+b).14("1x","2c")};$("#"+b).3J("2Y",5(a){Z();$("#"+b).14({1L:\'0\'});4(s.1D["3M"]!=1m){2e(s.1D["3M"])(s)}})};1b.1l=5(i){s.1A("1l",i)};1b.1A=5(a,b,c){4(a==1a||b==1a)3N{3O:"1A 4H 4I?"};s.1U[a]=b;4(c!=11){3x(a){1n"1l":3F(a,b);1i;1n"1j":s.1j(b,11);1i;1n"1s":6.9(z)[a]=b;v=($(r).12("1C")>0||$(r).12("1s")==11)?11:15;4(v){3 d=$("#"+z).1g();3 f=D("1f");$("#"+f).14("1g",d+"1T");3 g=D("1O");$("#"+g).2v();3 f=D("1f");$("#"+f).14({1x:\'2t\',1y:\'2P\'});K()};1i;1n"1C":6.9(z)[a]=b;4(b==0){6.9(z).1s=15};v=($(r).12("1C")>0||$(r).12("1s")==11)?11:15;4(b==0){3 g=D("1O");$("#"+g).2W();3 f=D("1f");$("#"+f).14({1x:\'2c\',1y:\'3y\'});3 h="";4(6.9(z).1l>=0){3 i=M(6.9(z).1l);h=i.1E;N($("#"+i.19))};T(h)}1d{3 g=D("1O");$("#"+g).2v();3 f=D("1f");$("#"+f).14({1x:\'2t\',1y:\'2P\'})};1i;4J:4K{6.9(z)[a]=b}4L(e){};1i}}};1b.2d=5(a,b){4(a==1a&&b==1a){18 s.1U};4(a!=1a&&b==1a){18(s.1U[a]!=1a)?s.1U[a]:1m};4(a!=1a&&b!=1a){18 6.9(z)[a]}};1b.3v=5(a){3 b=D("1N");4(a==11){$("#"+b).2W()}1d 4(a==15){$("#"+b).2v()}1d{18 $("#"+b).14("1x")}};1b.4M=5(a,b){3 c=a;3 d=c.1o;3 e=(c.22==1a||c.22==1m)?d:c.22;3 f=(c["1V"]==1a||c["1V"]==1m)?\'\':c["1V"];3 i=(b==1a||b==1m)?6.9(z).1F.1c:b;6.9(z).1F[i]=2h 4N(d,e);4(f!=\'\')6.9(z).1F[i]["1V"]=f;3 g=M(i);4(g!=-1){3 h=G(6.9(z).1F[i],i,"","");$("#"+g.19).1E(h)}1d{3 h=G(6.9(z).1F[i],i,"","");3 j=D("1f");$("#"+j).4O(h);K()}};1b.2u=5(i){6.9(z).2u(i);4((M(i))!=-1){$("#"+M(i).19).2u();3G(i,\'d\')};4(6.9(z).1c==0){T("")}1d{3 a=M(6.9(z).1l).1E;T(a)};s.1A("1l",6.9(z).1l)};1b.1j=5(a,b){6.9(z).1j=a;3 c=D("1N");4(a==11){$("#"+c).14("2w",x.1j);s.25()}1d 4(a==15){$("#"+c).14("2w",1)};4(b!=11){s.1A("1j",a)}};1b.2Z=5(){18(6.9(z).2Z==1a)?1m:6.9(z).2Z};1b.31=5(){4(2f.1c==1){18 6.9(z).31(2f[0])}1d 4(2f.1c==2){18 6.9(z).31(2f[0],2f[1])}1d{3N{3O:"4P 1h 4Q 4R!"}}};1b.3P=5(a){18 6.9(z).3P(a)};1b.1s=5(a){4(a==1a){18 s.2d("1s")}1d{s.1A("1s",a)}};1b.1C=5(a){4(a==1a){18 s.2d("1C")}1d{s.1A("1C",a)}};1b.4S=5(a,b){s.1D[a]=b};1b.4T=5(a){2e(s.1D[a])(s)};3 3Q=5(){s.1A("32",$.1S.32);s.1A("33",$.1S.33)};3 3R=5(){L();3E();3Q();4(q.2A!=\'\'){2e(q.2A)(s)}};3R()};$.1S={32:2.36,33:"4U 4V",3h:20,4W:5(a,b){18 $(a).1S(b).2U("1Y")}};$.4X.35({1S:5(b){18 1b.2O(5(){3 a=2h 34(1b,b);$(1b).2U(\'1Y\',a)})}})})(4Y);',62,309,'|||var|if|function|document||selected|getElementById||||||||||||||||||||||||||||||||||||||||||||||||||||||true|attr||css|false|||return|id|undefined|this|length|else|bind|postChildID|height|index|break|disabled|style|selectedIndex|null|case|text|class|ddTitleText|mouseup|multiple|for|span|div|top|display|position|addClass|set|mouseover|size|onActions|html|options|removeClass|trigger|unbind|bh|showIcon|zIndex|useSprite|postID|postTitleID|postTitleTextID|click|mouseout|msDropDown|px|ddProp|title|sDiv|oldIndex|dd|keydown||enabled|value||preventDefault|close|parseInt||padding|scrollTop|background|find|none|get|eval|arguments|visibleRows|new|keyboardAction|currentKey|postArrowID|borderTop|noBorderTop|focus|dblclick|mousedown|mousemove|option|border|block|remove|hide|opacity|stopPropagation|in|onOpen|onInit|insideWindow|postElementHolder|postAID|postOPTAID|ddTitle|arrow|ddChild|ddOutOfVision|blur|change|keyup|opt|_|each|relative|width|after|bj|Math|data|bn|show|opp|fast|form||item|version|author|bi|extend|||||rowHeight|mainCSS|animStyle|Object|postInputhidden|actions|typeof|counter|children|className|img|src|align|absmiddle|href|javascript|void|font|first|bottom|keyCode|visible|open|switch|absolute|hasClass|left|repeat|trim|backgroundPosition|bk|bl|bm|window|ani|slideUp|onkeydown|onkeyup|onClose|throw|message|namedItem|bo|bp|120|9999|slideDown|_msddHolder|_msdd|_title|_titletext|_child||_msa|_msopta|postInputID|_msinput|_arrow|_inp|keypress|prop|tabindex|msdrpdd|val|nodeName|OPTGROUP|opta|weight|bold|italic|clear|both|label|1px|solid|c3c3c3|toggleClass|min|max|refresh|split|mouseenter|0px|overflow|hidden|appendTo|image|no|2px|removeAttr|on|events|100|delete|floor|to|what|default|try|catch|add|Option|append|An|is|required|addMyEvent|fireEvent|Marghoob|Suleman|create|fn|jQuery'.split('|'),0,{}));
(function ($) {
Drupal.behaviors.lang_dropdown = {
  attach: function (context, settings) {
    var settings = settings || Drupal.settings;

    if (settings.lang_dropdown) {
      var flags = settings.lang_dropdown.jsWidget.languageicons;
      if (flags) {
        $.each(flags, function(index, value) {
          $('select.lang-dropdown-select-element option[value="' + index + '"]').attr('title', value);
        });
      }
      var msddSettings = settings.lang_dropdown.jsWidget;

      $('select.lang-dropdown-select-element').msDropDown({
        visibleRows: msddSettings.visibleRows,
        rowHeight: msddSettings.rowHeight,
        animStyle: msddSettings.animStyle
      });
    }

    $('select.lang-dropdown-select-element').change(function() {
      var lang = this.options[this.selectedIndex].value;
      var href = $(this).parents('form').find('input[name="' + lang + '"]').val();
      document.location.href = href;
    });
  }
};
})(jQuery);
;
