<?php

/**
 * Comment out for production!
 * For development only. Defeats theme register caching.
 * Changes to theme show immediately, but performance is effected.
 * Comment out for production.
 */
drupal_rebuild_theme_registry();

/*
* Initialize theme settings
*/
if (is_null(theme_get_setting('preset_style'))) {  

  global $theme_key;

	if (!(function_exists('mynxx_settings_defaults'))){
		include('theme-settings.php');
	}
	
	
  $defaults = mynxx_settings_defaults();

  // Get default theme settings.
  $settings = theme_get_settings($theme_key);
  // Don't save the toggle_node_info_ variables.
  if (module_exists('node')) {
    foreach (node_get_types() as $type => $name) {
      unset($settings['toggle_node_info_' . $type]);
    }
  }
  // Save default theme settings.
  variable_set(
    str_replace('/', '_', 'theme_'. $theme_key .'_settings'),
    array_merge($defaults, $settings)
  );

  // Force refresh of Drupal internals.
  theme_get_setting('', TRUE);

}



/**
* Override or insert PHPTemplate variables into the search_block_form template.
*
* @param $vars
*   A sequential array of variables to pass to the theme template.
* @param $hook
*   The name of the theme function being called (not used in this case.)
*/
function mynxx_preprocess_search_block_form(&$variables) {
  $variables['form']['search_block_form']['#title'] = '';
  $variables['form']['search_block_form']['#size'] = 20;
  $variables['form']['search_block_form']['#value'] = 'search...';
  $variables['form']['search_block_form']['#attributes'] = array('onblur' => "if (this.value == '') {this.value = '".$variables['form']['search_block_form']['#value']."';}", 'onfocus' => "if (this.value == '".$variables['form']['search_block_form']['#value']."') {this.value = '';}" );
  unset($variables['form']['search_block_form']['#printed']);

  $variables['search']['search_block_form'] = drupal_render($variables['form']['search_block_form']);

  $variables['search_form'] = implode($variables['search']);
}

function mynxx_blocks($region) {
  $output = '';

  if ($list = block_list($region)) {
    $blockcounter = 1; // there is at least one block in this region
    foreach ($list as $key => $block) {
      // $key == <i>module</i>_<i>delta</i>
      $block->extraclass = ''; // add the 'extracclass' key to the $block object
      $block->num_count = 0;
      if ($blockcounter == 1){ // is this the first block in this region?
        $block->extraclass .= 'first'; 
      }
      elseif ($blockcounter == count($list)){ // is this the last block in this region?
        $block->extraclass .= 'last';
      }
      else {
      	$block->extraclass .= 'middle';
      }
      
      
      $output .= theme('block', $block);
      $blockcounter++;
    }
   
  }

  // Add any content assigned to this region through drupal_set_content() calls.
  $output .= drupal_get_content($region);

  return $output;
}




function mynxx_preprocess_block(&$variables){
	
	static $user123_count;
	if($variables['block']->region == 'user123'){
		$user123_count++;
	}
	$variables['user123_count'] = $user123_count;
	
	static $user456_count;
	if($variables['block']->region == 'user456'){
		$user456_count++;
	}
	$variables['user456_count'] = $user456_count;
	
	static $user789_count;
	if($variables['block']->region == 'user789'){
		$user789_count++;
	}
	$variables['user789_count'] = $user789_count;
	
	static $showcase_count;
	if($variables['block']->region == 'showcase'){
		$showcase_count++;
	}
	$variables['showcase_count'] = $showcase_count;
	
	static $bottom_count;
	if($variables['block']->region == 'bottom'){
		$bottom_count++;
	}
	$variables['bottom_count'] = $bottom_count;
}


function mynxx_preprocess_maintenance_page(&$vars) {
	mynxx_preprocess_page($vars);
}


