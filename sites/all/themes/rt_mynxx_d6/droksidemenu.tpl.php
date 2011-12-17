<?php
/**
 * @file droksidemenu.tpl.php
 * Default theme implementation for roksidemenu.
 *
 * Available variables:
 * - $links: Array of primary links available to for the menu.
 *
 * @see template_preprocess_droksidemenu()
 * @see theme_droksidemenu()
 */
?>

<?php 
	if(variable_get('clean_url', 0)) {
		$preURL = "";
	}
	else {
		$preURL = "?q=";
	}
?>

<ul class="menu">
<?php foreach ($links as $link):
    if(strlen(strstr($link['link']['href'],"http"))>0) {
  		$href = $link['link']['href'];	
  	}
  	else {
    	$href = $link['link']['href'] == "<front>" ? base_path() : base_path() . $preURL . drupal_get_path_alias($link['link']['href']);
    }
    
    $title = t($link['link']['title']);
    ?>
    <?php
    	$topclass = "";
    	if($link['link']['in_active_trail']) {
    		$topclass = "parent active ";
    	}
    ?>
    <li class="<?php echo $topclass;?>item1">
        <a href="<?php echo $href; ?>" class="topdaddy"><span><?php echo $title;?></span></a>
    <?php if ($link['link']['in_active_trail'] AND $link['below']): ?>
        <ul>
        <?php foreach ($link['below'] as $sublink):
            if(strlen(strstr($link['link']['href'],"http"))>0) {
		  		$subhref = $link['link']['href'];	
		  	}
		  	else {
            	$subhref = $sublink['link']['href'] == "<front>" ? base_path() : base_path() . $preURL . drupal_get_path_alias($sublink['link']['href']);
            }
            
            $current = ($sublink['link']['in_active_trail'])?'active ':'';
            $subtitle = t($sublink['link']['title']);
        ?>
            <li class="<?php echo $current; ?>item1">
                <a href="<?php echo $subhref;?>""><span><?php echo $subtitle;?></span></a>
             </li>
           <?php endforeach;?>
        </ul>
    <?php endif; ?>
    </li>
<?php endforeach;?>
</ul>