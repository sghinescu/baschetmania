<?php
/**
 * @file droksearch.tpl.php
 * Default theme implementation for droksearch.
 *
 * Available variables:
 * - $links: Array of primary links available to for the menu.
 *
 * @see template_preprocess_droksearch()
 * @see theme_droksearch()
 */
?>

<div id="searchmod-surround">
	<div id="searchmod">
		<div id="searchmod2">
			<div id="searchmod3">
				<div class="module">
			
		
					<form action="?q=search" method="post">
						<div class="search">
					
							<input id="mod_search_searchword" name="keys" type="text" class="inputbox png" value="search..." onblur="if(this.value=='') this.value='search...';" onfocus="if(this.value=='search...') this.value='';" />
							<!-- <input type="submit" value="Search" class="button" onclick="this.form.searchword.focus();"/>  -->
					
					
						</div>
						
						<input type="hidden" value="<?php echo drupal_get_token('search_form'); ?>" name="form_token" />  
						<input type="hidden" value="search_form" id="edit-search-form" name="form_id" />  
					</form> 
					
				</div>
			</div>
		</div>
	</div>
</div>
			