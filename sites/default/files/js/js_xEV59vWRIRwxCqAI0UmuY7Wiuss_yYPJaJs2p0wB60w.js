
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

/**
 * @file: Popup dialog interfaces for the media project.
 *
 * Drupal.media.popups.mediaBrowser
 *   Launches the media browser which allows users to pick a piece of media.
 *
 * Drupal.media.popups.mediaStyleSelector
 *  Launches the style selection form where the user can choose
 *  what format / style they want their media in.
 *
 */

(function ($) {
namespace('Drupal.media.popups');

/**
 * Media browser popup. Creates a media browser dialog.
 *
 * @param {function}
 *          onSelect Callback for when dialog is closed, received (Array
 *          media, Object extra);
 * @param {Object}
 *          globalOptions Global options that will get passed upon initialization of the browser.
 *          @see Drupal.media.popups.mediaBrowser.getDefaults();
 *
 * @param {Object}
 *          pluginOptions Options for specific plugins. These are passed
 *          to the plugin upon initialization.  If a function is passed here as
 *          a callback, it is obviously not passed, but is accessible to the plugin
 *          in Drupal.settings.variables.
 *
 *          Example
 *          pluginOptions = {library: {url_include_patterns:'/foo/bar'}};
 *
 * @param {Object}
 *          widgetOptions Options controlling the appearance and behavior of the
 *          modal dialog.
 *          @see Drupal.media.popups.mediaBrowser.getDefaults();
 */
Drupal.media.popups.mediaBrowser = function (onSelect, globalOptions, pluginOptions, widgetOptions) {
  var options = Drupal.media.popups.mediaBrowser.getDefaults();
  options.global = $.extend({}, options.global, globalOptions);
  options.plugins = pluginOptions;
  options.widget = $.extend({}, options.widget, widgetOptions);

  // Create it as a modal window.
  var browserSrc = options.widget.src;
  if ($.isArray(browserSrc) && browserSrc.length) {
    browserSrc = browserSrc[browserSrc.length - 1];
  }
  // Params to send along to the iframe.  WIP.
  var params = {};
  $.extend(params, options.global);
  params.plugins = options.plugins;

  browserSrc += '&' + $.param(params);
  var mediaIframe = Drupal.media.popups.getPopupIframe(browserSrc, 'mediaBrowser');
  // Attach the onLoad event
  mediaIframe.bind('load', options, options.widget.onLoad);
  /**
   * Setting up the modal dialog
   */

  var ok = 'OK';
  var cancel = 'Cancel';
  var notSelected = 'You have not selected anything!';

  if (Drupal && Drupal.t) {
    ok = Drupal.t(ok);
    cancel = Drupal.t(cancel);
    notSelected = Drupal.t(notSelected);
  }

  // @todo: let some options come through here. Currently can't be changed.
  var dialogOptions = options.dialog;

  dialogOptions.buttons[ok] = function () {
    var selected = this.contentWindow.Drupal.media.browser.selectedMedia;
    if (selected.length < 1) {
      alert(notSelected);
      return;
    }
    onSelect(selected);
    $(this).dialog("destroy");
    $(this).remove();
  };

  dialogOptions.buttons[cancel] = function () {
    $(this).dialog("destroy");
    $(this).remove();
  };

  Drupal.media.popups.setDialogPadding(mediaIframe.dialog(dialogOptions));
  // Remove the title bar.
  mediaIframe.parents(".ui-dialog").find(".ui-dialog-titlebar").remove();
  Drupal.media.popups.overlayDisplace(mediaIframe.parents(".ui-dialog"));
  return mediaIframe;
};

Drupal.media.popups.mediaBrowser.mediaBrowserOnLoad = function (e) {
  var options = e.data;
  if (this.contentWindow.Drupal.media.browser.selectedMedia.length > 0) {
    var ok = $(this).dialog('option', 'buttons')['OK'];
    ok.call(this);
    return;
  }
};

Drupal.media.popups.mediaBrowser.getDefaults = function () {
  return {
    global: {
      types: [], // Types to allow, defaults to all.
      activePlugins: [] // If provided, a list of plugins which should be enabled.
    },
    widget: { // Settings for the actual iFrame which is launched.
      src: Drupal.settings.media.browserUrl, // Src of the media browser (if you want to totally override it)
      onLoad: Drupal.media.popups.mediaBrowser.mediaBrowserOnLoad // Onload function when iFrame loads.
    },
    dialog: Drupal.media.popups.getDialogOptions()
  };
};

Drupal.media.popups.mediaBrowser.finalizeSelection = function () {
  var selected = this.contentWindow.Drupal.media.browser.selectedMedia;
  if (selected.length < 1) {
    alert(notSelected);
    return;
  }
  onSelect(selected);
  $(this).dialog("destroy");
  $(this).remove();
}

/**
 * Style chooser Popup. Creates a dialog for a user to choose a media style.
 *
 * @param mediaFile
 *          The mediaFile you are requesting this formatting form for.
 *          @todo: should this be fid?  That's actually all we need now.
 *
 * @param Function
 *          onSubmit Function to be called when the user chooses a media
 *          style. Takes one parameter (Object formattedMedia).
 *
 * @param Object
 *          options Options for the mediaStyleChooser dialog.
 */
Drupal.media.popups.mediaStyleSelector = function (mediaFile, onSelect, options) {
  var defaults = Drupal.media.popups.mediaStyleSelector.getDefaults();
  // @todo: remove this awful hack :(
  defaults.src = defaults.src.replace('-media_id-', mediaFile.fid);
  options = $.extend({}, defaults, options);
  // Create it as a modal window.
  var mediaIframe = Drupal.media.popups.getPopupIframe(options.src, 'mediaStyleSelector');
  // Attach the onLoad event
  mediaIframe.bind('load', options, options.onLoad);

  /**
   * Set up the button text
   */
  var ok = 'OK';
  var cancel = 'Cancel';
  var notSelected = 'Very sorry, there was an unknown error embedding media.';

  if (Drupal && Drupal.t) {
    ok = Drupal.t(ok);
    cancel = Drupal.t(cancel);
    notSelected = Drupal.t(notSelected);
  }

  // @todo: let some options come through here. Currently can't be changed.
  var dialogOptions = Drupal.media.popups.getDialogOptions();

  dialogOptions.buttons[ok] = function () {

    var formattedMedia = this.contentWindow.Drupal.media.formatForm.getFormattedMedia();
    if (!formattedMedia) {
      alert(notSelected);
      return;
    }
    onSelect(formattedMedia);
    $(this).dialog("destroy");
    $(this).remove();
  };

  dialogOptions.buttons[cancel] = function () {
    $(this).dialog("destroy");
    $(this).remove();
  };

  Drupal.media.popups.setDialogPadding(mediaIframe.dialog(dialogOptions));
  // Remove the title bar.
  mediaIframe.parents(".ui-dialog").find(".ui-dialog-titlebar").remove();
  Drupal.media.popups.overlayDisplace(mediaIframe.parents(".ui-dialog"));
  return mediaIframe;
};

Drupal.media.popups.mediaStyleSelector.mediaBrowserOnLoad = function (e) {
};

Drupal.media.popups.mediaStyleSelector.getDefaults = function () {
  return {
    src: Drupal.settings.media.styleSelectorUrl,
    onLoad: Drupal.media.popups.mediaStyleSelector.mediaBrowserOnLoad
  };
};


/**
 * Style chooser Popup. Creates a dialog for a user to choose a media style.
 *
 * @param mediaFile
 *          The mediaFile you are requesting this formatting form for.
 *          @todo: should this be fid?  That's actually all we need now.
 *
 * @param Function
 *          onSubmit Function to be called when the user chooses a media
 *          style. Takes one parameter (Object formattedMedia).
 *
 * @param Object
 *          options Options for the mediaStyleChooser dialog.
 */
Drupal.media.popups.mediaFieldEditor = function (fid, onSelect, options) {
  var defaults = Drupal.media.popups.mediaFieldEditor.getDefaults();
  // @todo: remove this awful hack :(
  defaults.src = defaults.src.replace('-media_id-', fid);
  options = $.extend({}, defaults, options);
  // Create it as a modal window.
  var mediaIframe = Drupal.media.popups.getPopupIframe(options.src, 'mediaFieldEditor');
  // Attach the onLoad event
  // @TODO - This event is firing too early in IE on Windows 7,
  // - so the height being calculated is too short for the content.
  mediaIframe.bind('load', options, options.onLoad);

  /**
   * Set up the button text
   */
  var ok = 'OK';
  var cancel = 'Cancel';
  var notSelected = 'Very sorry, there was an unknown error embedding media.';

  if (Drupal && Drupal.t) {
    ok = Drupal.t(ok);
    cancel = Drupal.t(cancel);
    notSelected = Drupal.t(notSelected);
  }

  // @todo: let some options come through here. Currently can't be changed.
  var dialogOptions = Drupal.media.popups.getDialogOptions();

  dialogOptions.buttons[ok] = function () {
    alert('hell yeah');
    return "poo";

    var formattedMedia = this.contentWindow.Drupal.media.formatForm.getFormattedMedia();
    if (!formattedMedia) {
      alert(notSelected);
      return;
    }
    onSelect(formattedMedia);
    $(this).dialog("destroy");
    $(this).remove();
  };

  dialogOptions.buttons[cancel] = function () {
    $(this).dialog("destroy");
    $(this).remove();
  };

  Drupal.media.popups.setDialogPadding(mediaIframe.dialog(dialogOptions));
  // Remove the title bar.
  mediaIframe.parents(".ui-dialog").find(".ui-dialog-titlebar").remove();
  Drupal.media.popups.overlayDisplace(mediaIframe.parents(".ui-dialog"));
  return mediaIframe;
};

Drupal.media.popups.mediaFieldEditor.mediaBrowserOnLoad = function (e) {

};

Drupal.media.popups.mediaFieldEditor.getDefaults = function () {
  return {
    // @todo: do this for real
    src: '/media/-media_id-/edit?render=media-popup',
    onLoad: Drupal.media.popups.mediaFieldEditor.mediaBrowserOnLoad
  };
};


/**
 * Generic functions to both the media-browser and style selector
 */

/**
 * Returns the commonly used options for the dialog.
 */
Drupal.media.popups.getDialogOptions = function () {
  return {
    buttons: {},
    dialogClass: 'media-wrapper',
    modal: true,
    draggable: false,
    resizable: false,
    minWidth: 600,
    width: 800,
    height: 550,
    position: 'center',
    overlay: {
      backgroundColor: '#000000',
      opacity: 0.4
    }
  };
};

/**
 * Created padding on a dialog
 *
 * @param jQuery dialogElement
 *  The element which has .dialog() attached to it.
 */
Drupal.media.popups.setDialogPadding = function (dialogElement) {
  // @TODO: Perhaps remove this hardcoded reference to height.
  // - It's included to make IE on Windows 7 display the dialog without
  //   collapsing. 550 is the height that displays all of the tab panes
  //   within the Add Media overlay. This is either a bug in the jQuery
  //   UI library, a bug in IE on Windows 7 or a bug in the way the
  //   dialog is instantiated. Or a combo of the three.
  //   All browsers except IE on Win7 ignore these defaults and adjust
  //   the height of the iframe correctly to match the content in the panes
  dialogElement.height(dialogElement.dialog('option', 'height'));
  dialogElement.width(dialogElement.dialog('option', 'width'));
};

/**
 * Get an iframe to serve as the dialog's contents. Common to both plugins.
 */
Drupal.media.popups.getPopupIframe = function (src, id, options) {
  var defaults = {width: '800px', scrolling: 'no'};
  var options = $.extend({}, defaults, options);

  return $('<iframe class="media-modal-frame"/>')
  .attr('src', src)
  .attr('width', options.width)
  .attr('id', id)
  .attr('scrolling', options.scrolling);
};

Drupal.media.popups.overlayDisplace = function (dialog) {
  if (parent.window.Drupal.overlay) {
    var overlayDisplace = parent.window.Drupal.overlay.getDisplacement('top');
    if (dialog.offset().top < overlayDisplace) {
      dialog.css('top', overlayDisplace);
    }
  }
}

})(jQuery);
;

