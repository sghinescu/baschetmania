<?php

/**
* Implementation of THEMEHOOK_settings() function.
*
* @param $saved_settings
*   array An array of saved settings for this theme.
* @return
*   array A form array.
*/
function mynxx_settings($saved_settings){
	
	$defaults = mynxx_settings_defaults();

  // Merge the saved variables and their default values
  $settings = array_merge($defaults, $saved_settings);

  // Create the form widgets using Forms API

	 $form['theme'] = array(
	  '#type' => 'fieldset',
	  '#title' => t('Theme'),
	  '#collapsible' => TRUE,
	  '#collapsed' => FALSE,
	);
	
	$form['theme']['preset_style'] = array(
    '#type' => 'select',
    '#title' => t('Default Theme Style'),
		'#options' => array(
	  		'dark-red' => 'Dark Red',  
	  		'dark-blue' => 'Dark Blue', 
	  		'dark-green' => 'Dark Green',  
	  		'dark-orange' => 'Dark Orange',  
			'light-red' => 'Light Red',  
	  		'light-blue' => 'Light Blue', 
	  		'light-green' => 'Light Green',  
	  		'light-orange' => 'Light Orange'

	),
	'#default_value' => $settings['preset_style'],
  );
  
  	
  $form['menu'] = array(
  '#type' => 'fieldset',
  '#title' => t('Menu settings'),
  '#collapsible' => TRUE,
  '#collapsed' => FALSE,
  );

  $form['menu']['menu_type'] = array(
    '#type' => 'select',
    '#title' => t('Menu type'),
		'#options' => array(
			'moomenu' => 'MooMenu',
			'suckerfish' => 'Suckerfish', 
			'splitmenu' => 'SplitMenu',
			'module' => 'Module'
		),
		'#description' => t('Type of menu for main navigation'),
    '#default_value' => $settings['menu_type'],
  );
  
  $form['menu']['moo_direction'] = array(
    '#type' => 'select',
    '#title' => t('MooMenu Animate Direction'),
		'#options' => array(
			'height' => 'Vertical',
			'width' => 'Horizontal',
		
			),
    '#default_value' => $settings['moo_direction']
  );   
  
  $form['menu']['menu_columns'] = array(
    '#type' => 'select',
    '#title' => t('Drop Down Columns'),
		'#options' => array(
			'1' => '1',
			'2' => '2',
			'3' => '3',
		
			),
    '#default_value' => $settings['menu_columns']
  );   
  
   $form['menu']['splitmenu_col'] = array(
    '#type' => 'select',
    '#title' => t('Splitmenu side'),
		'#options' => array(
			'leftcol' => t('Left Column'),
			'rightcol' => t('Right Column')
		),
    '#default_value' => $settings['splitmenu_col'],
  );
  
   $form['menu']['moo_delay'] = array(
	    '#type' => 'textfield',
	    '#title' => t('Delay'),
	    '#default_value' => $settings['moo_delay'],
			'#size' => 10,
			'#required' => TRUE
  );
  
  $form['menu']['moo_duration'] = array(
	    '#type' => 'textfield',
	    '#title' => t('Duration'),
	    '#default_value' => $settings['moo_duration'],
			'#size' => 10,
			'#required' => TRUE
  );
  
  $form['menu']['moo_fps'] = array(
	    '#type' => 'textfield',
	    '#title' => t('Duration'),
	    '#default_value' => $settings['moo_fps'],
			'#size' => 10,
			'#required' => TRUE
  );  
	  
  $form['menu']['moo_transition'] = array(
    '#type' => 'select',
    '#title' => t('MooMenu Transition'),
		'#options' => array(
			'linear' => 'linear',
			'Quad.easeOut' => 'Quad.easeOut',
			'Quad.easeIn' => 'Quad.easeIn',
			'Quad.easeInOut' => 'Quad.easeInOut',
			'Cubic.easeOut' => 'Cubic.easeOut',
			'Cubic.easeIn' => 'Cubic.easeIn',
			'Cubic.easeInOut' => 'Cubic.easeInOut',
			'Quart.easeOut' => 'Quart.easeOut',
			'Quart.easeIn' => 'Quart.easeIn',
			'Quart.easeInOut' => 'Quart.easeInOut',
			'Quint.easeOut' => 'Quint.easeOut',
			'Quint.easeIn' => 'Quint.easeIn',
			'Quint.easeInOut' => 'Quint.easeInOut',
			'Expo.easeOut' => 'Expo.easeOut',
			'Expo.easeIn' => 'Expo.easeIn',
			'Expo.easeInOut' => 'Expo.easeInOut',
			'Circ.easeOut' => 'Circ.easeOut',
			'Circ.easeIn' => 'Circ.easeIn',
			'Circ.easeInOut' => 'Circ.easeInOut',
			'Sine.easeOut' => 'Sine.easeOut',
			'Sine.easeIn' => 'Sine.easeIn',
			'Sine.easeInOut' => 'Sine.easeInOut',
			'Back.easeOut' => 'Back.easeOut',
			'Back.easeIn' => 'Back.easeIn',
			'Back.easeInOut' => 'Back.easeInOut',
			'Bounce.easeOut' => 'Bounce.easeOut',
			'Bounce.easeIn' => 'Bounce.easeIn',
			'Bounce.easeInOut' => 'Bounce.easeInOut',
			'Elastic.easeOut' => 'Elastic.easeOut',
			'Elastic.easeIn' => 'Elastic.easeIn',
			'Elastic.easeInOut' => 'Elastic.easeInOut',
			),
    '#default_value' => $settings['moo_transition'],
		'#description' => t('Any of the available MooTools transitions.')
  );	 
  
  


  $form['menu']['moo_bg_enabled'] = array(
    '#type' => 'select',
    '#title' => t('MooMenu BG Enabled'),
		'#options' => array(
			'true' => t('True'),
			'false' => t('False')
		),
    '#default_value' => $settings['moo_bg_enabled'],
  );
  
  $form['menu']['moo_bg_over_duration'] = array(
	    '#type' => 'textfield',
	    '#title' => t('BG Over Duration'),
	    '#default_value' => $settings['moo_bg_over_duration'],
			'#size' => 10,
			'#required' => TRUE
  );   
  
  $form['menu']['moo_bg_over_transition'] = array(
    '#type' => 'select',
    '#title' => t('MooMenu BG Over Transition'),
		'#options' => array(
			'linear' => 'linear',
			'Quad.easeOut' => 'Quad.easeOut',
			'Quad.easeIn' => 'Quad.easeIn',
			'Quad.easeInOut' => 'Quad.easeInOut',
			'Cubic.easeOut' => 'Cubic.easeOut',
			'Cubic.easeIn' => 'Cubic.easeIn',
			'Cubic.easeInOut' => 'Cubic.easeInOut',
			'Quart.easeOut' => 'Quart.easeOut',
			'Quart.easeIn' => 'Quart.easeIn',
			'Quart.easeInOut' => 'Quart.easeInOut',
			'Quint.easeOut' => 'Quint.easeOut',
			'Quint.easeIn' => 'Quint.easeIn',
			'Quint.easeInOut' => 'Quint.easeInOut',
			'Expo.easeOut' => 'Expo.easeOut',
			'Expo.easeIn' => 'Expo.easeIn',
			'Expo.easeInOut' => 'Expo.easeInOut',
			'Circ.easeOut' => 'Circ.easeOut',
			'Circ.easeIn' => 'Circ.easeIn',
			'Circ.easeInOut' => 'Circ.easeInOut',
			'Sine.easeOut' => 'Sine.easeOut',
			'Sine.easeIn' => 'Sine.easeIn',
			'Sine.easeInOut' => 'Sine.easeInOut',
			'Back.easeOut' => 'Back.easeOut',
			'Back.easeIn' => 'Back.easeIn',
			'Back.easeInOut' => 'Back.easeInOut',
			'Bounce.easeOut' => 'Bounce.easeOut',
			'Bounce.easeIn' => 'Bounce.easeIn',
			'Bounce.easeInOut' => 'Bounce.easeInOut',
			'Elastic.easeOut' => 'Elastic.easeOut',
			'Elastic.easeIn' => 'Elastic.easeIn',
			'Elastic.easeInOut' => 'Elastic.easeInOut',
			),
    '#default_value' => $settings['moo_bg_over_transition'],
		'#description' => t('Any of the available MooTools transitions.')
  );  
  
  $form['menu']['moo_bg_out_duration'] = array(
	    '#type' => 'textfield',
	    '#title' => t('BG Out Duration'),
	    '#default_value' => $settings['moo_bg_out_duration'],
			'#size' => 10,
			'#required' => TRUE
  );  
  
  $form['menu']['moo_bg_out_transition'] = array(
    '#type' => 'select',
    '#title' => t('MooMenu BG Out Transition'),
		'#options' => array(
			'linear' => 'linear',
			'Quad.easeOut' => 'Quad.easeOut',
			'Quad.easeIn' => 'Quad.easeIn',
			'Quad.easeInOut' => 'Quad.easeInOut',
			'Cubic.easeOut' => 'Cubic.easeOut',
			'Cubic.easeIn' => 'Cubic.easeIn',
			'Cubic.easeInOut' => 'Cubic.easeInOut',
			'Quart.easeOut' => 'Quart.easeOut',
			'Quart.easeIn' => 'Quart.easeIn',
			'Quart.easeInOut' => 'Quart.easeInOut',
			'Quint.easeOut' => 'Quint.easeOut',
			'Quint.easeIn' => 'Quint.easeIn',
			'Quint.easeInOut' => 'Quint.easeInOut',
			'Expo.easeOut' => 'Expo.easeOut',
			'Expo.easeIn' => 'Expo.easeIn',
			'Expo.easeInOut' => 'Expo.easeInOut',
			'Circ.easeOut' => 'Circ.easeOut',
			'Circ.easeIn' => 'Circ.easeIn',
			'Circ.easeInOut' => 'Circ.easeInOut',
			'Sine.easeOut' => 'Sine.easeOut',
			'Sine.easeIn' => 'Sine.easeIn',
			'Sine.easeInOut' => 'Sine.easeInOut',
			'Back.easeOut' => 'Back.easeOut',
			'Back.easeIn' => 'Back.easeIn',
			'Back.easeInOut' => 'Back.easeInOut',
			'Bounce.easeOut' => 'Bounce.easeOut',
			'Bounce.easeIn' => 'Bounce.easeIn',
			'Bounce.easeInOut' => 'Bounce.easeInOut',
			'Elastic.easeOut' => 'Elastic.easeOut',
			'Elastic.easeIn' => 'Elastic.easeIn',
			'Elastic.easeInOut' => 'Elastic.easeInOut',
			),
    '#default_value' => $settings['moo_bg_out_transition'],
		'#description' => t('Any of the available MooTools transitions.')
  );     
  
  
  $form['menu']['moo_sub_enabled'] = array(
    '#type' => 'select',
    '#title' => t('MooMenu Sub Enabled'),
		'#options' => array(
			'true' => t('True'),
			'false' => t('False')
		),
    '#default_value' => $settings['moo_sub_enabled'],
  );

  $form['menu']['moo_sub_opacity'] = array(
	    '#type' => 'textfield',
	    '#title' => t('MooMenu Sub Opacity'),
	    '#default_value' => $settings['moo_sub_opacity'],
			'#size' => 10,
			'#required' => TRUE
  );
  
  $form['menu']['moo_sub_over_duration'] = array(
	    '#type' => 'textfield',
	    '#title' => t('MooMenu Sub Over Duration'),
	    '#default_value' => $settings['moo_sub_over_duration'],
			'#size' => 10,
			'#required' => TRUE
  );   
  
  $form['menu']['moo_sub_over_transition'] = array(
    '#type' => 'select',
    '#title' => t('MooMenu Sub Over Transition'),
		'#options' => array(
			'linear' => 'linear',
			'Quad.easeOut' => 'Quad.easeOut',
			'Quad.easeIn' => 'Quad.easeIn',
			'Quad.easeInOut' => 'Quad.easeInOut',
			'Cubic.easeOut' => 'Cubic.easeOut',
			'Cubic.easeIn' => 'Cubic.easeIn',
			'Cubic.easeInOut' => 'Cubic.easeInOut',
			'Quart.easeOut' => 'Quart.easeOut',
			'Quart.easeIn' => 'Quart.easeIn',
			'Quart.easeInOut' => 'Quart.easeInOut',
			'Quint.easeOut' => 'Quint.easeOut',
			'Quint.easeIn' => 'Quint.easeIn',
			'Quint.easeInOut' => 'Quint.easeInOut',
			'Expo.easeOut' => 'Expo.easeOut',
			'Expo.easeIn' => 'Expo.easeIn',
			'Expo.easeInOut' => 'Expo.easeInOut',
			'Circ.easeOut' => 'Circ.easeOut',
			'Circ.easeIn' => 'Circ.easeIn',
			'Circ.easeInOut' => 'Circ.easeInOut',
			'Sine.easeOut' => 'Sine.easeOut',
			'Sine.easeIn' => 'Sine.easeIn',
			'Sine.easeInOut' => 'Sine.easeInOut',
			'Back.easeOut' => 'Back.easeOut',
			'Back.easeIn' => 'Back.easeIn',
			'Back.easeInOut' => 'Back.easeInOut',
			'Bounce.easeOut' => 'Bounce.easeOut',
			'Bounce.easeIn' => 'Bounce.easeIn',
			'Bounce.easeInOut' => 'Bounce.easeInOut',
			'Elastic.easeOut' => 'Elastic.easeOut',
			'Elastic.easeIn' => 'Elastic.easeIn',
			'Elastic.easeInOut' => 'Elastic.easeInOut',
			),
    '#default_value' => $settings['moo_sub_over_transition'],
		'#description' => t('Any of the available MooTools transitions.')
  );  
  
  $form['menu']['moo_sub_out_duration'] = array(
	    '#type' => 'textfield',
	    '#title' => t('MooMenu Sub Out Duration'),
	    '#default_value' => $settings['moo_sub_out_duration'],
			'#size' => 10,
			'#required' => TRUE
  );  
  
  $form['menu']['moo_sub_out_transition'] = array(
    '#type' => 'select',
    '#title' => t('MooMenu Sub Out Transition'),
		'#options' => array(
			'linear' => 'linear',
			'Quad.easeOut' => 'Quad.easeOut',
			'Quad.easeIn' => 'Quad.easeIn',
			'Quad.easeInOut' => 'Quad.easeInOut',
			'Cubic.easeOut' => 'Cubic.easeOut',
			'Cubic.easeIn' => 'Cubic.easeIn',
			'Cubic.easeInOut' => 'Cubic.easeInOut',
			'Quart.easeOut' => 'Quart.easeOut',
			'Quart.easeIn' => 'Quart.easeIn',
			'Quart.easeInOut' => 'Quart.easeInOut',
			'Quint.easeOut' => 'Quint.easeOut',
			'Quint.easeIn' => 'Quint.easeIn',
			'Quint.easeInOut' => 'Quint.easeInOut',
			'Expo.easeOut' => 'Expo.easeOut',
			'Expo.easeIn' => 'Expo.easeIn',
			'Expo.easeInOut' => 'Expo.easeInOut',
			'Circ.easeOut' => 'Circ.easeOut',
			'Circ.easeIn' => 'Circ.easeIn',
			'Circ.easeInOut' => 'Circ.easeInOut',
			'Sine.easeOut' => 'Sine.easeOut',
			'Sine.easeIn' => 'Sine.easeIn',
			'Sine.easeInOut' => 'Sine.easeInOut',
			'Back.easeOut' => 'Back.easeOut',
			'Back.easeIn' => 'Back.easeIn',
			'Back.easeInOut' => 'Back.easeInOut',
			'Bounce.easeOut' => 'Bounce.easeOut',
			'Bounce.easeIn' => 'Bounce.easeIn',
			'Bounce.easeInOut' => 'Bounce.easeInOut',
			'Elastic.easeOut' => 'Elastic.easeOut',
			'Elastic.easeIn' => 'Elastic.easeIn',
			'Elastic.easeInOut' => 'Elastic.easeInOut',
			),
    '#default_value' => $settings['moo_sub_out_transition'],
		'#description' => t('Any of the available MooTools transitions.')
  );  

  

  
// Page Widths -----------------------------
	$form['widths'] = array(
	  '#type' => 'fieldset',
	  '#title' => t('Page Widths'),
	  '#collapsible' => TRUE,
	  '#collapsed' => FALSE,
	);
	
	$form['widths']['template_width'] = array(
	    '#type' => 'textfield',
	    '#title' => t('Template Width'),
	    '#default_value' => $settings['template_width'],
			'#size' => 10,
			'#required' => TRUE
	  );
	  
	  $form['widths']['leftcolumn_width'] = array(
	    '#type' => 'textfield',
	    '#title' => t('Left Column Width'),
	    '#default_value' => $settings['leftcolumn_width'],
			'#size' => 10,
			'#required' => TRUE
	  );
	  
	  $form['widths']['rightcolumn_width'] = array(
	    '#type' => 'textfield',
	    '#title' => t('Right Column Width'),
	    '#default_value' => $settings['rightcolumn_width'],
			'#size' => 10,
			'#required' => TRUE
	  );
	  
	  $form['widths']['leftinset_width'] = array(
	    '#type' => 'textfield',
	    '#title' => t('Left Inset Width'),
	    '#default_value' => $settings['leftinset_width'],
			'#size' => 10,
			'#required' => TRUE
	  );  
	  
	  $form['widths']['rightinset_width'] = array(
	    '#type' => 'textfield',
	    '#title' => t('Right Inset Width'),
	    '#default_value' => $settings['rightinset_width'],
			'#size' => 10,
			'#required' => TRUE
	  ); 
	  
// ELEMENTS ------------------------------
	 $form['elements'] = array(
	  '#type' => 'fieldset',
	  '#title' => t('Elements'),
	  '#collapsible' => TRUE,
	  '#collapsed' => FALSE,
	);
	
	$form['elements']['frontpage_component'] = array(
    '#type' => 'checkbox',
    '#title' => t('Show Frontpage Content'),
    '#default_value' => $settings['frontpage_component']
	);
	
	$form['elements']['show_homebutton'] = array(
    '#type' => 'checkbox',
    '#title' => t('Show Home Button'),
    '#default_value' => $settings['show_homebutton']
	);
	
	$form['elements']['show_textsizer'] = array(
    '#type' => 'checkbox',
    '#title' => t('Show Text Sizer'),
    '#default_value' => $settings['show_textsizer']
	);
	
	$form['elements']['show_fontchanger'] = array(
    '#type' => 'checkbox',
    '#title' => t('Show Font Changer'),
    '#default_value' => $settings['show_fontchanger']
	);
	
	$form['elements']['show_breadcrumb'] = array(
    '#type' => 'checkbox',
    '#title' => t('Show breadcrumb'),
    '#default_value' => $settings['show_breadcrumb']
	);
	
	$form['elements']['show_bottomlogo'] = array(
    '#type' => 'checkbox',
    '#title' => t('Show Bottom Logo'),
    '#default_value' => $settings['show_bottomlogo']
	);
	
	$form['elements']['show_copyright'] = array(
    '#type' => 'checkbox',
    '#title' => t('Show Copyright'),
    '#default_value' => $settings['show_copyright']
	);
	
	$form['elements']['js_compatibility'] = array(
    '#type' => 'checkbox',
    '#title' => t('Enable JS Compatibility'),
    '#default_value' => $settings['js_compatibility']
	);
	
	/*
	$form['elements']['show_frontpage_content'] = array(
    '#type' => 'checkbox',
    '#title' => t('Show Front Page Content'),
    '#default_value' => $settings['show_frontpage_content']
	);
	*/

	 $form['fonts'] = array(
	  '#type' => 'fieldset',
	  '#title' => t('Fonts'),
	  '#collapsible' => TRUE,
	  '#collapsed' => FALSE,
	);

	$form['fonts']['font_family'] = array(
	'#type' => 'select',
	'#title' => t('Font family'),
		'#options' => array(
			'mynxx' => 'Mynxx',
			'geneva' => 'Geneva', 
			'optima' => 'Optima', 
			'helvetica' => 'Helvetica',
			'trebuchet' => 'Trebuchet', 
			'lucida' => 'Lucida', 
			'georgia' => 'Georgia', 
			'palatino' => 'Palatino'
		),
	'#default_value' => $settings['font_family'],
	);
	
	$form['fonts']['default_font'] = array(
    '#type' => 'select',
    '#title' => t('Font size'),
		'#options' => array(
			'small' => 'Small', 
			'default' => 'Default', 
			'large' => 'Large'
		),
    '#default_value' => $settings['default_font'],
  );


	$form['ie6'] = array(
	  '#type' => 'fieldset',
	  '#title' => t('Internet Explorer 6 Compatibility'),
	  '#collapsible' => TRUE,
	  '#collapsed' => FALSE,
	);
	
	
	$form['ie6']['enable_ie6warn'] = array(
    '#type' => 'checkbox',
    '#title' => t('Enable IE6 Warning'),
    '#default_value' => $settings['enable_ie6warn'],
		'#description' => t('Warn IE6 users their browser is old and they won\'t be getting the full site experience.')
  );	  


  // Return the additional form widgets
  return $form;
	
}




