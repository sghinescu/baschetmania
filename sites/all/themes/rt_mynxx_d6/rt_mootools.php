
<script type="text/javascript" src="<?php echo base_path() . path_to_theme(); ?>/js/mootools.js"></script>

<link href="<?php echo base_path() . path_to_theme(); ?>/js/rokbox/themes/mynxx/rokbox-style.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="<?php echo base_path() . path_to_theme(); ?>/js/rokbox/rokbox.js"></script>
<script type="text/javascript" src="<?php echo base_path() . path_to_theme(); ?>/js/rokbox/themes/mynxx/rokbox-config.js"></script>


<?php if(theme_get_setting(enable_ie6warn) == 1) : ?> 
<script type="text/javascript" src="<?php echo base_path() . path_to_theme(); ?>/js/rokie6warn.js"></script> 
<?php endif; ?>



<?php if($mynxx_menu_type=="moomenu") :?>
<script type="text/javascript" src="<?php echo base_path() . path_to_theme(); ?>/js/rokmoomenu.js"></script>
<script type="text/javascript" src="<?php echo base_path() . path_to_theme(); ?>/js/mootools.bgiframe.js"></script>
<script type="text/javascript">
window.addEvent('domready', function() {
	new Rokmoomenu("ul.menutop", {
		bgiframe: false,
		delay: <?php echo theme_get_setting(moo_delay); ?>,
		verhor: true,
		animate: {
			props: ['<?php echo theme_get_setting(moo_direction); ?>'],
			opts: {
				duration: <?php echo theme_get_setting(moo_duration); ?>,
				fps: <?php echo theme_get_setting(moo_fps); ?>,
				transition: Fx.Transitions.<?php echo theme_get_setting(moo_transition); ?>
			}
		},
		bg: {
			enabled: <?php echo theme_get_setting(moo_bg_enabled); ?>,
			overEffect: {
				duration: <?php echo theme_get_setting(moo_bg_over_duration); ?>,
				transition: Fx.Transitions.<?php echo theme_get_setting(moo_bg_over_transition); ?>
			},
			outEffect: {
				duration: <?php echo theme_get_setting(moo_bg_out_duration); ?>,
				transition: Fx.Transitions.<?php echo theme_get_setting(moo_bg_out_transition); ?>
			}
		},
		submenus: {
			enabled: <?php echo theme_get_setting(moo_sub_enabled); ?>,
			opacity: <?php echo theme_get_setting(moo_sub_opacity); ?>,
			overEffect: {
				duration: <?php echo theme_get_setting(moo_sub_over_duration); ?>,
				transition: Fx.Transitions.<?php echo theme_get_setting(moo_sub_over_transition); ?>
			},
			outEffect: {
				duration: <?php echo theme_get_setting(moo_sub_out_duration); ?>,
				transition: Fx.Transitions.<?php echo theme_get_setting(moo_sub_out_transition); ?>
			},
			offsets: {
				top: 0,
				right: 1,
				bottom: 0,
				left: 1
			}
		}
	});
});
</script>
<?php endif; ?>