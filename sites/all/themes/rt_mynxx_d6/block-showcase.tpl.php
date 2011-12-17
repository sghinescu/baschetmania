<div class="block">
<?php if($class != ""): ?>
	<div class="<?php echo $class; ?>">
		<div class="moduletable">
		

			<?php if ($block->subject) : ?>
				<h3><span><?php print $block->subject; ?></span></h3>
			<?php endif; ?>
			<?php print $block->content; ?>
	
		</div>
	</div>
	
	
<?php else: ?>

	<div class="">
		<div class="moduletable">
				
			<?php if ($block->subject) : ?>
				<h3><span><?php print $block->subject; ?></span></h3>
			<?php endif; ?>
			<?php print $block->content; ?>
	
		
		</div>
	</div>

<?php endif; ?>
</div>
