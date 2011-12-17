<?php

/**
 * @file
 *
 * Theme functions
 */

/**
 * Logo, Site Name, Site Slogan
 */
function om_identity($logo, $site_name, $site_slogan, $front_page) {
  if (!empty($logo) || !empty($site_name) || !empty($site_slogan)) { 
    $out = '<div id="logo-title">';
    if (!empty($logo)) { 
      $out .= '<a href="' . $front_page . '" title="' . t('Home') . '" rel="home" id="logo">';
      $out .= '<img src="' . $logo . '" alt="' . t('Home') . '" />';
      $out .= '</a>';
    }
    if (!empty($site_name) || !empty($site_slogan)) { 
      $out .= '<div id="name-and-slogan">';
      if (!empty($site_name)) {
        $out .= '<h1 id="site-name">';
        $out .= '<a href="' . $front_page . '" title="' . t('Home') . '" rel="home">' . $site_name . '</a>';
        $out .= '</h1>';
      }
      if (!empty($site_slogan)) {
        $out .= '<div id="site-slogan">' . $site_slogan . '</div>';
      }
      $out .= '</div> <!-- /#name-and-slogan -->';
    }    
    $out .= '</div> <!-- /#logo-title -->';
    return $out;
  }
}


/**
 * Primary, Secondary Menus
 *
function om_menu($menu_name = NULL, $menu = NULL, $menu_tree = NULL) {
	if(!empty($menu)) { 
			return '<div id="menubar-' . $menu_name. '" class="menubar">' . $menu_tree . '</div>';
  }
}

/**
 * Process all region formats
 */
function om_region_wrapper($region_name = NULL, $region = NULL, $region_inner = 0) {
  if ($region) { 
    if ($region_inner == 1) { 
      $div_prefix = '<div id="' . $region_name . '" class="region"><div id="' . $region_name . '-inner" class="region-inner">'; 
      $div_suffix = '<div class="om-clearfix"></div></div><!-- /#' . $region_name . '-inner --></div><!-- /#' . $region_name . ' -->'; 
    }
    else {
      $div_prefix = '<div id="' . $region_name . '" class="region">'; 
      $div_suffix = '<div class="om-clearfix"></div></div><!-- /#' . $region_name . ' -->'; 
    }
    return $div_prefix . $region . $div_suffix;
  }
}

/**
 * Returns HTML for a breadcrumb trail.
 *
 * @param $variables
 *   An associative array containing:
 *   - breadcrumb: An array containing the breadcrumb links.
 */
function om_breadcrumb($variables) {
  $breadcrumb = $variables['breadcrumb'];

  if (!empty($breadcrumb)) {
    // Provide a navigational heading to give context for breadcrumb links to
    // screen-reader users. Make the heading invisible with .element-invisible.
    $output = '<h2 class="element-invisible">' . t('You are here') . '</h2>';

    $output .= '<div class="breadcrumb">' . implode(' » ', $breadcrumb) . '</div>';
    return $output;
  }
}


/**
 * Process all content elements
 */
function om_content_elements($tabs = NULL, $prefix = NULL, $title = NULL, $suffix = NULL, $messages = NULL, $help = NULL, $action = NULL) {
  $out = '';
  if (!empty($tabs)) { 
    $out .= '<div class="tabs">' . $tabs . '</div>'; 
  }
  if (!empty($prefix)) { 
    $out .= $prefix; 
  }
  if (!empty($title)) { 
    $out .= '<h1 class="title" id="page-title">' . $title . '</h1>'; 
  }
  if (!empty($suffix)) { 
    $out .= $suffix; 
  }
  if (!empty($messages)) { 
    $out .= $messages; 
  }
  if (!empty($help)) { 
    $out .= $help; 
  }
  if (!empty($action)) { 
    $out .= '<ul class="action-links">' . $action . '</ul>'; 
  }
  return $out;
}

/**
 * Converts a string to a suitable html ID attribute.
 *
 * http://www.w3.org/TR/html4/struct/global.html#h-7.5.2 specifies what makes a
 * valid ID attribute in HTML. This function:
 *
 * - Ensure an ID starts with an alpha character by optionally adding an 'id'.
 * - Replaces any character except alphanumeric characters with dashes.
 * - Converts entire string to lowercase.
 *
 * @param $string
 *   The string
 * @return
 *   The converted string
 */
function om_id_safe($string) {
  // Replace with dashes anything that isn't A-Z, numbers, dashes, or underscores.
  return strtolower(preg_replace('/[^a-zA-Z0-9-]+/', '-', $string));
}

