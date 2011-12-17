
<?php if($class != ""): ?>
	<div class="module-<?php echo $class; ?>">
	


				<?php if ($block->subject) : ?>
					<h3><?php print $block->subject; ?></h3>
				<?php endif; ?>
				<?php print $block->content; ?>
	
	
	</div>
	
	
<?php else: ?>


			<div class="moduletable">
				<?php if ($block->subject) : ?>
					<h3><?php print $block->subject; ?></h3>
				<?php endif; ?>
				<?php print $block->content; ?>
			</div>
	

	
	
<?php endif; ?>	


