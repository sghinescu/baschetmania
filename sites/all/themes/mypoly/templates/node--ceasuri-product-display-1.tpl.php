<?php

/**
 * @file
 * Default theme implementation to display a node.
 *
 * Available variables:
 * - $title: the (sanitized) title of the node.
 * - $content: An array of node items. Use render($content) to print them all,
 *   or print a subset such as render($content['field_example']). Use
 *   hide($content['field_example']) to temporarily suppress the printing of a
 *   given element.
 * - $user_picture: The node author's picture from user-picture.tpl.php.
 * - $date: Formatted creation date. Preprocess functions can reformat it by
 *   calling format_date() with the desired parameters on the $created variable.
 * - $name: Themed username of node author output from theme_username().
 * - $node_url: Direct url of the current node.
 * - $display_submitted: Whether submission information should be displayed.
 * - $submitted: Submission information created from $name and $date during
 *   template_preprocess_node().
 * - $classes: String of classes that can be used to style contextually through
 *   CSS. It can be manipulated through the variable $classes_array from
 *   preprocess functions. The default values can be one or more of the
 *   following:
 *   - node: The current template type, i.e., "theming hook".
 *   - node-[type]: The current node type. For example, if the node is a
 *     "Blog entry" it would result in "node-blog". Note that the machine
 *     name will often be in a short form of the human readable label.
 *   - node-teaser: Nodes in teaser form.
 *   - node-preview: Nodes in preview mode.
 *   The following are controlled through the node publishing options.
 *   - node-promoted: Nodes promoted to the front page.
 *   - node-sticky: Nodes ordered above other non-sticky nodes in teaser
 *     listings.
 *   - node-unpublished: Unpublished nodes visible only to administrators.
 * - $title_prefix (array): An array containing additional output populated by
 *   modules, intended to be displayed in front of the main title tag that
 *   appears in the template.
 * - $title_suffix (array): An array containing additional output populated by
 *   modules, intended to be displayed after the main title tag that appears in
 *   the template.
 *
 * Other variables:
 * - $node: Full node object. Contains data that may not be safe.
 * - $type: Node type, i.e. story, page, blog, etc.
 * - $comment_count: Number of comments attached to the node.
 * - $uid: User ID of the node author.
 * - $created: Time the node was published formatted in Unix timestamp.
 * - $classes_array: Array of html class attribute values. It is flattened
 *   into a string within the variable $classes.
 * - $zebra: Outputs either "even" or "odd". Useful for zebra striping in
 *   teaser listings.
 * - $id: Position of the node. Increments each time it's output.
 *
 * Node status variables:
 * - $view_mode: View mode, e.g. 'full', 'teaser'...
 * - $teaser: Flag for the teaser state (shortcut for $view_mode == 'teaser').
 * - $page: Flag for the full page state.
 * - $promote: Flag for front page promotion state.
 * - $sticky: Flags for sticky post setting.
 * - $status: Flag for published status.
 * - $comment: State of comment settings for the node.
 * - $readmore: Flags true if the teaser content of the node cannot hold the
 *   main body content.
 * - $is_front: Flags true when presented in the front page.
 * - $logged_in: Flags true when the current user is a logged-in member.
 * - $is_admin: Flags true when the current user is an administrator.
 *
 * Field variables: for each field instance attached to the node a corresponding
 * variable is defined, e.g. $node->body becomes $body. When needing to access
 * a field's raw values, developers/themers are strongly encouraged to use these
 * variables. Otherwise they will have to explicitly specify the desired field
 * language, e.g. $node->body['en'], thus overriding any language negotiation
 * rule that was previously applied.
 *
 * @see template_preprocess()
 * @see template_preprocess_node()
 * @see template_process()
 */