/*jslint bitwise: true, eqeqeq: true, immed: true, newcap: true, nomen: false,
 onevar: false, plusplus: false, regexp: true, undef: true, white: true, indent: 2
 browser: true */

/*global jQuery: true Drupal: true window: true */

(function ($) {
  
Drupal.behaviors.RotatingBannerSettings = {
  context: null,

  attach: function(context) {
    $('#block-admin-configure', context).once('rotatingBannerAdminProcessed', function() {
      // Set up the effect preview div.
      $('#edit-rotating-banner-banner-settings-cycle-fx').bind('change', function() {
        if ($(this).val() === '') {
          $('.rb-fx-setting').parent().hide();
          $('#rb-settings-effect-preview').hide();
        } else {
          $('#rb-settings-effect-preview img').css('height', '150px').css('width', '150px');
          Drupal.behaviors.RotatingBannerSettings.updatePreview();
        }
      });
      $('#edit-rotating-banner-banner-settings-cycle-fx').trigger('change');


      // Only show the timeout field if the user checks the checkbox.
      if ($('#edit-rotating-banner-banner-settings-cycle-timeout').val() == '') {
        $('#auto-transition-selector').attr('checked', false);
      } else {
        $('#auto-transition-selector').attr('checked', true);
      }

      var timeoutDelay = $('#edit-rotating-banner-banner-settings-cycle-timeout').val();
      $('#edit-rotating-banner-banner-settings-cycle-timeout').bind('change', function () {
        timeoutDelay = $('#edit-rotating-banner-banner-settings-cycle-timeout').val();
      });

      $('#auto-transition-selector').bind('change', function() {
        if ($(this).attr('checked')) {
          $('#edit-rotating-banner-banner-settings-cycle-timeout').parent().show();
          if (!timeoutDelay) {
            timeoutDelay = 8000;
          }
          $('#edit-rotating-banner-banner-settings-cycle-timeout').val(timeoutDelay);
        } else {
          $('#edit-rotating-banner-banner-settings-cycle-timeout').parent().hide();
          $('#edit-rotating-banner-banner-settings-cycle-timeout').val('');
        }
      });
      $('#auto-transition-selector').trigger('change');


      // Only show the height and width if the user doesn't want fluid mode
      $('#edit-rotating-banner-banner-settings-fluid').bind('change', function () {
        var fluid_setting = $('input:checked', this).val();
        if (fluid_setting === '1') {
          // Cheap, but for now, we just set it to null.
          $('.rb-dimension-settings').parent().hide();
        } else {
          $('.rb-dimension-settings').parent().show();
        }
      });
      $('#edit-rotating-banner-banner-settings-fluid').trigger('change');
    });
  },

  // Updates the preiew of the effect.
  updatePreview: function () {
    var effect = $('#edit-rotating-banner-banner-settings-cycle-fx').val();
    // If we want to add this later we can.
    //var timeout = $('#edit-rotating-banner-banner-settings-cycle-timeout').val();
    $('#rb-settings-effect-preview').cycle({
      'fx' : effect,
      'timeout': '1000ms'
    });
  }
}

/**
 * For editing a banner slide
 */
Drupal.behaviors.RotatingBannerSlideEdit = {
  attach: function (context) {
    if (Drupal.settings.rotatingBanner == undefined) {
      // This is not the slide edit page.
      return;
    }

    $('#rotating-banner-slide-form', context).once('rotatingBannerSlideEditorProcessed', function() {

      // Setup a jQuery method to get the layout class on the wrapper
      $.fn.getTextBoxType = function() {
        var classes = this.attr('class').split(' ')
        for (var i = 0; i < classes.length; i++){
          if (classes[i].match(/rb-textbox-type-/)) {
            return classes[i];
          }
        }
        return false;
      }

      // Hide the slide preview if there is no image.
      if ($('img', '.rb-slide').length === 0) {
        $('.rb-slide-preview').hide();
      }

      // This custom handler gets called when the user selects a background image
      // used to add show the preview label.
      $('.rb-slide').bind('imgAdded', function() {
        $('.rb-slide-preview').show();
      });

      // Create a submit handler to save the textbox positions and content
      $('#rotating-banner-slide-form').bind('submit', Drupal.behaviors.RotatingBannerSlideEdit.savetextboxes);

      // Configures the slide height and width.
      var bannerSettings = Drupal.settings.rotatingBanner;
      //$('.rb-slide').css('width', bannerSettings.width);
      //$('.rb-slide').css('height', bannerSettings.height);

      // Setup the image chooser link
      $('a.choose-image-link').click(function () {
        Drupal.media.popups.mediaBrowser(function (mediaFiles) {
          var background = mediaFiles[0];
          $('#edit-fid').val(background.fid);
          $('.rb-slide img').remove();
          var imgElem = $('<img/>').attr('src', background.url);
          $('.rb-slide').append(imgElem);
          $('.rb-slide').trigger('imgAdded');
        });
       });


      // Record the original classes applied to the slide element
      // This is so we can swap out the layout classes.
      var originalClasses = $('.layout-wrapper').attr('class');

      // Removes the anchor wrappers around rb-textbox elements
      // The inline element throws off the textEdit state
      Drupal.behaviors.RotatingBannerSlideEdit.stripLinks();
      
      // Makes the textboxes editable by double-clicking them.
      Drupal.behaviors.RotatingBannerSlideEdit.makeEditable();

      // Binds the editing input elements to the textboxes.
      Drupal.behaviors.RotatingBannerSlideEdit.setupLayoutTextBoxes();

      $('#edit-layout').bind('change', function() {
        // If the user selects Custom mode from this select box, then they can
        // drag the header and text box around the slide as required.  The can also
        // add as many as they want.
        // If they select anything else, we show text boxes for title and header
        // They are not able to position the boxes in this case.

        if ($(this).val() === 'custom') {
          // Custom mode.

          $('.layout-wrapper').removeClass().addClass(originalClasses);
          $('.layout-wrapper').addClass($(this).val());
          $('.rb-custom-layout-tools').show();
          $('.layout-text-editor').hide();
          // Setup dragging
          $('.rb-textbox-wrapper').draggable({
            containment: 'parent'
          });
          // Iterate through the textboxes and set their right and bottom to auto so they can be dragged properly
          $('.rb-textbox-wrapper').each( function() {
            $(this)
              .css('left', $(this).position().left)
              .css('top', $(this).position().top)
              .css('bottom', 'auto')
              .css('right', 'auto');
          });
        } else {
          $('.rb-custom-layout-tools').hide();
          $('.layout-text-editor').show();
          $('.layout-wrapper').removeClass().addClass(originalClasses);
          $('.layout-wrapper').addClass($(this).val());

          $('.rb-textbox-wrapper.ui-draggable').draggable('destroy');
          //Drupal.behaviors.RotatingBannerSlideEdit.makeUnEditable();
        }
      });

      // Fire a trigger to tell the form to go into custom or layout mode.
      $('#edit-layout').trigger('change');


      // Configure the add text-box functions
      $('#rb-add-text').bind('click', function() {return Drupal.behaviors.RotatingBannerSlideEdit.newText({type: 'rb-text'});});
      $('#rb-add-headline').bind('click', function() {
        return Drupal.behaviors.RotatingBannerSlideEdit.newText({type: 'rb-textbox-type-header', content: 'Lorem ipsum puttum baneradi four ure bannerum'});
      });
    });
  },

  newText: function(options) {
    
    options = $.extend({
      type: 'rb-textbox-type-text', // The CSS class to add
      position: {top:20, left:20},
      content: 'Lorem ipsum puttum textim four ure bannerum. <br/> Isthay aragrphay siya ay ittleay ongerlae.'
    },options);

    // Create an editable text region
    var rbTextArea = $('<div></div>')
      .addClass('rb-textbox')
      .html(options.content);
  
    // Put the whole thing in a wrapper for dragging
    $('<div></div>')
      .css('top', options.position.top)
      .css('left', options.position.left)
      .addClass('rb-textbox-wrapper')
      .addClass(options.type)
      .append(rbTextArea)
      // Append to the slide
      .prependTo($('.layout-wrapper'));

    $('.rb-textbox-wrapper').draggable({
      containment: 'parent'
    });
    Drupal.behaviors.RotatingBannerSlideEdit.makeEditable();
    return false;
  },
  
  stripLinks: function() {
    $('.rb-textbox').find('a').children().unwrap();
  },

  makeUnEditable: function() {
    $('.rb-textbox').unbind('dblclick');
    $('.rb-textbox').unbind('blur');
  },

  makeEditable: function () {
    $('.rb-textbox').once('editableAttached', function() {
      $(this).bind('dblclick', function() {
        // Odd, when I use disable here, my addClass() no longer works :(
        $(this).attr('contentEditable', true);
        $(this).parent().draggable('destroy');
        $(this).parent().addClass('editMode');
        $('#edit-submit').attr('disabled', true);
        $('#edit-submit').css('opacity', 0.5);
      });
     
     $(this).bind('blur', function() {
       $(this).trigger('editEdit');
       $(this).attr('contentEditable', false);
       // Only make draggable if the layout is set to custom
       if ($('.layout-wrapper').hasClass('custom')) {
         $(this).parent().draggable({containment: 'parent'});
       }
       $(this).parent().removeClass('editMode');
       $('#edit-submit').attr('disabled', false);
       $('#edit-submit').css('opacity', 1);
     });
     //$(this).editableText({
     //  newlinesEnabled: true
     //});
    });
  },

  savetextboxes: function () {
    var textboxes = [];
    $('.rb-textbox-wrapper').each(function() {
      // Convert position from px to %
      $position = $(this).position();
      $parentHeight = $(this).parent().height();
      $parentWidth = $(this).parent().width();
      $position.right = ($parentWidth - ($position.left + $(this).width())) / $parentWidth * 100;
      $position.bottom = ($parentHeight - ($position.top + $(this).height())) / $parentHeight * 100;
      $position.left = $position.left / $parentWidth * 100;
      $position.top = $position.top / $parentHeight * 100;
      
      if ($position.right < $position.left) {
        $position.left = 'auto';
      }
      if ($position.bottom < $position.top) {
        $position.top = 'auto'
      }
      
      textboxes.push({
        position: $position,
        content: $('.rb-textbox', this).html(),
        type: $(this).getTextBoxType()
      });
    });
    $('#edit-textboxes').val(JSON.stringify(textboxes));
  },

  setupLayoutTextBoxes: function() {
    // For each textbox, create a text field.
    //$('.layout-text-editor').append();
    $('.rb-textbox-wrapper').each(function() {
      var content = $('.rb-textbox', this).html();
      if ($(this).getTextBoxType() === 'rb-textbox-type-header') {
        Drupal.behaviors.RotatingBannerSlideEdit.bindEditorTextBox($('#edit-layout-text-editor-header'), $(this))
        $(this).trigger('keyup');
      } else {
        Drupal.behaviors.RotatingBannerSlideEdit.bindEditorTextBox($('#edit-layout-text-editor-text'), $(this));
        $(this).trigger('keyup');
      }
//      $('.layout-text-editor').append(input);
      // Create a textbox.
    });
  },

  bindEditorTextBox: function(input, textbox) {
    function nl2br(txt) {
      return txt.replace(/[\n(\r\n)]/g, "<br/>");
    }
    function br2nl(txt) {
      return txt.replace(/(<br\/>|<br>)/g, "\n");
    }
    textbox.bind('keyup', function() {
      var content = br2nl($('.rb-textbox', this).html());
      input.val(content);
    });
    input.bind('keyup', function() {
      $('.rb-textbox', textbox).html(nl2br(input.val()));
    });
  }
};


})(jQuery);;
/*
    http://www.JSON.org/json2.js
    2009-09-29

    Public Domain.

    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

    See http://www.JSON.org/js.html


    This code should be minified before deployment.
    See http://javascript.crockford.com/jsmin.html

    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
    NOT CONTROL.


    This file creates a global JSON object containing two methods: stringify
    and parse.

        JSON.stringify(value, replacer, space)
            value       any JavaScript value, usually an object or array.

            replacer    an optional parameter that determines how object
                        values are stringified for objects. It can be a
                        function or an array of strings.

            space       an optional parameter that specifies the indentation
                        of nested structures. If it is omitted, the text will
                        be packed without extra whitespace. If it is a number,
                        it will specify the number of spaces to indent at each
                        level. If it is a string (such as '\t' or '&nbsp;'),
                        it contains the characters used to indent at each level.

            This method produces a JSON text from a JavaScript value.

            When an object value is found, if the object contains a toJSON
            method, its toJSON method will be called and the result will be
            stringified. A toJSON method does not serialize: it returns the
            value represented by the name/value pair that should be serialized,
            or undefined if nothing should be serialized. The toJSON method
            will be passed the key associated with the value, and this will be
            bound to the value

            For example, this would serialize Dates as ISO strings.

                Date.prototype.toJSON = function (key) {
                    function f(n) {
                        // Format integers to have at least two digits.
                        return n < 10 ? '0' + n : n;
                    }

                    return this.getUTCFullYear()   + '-' +
                         f(this.getUTCMonth() + 1) + '-' +
                         f(this.getUTCDate())      + 'T' +
                         f(this.getUTCHours())     + ':' +
                         f(this.getUTCMinutes())   + ':' +
                         f(this.getUTCSeconds())   + 'Z';
                };

            You can provide an optional replacer method. It will be passed the
            key and value of each member, with this bound to the containing
            object. The value that is returned from your method will be
            serialized. If your method returns undefined, then the member will
            be excluded from the serialization.

            If the replacer parameter is an array of strings, then it will be
            used to select the members to be serialized. It filters the results
            such that only members with keys listed in the replacer array are
            stringified.

            Values that do not have JSON representations, such as undefined or
            functions, will not be serialized. Such values in objects will be
            dropped; in arrays they will be replaced with null. You can use
            a replacer function to replace those with JSON values.
            JSON.stringify(undefined) returns undefined.

            The optional space parameter produces a stringification of the
            value that is filled with line breaks and indentation to make it
            easier to read.

            If the space parameter is a non-empty string, then that string will
            be used for indentation. If the space parameter is a number, then
            the indentation will be that many spaces.

            Example:

            text = JSON.stringify(['e', {pluribus: 'unum'}]);
            // text is '["e",{"pluribus":"unum"}]'


            text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
            // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

            text = JSON.stringify([new Date()], function (key, value) {
                return this[key] instanceof Date ?
                    'Date(' + this[key] + ')' : value;
            });
            // text is '["Date(---current time---)"]'


        JSON.parse(text, reviver)
            This method parses a JSON text to produce an object or array.
            It can throw a SyntaxError exception.

            The optional reviver parameter is a function that can filter and
            transform the results. It receives each of the keys and values,
            and its return value is used instead of the original value.
            If it returns what it received, then the structure is not modified.
            If it returns undefined then the member is deleted.

            Example:

            // Parse the text. Values that look like ISO date strings will
            // be converted to Date objects.

            myData = JSON.parse(text, function (key, value) {
                var a;
                if (typeof value === 'string') {
                    a =
/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
                    if (a) {
                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                            +a[5], +a[6]));
                    }
                }
                return value;
            });

            myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
                var d;
                if (typeof value === 'string' &&
                        value.slice(0, 5) === 'Date(' &&
                        value.slice(-1) === ')') {
                    d = new Date(value.slice(5, -1));
                    if (d) {
                        return d;
                    }
                }
                return value;
            });


    This is a reference implementation. You are free to copy, modify, or
    redistribute.
*/

