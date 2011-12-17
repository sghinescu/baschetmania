<div class="block">

<?php if($class != ""): ?>
	<div class="module-<?php echo $class; ?>">
	
		<div><div><div>

				<?php if ($block->subject) : ?>
					<h3><?php print $block->subject; ?></h3>
				<?php endif; ?>
				<?php print $block->content; ?>
	
		</div></div></div>

	</div>
	
	
<?php else: ?>
	<div class="module">

		<div><div><div>
			<div class="moduletable">
				<?php if ($block->subject) : ?>
					<h3><?php print $block->subject; ?></h3>
				<?php endif; ?>
				<?php print $block->content; ?>
			</div>
		</div></div></div>

	</div>
	
<?php endif; ?>	

</div>