function mynxx_settings_defaults(){
	
	$defaults = array(

		'preset_style' 				=> "dark-red",
		'body_style'				=> "dark",
		'frontpage_component'   	=> "true",
		'enable_ie6warn'         	=> "false",
		'font_family'            	=> "mynxx",
		'template_width' 			=> "959",
		'leftcolumn_width'			=> "210",
		'rightcolumn_width'			=> "210",
		'leftinset_width'			=> "180",
		'rightinset_width'			=> "180",
		'splitmenu_col'				=> "rightcol",
		'menu_rows_per_column'   	=> "menuRowsPerColumn",
		'menu_multicollevel'     	=> "menuMultiColLevel",
		'default_font' 				=> "default",
		'show_logo'		 			=> "true",
		'show_bottomlogo'			=> "true",
		'show_breadcrumb'			=> "true",
		'show_homebutton'			=> "true",
		'show_textsizer'		 	=> "true",
		'show_fontchanger'			=> "true",
		'show_copyright' 			=> "true",
		'js_compatibility'	 		=> "false",
		
		// moomenu options
		'menu_type' 				=> "moomenu",
		'moo_direction'				=> "height",
		'menu_columns'           	=> "2",
		'moo_bgiframe'     			=> "false",
		'moo_delay'       			=> "500",
		'moo_duration'    			=> "600",
		'moo_fps'          			=> "200",
		'moo_transition'   			=> "Sine.easeOut",
		
		
		'moo_bg_enabled'			=> "true",
		'moo_bg_over_duration'		=> "500",
		'moo_bg_over_transition'	=> "Expo.easeOut",
		'moo_bg_out_duration'		=> "600",
		'moo_bg_out_transition'		=> "Sine.easeOut",
		
		'moo_sub_enabled'			=> "true",
		'moo_sub_opacity'			=> "0.95",
		'moo_sub_over_duration'		=> "50",
		'moo_sub_over_transition'	=> "Expo.easeOut",
		'moo_sub_out_duration'		=> "600",
		'moo_sub_out_transition'	=> "Sine.easeIn"
		

  	);
  
	return $defaults;
	
}