function mynxx_preprocess_page(&$variables) {
	
	//$theme_settings = variable_get('theme_mynxx_settings', array());
	
	$variables['path'] = base_path() . path_to_theme();
	$css_path = path_to_theme().'/css/';
	$js_path = path_to_theme() . '/js/';
	$variables['file_path'] = base_path().file_directory_path();
	$variables['url'] = "http://" . $_SERVER['HTTP_HOST'] . url();
    $variables['uri'] = "http://" . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
    
    $variables['tabs2'] = menu_secondary_local_tasks();
	
	
	
	if( isset( $_COOKIE['mynxx_style'] ) )
		$variables['mynxx_style'] = $_COOKIE['mynxx_style']; 
	else
		$variables['mynxx_style'] = theme_get_setting(preset_style);
	
		
	if( isset( $_COOKIE['mynxx_fontfamily'] ) )
		$variables['mynxx_fontfamily'] = $_COOKIE['mynxx_fontfamily']; 
	else
		$variables['mynxx_fontfamily'] = theme_get_setting(font_family);
	
	if( isset( $_COOKIE['mynxx_fontsize'] ) )
		$variables['mynxx_fontsize'] = $_COOKIE['mynxx_fontsize']; 
	else
		$variables['mynxx_fontsize'] = theme_get_setting(default_font);
	
	$rt_style_includes = path_to_theme() . "/styles.php";
	include $rt_style_includes;
	$style = $stylesList[$variables['mynxx_style']];
	
	if( isset( $_COOKIE['mynxx_primarycolor'] ) )
		$variables['mynxx_primarycolor'] = $_COOKIE['mynxx_primarycolor']; 
	else
		$variables['mynxx_primarycolor'] = $style[1];
		
	if( isset( $_COOKIE['mynxx_body_style'] ) )
		$variables['mynxx_body_style'] = $_COOKIE['mynxx_body_style']; 
	else
		$variables['mynxx_body_style'] = $style[0];	
	
	// add the css
	//drupal_add_css($css_path . 'rokslidestrip.css', 'theme', 'all', FALSE);	
	
	// set global for menu style if exists
	if( isset( $_COOKIE['mynxx_menu_type'] ) )
		$variables['mynxx_menu_type'] = $_COOKIE['mynxx_menu_type']; 
	else
		$variables['mynxx_menu_type'] = theme_get_setting('menu_type');
	
		
	if($variables['mynxx_menu_type'] == "moomenu" or $variables['mynxx_menu_type'] == "suckerfish"){
		drupal_add_css($css_path . 'rokmoomenu.css', 'theme', 'all', FALSE);	
	}
	

	$variables['scripts'] = drupal_get_js();
	//$variables['head'] = drupal_get_html_head();
	$variables['styles'] = drupal_get_css();
	

	
	// get widths for block regions
	
	$block_regions = array('user123', 'user456', 'user789', 'showcase', 'bottom');
	
	$block_region_widths = array(
		1 => 'w99',
		2 => 'w49',
		3 => 'w33',
		4 => 'w24'
	);
	
 	foreach($block_regions as $block_region){
		$blocks = block_list($block_region);	
		$variables[$block_region.'_width'] = ($block_region_widths[count($blocks)] ? $block_region_widths[count($blocks)] : $block_region_widths[4]);
		$variables[$block_region.'_number'] = count($blocks);
	} 

	if (strpos(request_uri(), 'wrapper') != false){
		$variables['template_file'] = 'page-wrapper';
	}

}




