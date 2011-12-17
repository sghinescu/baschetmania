<?php

// This information has been pulled out to make the template more readible.
//
// This data goes between the <head></head> tags of the template
$theme_path = path_to_theme();
?>

<meta http-equiv="Content-Type" content="text/html; <?php echo _ISO; ?>" />


<link href="<?php echo base_path() . path_to_theme(); ?>/css/template.css" rel="stylesheet" type="text/css" />
<link href="<?php echo base_path() . path_to_theme(); ?>/css/<?php echo $mynxx_body_style; ?>.css" rel="stylesheet" type="text/css" />
<link href="<?php echo base_path() . path_to_theme(); ?>/css/typography.css" rel="stylesheet" type="text/css" />


<?php if($mynxx_menu_type=="moomenu" or $mynxx_menu_type=="suckerfish") :?>
<link href="<?php echo base_path() . path_to_theme(); ?>/css/rokmoomenu.css" rel="stylesheet" type="text/css" />
<?php endif; ?>

<style type="text/css">
	div.wrapper,#main-body-bg { <?php echo $current_template_width; ?>padding:0;}
	#inset-block-left { width:<?php echo $current_left_inset_width; ?>px;padding:0;}
	#inset-block-right { width:<?php echo $current_right_inset_width; ?>px;padding:0;}
	#maincontent-block { margin-right:<?php echo $current_right_inset_width; ?>px;margin-left:<?php echo $current_left_inset_width; ?>px;}
	a, legend, #main-body ul.menu li a:hover, #main-body ul.menu li.parent li a:hover, #main-body ul.menu li.parent ul li.parent ul li a:hover, #main-body ul.menu li.active a, #main-body ul.menu li.parent li.active a, #main-body ul.menu li.parent li.parent li.active a, #main-body ul.menu li.cat-open a, #main-body ul.menu li.parent li.cat-open a, #main-body ul.menu li.parent li.parent li.cat-open a, .roktabs-wrapper .roktabs-links ul li.active span, .color h3 span, #vmMainPage span.catbar-text h3, div.pathway a {color: <?php echo $mynxx_primarycolor; ?>;}
	#page-bg, .roktabs-wrapper .roktabs-links ul li.active span {border-top: 3px solid <?php echo $mynxx_primarycolor; ?>;}
	.tabs-bottom .roktabs-links ul li.active span {border-bottom: 3px solid <?php echo $mynxx_primarycolor; ?>;border-top: 0;}
</style>	


<!-- If JS_COMPAT IS OFF AND NOT IN THE DRUPAL ADMIN, USE MOOTOOLS JS SCRIPTS -->
<?php if(theme_get_setting(js_compatibility) == 0 AND arg(0) != "admin" AND arg(1) != "add" AND arg(2) != "edit" AND arg(0) != "user") : ?>
	<?php include $theme_path . "/rt_mootools.php"; ?>
<?php endif; ?>


<?php if($mynxx_menu_type=="suckerfish" or $mynxx_menu_type=="splitmenu") :
  echo "<script type=\"text/javascript\" src=\"" . base_path() . path_to_theme() . "/js/ie_suckerfish.js\"></script>\n";
endif; ?>