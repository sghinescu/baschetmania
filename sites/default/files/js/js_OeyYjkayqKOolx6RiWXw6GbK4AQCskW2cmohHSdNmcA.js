
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

(function ($) {

/**
 * Behavior to add "Insert" buttons.
 */
Drupal.behaviors.insert = {};
Drupal.behaviors.insert.attach = function(context) {
  if (typeof(insertTextarea) == 'undefined') {
    insertTextarea = $('#edit-body textarea.text-full').get(0) || false;
  }

  // Keep track of the last active textarea (if not using WYSIWYG).
  $('.node-form textarea:not([name$="[data][title]"])', context).focus(insertSetActive).blur(insertRemoveActive);

  // Add the click handler to the insert button.
  $('.insert-button', context).unbind('click').click(insert);

  function insertSetActive() {
    insertTextarea = this;
    this.insertHasFocus = true;
  }

  function insertRemoveActive() {
    if (insertTextarea == this) {
      var thisTextarea = this;
      setTimeout(function() {
        thisTextarea.insertHasFocus = false;
      }, 1000);
    }
  }

  function insert() {
    var widgetType = $(this).attr('rel');
    var settings = Drupal.settings.insert.widgets[widgetType];
    var wrapper = $(this).parents(settings.wrapper).filter(':first').get(0);
    var style = $('.insert-style', wrapper).val();
    var content = $('input.insert-template[name$="[' + style + ']"]', wrapper).val();
    var filename = $('input.insert-filename', wrapper).val();

    // Update replacements.
    for (var fieldName in settings.fields) {
      var fieldValue = $(settings.fields[fieldName], wrapper).val();
      if (fieldValue) {
        var fieldRegExp = new RegExp('__' + fieldName + '(_or_filename)?__', 'g');
        content = content.replace(fieldRegExp, fieldValue);
      }
      else {
        var fieldRegExp = new RegExp('__' + fieldName + '_or_filename__', 'g');
        content = content.replace(fieldRegExp, filename);
      }
    }

    // File name replacement.
    var fieldRegExp = new RegExp('__filename__', 'g');
    content = content.replace(fieldRegExp, filename);

    // Cleanup unused replacements.
    content = content.replace(/__([a-z0-9_]+)__/g, '');

    // Check for a maximum dimension and scale down the width if necessary.
    // This is intended for use with Image Resize Filter.
    var widthMatches = content.match(/width[ ]*=[ ]*"(\d*)"/i);
    var heightMatches = content.match(/height[ ]*=[ ]*"(\d*)"/i);
    if (settings.maxWidth && widthMatches && parseInt(widthMatches[1]) > settings.maxWidth) {
      var insertRatio = settings.maxWidth / widthMatches[1];
      var width = settings.maxWidth;
      content = content.replace(/width[ ]*=[ ]*"?(\d*)"?/i, 'width="' + width + '"');

      if (heightMatches) {
        var height = Math.round(heightMatches[1] * insertRatio);
        content = content.replace(/height[ ]*=[ ]*"?(\d*)"?/i, 'height="' + height + '"');
      }
    }

    // Insert the text.
    Drupal.insert.insertIntoActiveEditor(content);
  }
};

// General Insert API functions.
Drupal.insert = {
  /**
   * Insert content into the current (or last active) editor on the page. This
   * should work with most WYSIWYGs as well as plain textareas.
   *
   * @param content
   */
  insertIntoActiveEditor: function(content) {
    // Always work in normal text areas that currently have focus.
    if (insertTextarea && insertTextarea.insertHasFocus) {
      Drupal.insert.insertAtCursor(insertTextarea, content);
    }
    // Direct tinyMCE support.
    else if (typeof(tinyMCE) != 'undefined' && tinyMCE.activeEditor) {
      Drupal.insert.activateTabPane(document.getElementById(tinyMCE.activeEditor.editorId));
      tinyMCE.activeEditor.execCommand('mceInsertContent', false, content);
    }
    // WYSIWYG support, should work in all editors if available.
    else if (Drupal.wysiwyg && Drupal.wysiwyg.activeId) {
      Drupal.insert.activateTabPane(document.getElementById(Drupal.wysiwyg.activeId));
      Drupal.wysiwyg.instances[Drupal.wysiwyg.activeId].insert(content)
    }
    // FCKeditor module support.
    else if (typeof(FCKeditorAPI) != 'undefined' && typeof(fckActiveId) != 'undefined') {
      Drupal.insert.activateTabPane(document.getElementById(fckActiveId));
      FCKeditorAPI.Instances[fckActiveId].InsertHtml(content);
    }
    // Direct FCKeditor support (only body field supported).
    else if (typeof(FCKeditorAPI) != 'undefined') {
      // Try inserting into the body.
      if (FCKeditorAPI.Instances[insertTextarea.id]) {
        Drupal.insert.activateTabPane(insertTextarea);
        FCKeditorAPI.Instances[insertTextarea.id].InsertHtml(content);
      }
      // Try inserting into the first instance we find (may occur with very
      // old versions of FCKeditor).
      else {
        for (var n in FCKeditorAPI.Instances) {
          Drupal.insert.activateTabPane(document.getElementById(n));
          FCKeditorAPI.Instances[n].InsertHtml(content);
          break;
        }
      }
    }
    // CKeditor module support.
    else if (typeof(CKEDITOR) != 'undefined' && typeof(Drupal.ckeditorActiveId) != 'undefined') {
      Drupal.insert.activateTabPane(document.getElementById(Drupal.ckeditorActiveId));
      CKEDITOR.instances[Drupal.ckeditorActiveId].insertHtml(content);
    }
    // Direct CKeditor support (only body field supported).
    else if (typeof(CKEDITOR) != 'undefined' && CKEDITOR.instances[insertTextarea.id]) {
      Drupal.insert.activateTabPane(insertTextarea);
      CKEDITOR.instances[insertTextarea.id].insertHtml(content);
    }
    else if (insertTextarea) {
      Drupal.insert.activateTabPane(insertTextarea);
      Drupal.insert.insertAtCursor(insertTextarea, content);
    }

    return false;
  },

  /**
   * Check for vertical tabs and activate the pane containing the editor.
   *
   * @param editor
   *   The DOM object of the editor that will be checked.
   */
  activateTabPane: function(editor) {
    var $pane = $(editor).parents('.vertical-tabs-pane:first');
    var $panes = $pane.parent('.vertical-tabs-panes');
    var $tabs = $panes.parents('.vertical-tabs:first').find('ul.vertical-tabs-list:first li a');
    if ($pane.size() && $pane.is(':hidden') && $panes.size() && $tabs.size()) {
      var index = $panes.children().index($pane);
      $tabs.eq(index).click();
    }
  },

  /**
   * Insert content into a textarea at the current cursor position.
   *
   * @param editor
   *   The DOM object of the textarea that will receive the text.
   * @param content
   *   The string to be inserted.
   */
  insertAtCursor: function(editor, content) {
    // Record the current scroll position.
    var scroll = editor.scrollTop;

    // IE support.
    if (document.selection) {
      editor.focus();
      sel = document.selection.createRange();
      sel.text = content;
    }

    // Mozilla/Firefox/Netscape 7+ support.
    else if (editor.selectionStart || editor.selectionStart == '0') {
      var startPos = editor.selectionStart;
      var endPos = editor.selectionEnd;
      editor.value = editor.value.substring(0, startPos) + content + editor.value.substring(endPos, editor.value.length);
    }

    // Fallback, just add to the end of the content.
    else {
      editor.value += content;
    }

    // Ensure the textarea does not unexpectedly scroll.
    editor.scrollTop = scroll;
  }
};

})(jQuery);
;
Drupal.behaviors.commerce_pdm_form_commerce_product_ui_product_form_alter = {
  attach: function(context, settings) {

    (function ($) {

      var COMMERCE_PDM_TYPE_MESSAGE_INFORMATION = 'commercePdmTypeMessageInfomration';
      var COMMERCE_PDM_TYPE_MESSAGE_ERROR = 'commercePdmTypeMessageError';

      // Declare all used elements as understandable variables.
      $table = $('table#commerce_pdm_product_referenced_by');
      $newTitleInput = $table.find('input#edit-quick-reference-add-new-reference-actions-commerce-pdm-product-display-title');
      $newTypeSelect = $table.find('select#edit-quick-reference-add-new-reference-actions-commerce-pdm-product-display-type');
      $existingNidInput = $table.find('input#edit-quick-reference-add-new-reference-actions-commerce-pdm-product-display-existing');
      $addButton = $table.find('a#edit-quick-reference-add-new-reference-actions-commerce-pdm-product-display-add');

      /**
       *
       */
      $addButton.bind('click', function(e) {
        if (!$table.find('div.add-new').hasClass('hidden')) {
          addNew();
        }
        else {
          addExisting();
        }

        return false;
      })

      /**
       *
       */
      $newTitleInput.bind('keypress', function(e) {
        if (e.keyCode == 13) {
          addNew();
          return false;
        }
      });

      /**
       *
       */
      $existingNidInput.bind('keypress', function(e) {
        // Accept only when the ENTER key has been presses and the autocomplete
        // list is hidden.
        if (e.keyCode == 13 && $(this).siblings('#autocomplete').length == 0) {
          addExisting();
          return false;
        }
      });

      /**
       *
       */
      function addExisting() {
        // Display throbber.
        $existingNidInput.css('background-position', '100% -16px');
        $.ajax({
          url: Drupal.settings.basePath + 'commerce_pdm/get_node_info/' + $existingNidInput.val(),
          dataTypeString: 'json',
          complete: function() {
            // Hide throbber.
            $existingNidInput.css('background-position', '100% 4px');
          },
          success: function(result) {
            if (result.success) {
              if ($('input.commerce-pdm-reference-nid[val="' + result.data.nid + '"]').length == 0) {
                addReferencedRow(result.data.title, result.data.nid, 0);
                displayMessage(Drupal.settings.commerce_pdm_product_form.added_existing, COMMERCE_PDM_TYPE_MESSAGE_INFORMATION);
              }
              else { // This product is already referenced by that display node.
                displayMessage(Drupal.settings.commerce_pdm_product_form.already_has_reference, COMMERCE_PDM_TYPE_MESSAGE_ERROR);
              }
            }
            else {
              if (result.message == 'node_full') {
                displayMessage(Drupal.settings.commerce_pdm_product_form.node_full, COMMERCE_PDM_TYPE_MESSAGE_ERROR);
              }
              else {
                displayMessage(Drupal.settings.commerce_pdm_product_form.node_not_found, COMMERCE_PDM_TYPE_MESSAGE_ERROR);
              }
            }
          }
        });
      }

      /**
       *
       */
      function addNew() {
        if ($newTitleInput.val().length > 0) {
          var displayNodeType = $newTypeSelect.val();
          var displatNodeTitle = $newTitleInput.val();

          displayMessage(Drupal.settings.commerce_pdm_product_form.added_new, COMMERCE_PDM_TYPE_MESSAGE_INFORMATION);
          addReferencedRow(displatNodeTitle, 'New (' + displayNodeType + ')', displayNodeType);
        }
        else {
          displayMessage(Drupal.settings.commerce_pdm_product_form.title_missing, COMMERCE_PDM_TYPE_MESSAGE_ERROR);
        }
      }

      /**
       *
       */
      function addReferencedRow(title, nid, newType) {
        var numRows =  $table .find('tr').length - 3;
        var $template = $table.find('tr.reference-row-template');
        var $new_row = $template.clone();

        $new_row.find('input.commerce-pdm-reference-attach').val(1);

        var $titleInput = $new_row.find('input#edit-quick-reference-commerce-pdm-product-reference-row-template-title');
        var $titleDiv = $new_row.find('div.form-item-quick-reference-commerce-pdm-product-reference-row-template-title');
        var $nidInput = $new_row.find('input#edit-quick-reference-commerce-pdm-product-reference-row-template-nid');
        var $nidDiv = $new_row.find('div.form-item-quick-reference-commerce-pdm-product-reference-row-template-nid');
        var $attachInput = $new_row.find('input.commerce-pdm-reference-attach');
        var $newTypeInput = $new_row.find('input.commerce-pdm-reference-new-type');
        var $newType = $new_row.find('input.commerce-pdm-reference-new-type');
        var $deleted = $new_row.find('input.commerce-pdm-reference-deleted');

        $new_row.find('a, input').attr('id', '');

        $titleInput.attr('id', 'edit-quick-reference-' + numRows + '-title');
        $titleInput.attr('name', 'quick_reference[' + numRows  + '][title]');
        $titleDiv.removeClass('form-item-quick-reference-commerce-pdm-product-reference-row-template-title');
        $titleDiv.addClass('form-item-quick-reference-' + numRows + '-title');

        $nidInput.attr('id', 'edit-quick-reference-' + numRows + '-nid');
        $nidInput.attr('name', 'quick_reference[' + numRows  + '][nid]');
        $nidInput.attr('val', nid);  // Because we need to check this later and value is not set???
        $nidDiv.removeClass('form-item-quick-reference-commerce-pdm-product-reference-row-template-nid');
        $nidDiv.addClass('form-item-quick-reference-' + numRows + '-nid');

        $newType.attr('name', 'quick_reference[' + numRows + '][new_type]');
        $deleted.attr('name', 'quick_reference[' + numRows + '][deleted]');
        $attachInput.attr('name', 'quick_reference[' + numRows + '][attach]');

        $new_row.removeClass('hidden').removeClass('reference-row-template');

        $titleInput.val(title);
        $nidInput.val(nid);
        $newTypeInput.val(newType);
        $new_row.find('input.commerce-pdm-new-reference').val(newType);

        $new_row.removeClass('odd').removeClass('even');
        $alternateRowClass = numRows % 2 ? 'even' : 'odd';
        $new_row.addClass($alternateRowClass);

        $template.before($new_row);
        $new_row.hide();
        $new_row.fadeIn(250);

        resetReferenceAddingRow();
      }

      /**
       *
       */
      function resetReferenceAddingRow() {
        $newTitleInput.val('');
        $existingNidInput.val('');
        toggleActionsVisible();
      }

      /**
       *
       */
      function displayMessage(msg, messageType) {
        $messageContainer = $('table#commerce_pdm_product_referenced_by div.commerce-pdm-product-form-reference-error-message');
        $messageContainer.css('color', (messageType == COMMERCE_PDM_TYPE_MESSAGE_INFORMATION) ? 'green' : 'red');
        $messageContainer.text(msg);
        $messageContainer.fadeIn(250).delay(1750).fadeOut(250);
      }

      /**
       *
       */
      $('table#commerce_pdm_product_referenced_by a.commerce-pdm-reference-delete').live('click', function() {
        $(this).parents('tr').addClass('deleted');
        $(this).siblings('input.commerce-pdm-reference-deleted').val(1);

        $(this).addClass('hidden');
        $(this).siblings('a.commerce-pdm-reference-undo-delete').removeClass('hidden');

        return false;
      });

      /**
       *
       */
      $('table#commerce_pdm_product_referenced_by a.commerce-pdm-reference-undo-delete').live('click', function() {
        $(this).parents('tr').removeClass('deleted');
        $(this).siblings('input.commerce-pdm-reference-deleted').val(0);

        $(this).addClass('hidden');
        $(this).siblings('a.commerce-pdm-reference-delete').removeClass('hidden');

        return false;
      });

      /**
       *
       */
      $('fieldset#edit-quick-reference div.commerce-pdm-product-form-reference-add-links a').bind('click', function(e) {
        var $add_new = $('fieldset#edit-quick-reference div.commerce-pdm-product-form-reference-add-actions div.add-new');
        var $existing = $('fieldset#edit-quick-reference div.commerce-pdm-product-form-reference-add-actions div.existing');
        if ($(this).attr('rel') == 'use_existing') {
          $add_new.addClass('hidden');
          $existing.removeClass('hidden');
        }
        else {
          $add_new.removeClass('hidden');
          $existing.addClass('hidden');
        }

        toggleActionsVisible();

        return false;
      });

      /**
       *
       */
      $table.find('a#edit-quick-reference-add-new-reference-actions-commerce-pdm-product-display-cancel').bind('click', function(e) {
        resetReferenceAddingRow();
        return false;
      });

      /**
       *
       */
      function toggleActionsVisible() {
        var $links = $('fieldset#edit-quick-reference div.commerce-pdm-product-form-reference-add-links');
        var $actions = $('fieldset#edit-quick-reference div.commerce-pdm-product-form-reference-add-actions');

        if ($links.hasClass('hidden')) {
          $links.removeClass('hidden');
          $actions.addClass('hidden');
        }
        else {
          $links.addClass('hidden');
          $actions.removeClass('hidden');
        }
      }

    })(jQuery);

  }
};
;
