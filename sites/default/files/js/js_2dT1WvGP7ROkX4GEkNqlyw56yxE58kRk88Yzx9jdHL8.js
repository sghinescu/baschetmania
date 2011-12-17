Drupal.locale = { 'pluralFormula': function ($n) { return Number((($n==1)?(0):((($n==0)||((($n%100)>0)&&(($n%100)<20)))?(1):2))); }, 'strings': {"An AJAX HTTP error occurred.":"A ap\u0103rut o eroare AJAX HTTP.","An AJAX HTTP request terminated abnormally.":"O cerere AJAX HTTP s-a terminat anormal.","Path: !uri":"Cale: !uri","StatusText: !statusText":"StatusText: !statusText","Hide":"Ascundere","Show":"Afi\u015fare","Configure":"Configureaz\u0103","Show row weights":"Afi\u015fare coloana greutate","Hide row weights":"Ascundere coloana greutate","Drag to re-order":"Trage pentru a reordona","Changes made in this table will not be saved until the form is submitted.":"Modific\u0103rile f\u0103cute acestui tabel nu vor fi salvate p\u00e2n\u0103 c\u00e2nd formularul nu este trimis.","Please wait...":"V\u0103 rug\u0103m, a\u015ftepta\u0163i...","Select all rows in this table":"Selecteaz\u0103 toate r\u00e2ndurile din acest tabel","Deselect all rows in this table":"Deselecteaz\u0103 toate r\u00e2ndurile din acest tabel","none":"nimic"} };;
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
/* $Id: sweaver_plugin.js,v 1.1.4.5 2010/11/08 10:33:09 swentel Exp $ */

