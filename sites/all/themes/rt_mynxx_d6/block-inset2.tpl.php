
<?php if($class != ""): ?>
	<div class="<?php echo $class; ?>">
		<div class="inset-mod">
			<div class="inset-mod2">
				<div class="module">
					<?php if ($block->subject) : ?>
						<h3 class="module-title"><span><?php print $block->subject; ?></span></h3>
					<?php endif; ?>
						
					<?php print $block->content; ?>
						
				</div>
			</div>
		</div>
					
	</div>
	
	
<?php else: ?>
		
	<div class="inset-mod">
		<div class="inset-mod2">
			<div class="module">
				<?php if ($block->subject) : ?>
					<h3 class="module-title"><span><?php print $block->subject; ?></span></h3>
				<?php endif; ?>
					
				<?php print $block->content; ?>
					
			</div>
		</div>
	</div>
	
	
<?php endif; ?>	