/**
 * Process variables for html.tpl.php
 *
 * Perform final addition and modification of variables before passing into
 * the template. To customize these variables, call drupal_render() on elements
 * in $variables['page'] during THEME_preprocess_page().
 *
 * @see template_preprocess_html()
 * @see html.tpl.php
 */
function om_preprocess_html(&$vars) {
	// This  functionality will soon be transferred to OM Tools
  if (!module_exists('om_tools')) {
    $classes = $vars['classes_array'];
    if (!$vars['is_front']) {
      // Add unique class for each page.
      $path = drupal_get_path_alias($_GET['q']);
      $classes[] = om_id_safe('page-' . $path);
      // Add unique class for each website section.
      list($section) = explode('/', $path, 2);
      if (arg(0) == 'node') {
        $node_type = $vars['page']['#type'];
        if ((arg(1) == 'add') && !is_null(arg(2))) {
          $section = 'node-add';                    //section-node-add
          $page_type = arg(2);                      //-page
          $page_type_op = arg(2) . '-add';          //-page-add
        }
        elseif ((arg(1) == 'add') && is_null(arg(2))) {
          $section = 'node-add';                    //section-node-add
          $page_type = 'any';                       //-page
          $page_type_op = 'any' . '-add';           //-page-add
        }          
        elseif ((arg(0) == 'node') && is_numeric(arg(1)) && is_null(arg(2))) {
          $page_type = $node_type;                  //-page
          $page_type_op = $node_type . '-view';     //-page-view     
        }
        elseif (is_numeric(arg(1)) && (arg(2) == 'edit' || arg(2) == 'delete')) {
          $section = 'node-' . arg(2);               //section-node-edit || section-node-delete
          $page_type = $node_type;                   //-page
          $page_type_op = $node_type . '-' . arg(2); //-page-edit or -page-delete          
        }    
        $classes[] = om_id_safe('content-type-' . $page_type);
        $classes[] = om_id_safe('content-type-' . $page_type_op);
      }
      $classes[] = om_id_safe('section-' . $section);
    }
    $vars['classes_array'] = $classes;
    $vars['classes'] = implode(' ', $classes); // Concatenate with spaces.	
  }
  //dsm($vars);
}

/**
 * Process variables for html.tpl.php
 *
 * Perform final addition and modification of variables before passing into
 * the template. To customize these variables, call drupal_render() on elements
 * in $variables['page'] during THEME_preprocess_page().
 *
 * @see template_preprocess_html()
 * @see html.tpl.php
 */
function om_process_html(&$vars) {
  // Render page_top and page_bottom into top level variables.
  $vars['page_bottom'] .= '<div id="legal"><a href="http://www.drupal.org/project/om">OM Base Theme</a> ' . date('Y') . ' | V7.x-2.x | <a href="http://www.danielhonrade.com">Daniel Honrade</a></div>';
}

 
/**
 * Adding additional classes to blocks.
 */
function om_preprocess_block(&$vars) {
  $block_counter = &drupal_static(__FUNCTION__, array());
  $vars['block'] = $vars['elements']['#block'];
  $blocks = block_list($vars['block']->region);
	
	$vars['classes_array'][] = drupal_html_class('block-' . $vars['block_zebra']);
  $vars['classes_array'][] = drupal_html_class('block-' . $vars['block_id']);
  $vars['classes_array'][] = drupal_html_class('block-group-' . count($blocks));	

  if (!isset($block_counter[$vars['block']->region])) {
    $block_counter[$vars['block']->region] = 1;
    $vars['classes_array'][] = drupal_html_class('block-first');
  }
	if ($vars['block_id'] == count($blocks)) {
    $vars['classes_array'][] = drupal_html_class('block-last');
	}
  //dsm($vars);
} 

 
/**
 * Generates IE CSS links for LTR and RTL languages.
 */

function om_get_ie_styles($ie) {
  global $language;
  global $theme; 
  switch ($ie) {
    case 'ie' : $ie_path = '/css/ie.css'; break;
    case 'ie6': $ie_path = '/css/ie6.css'; break;
    case 'ie7': $ie_path = '/css/ie7.css'; break;
    case 'ie8': $ie_path = '/css/ie8.css'; break;
    case 'ie9': $ie_path = '/css/ie9.css'; break;
    default   : $ie_path = '/css/ie8.css'; break;
  }
  $iecss = '<link type="text/css" rel="stylesheet" media="all" href="' . base_path() . drupal_get_path('theme', $theme) . $ie_path . '" />';
  if ($language->direction == LANGUAGE_RTL) {
    $iecss .= '<style type="text/css" media="all">@import "' . base_path() . drupal_get_path('theme', $theme) . '/css/ie-rtl.css";</style>';
  }
  return $iecss;
}