function mynxx_change_theme($change, $changeVal, $page=''){
	
	$theme_settings = variable_get('theme_mynxx_settings', array());
	
	$cookie_prefix = "mynxx_";
	$cookie_time = time()+31536000;
	//print_r($theme_settings);
	
	
	if($change && $changeVal){
		//print $change . " " . $changeVal;
		
		switch ($change){
			
			case 'fontfamily':
			
				$cookie_name = $cookie_prefix . "fontfamily";
				setcookie($cookie_name, $changeVal, $cookie_time);
				//$theme_settings['font_family'] = $changeVal;
			
			break;
			
			case 'tstyle':
	
				$cookie_name = $cookie_prefix . "style";
				setcookie($cookie_name, $changeVal, $cookie_time);
				//$theme_settings['default_style'] = $changeVal;
				
				$rt_style_includes = path_to_theme() . "/styles.php";
				include $rt_style_includes;
				$style = $stylesList[$changeVal];
				
				
				$cookie_name = $cookie_prefix . "body_style";
				setcookie($cookie_name, $style[0], $cookie_time);
				
				$cookie_name = $cookie_prefix . "primarycolor";
				setcookie($cookie_name, $style[1], $cookie_time);
				
			break;		

			case 'mtype':
				
				$cookie_name = $cookie_prefix . "menu_type";
				setcookie($cookie_name, $changeVal, $cookie_time);
				//$theme_settings['menu_type'] = $changeVal;
			
			break;

		}


		
	}
	
	 //print_r($theme_settings);
	if ($page){
		drupal_goto("node/$page");
	}
	else {
		drupal_goto('<front>');
	}
	
}


function change_font($change, $page=''){

	$cookie_prefix = "mynxx_";
	$cookie_time = time()+31536000;
	
	$cookie_name = $cookie_prefix . "fontsize";
	setcookie($cookie_name, $change, $cookie_time);
	
	if ($page){
		drupal_goto("node/$page");
	}
	else {
		drupal_goto('<front>');
	}
	
}

//********************************************
// PRIMARY LINK MENU ITEM INFO
//********************************************

/**
 * Returns a rendered menu tree.
 *
 * @param $tree
 *   A data structure representing the tree as returned from menu_tree_data.
 * @return
 *   The rendered HTML of that data structure.
 */
function main_menu_tree_output($tree) {
  $output = '';
  $items = array();

  if( isset( $_COOKIE['mynxx_menu_type'] ) )
	$this_mtype = $_COOKIE['mynxx_menu_type']; 
  else
	$this_mtype = theme_get_setting('menu_type');
  // Pull out just the menu items we are going to render so that we
  // get an accurate count for the first/last classes.
  foreach ($tree as $data) {
    if (!$data['link']['hidden']) {
      $items[] = $data;
    }
  }

  $num_items = count($items);
  foreach ($items as $i => $data) {
    
    $extra_class = NULL;
    //$extra_class = get_link_color($items[$i]['title']);
    
    if (stristr($i, 'active')) {
        $extra_class .= " active";
      }
    
    
    if ($i == 0) {
      //$extra_class = 'first';
    }
    if ($i == $num_items - 1) {
      //$extra_class = 'last';
    }
    $link = main_menu_item_link($data['link'], $data['link']['has_children']);
   
    if ($data['below']) {
      $extra_class = "parent ";
      if($this_mtype == "splitmenu") {
      	$output .= main_menu_item($link, $data['link']['has_children'], '', $data['link']['in_active_trail'], $extra_class);
      }	
      else {	
      	$output .= main_menu_item($link, $data['link']['has_children'], sub_menu_tree_output($data['below']), $data['link']['in_active_trail'], $extra_class);
      }
    }
    
    else {
      $output .= main_menu_item($link, $data['link']['has_children'], '', $data['link']['in_active_trail'], $extra_class);
    }
  }
  return $output ? main_menu_tree($output) : '';
}



function sub_menu_tree_output($tree) {
  $output = '';
  $items = array();

  // Pull out just the menu items we are going to render so that we
  // get an accurate count for the first/last classes.
  foreach ($tree as $data) {
    if (!$data['link']['hidden']) {
      $items[] = $data;
    }
  }

  $num_items = count($items);
  foreach ($items as $i => $data) {
    
    $extra_class = NULL;
    //$extra_class = get_link_color($items[$i]['title']);
    
    if (stristr($i, 'active')) {
        $extra_class .= " active";
      }
    
    
    if ($i == 0) {
      //$extra_class = 'first';
    }
    if ($i == $num_items - 1) {
      //$extra_class = 'last';
    }
    $link = sub_menu_item_link($data['link'], $data['link']['has_children']);
    if ($data['below']) {
      $extra_class = " parent ";
      $output .= sub_menu_item($link, $data['link']['has_children'], sub_menu_tree_output($data['below']), $data['link']['in_active_trail'], $extra_class);
    }
    else {
      $output .= sub_menu_item($link, $data['link']['has_children'], '', $data['link']['in_active_trail'], $extra_class);
    }
  }
  return $output ? sub_menu_tree($output) : '';
}