(function ($) {

Drupal.Sweaver = Drupal.Sweaver || {};
Drupal.Sweaver.invokes = Drupal.Sweaver.invokes || {};

Drupal.Sweaver.messageTimer = null;
Drupal.Sweaver.changed = false;
Drupal.Sweaver.popup = '';

Drupal.Sweaver.writeCss = function(context) {

  var fullCss = '';
  $.each(Drupal.Sweaver.invokes, function(func) {
    var css = this.execute();
    if (css != '') {
      fullCss += css;
    }
  });
  $style = $('head style[title="sweaver"]');
  $style.remove();
  $('head').append('<style type="text/css" title="sweaver">' + fullCss + '</style>');
  $('[name=css-rendered]').val(fullCss);

  Drupal.Sweaver.changed = true;
};

$(document).ready(function() {

  // Add sweaver class for extra margin at bottom.
  $('body').addClass('sweaver');

  // Avoid overlap with the localization client.
  if ($('#l10n-client').length > 0) {
    $('#sweaver').css({'bottom': $('#l10n-client .labels').height()});
  }

  // Gather open/close state and tab information
  Drupal.Sweaver.activeTab = Drupal.Sweaver.cookie('sweaver_active_tab') ? Drupal.Sweaver.cookie('sweaver_active_tab') : $('#sweaver-tabs .tab:first').attr('id');
  $('#' + Drupal.Sweaver.activeTab).addClass('active-tab');
  Drupal.Sweaver.cookie('sweaver_active_tab', Drupal.Sweaver.activeTab);
  Drupal.Sweaver.open = Drupal.Sweaver.cookie('sweaver_open') ? Drupal.Sweaver.cookie('sweaver_open') : 'true';
  Drupal.Sweaver.cookie('sweaver_open', Drupal.Sweaver.open);

  // Open/close the Sweaver bar.
  $('#sweaver-tabs .close a').click(function(){
    Drupal.Sweaver.toggleBar($(this).parent());
  });

  // Toggle the horizontal tabs.
  Drupal.Sweaver.container = Drupal.Sweaver.activeTab.substr(4, Drupal.Sweaver.activeTab.length - 4);
  $('#sweaver-tabs .tab a').click(function(){
    Drupal.Sweaver.toggleTabs($(this).parent());
  });

  // Print messages if any
  if ($('[name=sweaver-editor-messages]').val() != '') {
    Drupal.Sweaver.setMessage($('[name=sweaver-editor-messages]').val(), 5000);
  }

  // toggle vertical tabs
  $('#sweaver .vertical-tabs a').click(function(){
    if (!$(this).hasClass('active')) {
      // handle active classes.
      $('#sweaver .vertical-tabs .active').removeClass('active');
      $(this).addClass('active');
      var id = $(this).parent().attr('id').replace('tab-', '');
      $('#sweaver .vertical-content #container-' + id).siblings().hide();
      $('#sweaver .vertical-content #container-' + id).show();
    }
    return false;
  });

});

/**
 * Separate toggle bar function.
 */
Drupal.Sweaver.toggleBar = function (tab) {
  if (Drupal.Sweaver.open == 'false') {
    $('#sweaver-middle').css('height', 'auto');
    tab.removeClass('active-tab');
    $('#' + Drupal.Sweaver.activeTab).addClass('active-tab');
    Drupal.Sweaver.open = 'true';
  }
  else {
    $('#sweaver-middle').css("height", 0);
    Drupal.Sweaver.activeTab =  $('#sweaver-tabs .active-tab').attr('id');
    tab.addClass('active-tab');
    Drupal.Sweaver.open = 'false';
  }
  // Hide the extra margin at the bottom of the screen.
  $('body').toggleClass('sweaver');

  Drupal.Sweaver.toggleClicked();
  Drupal.Sweaver.cookie('sweaver_open', Drupal.Sweaver.open);
}

/**
 * Separate toggle tabs function.
 */
Drupal.Sweaver.toggleTabs = function (tab) {
  // Get the container that has to be shown.
  var container = tab.attr('id').replace('tab-', '');
  if (container != Drupal.Sweaver.container) {
    //Drupal.Sweaver.toggleBar(tab);
    if (Drupal.Sweaver.open == 'false') {
      $('#sweaver-middle').css("height", 'auto');
      Drupal.Sweaver.open = 'true';
      $('body').addClass('sweaver');
    }
    tab.siblings().removeClass('active-tab');
    tab.toggleClass('active-tab');
    $('#'+ container + ' > div').show();
    $('#'+ Drupal.Sweaver.container + ' > div').hide();
    Drupal.Sweaver.container = container;
  }
  else {
    Drupal.Sweaver.toggleBar(tab);
  }
  Drupal.Sweaver.activeTab =  tab.attr('id');
  Drupal.Sweaver.cookie('sweaver_open', Drupal.Sweaver.open);
  Drupal.Sweaver.cookie('sweaver_active_tab', Drupal.Sweaver.activeTab);
  Drupal.Sweaver.hidePopup();
  Drupal.Sweaver.toggleClicked();
};

/**
 * Separate switch tab function. Takes the tab as arguments and the ID's
 * of the containers will be derived from the tabs.
 */
Drupal.Sweaver.toggleClicked = function () {
  if (Drupal.Sweaver.open == 'true' && Drupal.Sweaver.activeTab == 'tab-sweaver_plugin_editor') {
    // Show the outline on all 'clicked' classes.
    $('.sweaver-clicked-temp').removeClass('sweaver-clicked-temp').addClass('sweaver-clicked');
  }
  else {
    // Hide the outline on all 'clicked' elements
    $('.sweaver-clicked').removeClass('sweaver-clicked').addClass('sweaver-clicked-temp');
  }
}

/**
 * Separate switch tab function. Takes the tab as arguments and the ID's
 * of the containers will be derived from the tabs.
 */
Drupal.Sweaver.switchTab = function (remove_tab, show_tab) {
  var container_remove = remove_tab.replace('tab-', '');
  var container_show = show_tab.replace('tab-', '');

  $('#'+ remove_tab).removeClass('active-tab');
  $('#'+ show_tab).toggleClass('active-tab');
  $('#'+ container_remove + ' > div').hide();
  $('#'+ container_show + ' > div').show();
  Drupal.Sweaver.container = container_show;

  Drupal.Sweaver.activeTab = show_tab;
  Drupal.Sweaver.cookie('sweaver_active_tab', show_tab);
  Drupal.Sweaver.hidePopup();
}

/**
 * Display Sweaver messages.
 */
Drupal.Sweaver.setMessage = function(message, timeout) {
  Drupal.Sweaver.setMessagePosition();
  $('#sweaver-messages .message').html(message);
  $('#sweaver-messages').fadeIn('fast');
  Drupal.Sweaver.messageTimer = window.setTimeout(function() {$('#sweaver-messages').fadeOut('normal');}, timeout);

  // Bind close messages.
  $('#sweaver-messages .close').click(function(){
    $('#sweaver-messages').hide();
    clearTimeout(Drupal.Sweaver.messageTimer);
  });

  // Bind resize on window.
  $(window).resize(function(event){
    Drupal.Sweaver.setMessagePosition();
  });
}

/**
 * Set the position of the message.
 */
Drupal.Sweaver.setMessagePosition = function(){
  messageTop = $(window).height() - $('#sweaver').outerHeight() - $('#sweaver-messages').outerHeight() - 7;
  $('#sweaver-messages').css({'top' : messageTop});
}

/**
 * Display a fullscreen popup.
 */
Drupal.Sweaver.showPopup = function(message, width, height) {
  // Close the previous popup - if any.
  if (Drupal.Sweaver.popup != '') {
    $(Drupal.Sweaver.popup).hide();
  }

  // Create popup.
  popup = $('#sweaver-popup');
  $(message).show();
  Drupal.Sweaver.popup = message;
  Drupal.Sweaver.setPopupSize(popup, width, height);
  popup.fadeIn('fast');

  // Bind close button action.
  $('.close', popup).click(function(){
    $(message).hide();
    Drupal.Sweaver.hidePopup();
  });

  // Bind resize on window if no width or height was given
  // and the popup is full screen.
  if (!width && !height) {
    $(window).bind('resize.Drupal.Sweaver', function(event){
      Drupal.Sweaver.setPopupSize(popup);
    });
  }
}

/**
 * Set the popup width and height.
 */
Drupal.Sweaver.setPopupSize = function(popup, width, height) {
  popupBorder = 7;
  // Reset overflow in case we don't need a scrollbar.
  $('.content', popup).css({'overflow-y' : 'hidden'});

  // Calculate width and height.
  var popupWidth = width ? width : $(window).width() - (popupBorder * 2) - parseInt(popup.css('padding-left')) - parseInt(popup.css('padding-right'));
  var popupHeight = height ? height : $(window).height() - $('#sweaver').outerHeight() - (popupBorder * 2) - parseInt(popup.css('padding-top')) - parseInt(popup.css('padding-bottom'));
  $('.content', popup).css({'height' : popupHeight, 'width' : popupWidth});

  // Center the popup in case a width or height was given.
  var popupLeft = width ? (($(window).width() - parseInt(popupWidth)) / 2) : popupBorder;
  var popupTop = height ? (($(window).height() - parseInt(popupHeight)) / 2) : popupBorder;
  popup.css({'left' : popupLeft + 'px', 'top' : popupTop + 'px'});

  // Add scrollbar if in fullscreen mode.
  if (!height) {
    $('.content', popup).css({'overflow-y' : 'scroll'});
  }
}

/**
 * Hide a popup.
 */
Drupal.Sweaver.hidePopup = function() {
  $('#sweaver-popup').hide();
  $(window).unbind('resize.Drupal.Sweaver');
}

/**
 * Set behaviors on link which will open the popup.
 */
Drupal.behaviors.sweaverOpenPopup = {
  attach: function (context) {
  $('#sweaver .popup-link a').click(function() {
      var wrapper = $(this).attr('id').replace('link', 'data');

      popup = $('#sweaver-popup');
      if (popup.is(':visible') && $(this).hasClass('open-tab')) {
        Drupal.Sweaver.hidePopup();
        $(this).removeClass('open-tab');
      }
      else {
        $('#sweaver .open-style-actions').removeClass('open-style-actions');
        $('#sweaver .open-tab').removeClass('open-tab');
        $(this).addClass('open-tab');
        Drupal.Sweaver.showPopup($('#'+ wrapper));
      }
      return false;
    });

    $('#sweaver .form-submit').click(function() {
      Drupal.Sweaver.hidePopup();
    });

    // Open a popup when clicking on an open/save/delete/publish link.
    $('#sweaver .style-actions-link a').click(function() {
      var wrapper = $(this).attr('id').replace('link', 'data');

      popup = $('#sweaver-popup');
      if (popup.is(':visible') && $(this).hasClass('open-style-actions')) {
        Drupal.Sweaver.hidePopup();
        $(this).removeClass('open-style-actions');
      }
      else {
        $('#sweaver .open-style-actions').removeClass('open-style-actions');
        $('#sweaver .open-tab').removeClass('open-tab');
        $(this).addClass('open-style-actions');
        Drupal.Sweaver.hidePopup();
        Drupal.Sweaver.showPopup($('#'+ wrapper), '400px', '200px');
      }
      return false;
    });
  }
};


/**
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

/**
 * Create a cookie with the given name and value and other optional parameters.
 *
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Set the value of a cookie.
 * @example $.cookie('the_cookie', 'the_value', { expires: 7, path: '/', domain: 'jquery.com', secure: true });
 * @desc Create a cookie with all available options.
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Create a session cookie.
 * @example $.cookie('the_cookie', null);
 * @desc Delete a cookie by passing null as value. Keep in mind that you have to use the same path and domain
 *       used when the cookie was set.
 *
 * @param String name The name of the cookie.
 * @param String value The value of the cookie.
 * @param Object options An object literal containing key/value pairs to provide optional cookie attributes.
 * @option Number|Date expires Either an integer specifying the expiration date from now on in days or a Date object.
 *                             If a negative value is specified (e.g. a date in the past), the cookie will be deleted.
 *                             If set to null or omitted, the cookie will be a session cookie and will not be retained
 *                             when the the browser exits.
 * @option String path The value of the path atribute of the cookie (default: path of page that created the cookie).
 * @option String domain The value of the domain attribute of the cookie (default: domain of page that created the cookie).
 * @option Boolean secure If true, the secure attribute of the cookie will be set and the cookie transmission will
 *                        require a secure protocol (like HTTPS).
 * @type undefined
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */

/**
 * Get the value of a cookie with the given name.
 *
 * @example $.cookie('the_cookie');
 * @desc Get the value of a cookie.
 *
 * @param String name The name of the cookie.
 * @return The value of the cookie.
 * @type String
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */
Drupal.Sweaver.cookie = function(name, value, options) {
  if (typeof value != 'undefined') { // name and value given, set cookie
    options = options || {};
    if (value === null) {
      value = '';
      options.expires = -1;
    }
    var expires = '';
    if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
      var date;
      if (typeof options.expires == 'number') {
        date = new Date();
        date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
      }
      else {
        date = options.expires;
      }
      expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
    }
    // CAUTION: Needed to parenthesize options.path and options.domain
    // in the following expressions, otherwise they evaluate to undefined
    // in the packed version for some reason...
    var path = options.path ? '; path=' + (options.path) : '; path=/';
    var domain = options.domain ? '; domain=' + (options.domain) : '';
    var secure = options.secure ? '; secure' : '';
    document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
  }
  else { // only name given, get cookie
    var cookieValue = null;
    if (document.cookie && document.cookie != '') {
      var cookies = document.cookie.split(';');
      for (var i = 0; i < cookies.length; i++) {
        var cookie = jQuery.trim(cookies[i]);
        // Does this cookie string begin with the name we want?
        if (cookie.substring(0, name.length + 1) == (name + '=')) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }
};

})(jQuery);;
// $Id: sweaver_plugin_editor.js,v 1.1.2.21.2.20 2010/11/08 16:01:24 jyve Exp $

/**
 * Add the sweaver bar at the bottom of the theme
 */

(function ($) {

Drupal.Sweaver = Drupal.Sweaver || {};

Drupal.Sweaver.types = new Array(); // A type groups different properties.
Drupal.Sweaver.properties = new Array(); // The actual css properties.
Drupal.Sweaver.selectors = new Array(); // The list of defined selector objects.
Drupal.Sweaver.css = new Object(); // Object with all targets and their properties.
Drupal.Sweaver.path = new Array(); // Full path to the root of the document.
Drupal.Sweaver.pathIndexes = new Array(); // An array with the indexes of all selected items.
Drupal.Sweaver.activePath = ''; // Currently active path including pseudo-classes.
Drupal.Sweaver.safeActivePath = ''; // Currently active path excluding pseudo-classes.
Drupal.Sweaver.activeElement = new Object(); // Currently active element.
Drupal.Sweaver.updateMode = true; // should the form updates be saved in css?
Drupal.Sweaver.changesboxcheck = false; // Changes box check.

/**
 * Hook onload behavior
 */
$(document).ready(function() {

  Drupal.Sweaver.init();

  Drupal.Sweaver.writeCss();

  Drupal.Sweaver.changed = false;

  Drupal.Sweaver.addSliders();

  Drupal.Sweaver.addColorPicker();

  Drupal.Sweaver.updateForm();

  Drupal.Sweaver.bindClicks();

});

/**
 * Implements Drupal.Sweaver.invokes.processCSS().
 */
Drupal.Sweaver.invokes.editor = {
  execute: function (context, settings) {
    var css = '';
    var fullCss = '';
    var cssContent = '';

    for (var key in Drupal.Sweaver.css) {
      var target = Drupal.Sweaver.css[key];
      for (var prop in target) {
        if (Drupal.Sweaver.properties[prop]) {

          var properties = Drupal.Sweaver.properties[prop]['property'].split(' ');
          $.each(properties, function(i, property) {
            // Don't write anything if the value is empty.
            // 0 is not empty!
            if (target[prop] == '' && target[prop] != '0') {
              cssContent += '';
            }
            // Don't add a prefix and suffix for these exceptions.
            else if ((property == 'background-color' && target[prop] == 'transparent') || (property == 'background-image' && target[prop] == 'none')) {
              cssContent += '  ' + property + ': ' + target[prop] + ';\n';
            }
            else {
              cssContent += '  ' + property + ': ' + Drupal.Sweaver.properties[prop].prefix + target[prop] + Drupal.Sweaver.properties[prop].suffix + ';\n';
            }
          });
        }
      }

      if (cssContent != '') {
        css += key + '{\n';
        css += cssContent;
        css += '}\n';
        fullCss += css;
        css = '';
        cssContent = '';
      }
      // Remove key from Drupal.Sweaver.css
      else {
        delete Drupal.Sweaver.css[key];
      }
    }

    // Store css in hidden field in save form
    $("#sweaver [name=sweaver-css]").val($.toJSON(Drupal.Sweaver.css));

    // Add inline css
    $("#sweaver-form [name=sweaver-css]").val(fullCss);

    return fullCss;
  }
};

/**
 * Initialize member variables and properties.
 */
Drupal.Sweaver.init = function() {

  // Get previously stored information or create empty object with all targets
  db_css = $("[name=sweaver-css]");
  if (db_css.val() && db_css.val() != '[]'){
    Drupal.Sweaver.css = $.evalJSON(db_css.val());
    db_css.val('');
  }

  // Get Sweaver selectors.
  Drupal.Sweaver.selectors = Drupal.settings.sweaver['selectors'];

  // Get Sweaver types.
  Drupal.Sweaver.types = Drupal.settings.sweaver['types'];

  // Get Sweaver properties.
  Drupal.Sweaver.properties = Drupal.settings.sweaver['properties'];

  // Get classes that will never be used in the paths or generated css.
  Drupal.Sweaver.excludeClasses = Drupal.settings.sweaver['exclude_classes'];

  // Add a link popup to be able to follow links.
  $('body').append('<a href="#" id="follow-link">' + Drupal.t('Click here to follow this link') + '</a>');
}

/**
 * Get all css values and update the form
 */
Drupal.Sweaver.updateForm = function() {

  // Empty form values and hide unnecessary fields
  Drupal.Sweaver.initForm();

  // Prevent changes from being saved
  Drupal.Sweaver.updateMode = false;

  // Update form with saved settings
  if (Drupal.Sweaver.activePath != '') {
    if ($("#tab-sweaver_plugin_editor").hasClass('active-tab')) {
      $("#sweaver_plugin_editor #sweaver-editor").show();
    }
    var target = '';
    if (!isEmpty(Drupal.Sweaver.activeElement)) {
      var type = Drupal.Sweaver.activeElement.type;
      if (Drupal.Sweaver.types[type]) {
        $.each(Drupal.Sweaver.types[type], function (index, object){
          if (Drupal.Sweaver.properties[object]){
	          var properties = Drupal.Sweaver.properties[object]['property'].split(' ');
	          var tempValue = '';
	          var value = '';
	          $.each(properties, function(i, property) {
	            // Are there pseudo-classes in the active path? If so check the saved css for any values that have been set.
	            // We have do this since jQuery cannot get any values for selectors with pseudo-classes.
	            if (Drupal.Sweaver.safeActivePath != Drupal.Sweaver.activePath && Drupal.Sweaver.css[Drupal.Sweaver.activePath] && Drupal.Sweaver.css[Drupal.Sweaver.activePath][property]) {
                value = Drupal.Sweaver.properties[property].prefix + Drupal.Sweaver.css[Drupal.Sweaver.activePath][property] + Drupal.Sweaver.properties[property].suffix;
              }
              else {
                value = $(Drupal.Sweaver.safeActivePath).css(property);
              }
	            if (tempValue == '') {
	              tempValue = value;
	            }
	            else {
	              if (tempValue != value) {
	                value = '';
	                return false;
	              }
	            }
	          });
	          if(value != '' && !isEmpty(Drupal.Sweaver.properties[object]) && Drupal.Sweaver.properties[object].type == 'color') {
	            $('#' + object + ' .colorSelector div').css('cssText', 'background-color: ' + value + ' !important;');
	          }
	          else if (value && !isEmpty(Drupal.Sweaver.properties[object]) && Drupal.Sweaver.properties[object].type == 'image') {
	            // Remove the url() from around the image url.
	            // Mozilla browsers wrap in url(""), while webkit browsers wrap in url()
	            // so we need two replacements.
	            stripped = value.replace('url("', '').replace('")', '').replace('url(', '').replace(')', '');
	            $("#sweaver_plugin_editor #edit-" + object).val(stripped);
	          }
	          else {
	            if (value) {
                // Make the sure it is a the string.
                value = value + '';
	              $("#sweaver_plugin_editor #edit-" + object).val(value.replace('px', ''));
	            }
	          }
          }
        });
      }
    }
  }

  Drupal.Sweaver.updateMode = true;
}

/**
 * Empty form values and hide unnecessary fields.
 */
Drupal.Sweaver.initForm = function() {

  // Hide all sliders, all groups and all containers.
  Drupal.Sweaver.hideOverlays();
  $('#sweaver-editor .sweaver-group').hide();
  $('#sweaver-editor .container').hide();

  if (!isEmpty(Drupal.Sweaver.activeElement)) {
    // Decide which items should be shown or hidden.

    var type = Drupal.Sweaver.activeElement.type;
    $.each(Drupal.Sweaver.properties, function(index, object){
      if(object.name in Drupal.Sweaver.types[type]) {
        $('#sweaver .form-item-' + object.name).show();
        // From the moment that we have an visible element in a group, we need to show that group.
        $('#sweaver .form-item-' + object.name).parents('.sweaver-group').show();
        // From the moment that we have an visible element in a container, we need to show that container.
        $('#sweaver .form-item-' + object.name).parents('.container').show();
      }
      else {
        $('#sweaver .form-item-' + object.name).hide();
      }
    });
  }
}

/**
 * Show colorPicker and hook events to it
 */
Drupal.Sweaver.addColorPicker = function() {
  $('#sweaver .colorSelector').each(function() {
    var object = $(this);
    var property = object.parent().attr('id');
    object.ColorPicker({
      color: '#ffffff',
      // Determine the current color and send it to colorpicker.
      onBeforeShow: function () {
        var current_color_object = {};
        var current_color_value = ($('div', this).css('background-color')).replace('rgba(', '').replace('rgb(', '').replace(')', '').split(',');
        if (current_color_value[0] != 'transparent') {
          current_color_object.r = current_color_value[0];
          current_color_object.g = current_color_value[1];
          current_color_object.b = current_color_value[2];
          $(this).ColorPickerSetColor(current_color_object);
        }
        else {
          current_color_object.r = '255';
          current_color_object.g = '255';
          current_color_object.b = '255';
          $(this).ColorPickerSetColor(current_color_object);
        }
      },
      onShow: function (colpkr) {
        $(colpkr).fadeIn(500);
        if (object.parents('.sweaver-group-content').length == 0) {
          Drupal.Sweaver.hideOverlays();
        }
        return false;
      },
      onHide: function (colpkr) {
        $(colpkr).fadeOut(500);
        return false;
      },
      onChange: function (hsb, hex, rgb) {
      var preview = hex;
      if (hex != 'transparent') {
        preview = '#'+ hex;
      }
        $('div', object).css('cssText', 'background-color:' + preview + '!important;');
        if (Drupal.Sweaver.updateMode) {
          Drupal.Sweaver.setValue(property, hex);
        }
      }
    });
  });
}

/*
 * Add sliders through jQuery UI
 */
Drupal.Sweaver.addSliders = function() {
  $("#sweaver .slider-value").each(function() {
    $(this).after('<div class="slider-wrapper"><div id="' + $(this).attr('id').substr(5, $(this).attr('id').length - 5) + '-slider" class="slider"></div></div>');
  });

  // Move the slider to the right position on show.
  $("#sweaver .slider-value").click(function() {
    Drupal.Sweaver.updateMode = false;
    $(this).siblings('.slider-wrapper').children().slider("option", "value", $(this).val());
    Drupal.Sweaver.updateMode = true;
  });

  $("#sweaver .slider").each(function() {
    id = $(this).attr('id').replace('-slider', '');
    var minSlider = Drupal.Sweaver.properties[id].slider_min;
    if (minSlider == null || minSlider == '') {
      minSlider = 0;
    }
    var maxSlider = Drupal.Sweaver.properties[id].slider_max;
    if (maxSlider == null || maxSlider == '') {
      maxSlider = 2000;
    }
    $(this).slider({
      min: minSlider,
      max: maxSlider,
      slide: function(event, ui) {
        id = $(this).attr("id").replace('-slider','');
        $('#edit-' + id).val(ui.value);
        if (Drupal.Sweaver.updateMode) {
          Drupal.Sweaver.setValue(id, ui.value);
        }
      }
    });
  });
}

/**
 * Loop through all clickable area's and bind click
 */
Drupal.Sweaver.bindClicks = function() {

  // Get a list of selectors to exclude.
  var excludes = Drupal.settings.sweaver['exclude_selectors'];

  // Add hover outline object.
  $('#sweaver-frontend').append('<div style="position: absolute; top: 0; left: 0; border: 2px dotted #ccc" id="#sweaver-hover"></div>');

  // Never select the editor form as themeable.
  // This function appears to be needed, although we exclude on the click bind too.
  $(excludes).click(function(event) {
    event.stopPropagation();
  });

  // Build an object with all the elements that can be hovered/clicked
  var tempSelectors = $('html').find('*').filter(':parents(' + excludes + '):not(' + excludes + ')');

  // When an element is hovered, add a class 'sweaver-hovered'.
  if (Drupal.settings.sweaver['preview_selector']) {
    tempSelectors
    .bind('mouseenter', function(event){
      // Only do something when the content area is visible.
      if (Drupal.Sweaver.visible()) {
        tempObject = $(event.target);
        object = Drupal.Sweaver.buildSweaverObject(tempObject);
        // Loop through the selectors to see if the current item should be selectable.
        if (!object.translation[0]) {
          $.each(tempObject.parents(), function() {
            tempObject = $(this);
            object = Drupal.Sweaver.buildSweaverObject(tempObject);
            if (object.translation[0]) {
              return false;
            }
          });
        }
        // Make sure only one item has the outline.
        $('.sweaver-hovered').removeClass('sweaver-hovered');

        // Don't add the class on elements that cover the entire screen
        // since that would add a, annoying horizontal scrollbar.
        if (tempObject.outerWidth() != $(window).width()) {
          tempObject.addClass('sweaver-hovered');
        }
      }
    })
    .bind('mouseleave', function(event){
      // Loop through the selectors to see if the current item should be selectable.
      if (Drupal.Sweaver.visible()) {
        tempObject = $(this);
        tempObject.removeClass('sweaver-hovered');

        $.each(tempObject.parents(), function() {
          tempObject = $(this);
          object = Drupal.Sweaver.buildSweaverObject(tempObject);
          if (object.translation[0]) {
            return false;
          }
        });
        if (tempObject.outerWidth() != $(window).width()) {
          tempObject.addClass('sweaver-hovered');
        }
      }
    });
  }

  // When an element is clicked, add a class and build the entire path.
  tempSelectors
  .bind('click', function (event) {
    event.stopPropagation();
    // Only do something when the content area is visible.
    if (Drupal.Sweaver.visible()) {

      tempObject = $(event.target);
      object = Drupal.Sweaver.buildSweaverObject(tempObject);

       // If the clicked object is a link, or an element in a link, prevent default behavior.
       $('#follow-link').hide();
       if(object.tag == 'a' || tempObject.parents('a').length > 0) {
         var position = tempObject.offset();
         var clickObject = tempObject;
         if (object.tag != 'a') {
           clickObject = tempObject.parents('a');
         }
         if (object.id != 'follow-link') {
           $('#follow-link').attr('href', clickObject.attr('href')).css({'top' : position.top + clickObject.outerHeight() + 5, 'left': position.left}).fadeIn();
           event.preventDefault();
         }
       }
       // If the clicked object is a button prevent default behavior.
       if(object.tag == 'input' || object.tag == 'label') {
         event.preventDefault();
       }

      // Don't do anything if the clicked object is the 'follow-link' link.
      if (object.id != 'follow-link') {

	      // Only do something if the clicked item is found in the selectors.
	      if (!object.translation[0]) {
	        $.each(tempObject.parents(), function() {
	          tempObject = $(this);
	          object = Drupal.Sweaver.buildSweaverObject(tempObject);
	          if (object.translation[0]) {
	            return false;
	          }
	        });
	      }

	      // clear the old paths.
	      $('#sweaver_plugin_editor .sweaver-header').html('<div id="full-path" class="clearfix"></div><div id="selected-path" class="clear-block"></div>');

        // Initial check for the changesbox.
        if (Drupal.Sweaver.changesboxcheck == false) {
          Drupal.Sweaver.ChangesBox(true);
          Drupal.Sweaver.changesboxcheck = true;
        }

        // Reset some values.
        Drupal.Sweaver.path.length = 0;
        Drupal.Sweaver.pathIndexes.length = 0;
        $("#selected-path").html('<span class="path-label">' + Drupal.t('Selected item: ') + '</span><span class="path-content"></span>');
        $("#full-path").html('<span class="path-label">' + Drupal.t('Full path: ') + '</span><span class="path-content"></span>');

        // Build path with parents.
        Drupal.Sweaver.buildPath(tempObject);
        Drupal.Sweaver.updateForm();
        Drupal.Sweaver.updateScreen();
      }
    }
  });

  // Toggle changes area.
  $('#changes-toggler').click(function(event){
    event.stopPropagation();
    Drupal.Sweaver.ChangesBox(false);
  });

  // Hide sliders and close groups when clicking outside of them.
  $("#sweaver").click(function() {
    Drupal.Sweaver.hideOverlays();
  });

  // Update css when something is changed in the form.
  $("#sweaver_plugin_editor input[id^=edit-], #sweaver_plugin_editor select[id^=edit-]").change(function(){
    if (Drupal.Sweaver.updateMode) {
      Drupal.Sweaver.setValue($(this).attr('name'), $(this).val());
    }
  });

  // Show the slider when a numeric value is entered.
  $("#sweaver_plugin_editor  .slider-value").click(function(event){
    event.stopPropagation();
    $slider = $(this).siblings('.slider-wrapper');

    if ($slider.css('visibility') == 'visible') {
      // Add an active class for IE position issues.
      $slider.parent().removeClass('active');
      $slider.parents('.sweaver-group').removeClass('active');

      // Close slider again on second click.
      $slider.css({'visibility' : 'hidden'});
    }
    else {
      // Hide all other sliders.
      $('#sweaver_plugin_editor .slider-wrapper').css({'visibility' : 'hidden'});

      // Add an active class for IE position issues.
      $('#sweaver_plugin_editor .form-item, #sweaver_plugin_editor .sweaver-group').removeClass('active');
      $slider.parent().addClass('active');
      $slider.parents('.sweaver-group').addClass('active');

      var left = -($slider.width() / 2) + ($(this).outerWidth() / 2);
      if ($slider.siblings('label').is(':visible')) {
        left += $slider.siblings('label').width();
      }
      var top = $slider.outerHeight();
      $slider.css({'left' : left, 'top' : top}).css({'visibility' : 'visible'});
    }
  });

}

/**
 * Loop through all clickable area's and bind click
 */
Drupal.Sweaver.updateScreen = function() {
  if (Drupal.settings.sweaver['preview_selector']) {
    // Add border around selected element.
    var excludes = Drupal.settings.sweaver['exclude_selectors'];
    $('.sweaver-clicked').removeClass('sweaver-clicked');
    if (Drupal.Sweaver.safeActivePath && $(Drupal.Sweaver.safeActivePath).outerWidth() != $(window).width()) {
      $(Drupal.Sweaver.safeActivePath).filter(':parents(' + excludes + '):not(' + excludes + ')').addClass('sweaver-clicked');
    }
    else {
      // Hide the 'clicked' outlines.
      $('.sweaver-clicked').removeClass('sweaver-clicked');
    }
  }
}

/**
 * Store the parents of a clicked item.
 */
Drupal.Sweaver.buildPath = function(object) {
  var index = 0;

  // Collect info on currently active item.
  Drupal.Sweaver.activeElement = Drupal.Sweaver.buildSweaverObject(object);

  // Add active element to first element in the path array.
  Drupal.Sweaver.path[0] = Drupal.Sweaver.activeElement;

  // Show the currenty active path and the full path.
  Drupal.Sweaver.addToFullPath(index, true);
  Drupal.Sweaver.addToActivePathIndex(0);

  // Traverse all parents and save them in the path array.
  var i = 1;
  var active;
  object.parents().each(function() {

    active = false;
    var parent = Drupal.Sweaver.buildSweaverObject($(this));
    if (parent.translation[0]) {
      Drupal.Sweaver.path[i] = parent;

      // If selector is tagged as 'highlight', automatically select it.
      var match = '';
      $.each(Drupal.Sweaver.selectors, function (index, selector) {
        if (selector.selector == 'sweaver_all_ids' || selector.selector == 'sweaver_all_classes' || selector.selector == 'sweaver_all_tags') {
          return false;
        }
        if (selector.selector == '#' + parent.id || selector.selector == parent.tag) {
          match = selector.selector;
           if (selector.highlight == '1') {
            active = true;
            Drupal.Sweaver.addToActivePathIndex(i);
          }
        } else {
          $.each(parent.classes, function(index, aClass) {
            if (selector.selector == '.' + aClass) {
               match = selector.selector;
               if (selector.highlight == '1') {
                active = true;
                Drupal.Sweaver.addToActivePathIndex(i);
                return false;
              }
            }
          });
        }
        if (match != '') {
         return false;
        }
      });

      // Add all items to the full path except for the html tag.
      if (parent.tag != 'html') {
        Drupal.Sweaver.addToFullPath(i, active);
      }
      i++;
    }
  });
  Drupal.Sweaver.printActivePath();
}

/**
 * Add one item to the full path.
 */
Drupal.Sweaver.addToFullPath = function(index, active) {
  var path_separator = '&nbsp;&gt;&nbsp;';
  var active_class = '';

  // Don't show a seperator after the last item in the path.
  if (index == 0) {
    path_separator = '';
  }

  // Add an active class to the selected items.
  if (active == true) {
    active_class = ' active';
  }

  // Get the list of translated selectors.
  var selectorList = Drupal.Sweaver.path[index].translation;

  // First add the default selector.
  $("#full-path .path-content").prepend('<div class="selector-wrapper' + active_class + '" id="sid-' + index + '"><div class="first-selector"><a title="' + Drupal.t('Click to add this element to the selected path') + '">' + selectorList[0] + '</a></div><div class="selector-separator">' + path_separator + '</div></div>');

  // Next add a popup with all possible selectors.
  var selectors = ''
  for (var i=1; i < selectorList.length; i++) {
    tempClass = '';
    // Add a class active to indicate the preferred selector.
    if (i == 1) {
      tempClass += 'active ';
    }
    if (i == 1) {
      tempClass += 'first ';
    }
    if (i == selectorList.length - 1) {
      tempClass += 'last';
    }
    selectors += '<li class="' + tempClass + '"><a href="#" id="ssid-' + (i-1) + '">' + selectorList[i] + '</a></li>';
  }

  // Finally, add some pseudo-classes.
  var pseudoClasses = '';
  if (Drupal.Sweaver.path[index].tag == 'a') {
    pseudoClasses += '<li class="first"><a href="#">:hover</a></li>';
    pseudoClasses += '<li><a href="#">:visited</a></li>';
    pseudoClasses += '<li><a href="#">:active</a></li>';
    pseudoClasses += '<li class="last"><a href="#" >:link</a></li>';
  }
  else {
    pseudoClasses += '<li class="first last"><a href="#" class="hover">:hover</a></li>';
  }

  $("#sid-" + index).prepend('<div class="selector-popup-opener">open</div><div class="selector-popup"><ul class="selectors">' + selectors + '</ul><ul class="pseudoclasses">' + pseudoClasses + '</ul></div>');

  // Bind click to change the active path.
  $('#sid-' + index + ' .first-selector a').click(function() {
    $(this).parent().parent().toggleClass('active');
    Drupal.Sweaver.addToActivePathIndex(index);
    Drupal.Sweaver.printActivePath();
    // Reset the active element as it might have changed.
    Drupal.Sweaver.pathIndexes.sort(function(a,b){return a - b});
    Drupal.Sweaver.activeElement = Drupal.Sweaver.path[Drupal.Sweaver.pathIndexes[0]] ? Drupal.Sweaver.path[Drupal.Sweaver.pathIndexes[0]] : {} ;
    Drupal.Sweaver.updateForm();
    Drupal.Sweaver.updateScreen();

    // Stop the link from doing anything.
    return false;
  });

  // Change the active path from a popup.
  $('#sid-' + index + ' .selector-popup ul.selectors a').click(function() {
    // Store in the active object that there is a new preferred selector instead of the first one defined in the backend.
    var $link = $(this);
    var i = $link.attr('id').substr(5);
    Drupal.Sweaver.path[index].preferredSelector = i;
    Drupal.Sweaver.printActivePath();
    // Replace the selector in the full path.
    $('#sid-' + index + ' .first-selector a').html(Drupal.Sweaver.objectToReadable(Drupal.Sweaver.path[index])[0]);
    // Add an active class.
    $link.parents('.selector-popup').css({'left' : '-10000px'}).parent().removeClass('open');
    $link.parent().siblings('.active').removeClass('active');
    $link.parent().addClass('active');
    // Update the form.
    Drupal.Sweaver.updateForm();
    Drupal.Sweaver.updateScreen();
    return false;
  });

  // Add a pseudo-class from a popup.
  $('#sid-' + index + ' .selector-popup ul.pseudoclasses a').click(function() {
    var $link = $(this);
    // If the link was already active, deactivate it otherwhise add the active class.
    if (!$link.parent().hasClass('active')) {
	    // Add the pseudo-class to the object in question.
	    Drupal.Sweaver.path[index].pseudoClass = $(this).text();
	    // Update the translation of the object in question.
	    Drupal.Sweaver.path[index].translation = Drupal.Sweaver.objectToReadable(Drupal.Sweaver.path[index]);
	    // Update the active path.
	    Drupal.Sweaver.printActivePath();
	    // Change the text in the full path.
	    $('#sid-' + index + ' .first-selector a').html(Drupal.Sweaver.path[index].translation[0]);
	    // Handle all active classes.
	    $link.parent().siblings('.active').removeClass('active');
	    $link.parent().addClass('active');
    }
    else {
      Drupal.Sweaver.path[index].pseudoClass = '';
      // Update the translation of the object in question.
      Drupal.Sweaver.path[index].translation = Drupal.Sweaver.objectToReadable(Drupal.Sweaver.path[index]);
      // Update the active path.
      Drupal.Sweaver.printActivePath();
      // Change the text in the full path.
      $('#sid-' + index + ' .first-selector a').html(Drupal.Sweaver.path[index].translation[0]);
      // Handle all active classes.
      $link.parent().removeClass('active');
	  }
    // Close the popup.
		$link.parents('.selector-popup').css({'left' : '-10000px'}).parent().removeClass('open');
    // Update the form with the new path.
    Drupal.Sweaver.updateForm();
    Drupal.Sweaver.updateScreen();
    return false;
  });

  // Hide/show selector popups.
  $('#sid-' + index + ' .selector-popup-opener').click(function() {
    var $popup = $(this).siblings('.selector-popup');
    $this = $(this);
    if ($this.parent().hasClass('open')) {
      $this.parent().removeClass('open');
      $popup.css({'left' : '-10000px'});
    }
    else {
      // Hide other open selector popups.
      $('#sweaver .selector-wrapper.open .selector-popup').css({'left' : '-10000px'});
      $this.parent().addClass('open');
      $this.parent().siblings().removeClass('open');
	    // Calculate the right width.
	    var width = 0;
	    $($popup.children('ul')).each(function() {
	     width += $(this).outerWidth();
	    });
      $popup.css({'width' : width});
      // See if the popup should be opened on the left or the right.
      var offset = $this.offset();
      var left = (offset.left + width) > $(window).width() ? - $popup.outerWidth() :  $this.outerWidth();
      $popup.hide().css({'left' : left});
      // Show the popup.
      $popup.slideDown('fast');
    }
  });
}

/**
 * Add an item to the active path index.
 * This way we can keep track of the selected items in the ful path.
 */
Drupal.Sweaver.addToActivePathIndex = function(i) {
  // Do not add the item when selected or remove it from Active path.
  var position = $.inArray(i, Drupal.Sweaver.pathIndexes);
  if (position < 0) {
    Drupal.Sweaver.pathIndexes.unshift(i);
  }
  else {
    // Remove from pathIndexes if necessary.
    for (var key in Drupal.Sweaver.pathIndexes) {
      if (Drupal.Sweaver.pathIndexes[key] == i) {
        Drupal.Sweaver.pathIndexes.splice(key, 1);
      }
    }
  }
}

/**
 * Print the active path.
 */
Drupal.Sweaver.printActivePath = function() {
  // Reset the previous path and add the next item to pathIndexes.
  $path = $("#selected-path .path-content");
  $path.html('');
  Drupal.Sweaver.activePath = '';
  // Since jquery cannot get a css value when a pseudo-class is in it, we have to create a version
  // of the active patch without the pseudo-classes.
  Drupal.Sweaver.safeActivePath = '';

  // Sort pathIndexes.
  Drupal.Sweaver.pathIndexes.sort(function(a,b){return a - b});

  // Print the selected path in human-readable language.

  if (Drupal.Sweaver.pathIndexes.length > 0) {
    for ( var i=0, len=Drupal.Sweaver.pathIndexes.length; i<len; ++i ){
      if (i > 0) {
        $path.append(' in ');
      }
      // See which translation should be used.
      var j = Drupal.Sweaver.path[Drupal.Sweaver.pathIndexes[i]].preferredSelector ? Drupal.Sweaver.path[Drupal.Sweaver.pathIndexes[i]].preferredSelector : 0;
      j++;
      $path.append(Drupal.Sweaver.path[Drupal.Sweaver.pathIndexes[i]].translation[j]);
    }
    // Save the currently active css path.
    Drupal.Sweaver.pathIndexes.reverse();
    for (var i=0, len=Drupal.Sweaver.pathIndexes.length; i<len; ++i){
      // See which translation should be used.
      var j = Drupal.Sweaver.path[Drupal.Sweaver.pathIndexes[i]].preferredSelector ? Drupal.Sweaver.path[Drupal.Sweaver.pathIndexes[i]].preferredSelector : 0;
      j++;
      Drupal.Sweaver.activePath += Drupal.Sweaver.path[Drupal.Sweaver.pathIndexes[i]].css[j] + Drupal.Sweaver.path[Drupal.Sweaver.pathIndexes[i]].pseudoClass + ' ';
      Drupal.Sweaver.safeActivePath += Drupal.Sweaver.path[Drupal.Sweaver.pathIndexes[i]].css[j] + ' ';
    }
  }
  else {
    $path.html(Drupal.t('none'));
  }
}

/**
 * Fill the activeElement and update the Form and ActivePath.
 * Other plugins can use this function to set values on the
 * style tab. To switch tabs, you can use the Drupal.Sweaver.switchTab
 * function.
 */
Drupal.Sweaver.updateStyleTab = function(theClass, name) {
  // Build the object with manipulated data.
  var tempObject = Drupal.Sweaver.buildSweaverObject($('.' + theClass));

  tempObject.translation = new Array(name, name);
  tempObject.classes = new Array('.' + theClass);
  tempObject.css = new Array('.' + theClass, '.' + theClass);

  Drupal.Sweaver.activeElement = tempObject;

  // Build path with parents.
  $('#sweaver_plugin_editor .sweaver-header').html('<div id="selected-path" class="clearfix"></div>');
  Drupal.Sweaver.path[0] = new Object({'id' : Drupal.Sweaver.activeElement.id, 'class' : Drupal.Sweaver.activeElement.classes, 'pseudoClass' : '', 'tag' : Drupal.Sweaver.activeElement.tag,  'type' : Drupal.Sweaver.activeElement.type, 'translation' : Drupal.Sweaver.activeElement.translation, 'css' : Drupal.Sweaver.activeElement.css});
  Drupal.Sweaver.addToFullPath(0, true);
  Drupal.Sweaver.pathIndexes = new Array();
  Drupal.Sweaver.addToActivePathIndex(0);
  Drupal.Sweaver.printActivePath();
  Drupal.Sweaver.activePath = '.' + theClass;
  Drupal.Sweaver.updateForm();
  Drupal.Sweaver.updateScreen();
}

/**
 * Store new value and update inline css.
 */
Drupal.Sweaver.setValue = function(property, value) {
  Drupal.Sweaver.css[Drupal.Sweaver.activePath] = Drupal.Sweaver.css[Drupal.Sweaver.activePath] || {};
  Drupal.Sweaver.css[Drupal.Sweaver.activePath][property] = value;
  Drupal.Sweaver.writeCss();

  // Check for state of changes box.
  if (Drupal.Sweaver.cookie('sweaver_changes_box') == 'true') {
    Drupal.Sweaver.writeChanges();
  }
}

/**
 * Write changes to the changes popup so that people can remove them again.
 */
Drupal.Sweaver.writeChanges = function() {
  $('#editor-changes').html('');
  for (key in Drupal.Sweaver.css) {
    var target = Drupal.Sweaver.css[key];
    for (prop in target) {
      if (Drupal.Sweaver.properties[prop] && (target[prop] != '' || target[prop] == '0')) {
      // Special case for transparent.
        if ((prop == 'background-color' && target[prop] == 'transparent') || (prop == 'background-image' && target[prop] == 'none')) {
          $('#editor-changes').prepend($('<p onclick="Drupal.Sweaver.deleteProperty(\'' + key + '\', \'' + prop + '\')">' + key + ': '+ prop + ': ' + target[prop] + '</p>'));
        }
        else {
          $('#editor-changes').prepend($('<p onclick="Drupal.Sweaver.deleteProperty(\'' + key + '\', \'' + prop + '\')">' + key + ': '+ prop + ': ' + Drupal.Sweaver.properties[prop].prefix + target[prop] + Drupal.Sweaver.properties[prop].suffix + '</p>'));
        }
      }
    }
  }
}

/**
 * Delete a property from a selector.
 */
Drupal.Sweaver.deleteProperty = function(key, property) {
  var target = Drupal.Sweaver.css[key];
  Drupal.Sweaver.css[key] = {};
  for (var prop in target) {
    if (prop != property) {
      Drupal.Sweaver.css[key][prop] = target[prop];
    }
  }
  Drupal.Sweaver.writeCss();
  Drupal.Sweaver.writeChanges();
  Drupal.Sweaver.updateForm();
}

/**
 * Translate an parent item in a human-readable name.
 */
Drupal.Sweaver.objectToReadable = function(object) {

  var translation = new Array();
  var id_translation = new Array();
  var class_translation = new Array();
  var tag_translation = new Array();

  var css = new Array();
  var id_css = new Array();
  var class_css = new Array();
  var tag_css = new Array();

  var selector = '';
  var description = '';
  var tempSelectors = new Array();
  var pseudoClass = object.pseudoClass ? object.pseudoClass : '';

  var i = 0;

  // Traverse all selectors defined in the backend and return an array with the description.
  $.each(Drupal.Sweaver.selectors, function() {
    selector = this.selector;
    name = this.name;
    description = this.description;

    if (name == 'allids') {
      if (object.id && $.inArray('#' + object.id, tempSelectors) < 0) {
        id_translation[i] = 'the ' + object.id + ' region';
        id_css[i] = '#' + object.id;
        tempSelectors.push('#' + object.id);
        i++;
      }
    }
    else if (name == 'allclasses') {
      if (object.classes && object.classes[0]) {
        $.each(object.classes, function(index, tempClass) {
          if ($.inArray(tempClass, Drupal.Sweaver.excludeClasses) < 0 && $.inArray('.' + tempClass, tempSelectors) < 0) {
            class_translation[i] = 'all ' + tempClass;
            class_css[i] = '.' + tempClass;
            tempSelectors.push('.' + tempClass);
            i++;
          }
        });
      }
    }
    else if (name == 'alltags' && $.inArray(object.tag, tempSelectors) < 0) {
      tag_translation[i] = object.tag;
      tag_css[i] = object.tag;
      tempSelectors.push(object.tag);
      i++;
    }
    else {
      if (selector == '#' + object.id && $.inArray('#' + object.id, tempSelectors) < 0) {
        id_translation[i] = description;
        id_css[i] = '#' + object.id;
        tempSelectors.push('#' + object.id);
        i++;
      } else if (selector == object.tag && $.inArray(object.tag, tempSelectors) < 0) {
        tag_translation[i] = description;
        tag_css[i] = object.tag;
        tempSelectors.push(object.tag);
        i++;
      } else {
        $.each(object.classes, function(index, tempClass) {
          if (selector == '.' + tempClass  && $.inArray(tempClass, Drupal.Sweaver.excludeClasses) < 0 && $.inArray('.' + tempClass, tempSelectors) < 0) {
            class_translation[i] = description;
            class_css[i] = '.' + tempClass;
            tempSelectors.push('.' + tempClass);
            i++;
          }
        });
      }
    }
  });

  // Merge the translation arrays.
  for (var j = 0; j < i; j++) {
    var k = id_translation[j] ? id_translation[j] : class_translation[j] ? class_translation[j] : tag_translation[j];
    translation[j] = Drupal.Sweaver.addPseudoClass(pseudoClass, k);
  }

  // Merge the css arrays.
  for (var j = 0; j < i; j++) {
    var k = id_css[j] ? id_css[j] : class_css[j] ? class_css[j] : tag_css[j];
    css[j] = k;
  }

  // Add combinations of classes, ids and tags.
  if (Drupal.settings.sweaver['combined_selectors']) {
	  t = i;
	  if (tag_translation.length > 0) {
	    $.each(tag_translation, function(index, tag) {
	      if (tag) {
			    $.each(id_translation, function(index, trans) {
			      if (trans) {
			        translation[t] = Drupal.Sweaver.addPseudoClass(pseudoClass, tag + ' + ' + trans);
			        css[t] = object.tag + id_css[index];
			        t++;
			      }
			    });
		      $.each(class_translation, function(index, trans) {
		        if (trans) {
		          translation[t] = Drupal.Sweaver.addPseudoClass(pseudoClass, tag + ' + ' + trans);
              css[t] = object.tag + class_css[index];
		          t++;
		        }
		      });
		    }
		  });
	  }
  }

  // If a prefered selector was set in the object, return that one instead of the default first one.
  index = object.preferredSelector ? object.preferredSelector : 0;
  translation.splice(0, 0, translation[index]);
  css.splice(0, 0, css[index]);

  object.translation = translation;
  object.css = css;
  return translation;
}

/**
 * Add a pseudo class to the translation.
 */
Drupal.Sweaver.addPseudoClass = function(pseudoClass, original) {
  var translation = pseudoClass ? original + Drupal.t(' in the ' + pseudoClass + ' state') : original;
  return translation;
}

/**
 * Build a Sweaver object.
 */
Drupal.Sweaver.buildSweaverObject = function(object) {
  var tempObject = new Object;
  tempObject.id = object.attr('id');
  tempObject.classes = trim(object.attr('class')).split(' ');
  tempObject.pseudoClass = '';
  tempObject.tag = object.get(0).tagName.toLowerCase();
  tempObject.type = object.css('display');

  // Fallback to block if an unknow type is detected.
  if (!(tempObject.type in Drupal.Sweaver.types)) {
    tempObject.type = 'block';
  }

  // Generate a human-readable name and a css selector.
  Drupal.Sweaver.objectToReadable(tempObject);
  return tempObject;
}

/**
 * Helper function to remove trailing leading and multiple spaces.
 */
function trim(s) {
  s = s.replace(/(^\s*)|(\s*$)/gi,"");
  s = s.replace(/[ ]{2,}/gi," ");
  s = s.replace(/\n /,"\n");
  return s;
}

/**
 * Hide all sliders.
 */
Drupal.Sweaver.hideOverlays = function() {
  $('#sweaver .slider-wrapper').css({'visibility' : 'hidden'});

  // Remove all active classes from form-items and groups
  $('#sweaver_plugin_editor .form-item, #sweaver_plugin_editor .sweaver-group').removeClass('active');
}

/**
 * Open or close the changes box().
 */
Drupal.Sweaver.ChangesBox = function(cookie_check) {

  var show_box = false;
  box = $('#editor-changes');
  toggler = $('#changes-toggler');

  if (cookie_check == true && Drupal.Sweaver.cookie('sweaver_changes_box') == 'true') {
    show_box = true;
  }
  else if (parseInt(box.css('right')) < 0 && cookie_check == false) {
    show_box = true;
  }

  if (show_box == true) {
    Drupal.Sweaver.writeChanges();
    box.css({'right' : '10px'});
    toggler.addClass('open').html(Drupal.t('Hide changes'));
    Drupal.Sweaver.cookie('sweaver_changes_box', true);
  } else {
    box.css({'right' : '-10000px'});
    toggler.removeClass('open').html(Drupal.t('Show changes'));
    Drupal.Sweaver.cookie('sweaver_changes_box', false);
  }
}

/**
 * Check wether the editor tab is visible.
 */
Drupal.Sweaver.visible = function() {
  if (Drupal.Sweaver.open == 'true' && $('#sweaver_plugin_editor .sweaver-content').is(':visible')) {
    return true;
  }
  else {
    return false;
  }
}

/**
 * Helper function to check if an object is empty.
 */
function isEmpty(obj) {
  for(var prop in obj) {
    if(obj.hasOwnProperty(prop))
      return false;
  }
  return true;
}


/**
 * Add custom expression to exclude all selectors in the sweaver bar.
 */
$.expr[':'].parents = function(a,i,m){
  return jQuery(a).parents(m[3]).length < 1;
};

})(jQuery);;
/*
 * jQuery JSON Plugin
 * version: 2.1 (2009-08-14)
 *
 * This document is licensed as free software under the terms of the
 * MIT License: http://www.opensource.org/licenses/mit-license.php
 *
 * Brantley Harris wrote this plugin. It is based somewhat on the JSON.org 
 * website's http://www.json.org/json2.js, which proclaims:
 * "NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.", a sentiment that
 * I uphold.
 *
 * It is also influenced heavily by MochiKit's serializeJSON, which is 
 * copyrighted 2005 by Bob Ippolito.
 */
 
(function($) {
    /** jQuery.toJSON( json-serializble )
        Converts the given argument into a JSON respresentation.

        If an object has a "toJSON" function, that will be used to get the representation.
        Non-integer/string keys are skipped in the object, as are keys that point to a function.

        json-serializble:
            The *thing* to be converted.
     **/
    $.toJSON = function(o)
    {
        if (typeof(JSON) == 'object' && JSON.stringify)
            return JSON.stringify(o);
        
        var type = typeof(o);
    
        if (o === null)
            return "null";
    
        if (type == "undefined")
            return undefined;
        
        if (type == "number" || type == "boolean")
            return o + "";
    
        if (type == "string")
            return $.quoteString(o);
    
        if (type == 'object')
        {
            if (typeof o.toJSON == "function") 
                return $.toJSON( o.toJSON() );
            
            if (o.constructor === Date)
            {
                var month = o.getUTCMonth() + 1;
                if (month < 10) month = '0' + month;

                var day = o.getUTCDate();
                if (day < 10) day = '0' + day;

                var year = o.getUTCFullYear();
                
                var hours = o.getUTCHours();
                if (hours < 10) hours = '0' + hours;
                
                var minutes = o.getUTCMinutes();
                if (minutes < 10) minutes = '0' + minutes;
                
                var seconds = o.getUTCSeconds();
                if (seconds < 10) seconds = '0' + seconds;
                
                var milli = o.getUTCMilliseconds();
                if (milli < 100) milli = '0' + milli;
                if (milli < 10) milli = '0' + milli;

                return '"' + year + '-' + month + '-' + day + 'T' +
                             hours + ':' + minutes + ':' + seconds + 
                             '.' + milli + 'Z"'; 
            }

            if (o.constructor === Array) 
            {
                var ret = [];
                for (var i = 0; i < o.length; i++)
                    ret.push( $.toJSON(o[i]) || "null" );

                return "[" + ret.join(",") + "]";
            }
        
            var pairs = [];
            for (var k in o) {
                var name;
                var type = typeof k;

                if (type == "number")
                    name = '"' + k + '"';
                else if (type == "string")
                    name = $.quoteString(k);
                else
                    continue;  //skip non-string or number keys
            
                if (typeof o[k] == "function") 
                    continue;  //skip pairs where the value is a function.
            
                var val = $.toJSON(o[k]);
            
                pairs.push(name + ":" + val);
            }

            return "{" + pairs.join(", ") + "}";
        }
    };

    /** jQuery.evalJSON(src)
        Evaluates a given piece of json source.
     **/
    $.evalJSON = function(src)
    {
        if (typeof(JSON) == 'object' && JSON.parse)
            return JSON.parse(src);
        return eval("(" + src + ")");
    };
    
    /** jQuery.secureEvalJSON(src)
        Evals JSON in a way that is *more* secure.
    **/
    $.secureEvalJSON = function(src)
    {
        if (typeof(JSON) == 'object' && JSON.parse)
            return JSON.parse(src);
        
        var filtered = src;
        filtered = filtered.replace(/\\["\\\/bfnrtu]/g, '@');
        filtered = filtered.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']');
        filtered = filtered.replace(/(?:^|:|,)(?:\s*\[)+/g, '');
        
        if (/^[\],:{}\s]*$/.test(filtered))
            return eval("(" + src + ")");
        else
            throw new SyntaxError("Error parsing JSON, source is not valid.");
    };

    /** jQuery.quoteString(string)
        Returns a string-repr of a string, escaping quotes intelligently.  
        Mostly a support function for toJSON.
    
        Examples:
            >>> jQuery.quoteString("apple")
            "apple"
        
            >>> jQuery.quoteString('"Where are we going?", she asked.')
            "\"Where are we going?\", she asked."
     **/
    $.quoteString = function(string)
    {
        if (string.match(_escapeable))
        {
            return '"' + string.replace(_escapeable, function (a) 
            {
                var c = _meta[a];
                if (typeof c === 'string') return c;
                c = a.charCodeAt();
                return '\\u00' + Math.floor(c / 16).toString(16) + (c % 16).toString(16);
            }) + '"';
        }
        return '"' + string + '"';
    };
    
    var _escapeable = /["\\\x00-\x1f\x7f-\x9f]/g;
    
    var _meta = {
        '\b': '\\b',
        '\t': '\\t',
        '\n': '\\n',
        '\f': '\\f',
        '\r': '\\r',
        '"' : '\\"',
        '\\': '\\\\'
    };
})(jQuery);
;
/**
 *
 * Color picker
 * Author: Stefan Petre www.eyecon.ro
 *
 * Dual licensed under the MIT and GPL licenses
 *
 */
(function ($) {
	var ColorPicker = function () {
		var
			ids = {},
			inAction,
			charMin = 65,
			visible,
			tpl = '<div class="colorpicker"><div class="colorpicker_color"><div><div></div></div></div><div class="colorpicker_hue"><div></div></div><div class="colorpicker_new_color"></div><div class="colorpicker_current_color"></div><div class="colorpicker_hex"><input type="text" maxlength="6" size="6" /></div><div class="colorpicker_rgb_r colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_rgb_g colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_rgb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_h colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_s colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_transparent"><a href="" title="Make transparent" alt="Make transparent">Transparent</a></div><div class="colorpicker_submit"></div><div class="colorpicker_previous_colors"></div></div>',
			defaults = {
				eventName: 'click',
				onShow: function () {},
				onBeforeShow: function(){},
				onHide: function () {},
				onChange: function () {},
				onSubmit: function () {},
				color: 'ff0000',
				livePreview: true,
				flat: false
			},
			fillRGBFields = function  (hsb, cal) {
				var rgb = HSBToRGB(hsb);
				$(cal).data('colorpicker').fields
					.eq(1).val(rgb.r).end()
					.eq(2).val(rgb.g).end()
					.eq(3).val(rgb.b).end();
			},
			fillHSBFields = function  (hsb, cal) {
				$(cal).data('colorpicker').fields
					.eq(4).val(hsb.h).end()
					.eq(5).val(hsb.s).end()
					.eq(6).val(hsb.b).end();
			},
			fillHexFields = function (hsb, cal) {
				$(cal).data('colorpicker').fields
					.eq(0).val(HSBToHex(hsb)).end();
			},
			setSelector = function (hsb, cal) {
				$(cal).data('colorpicker').selector.css('backgroundColor', '#' + HSBToHex({h: hsb.h, s: 100, b: 100}));
				$(cal).data('colorpicker').selectorIndic.css({
					left: parseInt(150 * hsb.s/100, 10),
					top: parseInt(150 * (100-hsb.b)/100, 10)
				});
			},
			setHue = function (hsb, cal) {
				$(cal).data('colorpicker').hue.css('top', parseInt(150 - 150 * hsb.h/360, 10));
			},
			setCurrentColor = function (hsb, cal) {
				$(cal).data('colorpicker').currentColor.css('backgroundColor', '#' + HSBToHex(hsb));
			},
			setNewColor = function (hsb, cal) {
				$(cal).data('colorpicker').newColor.css('backgroundColor', '#' + HSBToHex(hsb));
			},
			keyDown = function (ev) {
				var pressedKey = ev.charCode || ev.keyCode || -1;
				if ((pressedKey > charMin && pressedKey <= 90) || pressedKey == 32) {
					return false;
				}
				var cal = $(this).parent().parent();
				if (cal.data('colorpicker').livePreview === true) {
					change.apply(this);
				}
			},
			change = function (ev) {
				var cal = $(this).parent().parent(), col;
				if (this.parentNode.className.indexOf('_hex') > 0) {
					cal.data('colorpicker').color = col = HexToHSB(fixHex(this.value));
				} else if (this.parentNode.className.indexOf('_hsb') > 0) {
					cal.data('colorpicker').color = col = fixHSB({
						h: parseInt(cal.data('colorpicker').fields.eq(4).val(), 10),
						s: parseInt(cal.data('colorpicker').fields.eq(5).val(), 10),
						b: parseInt(cal.data('colorpicker').fields.eq(6).val(), 10)
					});
				} else {
					cal.data('colorpicker').color = col = RGBToHSB(fixRGB({
						r: parseInt(cal.data('colorpicker').fields.eq(1).val(), 10),
						g: parseInt(cal.data('colorpicker').fields.eq(2).val(), 10),
						b: parseInt(cal.data('colorpicker').fields.eq(3).val(), 10)
					}));
				}
				if (ev) {
					fillRGBFields(col, cal.get(0));
					fillHexFields(col, cal.get(0));
					fillHSBFields(col, cal.get(0));
				}
				setSelector(col, cal.get(0));
				setHue(col, cal.get(0));
				setNewColor(col, cal.get(0));
				cal.data('colorpicker').onChange.apply(cal, [col, HSBToHex(col), HSBToRGB(col)]);
			},
			blur = function (ev) {
				var cal = $(this).parent().parent();
				cal.data('colorpicker').fields.parent().removeClass('colorpicker_focus');
			},
			focus = function () {
				charMin = this.parentNode.className.indexOf('_hex') > 0 ? 70 : 65;
				$(this).parent().parent().data('colorpicker').fields.parent().removeClass('colorpicker_focus');
				$(this).parent().addClass('colorpicker_focus');
			},
			downIncrement = function (ev) {
				var field = $(this).parent().find('input').focus();
				var current = {
					el: $(this).parent().addClass('colorpicker_slider'),
					max: this.parentNode.className.indexOf('_hsb_h') > 0 ? 360 : (this.parentNode.className.indexOf('_hsb') > 0 ? 100 : 255),
					y: ev.pageY,
					field: field,
					val: parseInt(field.val(), 10),
					preview: $(this).parent().parent().data('colorpicker').livePreview
				};
				$(document).bind('mouseup', current, upIncrement);
				$(document).bind('mousemove', current, moveIncrement);
			},
			moveIncrement = function (ev) {
				ev.data.field.val(Math.max(0, Math.min(ev.data.max, parseInt(ev.data.val + ev.pageY - ev.data.y, 10))));
				if (ev.data.preview) {
					change.apply(ev.data.field.get(0), [true]);
				}
				return false;
			},
			upIncrement = function (ev) {
				change.apply(ev.data.field.get(0), [true]);
				ev.data.el.removeClass('colorpicker_slider').find('input').focus();
				$(document).unbind('mouseup', upIncrement);
				$(document).unbind('mousemove', moveIncrement);
				return false;
			},
			downHue = function (ev) {
				var current = {
					cal: $(this).parent(),
					y: $(this).offset().top
				};
				current.preview = current.cal.data('colorpicker').livePreview;
				$(document).bind('mouseup', current, upHue);
				$(document).bind('mousemove', current, moveHue);
        sweaver_add_colors(ev);
        return false;
			},
			moveHue = function (ev) {
				change.apply(
					ev.data.cal.data('colorpicker')
						.fields
						.eq(4)
						.val(parseInt(360*(150 - Math.max(0,Math.min(150,(ev.pageY - ev.data.y))))/150, 10))
						.get(0),
					[ev.data.preview]
				);
				return false;
			},
			upHue = function (ev) {
				fillRGBFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
				fillHexFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
				$(document).unbind('mouseup', upHue);
				$(document).unbind('mousemove', moveHue);
        sweaver_add_colors(ev);
				return false;
			},
			downSelector = function (ev) {
				var current = {
					cal: $(this).parent(),
					pos: $(this).offset()
				};
				current.preview = current.cal.data('colorpicker').livePreview;
				$(document).bind('mouseup', current, upSelector);
				$(document).bind('mousemove', current, moveSelector);
			},

      // ************************
      // Sweaver additions
      // ************************

			// Do selection also when clicking.
			clickSelector = function (ev) {
				var current = {
					cal: $(this).parent(),
					pos: $(this).offset()
				};
				current.preview = current.cal.data('colorpicker').livePreview;
				ev.data = {};
				ev.data.cal = current.cal;
				ev.data.pos = current.pos;
				moveSelector(ev);
			},

			// Add a transparent option as background-color.
			makeTransparent = function(ev) {
				var cal = $(this).parent().parent(), col;
				cal.data('colorpicker').onChange.apply(cal, ['transparent', 'transparent', 'transparent']);
				return false;
			},

      // Select previous color.
      selectPreviousColor = function(ev) {

        // Create new color.
        var new_color = {};
        color = $(this).css('background-color').replace('rgb(', '').replace(')', '').split(',');
        new_color.r = color[0];
        new_color.g = color[1];
        new_color.b = color[2];
        new_color = fixRGB(new_color);
        new_color = RGBToHSB(new_color);
        new_color = fixHSB(new_color);

        var cal = $(this).parent().parent(), col;

        // Set the new color.
        fillRGBFields(new_color, cal);
        fillHexFields(new_color, cal);
        fillHSBFields(new_color, cal);
        setSelector(new_color, cal);
        setHue(new_color, cal);
        setNewColor(new_color, cal);
        cal.data('colorpicker').onChange.apply(cal, [new_color, HSBToHex(new_color), HSBToRGB(new_color)]);

        // Update pallet.
        sweaver_add_colors(ev);
      },

      // Add previous colors.
      sweaver_add_colors = function (ev) {
        colors = '';
        var new_color = '';
        previous_colors = new Array;

        for (var key in Drupal.Sweaver.css) {
          var target = Drupal.Sweaver.css[key];
          for (var prop in target) {
            if (Drupal.Sweaver.properties[prop]) {
              var properties = Drupal.Sweaver.properties[prop]['property'].split(' ');
              $.each(properties, function(i, property) {
                // Don't add a prefix and suffix for these exceptions.
                if ((property == 'background-color' || property == 'color') && target[prop] != 'transparent' && $.inArray(target[prop], previous_colors) < 0) {
                  previous_colors.push(target[prop]);
                  colors += '<div class="colorpicker_previous_colors_color" style="background-color: #'+ target[prop] +';"></div>';
                }
              });
            }
          }
        }

        var cal = $(this).parent().parent(), col;

        $('.colorpicker_previous_colors').html(colors);
        // Bind on colorpicker_previous_colors_color.
        $('.colorpicker_previous_colors_color').bind('click', selectPreviousColor);
      },

      // ************************
      // End of sweaver additions
      // ************************

			moveSelector = function (ev) {
				change.apply(
					ev.data.cal.data('colorpicker')
						.fields
						.eq(6)
						.val(parseInt(100*(150 - Math.max(0,Math.min(150,(ev.pageY - ev.data.pos.top))))/150, 10))
						.end()
						.eq(5)
						.val(parseInt(100*(Math.max(0,Math.min(150,(ev.pageX - ev.data.pos.left))))/150, 10))
						.get(0),
					[ev.data.preview]
				);
				return false;
			},
			upSelector = function (ev) {
				fillRGBFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
				fillHexFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
				$(document).unbind('mouseup', upSelector);
				$(document).unbind('mousemove', moveSelector);
        sweaver_add_colors(ev);
				return false;
			},
			enterSubmit = function (ev) {
				$(this).addClass('colorpicker_focus');
			},
			leaveSubmit = function (ev) {
				$(this).removeClass('colorpicker_focus');
			},
			clickSubmit = function (ev) {
				var cal = $(this).parent();
				var col = cal.data('colorpicker').color;
				cal.data('colorpicker').origColor = col;
				setCurrentColor(col, cal.get(0));
				cal.data('colorpicker').onSubmit(col, HSBToHex(col), HSBToRGB(col), cal.data('colorpicker').el);
			},
			show = function (ev) {
				var cal = $('#' + $(this).data('colorpickerId'));
				cal.data('colorpicker').onBeforeShow.apply(this, [cal.get(0)]);
				var pos = $(this).offset();
				var viewPort = getViewport();
				var top = pos.top + this.offsetHeight;
				var left = pos.left;
				if (top + 176 > viewPort.t + viewPort.h) {
					top -= this.offsetHeight + 176;
				}
				if (left + 356 > viewPort.l + viewPort.w) {
					left -= 356;
				}
				cal.css({left: left + 'px', top: top + 'px'});
				if (cal.data('colorpicker').onShow.apply(this, [cal.get(0)]) != false) {
					cal.show();
				}
				$(document).bind('mousedown', {cal: cal}, hide);
        sweaver_add_colors(ev);
				return false;
			},
			hide = function (ev) {
				if (!isChildOf(ev.data.cal.get(0), ev.target, ev.data.cal.get(0))) {
					if (ev.data.cal.data('colorpicker').onHide.apply(this, [ev.data.cal.get(0)]) != false) {
						ev.data.cal.hide();
					}
					$(document).unbind('mousedown', hide);
				}
			},
			isChildOf = function(parentEl, el, container) {
				if (parentEl == el) {
					return true;
				}
				if (parentEl.contains) {
					return parentEl.contains(el);
				}
				if ( parentEl.compareDocumentPosition ) {
					return !!(parentEl.compareDocumentPosition(el) & 16);
				}
				var prEl = el.parentNode;
				while(prEl && prEl != container) {
					if (prEl == parentEl)
						return true;
					prEl = prEl.parentNode;
				}
				return false;
			},
			getViewport = function () {
				var m = document.compatMode == 'CSS1Compat';
				return {
					l : window.pageXOffset || (m ? document.documentElement.scrollLeft : document.body.scrollLeft),
					t : window.pageYOffset || (m ? document.documentElement.scrollTop : document.body.scrollTop),
					w : window.innerWidth || (m ? document.documentElement.clientWidth : document.body.clientWidth),
					h : window.innerHeight || (m ? document.documentElement.clientHeight : document.body.clientHeight)
				};
			},
			fixHSB = function (hsb) {
				return {
					h: Math.min(360, Math.max(0, hsb.h)),
					s: Math.min(100, Math.max(0, hsb.s)),
					b: Math.min(100, Math.max(0, hsb.b))
				};
			},
			fixRGB = function (rgb) {
				return {
					r: Math.min(255, Math.max(0, rgb.r)),
					g: Math.min(255, Math.max(0, rgb.g)),
					b: Math.min(255, Math.max(0, rgb.b))
				};
			},
			fixHex = function (hex) {
				var len = 6 - hex.length;
				if (len > 0) {
					var o = [];
					for (var i=0; i<len; i++) {
						o.push('0');
					}
					o.push(hex);
					hex = o.join('');
				}
				return hex;
			},
			HexToRGB = function (hex) {
				var hex = parseInt(((hex.indexOf('#') > -1) ? hex.substring(1) : hex), 16);
				return {r: hex >> 16, g: (hex & 0x00FF00) >> 8, b: (hex & 0x0000FF)};
			},
			HexToHSB = function (hex) {
				return RGBToHSB(HexToRGB(hex));
			},
			RGBToHSB = function (rgb) {
				var hsb = {
					h: 0,
					s: 0,
					b: 0
				};
				var min = Math.min(rgb.r, rgb.g, rgb.b);
				var max = Math.max(rgb.r, rgb.g, rgb.b);
				var delta = max - min;
				hsb.b = max;
				if (max != 0) {

				}
				hsb.s = max != 0 ? 255 * delta / max : 0;
				if (hsb.s != 0) {
					if (rgb.r == max) {
						hsb.h = (rgb.g - rgb.b) / delta;
					} else if (rgb.g == max) {
						hsb.h = 2 + (rgb.b - rgb.r) / delta;
					} else {
						hsb.h = 4 + (rgb.r - rgb.g) / delta;
					}
				} else {
					hsb.h = -1;
				}
				hsb.h *= 60;
				if (hsb.h < 0) {
					hsb.h += 360;
				}
				hsb.s *= 100/255;
				hsb.b *= 100/255;

        // Sweaver : round to avoid minor differences when re-selecting colors.
        hsb.h = Math.round(hsb.h);
        hsb.s = Math.round(hsb.s);
        hsb.b = Math.round(hsb.b);

				return hsb;
			},
			HSBToRGB = function (hsb) {
				var rgb = {};
				var h = Math.round(hsb.h);
				var s = Math.round(hsb.s*255/100);
				var v = Math.round(hsb.b*255/100);
				if(s == 0) {
					rgb.r = rgb.g = rgb.b = v;
				} else {
					var t1 = v;
					var t2 = (255-s)*v/255;
					var t3 = (t1-t2)*(h%60)/60;
					if(h==360) h = 0;
					if(h<60) {rgb.r=t1;	rgb.b=t2; rgb.g=t2+t3}
					else if(h<120) {rgb.g=t1; rgb.b=t2;	rgb.r=t1-t3}
					else if(h<180) {rgb.g=t1; rgb.r=t2;	rgb.b=t2+t3}
					else if(h<240) {rgb.b=t1; rgb.r=t2;	rgb.g=t1-t3}
					else if(h<300) {rgb.b=t1; rgb.g=t2;	rgb.r=t2+t3}
					else if(h<360) {rgb.r=t1; rgb.g=t2;	rgb.b=t1-t3}
					else {rgb.r=0; rgb.g=0;	rgb.b=0}
				}
				return {r:Math.round(rgb.r), g:Math.round(rgb.g), b:Math.round(rgb.b)};
			},
			RGBToHex = function (rgb) {
				var hex = [
					rgb.r.toString(16),
					rgb.g.toString(16),
					rgb.b.toString(16)
				];
				$.each(hex, function (nr, val) {
					if (val.length == 1) {
						hex[nr] = '0' + val;
					}
				});
				return hex.join('');
			},
			HSBToHex = function (hsb) {
				return RGBToHex(HSBToRGB(hsb));
			},
			restoreOriginal = function () {
				var cal = $(this).parent();
				var col = cal.data('colorpicker').origColor;
				cal.data('colorpicker').color = col;
				fillRGBFields(col, cal.get(0));
				fillHexFields(col, cal.get(0));
				fillHSBFields(col, cal.get(0));
				setSelector(col, cal.get(0));
				setHue(col, cal.get(0));
				setNewColor(col, cal.get(0));
			};
		return {
			init: function (opt) {
				opt = $.extend({}, defaults, opt||{});
				if (typeof opt.color == 'string') {
					opt.color = HexToHSB(opt.color);
				} else if (opt.color.r != undefined && opt.color.g != undefined && opt.color.b != undefined) {
					opt.color = RGBToHSB(opt.color);
				} else if (opt.color.h != undefined && opt.color.s != undefined && opt.color.b != undefined) {
					opt.color = fixHSB(opt.color);
				} else {
					return this;
				}
				return this.each(function () {
					if (!$(this).data('colorpickerId')) {
						var options = $.extend({}, opt);
						options.origColor = opt.color;
						var id = 'collorpicker_' + parseInt(Math.random() * 1000);
						$(this).data('colorpickerId', id);
						var cal = $(tpl).attr('id', id);
						if (options.flat) {
							cal.appendTo(this).show();
						} else {
							cal.appendTo(document.body);
						}
						options.fields = cal
											.find('input')
												.bind('keyup', keyDown)
												.bind('change', change)
												.bind('blur', blur)
												.bind('focus', focus);
						cal
							.find('span').bind('mousedown', downIncrement).end()
							.find('>div.colorpicker_current_color').bind('click', restoreOriginal);
						// Also add clickselector on click.
						options.selector = cal.find('div.colorpicker_color').bind('mousedown', downSelector).bind('click', clickSelector);
						options.selectorIndic = options.selector.find('div div');
						options.el = this;
						options.hue = cal.find('div.colorpicker_hue div');
						cal.find('div.colorpicker_hue').bind('mousedown', downHue);
						options.newColor = cal.find('div.colorpicker_new_color');
						options.currentColor = cal.find('div.colorpicker_current_color');
						cal.data('colorpicker', options);
						cal.find('div.colorpicker_submit')
							.bind('mouseenter', enterSubmit)
							.bind('mouseleave', leaveSubmit)
							.bind('click', clickSubmit);
						// Transparent.
						cal.find('div.colorpicker_transparent a').bind('click', makeTransparent);
						fillRGBFields(options.color, cal.get(0));
						fillHSBFields(options.color, cal.get(0));
						fillHexFields(options.color, cal.get(0));
						setHue(options.color, cal.get(0));
						setSelector(options.color, cal.get(0));
						setCurrentColor(options.color, cal.get(0));
						setNewColor(options.color, cal.get(0));
						if (options.flat) {
							cal.css({
								position: 'relative',
								display: 'block'
							});
						} else {
							$(this).bind(options.eventName, show);
						}
					}
				});
			},
			showPicker: function() {
				return this.each( function () {
					if ($(this).data('colorpickerId')) {
						show.apply(this);
					}
				});
			},
			hidePicker: function() {
				return this.each( function () {
					if ($(this).data('colorpickerId')) {
						$('#' + $(this).data('colorpickerId')).hide();
					}
				});
			},
			setColor: function(col) {
				if (typeof col == 'string') {
					col = HexToHSB(col);
				} else if (col.r != undefined && col.g != undefined && col.b != undefined) {
					col = RGBToHSB(col);
				} else if (col.h != undefined && col.s != undefined && col.b != undefined) {
					col = fixHSB(col);
				} else {
					return this;
				}
				return this.each(function(){
					if ($(this).data('colorpickerId')) {
						var cal = $('#' + $(this).data('colorpickerId'));
						cal.data('colorpicker').color = col;
						cal.data('colorpicker').origColor = col;
						fillRGBFields(col, cal.get(0));
						fillHSBFields(col, cal.get(0));
						fillHexFields(col, cal.get(0));
						setHue(col, cal.get(0));
						setSelector(col, cal.get(0));
						setCurrentColor(col, cal.get(0));
						setNewColor(col, cal.get(0));
					}
				});
			}
		};
	}();
	$.fn.extend({
		ColorPicker: ColorPicker.init,
		ColorPickerHide: ColorPicker.hidePicker,
		ColorPickerShow: ColorPicker.showPicker,
		ColorPickerSetColor: ColorPicker.setColor
	});
})(jQuery);
/* $Id: sweaver_plugin_styles.js,v 1.1.4.5 2010/11/05 23:54:07 swentel Exp $ */

/**
 * @file
 * Styles javascript.
 */

(function ($) {

/**
 * Start autosave poller.
 */
$(document).ready(function() {
  var span = 0;
  if (Drupal.settings.sweaver['autosave'] != undefined) {
	var interval = Drupal.settings.sweaver['autosave'];
    if (parseInt(interval) > 0) {
      var interval = (interval * 1000) + span;
      var autosave = setInterval('Drupal.Sweaver.AutoSave()', interval);
      span += 100;
    }
  }
});

/**
 * Autosave function.
 */
Drupal.Sweaver.AutoSave = function(context) {
  if (Drupal.Sweaver.changed) {
    Drupal.Sweaver.changed = false;
	  
    // Get values for css, customcss & palette (if available)
    var css = $('[name=sweaver-css]').val();
    if ($('#edit-sweaver-plugin-custom-css').length) {
      var customcss = $('#edit-sweaver-plugin-custom-css').val();      
    }
    else {
      var customcss = '';            
    }
    if ($('[name=sweaver-plugin-palette]').length) {
      var palette = $('[name=sweaver-plugin-palette]').val();
    }
    else {
      var palette = '';
    }

    $.ajax({
      type: "POST",
      url: Drupal.settings.basePath + 'index.php?q=sweaver-autosave',
      data: {
        css: css,
        customcss: customcss,
        palette: palette        
      },
      dataType: 'json',
      timeout: 5000,
      success: function(data){
        if (typeof data['message'] == 'undefined' || data['message'] != 0) {
          Drupal.Sweaver.setMessage(Drupal.t('Your changes have been saved.'), 2000);
        }
        if (typeof data['error'] == 'undefined' || data['error'] != 0) {
          Drupal.Sweaver.setMessage(Drupal.t('Your changes have been saved.'), 2000);
        }
      },
      error: function() {
        Drupal.Sweaver.setMessage(Drupal.t('There was an error saving current changes!'), 2000);
      }
    });
    return false;
  }	  
}

/**
 * Behaviors for style actions.
 */
Drupal.behaviors.StylesActions = {
  attach: function(context) {
    $("#style-actions-data-1 select.radio-style-save-type").change(function() {
      var radio_style_save_type = $("#style-actions-data-1 select.radio-style-save-type option:selected").val();
      if (radio_style_save_type == 1) {
        $('#edit-save-style').hide();
        $('#edit-style-existing-id').show();
      }
      else {
        $('#edit-save-style').show();
        $('#edit-style-existing-id').hide();
      }
    });

    $("#sweaver-popup #edit-delete-confirm").click(function() {
      $('#sweaver-popup .delete-style-confirm').hide();
      $('#sweaver-popup .delete-style-question').show();
      return false;
    });

    $("#sweaver-popup #edit-delete-cancel").click(function() {
      $('#sweaver-popup .delete-style-confirm').show();
      $('#sweaver-popup .delete-style-question').hide();
      return false;
    });
  }
};

})(jQuery);;
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
