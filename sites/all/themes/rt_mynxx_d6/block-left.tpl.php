<?php if($class != ""): ?>
	<div class="<?php echo $class; ?>">
		<div class="side-mod">
		<?php if ($block->subject) : ?>
			<h3 class="module-title"><span><?php print $block->subject; ?></span></h3>
		<?php endif; ?>
			<div class="module">
				<?php print $block->content; ?>
			</div>
		</div>
	</div>
	
	
<?php else: ?>
		
	<div class="side-mod">
		<?php if ($block->subject) : ?>
			<h3 class="module-title"><span><?php print $block->subject; ?></span></h3>
		<?php endif; ?>
		<div class="module">
			<?php print $block->content; ?>
		</div>
	</div>
	
<?php endif; ?>	
