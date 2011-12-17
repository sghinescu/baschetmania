
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
	<head>
		<title><?php print $head_title; ?></title>
		<?php
			$rt_utils_includes = path_to_theme() . "/rt_utils.php";
			include $rt_utils_includes;
			$style_switcher = path_to_theme() . "/rt_styleswitcher.php";
			include $style_switcher;
		?>
		<?php print $head ?>
		<?php print $styles ?>		
		<?php print $scripts ?>
		
		<?php
			$head_includes = path_to_theme() . "/rt_head_includes.php";
			include $head_includes;
		?>	
		
		<?php
			if (isset($_GET['tstyle']) ) {
				$change = "tstyle";
				$styleVar = $_GET['tstyle'];
				mynxx_change_theme($change, $styleVar);
			}
		?>
		
		<link href="<?php echo base_path() . path_to_theme(); ?>/css/general.css" rel="stylesheet" type="text/css" />
		
		<!--[if IE 7]>
		<link href="<?php echo base_path() . path_to_theme(); ?>/css/template_ie7.css" rel="stylesheet" type="text/css" />	
		<![endif]-->	
		
		<!--[if lte IE 6]>
		<link href="<?php echo base_path() . path_to_theme(); ?>/css/template_ie6.css" rel="stylesheet" type="text/css" />
		<script src="<?php echo base_path() . path_to_theme(); ?>/js/DD_belatedPNG.js"></script>
		<script>
		    DD_belatedPNG.fix('.png');
		</script>
		<![endif]-->
	</head>
	<body id="ff-<?php echo $mynxx_fontfamily; ?>" class="f-<?php echo $mynxx_fontsize; ?> <?php echo $mynxx_style; ?> <?php echo $mynxx_body_style; ?> iehandle">
		
		<div id="page-bg">
			<!--Begin Header-->
			<div id="header">
				<div class="wrapper">
					<?php if ($advertisement) : ?>
					<div class="ad-module-top">
						<?php print $advertisement; ?>
					</div>
					<?php endif; ?>
					
					<?php if ($logo) : ?>
						<a href="<?php echo check_url($front_page); ?>" id="logo">
							<?php if ($site_slogan) : ?>
							<span class="logo-text"><?php echo $site_slogan; ?></span>
							<?php endif; ?>
						</a>
					<?php endif; ?>
					
					<?php if($mynxx_menu_type != "none") : ?>
					<div id="horiz-menu" class="<?php echo $mynxx_menu_type; ?>">
					<?php if($mynxx_menu_type != "module") : ?>
						
						<?php
							$tree = menu_tree_page_data('primary-links');  
							$main_menu = main_menu_tree_output($tree, 1);
						   	print $main_menu;	
						?>
						
					<?php else: ?>
						<?php print $toolbar; ?>
					<?php endif; ?>
					</div>
					<?php endif; ?>
					<div class="clr"></div>
				</div>
			</div>
			<!--End Header-->
			<div class="wrapper">
				<div id="main-body">
					<div id="topbar">
						<div id="topbar2">
							<div id="topbar3">
							<?php if (theme_get_setting(show_homebutton)) : ?>
								<div id="home-button"><a href="<?php print check_url($front_page); ?>" class="home-button-desc">Home</a></div>
							<?php else : ?>
								<div id="newsflash-mod"><?php print $newsflash; ?></div>
							<?php endif; ?>
							<?php if (theme_get_setting(show_textsizer)) : ?>
							<div id="accessibility">
								<div id="buttons">
									
									<a href="?fontsize=larger&page=<?php print arg(1); ?>" title="Increase" class="large"><span class="button">&nbsp;</span></a>
									<a href="?fontsize=smaller&page=<?php print arg(1); ?>" title="Decrease" class="small"><span class="button">&nbsp;</span></a>
								
								</div>
								<div class="textsizer-desc">Text Size</div>
							</div>
							<?php endif; ?>
							
							
							
							<?php if (theme_get_setting(show_fontchanger)) : ?>
							<div id="font-style-button">
								<a href="<?php print base_path(); ?>?q=node/2" title="Font Styles" class="font-style">Font Styles</a>
							</div>
							<?php endif; ?>
							
							<?php if (!$user->uid) : ?>
								<div id="login-button"><a href="?q=user" class="login-button-desc"><span>Login</span></a></div>
							<?php else : ?>
								<div id="login-button"><a href="?q=admin" class="login-button-desc2"><span>Site Admin</span></a></div>
							<?php endif; ?>
							
						
							</div>
						</div>
					</div>
					<div id="main-body-surround">
						<div id="cart-panel-surround" class="png">
							<div id="cart-panel" class="png"></div>
						</div>
						<div id="font-panel-surround" class="png">
							<div id="font-panel" class="png">
								<div class="left">
									<a href="#" class="mynxx" title="ff-mynxx"><span>Mynxx</span></a>
									<a href="#" class="optima" title="ff-optima"><span>Optima</span></a>
									<a href="#" class="geneva" title="ff-geneva"><span>Geneva</span></a>
									<a href="#" class="helvetica" title="ff-helvetica"><span>Helvetica</span></a>
								</div>
								<div class="right">
									<a href="#" class="lucida" title="ff-lucida"><span>Lucida</span></a>
									<a href="#" class="georgia" title="ff-georgia"><span>Georgia</span></a>
									<a href="#" class="trebuchet" title="ff-trebuchet"><span>Trebuchet</span></a>
									<a href="#" class="palatino" title="ff-palatino"><span>Palatino</span></a>
								</div>
								<div class="clr"></div>
							</div>
						</div>
					
					
						<div class="sec-div"></div>
						<!--Begin Main Content Block-->
						<div id="main-content-surround">
						<div id="main-content" class="x-c-x">
						    <div class="colmask leftmenu">
						        <div class="colmid">
    					    	    <div class="colright">
        						        <!--Begin col1wrap -->    
            						    <div class="col1wrap">
            						        <div class="col1pad">
            						            <div class="col1">
                    						        <div id="maincol2">
                    									<div class="maincol2-padding">
                    									<?php if ($user123) : ?>
                    									<div id="mainmodules" class="spacer <?php echo $user123_width; ?>">
                    										
                    										
                    											<?php print $user123; ?>
                    										
                    									
                    									
                    									</div>
                    									<?php endif; ?>
                    									<?php if (theme_get_setting(show_breadcrumb) AND !$is_front) : ?>
                    									<div id="breadcrumbs">
                    										<?php print $breadcrumb; ?>
                    										
                    									</div>
                    									<?php endif; ?>
                    									<div>
                    										
                    										<div id="maincontent-block">
                												
                												<script language="javascript" type="text/javascript">
																		function iFrameHeight() {
																			var h = 0;
																			if ( !document.all ) {
																				h = document.getElementById('blockrandom').contentDocument.height;
																				document.getElementById('blockrandom').style.height = h + 60 + 'px';
																			} else if( document.all ) {
																				h = document.frames('blockrandom').document.body.scrollHeight;
																				document.all.blockrandom.style.height = h + 20 + 'px';
																			}
																		}
																	</script>
																	<div class="contentpane">
																		<iframe id="blockrandom"
																			name="iframe"
																			src="http://www.google.com"
																			width="100%"
																			height="600"
																			scrolling="auto"
																			align="top"
																			frameborder="0"
																			class="wrapper">
																			This option will not work correctly. Unfortunately, your browser does not support Inline Frames</iframe>
																	</div>
																
                    										</div>
                    										</div>
                    										<div class="clr"></div>
                        									
                    									</div>
                    								</div>    
                    							</div>
            						        </div>
            						    </div>
            						    <!--End col1wrap -->
           						     
        							</div>
    							</div>
							</div>
						</div>
						<div class="corner" id="bl"></div>
						<div class="corner" id="br"></div>
						<div class="corner" id="tl"></div>
						<div class="corner" id="tr"></div>
						</div>
						<!--End Main Content Block-->
					</div>
					<!--Begin Bottom Main Modules-->
					<?php if ($user789) : ?>
					<div class="sec-div"></div>
					<div id="bottom-main">
							<div id="bottom-main2">
							<div id="mainmodules3" class="spacer <?php echo $user789_width; ?>">
							
								<?php print $user789; ?>
								
							</div>
						</div>
						<div class="bottom-bl"></div>
						<div class="bottom-br"></div>
						<div class="bottom-tl"></div>
						<div class="bottom-tr"></div>
					</div>
					<?php endif; ?>
					<!--End Bottom Main Modules-->
					<div class="sec-div"></div>
					<!--Begin Bottom Bar-->
					<div id="botbar"><div id="botbar2"><div id="botbar3">
						<?php if ($popup) : ?>
							<div id="ql-button"><a href="#" class="ql-button-desc" rel="rokbox[400 300][module=popup]">More Information</a></div>
						<?php endif; ?>
						<div id="top-button"><a href="#" id="top-scroll" class="top-button-desc">Top</a></div>
					</div></div></div>
					<!--End Bottom Bar-->
					<!--Begin Bottom Section-->
					<?php if ($bottom) : ?>
					<div id="bottom">
						<div id="mainmodules4" class="spacer <?php echo $bottom_width; ?>">
							
					
								<?php print $bottom; ?>
						
						</div>
					</div>
					<?php endif; ?>
					<?php if ($bottommenu or theme_get_setting(show_bottomlogo)) : ?>
					<div id="footer">
						<div id="footer2">
							<div id="footer3">
								<?php if (theme_get_setting(show_bottomlogo)) : ?>
								<a href="<?php print check_url($front_page); ?>" id="bottom-logo"></a>
								<?php endif; ?>
								<?php if ($bottommenu) : ?>
								<div id="bottom-menu">
									<?php print $bottommenu; ?>
									
								</div>
								<?php endif; ?>
							</div>
						</div>
					</div>
					<?php endif; ?>
					<div id="footerbar">
						<div id="footerbar2">
							<div id="footerbar3">
								<?php if (theme_get_setting(show_copyright)) : ?>
								<div class="copyright-block">
									<a href="http://www.rockettheme.com/" title="RocketTheme" id="rocket"></a>
									<div id="copyright">
										Designed by RocketTheme.
									</div>
								</div>
								<?php else: ?>
								<div class="footer-mod">
									<?php print $footer; ?>
								</div>
								<?php endif; ?>
							</div>
						</div>
					</div>
					<!--End Bottom Section-->
				</div>
			</div>
		</div>
		<?php if ($popup) : ?>
		<div id="popup">
			<?php print $popup; ?>
		</div>
		<?php endif; ?>
		<?php if ($debug) : ?>
		<div id="debug-mod">
			<?php print $debug; ?>
		</div>
		<?php endif; ?>
		
		<?php print $closure;?>
		
	</body>
</html>