/*jslint evil: true, strict: false */

/*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
    call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
    lastIndex, length, parse, prototype, push, replace, slice, stringify,
    test, toJSON, toString, valueOf
*/


// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.

if (!this.JSON) {
    this.JSON = {};
}

(function () {

    function f(n) {
        // Format integers to have at least two digits.
        return n < 10 ? '0' + n : n;
    }

    if (typeof Date.prototype.toJSON !== 'function') {

        Date.prototype.toJSON = function (key) {

            return isFinite(this.valueOf()) ?
                   this.getUTCFullYear()   + '-' +
                 f(this.getUTCMonth() + 1) + '-' +
                 f(this.getUTCDate())      + 'T' +
                 f(this.getUTCHours())     + ':' +
                 f(this.getUTCMinutes())   + ':' +
                 f(this.getUTCSeconds())   + 'Z' : null;
        };

        String.prototype.toJSON =
        Number.prototype.toJSON =
        Boolean.prototype.toJSON = function (key) {
            return this.valueOf();
        };
    }

    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap,
        indent,
        meta = {    // table of character substitutions
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '\\': '\\\\'
        },
        rep;


    function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

        escapable.lastIndex = 0;
        return escapable.test(string) ?
            '"' + string.replace(escapable, function (a) {
                var c = meta[a];
                return typeof c === 'string' ? c :
                    '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
            }) + '"' :
            '"' + string + '"';
    }


    function str(key, holder) {

// Produce a string from holder[key].

        var i,          // The loop counter.
            k,          // The member key.
            v,          // The member value.
            length,
            mind = gap,
            partial,
            value = holder[key];

// If the value has a toJSON method, call it to obtain a replacement value.

        if (value && typeof value === 'object' &&
                typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }

// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.

        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }

// What happens next depends on the value's type.

        switch (typeof value) {
        case 'string':
            return quote(value);

        case 'number':

// JSON numbers must be finite. Encode non-finite numbers as null.

            return isFinite(value) ? String(value) : 'null';

        case 'boolean':
        case 'null':

// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce 'null'. The case is included here in
// the remote chance that this gets fixed someday.

            return String(value);

// If the type is 'object', we might be dealing with an object or an array or
// null.

        case 'object':

// Due to a specification blunder in ECMAScript, typeof null is 'object',
// so watch out for that case.

            if (!value) {
                return 'null';
            }

// Make an array to hold the partial results of stringifying this object value.

            gap += indent;
            partial = [];

// Is the value an array?

            if (Object.prototype.toString.apply(value) === '[object Array]') {

// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.

                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }

// Join all of the elements together, separated with commas, and wrap them in
// brackets.

                v = partial.length === 0 ? '[]' :
                    gap ? '[\n' + gap +
                            partial.join(',\n' + gap) + '\n' +
                                mind + ']' :
                          '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }

// If the replacer is an array, use it to select the members to be stringified.

            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    k = rep[i];
                    if (typeof k === 'string') {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            } else {

// Otherwise, iterate through all of the keys in the object.

                for (k in value) {
                    if (Object.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }

// Join all of the member texts together, separated with commas,
// and wrap them in braces.

            v = partial.length === 0 ? '{}' :
                gap ? '{\n' + gap + partial.join(',\n' + gap) + '\n' +
                        mind + '}' : '{' + partial.join(',') + '}';
            gap = mind;
            return v;
        }
    }

// If the JSON object does not yet have a stringify method, give it one.

    if (typeof JSON.stringify !== 'function') {
        JSON.stringify = function (value, replacer, space) {

// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.

            var i;
            gap = '';
            indent = '';

// If the space parameter is a number, make an indent string containing that
// many spaces.

            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' ';
                }

// If the space parameter is a string, it will be used as the indent string.

            } else if (typeof space === 'string') {
                indent = space;
            }

// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.

            rep = replacer;
            if (replacer && typeof replacer !== 'function' &&
                    (typeof replacer !== 'object' ||
                     typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }

// Make a fake root object containing our value under the key of ''.
// Return the result of stringifying the value.

            return str('', {'': value});
        };
    }


// If the JSON object does not yet have a parse method, give it one.

    if (typeof JSON.parse !== 'function') {
        JSON.parse = function (text, reviver) {

// The parse method takes a text and an optional reviver function, and returns
// a JavaScript value if the text is a valid JSON text.

            var j;

            function walk(holder, key) {

// The walk method is used to recursively walk the resulting structure so
// that modifications can be made.

                var k, v, value = holder[key];
                if (value && typeof value === 'object') {
                    for (k in value) {
                        if (Object.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }


// Parsing happens in four stages. In the first stage, we replace certain
// Unicode characters with escape sequences. JavaScript handles many characters
// incorrectly, either silently deleting them, or treating them as line endings.

            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return '\\u' +
                        ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }

// In the second stage, we run the text against regular expressions that look
// for non-JSON patterns. We are especially concerned with '()' and 'new'
// because they can cause invocation, and '=' because it can cause mutation.
// But just to be safe, we want to reject all unexpected forms.

// We split the second stage into 4 regexp operations in order to work around
// crippling inefficiencies in IE's and Safari's regexp engines. First we
// replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
// replace all simple value tokens with ']' characters. Third, we delete all
// open brackets that follow a colon or comma or that begin the text. Finally,
// we look to see that the remaining characters are only whitespace or ']' or
// ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

            if (/^[\],:{}\s]*$/.
test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@').
replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

// In the third stage we use the eval function to compile the text into a
// JavaScript structure. The '{' operator is subject to a syntactic ambiguity
// in JavaScript: it can begin a block or an object literal. We wrap the text
// in parens to eliminate the ambiguity.

                j = eval('(' + text + ')');

// In the optional fourth stage, we recursively walk the new structure, passing
// each name/value pair to a reviver function for possible transformation.

                return typeof reviver === 'function' ?
                    walk({'': j}, '') : j;
            }

// If the text is not JSON parseable, then a SyntaxError is thrown.

            throw new SyntaxError('JSON.parse');
        };
    }
}());
;
(function ($) {

Drupal.toolbar = Drupal.toolbar || {};

/**
 * Attach toggling behavior and notify the overlay of the toolbar.
 */
Drupal.behaviors.toolbar = {
  attach: function(context) {

    // Set the initial state of the toolbar.
    $('#toolbar', context).once('toolbar', Drupal.toolbar.init);

    // Toggling toolbar drawer.
    $('#toolbar a.toggle', context).once('toolbar-toggle').click(function(e) {
      Drupal.toolbar.toggle();
      // Allow resize event handlers to recalculate sizes/positions.
      $(window).triggerHandler('resize');
      return false;
    });
  }
};

/**
 * Retrieve last saved cookie settings and set up the initial toolbar state.
 */
Drupal.toolbar.init = function() {
  // Retrieve the collapsed status from a stored cookie.
  var collapsed = $.cookie('Drupal.toolbar.collapsed');

  // Expand or collapse the toolbar based on the cookie value.
  if (collapsed == 1) {
    Drupal.toolbar.collapse();
  }
  else {
    Drupal.toolbar.expand();
  }
};

/**
 * Collapse the toolbar.
 */
Drupal.toolbar.collapse = function() {
  var toggle_text = Drupal.t('Show shortcuts');
  $('#toolbar div.toolbar-drawer').addClass('collapsed');
  $('#toolbar a.toggle')
    .removeClass('toggle-active')
    .attr('title',  toggle_text)
    .html(toggle_text);
  $('body').removeClass('toolbar-drawer').css('paddingTop', Drupal.toolbar.height());
  $.cookie(
    'Drupal.toolbar.collapsed',
    1,
    {
      path: Drupal.settings.basePath,
      // The cookie should "never" expire.
      expires: 36500
    }
  );
};

/**
 * Expand the toolbar.
 */
Drupal.toolbar.expand = function() {
  var toggle_text = Drupal.t('Hide shortcuts');
  $('#toolbar div.toolbar-drawer').removeClass('collapsed');
  $('#toolbar a.toggle')
    .addClass('toggle-active')
    .attr('title',  toggle_text)
    .html(toggle_text);
  $('body').addClass('toolbar-drawer').css('paddingTop', Drupal.toolbar.height());
  $.cookie(
    'Drupal.toolbar.collapsed',
    0,
    {
      path: Drupal.settings.basePath,
      // The cookie should "never" expire.
      expires: 36500
    }
  );
};

/**
 * Toggle the toolbar.
 */
Drupal.toolbar.toggle = function() {
  if ($('#toolbar div.toolbar-drawer').hasClass('collapsed')) {
    Drupal.toolbar.expand();
  }
  else {
    Drupal.toolbar.collapse();
  }
};

Drupal.toolbar.height = function() {
  var height = $('#toolbar').outerHeight();
  // In IE, Shadow filter adds some extra height, so we need to remove it from
  // the returned height.
  if ($('#toolbar').css('filter').match(/DXImageTransform\.Microsoft\.Shadow/)) {
    height -= $('#toolbar').get(0).filters.item("DXImageTransform.Microsoft.Shadow").strength;
  }
  return height;
};

})(jQuery);
;