?>
<div style="background: #D3A241; -moz-border-radius: 5px; border-radius: 5px;
background: #cea134; /* Old browsers */
background: -moz-linear-gradient(top,  #cea134 0%, #fbb829 52%, #b48324 100%); /* FF3.6+ */
background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#cea134), color-stop(52%,#fbb829), color-stop(100%,#b48324)); /* Chrome,Safari4+ */
background: -webkit-linear-gradient(top,  #cea134 0%,#fbb829 52%,#b48324 100%); /* Chrome10+,Safari5.1+ */
background: -o-linear-gradient(top,  #cea134 0%,#fbb829 52%,#b48324 100%); /* Opera 11.10+ */
background: -ms-linear-gradient(top,  #cea134 0%,#fbb829 52%,#b48324 100%); /* IE10+ */
background: linear-gradient(top,  #cea134 0%,#fbb829 52%,#b48324 100%); /* W3C */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#cea134', endColorstr='#b48324',GradientType=0 ); /* IE6-9 */" id="node-<?php print $node->nid; ?>" class="<?php print $classes; ?> clearfix"<?php print $attributes; ?>>

  <?php print $user_picture; ?>

  <?php print render($title_prefix); ?>
  <?php if (!$page): ?>
    <h2<?php print $title_attributes; ?>><a href="<?php print $node_url; ?>"><?php print $title; ?></a></h2>
  <?php endif; ?>
  <?php print render($title_suffix); ?>

  <?php if ($display_submitted): ?>
    <div class="submitted">
      <?php print $submitted; ?>
    </div>
  <?php endif; ?>

  <div class="content"<?php print $content_attributes; ?>>
    <?php
      // We hide the comments and links now so that we can render them later.
  //    hide($content['comments']);
   //   hide($content['links']);
    //  print_r(array_keys($content));
     
    ?>
  </div>

  
   <div id="doc3" class="yui-t2">
   <div id="bd">
    <div id="yui-main">
      <div class="yui-b">
        <div class="yui-g">
          <div class="yui-u first">
            <div STYLE ="font:300; margin-top: 15px; margin-bottom: 15px; font-family: serif;
	font-style: oblique;
	font-variant: normal;
	font-weight: 900;
	font-size: large;
	line-height: 100%;
	word-spacing: normal;
	letter-spacing: normal;
	text-decoration: none;
	text-transform: none;
	text-align: center;
	text-indent: 0ex;">Imagini produs</div>
            <div><div id="img-thumb-1">
            <?php
            	print render($content['product:field_image']); ?></div>
                <div STYLE ="display:inline-block;text-align: center"><div id="img-thumb-2">	
            <?php print render($content['product:field_img_2']); ?></div>
             <div id="img-thumb-3">
            	<?php print render($content['product:field_img_3']);
            	?></div>
                </div>
            </div>   
          </div>
          <div class="yui-u">
          <div STYLE ="font:300; margin-top: 15px; margin-bottom: 15px; font-family: serif;
	font-style: oblique;
	font-variant: normal;
	font-weight: 900;
	font-size: large;
	line-height: 100%;
	word-spacing: normal;
	letter-spacing: normal;
	text-decoration: none;
	text-transform: none;
	text-align: center;
	text-indent: 0ex">Info si detalii comanda</div>
	<div STYLE ="padding-top: 15px; padding-bottom: 15px; display:inline-block; text-align: center">
            <?php
            print render($content['product:commerce_stock']); ?></div>
            <?php
            print render($content['product:commerce_price']);
            print render($content['field_ref_prod']); ?>
   <div STYLE ="padding-top: 15px; padding-bottom: 15px; display:inline-block; text-align: center">
            <?php print render($content['field_stars']); ?>
            </div>
            <?php print render($content['field_catalog_ref']);
            ?>
          </div>
        </div>
      </div>
    </div>
    <div class="yui-b">
        <div id="node_secondary"><div STYLE ="padding: 5px; margin-bottom: 15px;
        font-family: serif;
	font-style: oblique;
	font-variant: normal;
	font-weight: 900;
	font-size: large;
	line-height: 100%;
	word-spacing: normal;
	letter-spacing: normal;
	text-decoration: none;
	text-transform: none;
	text-align: left;
	text-indent: 0ex">Descriere produs</div>
      <?php print render($content['body']); ?></div>
    </div>
  </div>
  <div id="ft"><?php if ($content['field_tags']): ?><div STYLE ="font:300; margin-top: 15px; margin-bottom: 15px; font-family: serif;
	font-style: oblique;
	font-variant: normal;
	font-weight: 900;
	font-size: large;
	line-height: 100%;
	word-spacing: normal;
	letter-spacing: normal;
	text-decoration: none;
	text-transform: none;
	text-align: left;
	text-indent: 0ex;">Categorii produse similare</div>
     <?php print render($content['field_tags']); ?>
     <?php endif; ?>
    <?php print render($content['comments']); ?>
      </div>
</div>

</div>
