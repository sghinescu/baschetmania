<?php



// set left column width
if(((theme_get_setting(splitmenu_col) == "leftcol") and $mynxx_menu_type == "splitmenu" and $submenu) or $left or $searchleft) {
	$current_leftcolumn_width = theme_get_setting('leftcolumn_width');
}
else {
	$current_leftcolumn_width = 0;
}
// set right column width
if(((theme_get_setting(splitmenu_col) == "rightcol") and $mynxx_menu_type == "splitmenu" and $submenu) or $right or $searchright) {
	$current_rightcolumn_width = theme_get_setting('rightcolumn_width');
}
else {
	$current_rightcolumn_width = 0;
}
// set insetwidth
if($inset) {
	$current_left_inset_width = theme_get_setting('leftinset_width');
}
else {
	$current_left_inset_width = 0;
}

if($inset2) {
	$current_right_inset_width = theme_get_setting('rightinset_width');
}
else {
	$current_right_inset_width = 0;
}

// set template width
$current_template_width = 'margin: 0 auto; width: ' . theme_get_setting('template_width') . 'px;';

$col_mode = "s-c-s";
if ($current_leftcolumn_width==0 and $current_rightcolumn_width>0) $col_mode = "x-c-s";
if ($current_leftcolumn_width>0 and $current_rightcolumn_width==0) $col_mode = "s-c-x";
if ($current_leftcolumn_width==0 and $current_rightcolumn_width==0) $col_mode = "x-c-x";

?>