/**
 * FULL MENU TREE
 */
function main_menu_tree($tree) {
  	return '<ul class="menutop">'. $tree .'</ul>';
}

/**
 * SUB MENU TREE
 */
function sub_menu_tree($tree) {
  	return '<div class="drop-wrap columns-1"><ul class="png columns-' . theme_get_setting(menu_columns) . '">'. $tree .'</ul></div>';
}

/**
  * MENU ITEM 
 */
function main_menu_item($link, $has_children, $menu = '', $in_active_trail = FALSE, $extra_class = NULL) {
  //$class = ($menu ? 'expanded' : ($has_children ? 'collapsed' : 'leaf'));
  $class = "item1";
  $id = "";
  if (!empty($extra_class)) {
    $class .= " " . $extra_class;
  }
  if ($in_active_trail) {
    $class .= ' active';
    $id .= 'current';
  }
  return '<li class="'. $class .'" id="' . $id . '">'. $link . $menu . "</li>\n";
}

/**
  * SUB MENU ITEM 
 */
function sub_menu_item($link, $has_children, $menu = '', $in_active_trail = FALSE, $extra_class = NULL) {
  //$class = ($menu ? 'expanded' : ($has_children ? 'collapsed' : 'leaf'));
  $class = "";
  if (!empty($extra_class)) {
    $class .= $extra_class;
  }
  if ($in_active_trail) {
    $class .= ' active';
  }
  return '<li class="'. $class .' coltop">'. $link . $menu . "</li>\n";
}


/**
 * Generate the HTML output for a single menu link.
 *
 * @ingroup themeable
 */
function main_menu_item_link($link, $has_children = FALSE) {
  if (empty($link['localized_options'])) {
    $link['localized_options'] = array();
  }
  if(strlen(strstr($link['href'],"http"))>0) {
  	$href = $link['href'];	
  }
  else {
  	if(variable_get('clean_url', 0)) {
  		$href = $link['href'] == "<front>" ? base_path() : base_path() . drupal_get_path_alias($link['href']);
  	}
  	else {
  		$href = $link['href'] == "<front>" ? base_path() : base_path() . "?q=" . drupal_get_path_alias($link['href']);
  	}
  }
  $this_link = "<a class='topdaddy link' href='" . $href . "'><span>" . $link['title'] . "</span></a>"; 	
  //return l($link['title'], $link['href'], $link['localized_options']);
  return $this_link;
}

function sub_menu_item_link($link, $has_children = FALSE) {
  if (empty($link['localized_options'])) {
    $link['localized_options'] = array();
  }
  if(strlen(strstr($link['href'],"http"))>0) {
  	$href = $link['href'];	
  }
  else {
  	if(variable_get('clean_url', 0)) {
  		$href = $link['href'] == "<front>" ? base_path() : base_path() . drupal_get_path_alias($link['href']);
  	}
  	else {
  		$href = $link['href'] == "<front>" ? base_path() : base_path() . "?q=" . drupal_get_path_alias($link['href']);
  	}
  }	
  
  $class = "";
  
  if($has_children) {
  	$class .= "daddy ";
  }
  
  $class .= "link";
  
  $this_link = "<a class='" . $class . "' href='" . $href . "'><span>" . $link['title'] . "</span></a>"; 	
  //return l($link['title'], $link['href'], $link['localized_options']);
  return $this_link;
}


