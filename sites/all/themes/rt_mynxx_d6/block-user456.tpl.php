<div class="block first">
<div class="moduletable">
<?php if($class != ""): ?>
	<div class="<?php echo $class; ?>">
		
		<?php if ($block->subject) : ?>
			<h3 class="module-title"><span><?php print $block->subject; ?></span></h3>
		<?php endif; ?>
			<div class="module">
				<?php print $block->content; ?>
			</div>
		
	</div>
	
	
<?php else: ?>
		

		<?php if ($block->subject) : ?>
			<h3 class="module-title"><span><?php print $block->subject; ?></span></h3>
		<?php endif; ?>
		<div class="module">
			<?php print $block->content; ?>
		</div>
	
	
<?php endif; ?>	
</div>
</div>
