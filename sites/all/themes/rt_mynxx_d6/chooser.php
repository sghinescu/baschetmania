<?php if(theme_get_setting(js_compatibility) == 0) : ?>

<script type="text/javascript">
	window.addEvent('domready', function() {
		var select = document.id('variation_chooser'), preview = document.id('variation_preview'), next = document.id('variation_chooser_next'), prev = document.id('variation_chooser_prev');
		if (select && preview && prev && next) {
			select.addEvent('change', function(e) {
				new Event(e).stop();
				selectImage(select.selectedIndex);
			});
			prev.addEvent('click', function() {
				var index = select.selectedIndex;
				if (index - 1 < 0) index = select.options.length - 1;
				else index -= 1;
				select.selectedIndex = index;
				selectImage(index);
			});
			next.addEvent('click', function() {
				var index = select.selectedIndex;
				if (index + 1 >= select.options.length) index = 0;
				else index += 1;
				select.selectedIndex = index;
				selectImage(index);
			});
			
			var asset;
			var selectImage = function(index) {
				preview.setStyle('background', 'url(<?php echo base_path() . path_to_theme(); ?>/images/loading.gif) center center no-repeat');
				asset = new Asset.image('<?php echo base_path() . path_to_theme(); ?>/images/stories/styles/ss_' + select.options[index].value + '.jpg', {
					onload: function() { 
						if (index == select.selectedIndex) preview.setStyle('background-image', 'url(' + this.src + ')');
					}
				});
			};
			
			selectImage(select.selectedIndex);
		};
	});


</script>

<?php
	if( isset( $_COOKIE['mynxx_style'] ) )
		$this_preset_style = $_COOKIE['mynxx_style']; 
	else
		$this_preset_style = theme_get_setting('preset_style');
?>

<div style="width: 169px;">
	<img src="<?php echo base_path() . path_to_theme(); ?>/images/blank.png" name="preview" id="variation_preview" border="0" width="189" height="169" alt="Mynxx" style="margin-left: -10px;" />

	<form action="<?php echo base_path(); ?>" name="chooserform" method="get" class="variation-chooser">

	<div class="controls">
		
		<img class="control-prev" id="variation_chooser_prev" title="Previous" alt="prev" src="<?php echo base_path() . path_to_theme(); ?>/images/blank.png" style="background-image: url('<?php echo base_path() . path_to_theme(); ?>/images/showcase-controls.png');" />
		<select name="tstyle" id="variation_chooser" class="button" style="float: left;">
			<option value="dark-red"<?php if($this_preset_style == "dark-red"): ?> selected="selected"<?php endif; ?>>Dark-Red</option>
			<option value="dark-blue"<?php if($this_preset_style == "dark-blue"): ?> selected="selected"<?php endif; ?>>Dark-Blue</option>
			<option value="dark-green"<?php if($this_preset_style == "dark-green"): ?> selected="selected"<?php endif; ?>>Dark-Green</option>
			<option value="dark-orange"<?php if($this_preset_style == "dark-orange"): ?> selected="selected"<?php endif; ?>>Dark-Orange</option>
			<option value="light-red"<?php if($this_preset_style == "light-red"): ?> selected="selected"<?php endif; ?>>Light-Red</option>
			<option value="light-blue"<?php if($this_preset_style == "light-blue"): ?> selected="selected"<?php endif; ?>>Light-Blue</option>
			<option value="light-green"<?php if($this_preset_style == "light-green"): ?> selected="selected"<?php endif; ?>>Light-Green</option>
			<option value="light-orange"<?php if($this_preset_style == "light-orange"): ?> selected="selected"<?php endif; ?>>Light-Orange</option>


		</select>
		<img class="control-next" id="variation_chooser_next" title="Next" alt="next" src="<?php echo base_path() . path_to_theme(); ?>/images/blank.png" style="background-image: url('<?php echo base_path() . path_to_theme(); ?>/images/showcase-controls.png');"/>
	</div>
	<input class="button" type="submit" value="Select" />
	</form>
</div>

<?php else : ?>

JS Compatibility is Enabled.

<?php endif; ?>
	