//******************************************************************************




/**
 * Sets the body-tag class attribute.
 <body id="ff-<?php echo $fontfamily; ?>" class="<?php echo $fontstyle; ?> <?php echo $tstyle; ?> iehandle">
 */
//function mynxx_body_class($body_style_variation, $header_footer_variation) {
function mynxx_body_class() {
	
	if( isset( $_COOKIE['mynxx_fontfamily'] ) )
		$this_fontfamily = $_COOKIE['mynxx_fontfamily']; 
	else
		$this_fontfamily = theme_get_setting('font_family');
		
	if( isset( $_COOKIE['mynxx_fontsize'] ) )
		$this_fontsize = $_COOKIE['mynxx_fontsize']; 
	else
		$this_fontsize = theme_get_setting('default_font');
	
	if( isset( $_COOKIE['mynxx_style'] ) )
		$this_style = $_COOKIE['mynxx_style']; 
	else
		$this_style = theme_get_setting('default_style');
	
	$id = 'ff-' . $this_fontfamily;	
	$class = 'f-' . $this_fontsize . ' ' . $this_style;	
	$class .= ' iehandle';
	
  print ' id="' . $id . '"' .  ' class="' . $class . '"';

}


/**
* Implementation of hook_theme.
*
* Register custom theme functions.
*/
function mynxx_theme() {
  return array(
    // The form ID.
    'user_login_block' => array(
      // Forms always take the form argument.
      'arguments' => array('form' => NULL),
    ),
	'user_login_top_section' => array(
    // Forms always take the form argument.
    'arguments' => array(),
  ),
  );
}


function mynxx_user_login_block(&$form){

	$form['links'] = array('#value' => '<div id="sl_lostpass"><a href="/user/password">Request new password</a></div>');

	return drupal_render($form);
	
}


function mynxx_user_login_top_section(){
	
	global $user;
	
	if(!$user->uid){
	$output = drupal_get_form('user_login_block');	
	}else{
	
	$output = '<div id="greeting">Hi '.$user->name.'</div>';
	$output .=	'<div id="sl_submitbutton">';
	$output .= l('Logout', 'logout', array('attributes' => array('class' => 'button')));	
	$output .= '</div>';	
		
	}
	
	return $output;
	
	
	
}


function mynxx_get_theme_headers($theme){
	
	$themes = array (
		2 => 10,
		3 => 2,
		6 => 3
	);

	return $themes[$theme];
	
}



/**
 * Return a themed breadcrumb trail.
 *
 * @param $breadcrumb
 *   An array containing the breadcrumb links.
 * @return a string containing the breadcrumb output.
 */
function mynxx_breadcrumb($breadcrumb) {
  if (!empty($breadcrumb)) {
		$breadcrumb[$_GET['q']] = drupal_get_title(); 
    return '<div class="moduletable"><span class="breadcrumbs pathway">'. implode(' / ', $breadcrumb) .'</span></div>';
  }
}

/**
 * Allow themable wrapping of all comments.
 */
function mynxx_comment_wrapper($content, $node) {
  if (!$content || $node->type == 'forum') {
    return '<div id="comments">'. $content .'</div>';
  }
  else {
    return '<div id="comments"><h2 class="comments">'. t('Comments') .'</h2>'. $content .'</div>';
  }
}



/**
 * Returns the rendered local tasks. The default implementation renders
 * them as tabs. Overridden to split the secondary tasks.
 *
 * @ingroup themeable
 */
function mynxx_menu_local_tasks() {
  return menu_primary_local_tasks();
}

function mynxx_comment_submitted($comment) {
  return t('!datetime — !username',
    array(
      '!username' => theme('username', $comment),
      '!datetime' => format_date($comment->timestamp)
    ));
}

function mynxx_node_submitted($node) {
  return t('!datetime — !username',
    array(
      '!username' => theme('username', $node),
      '!datetime' => format_date($node->created),
    ));
}