
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
					<?php if ($advertisement) : ?>try
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
						<?php if ($login) : ?>
							<div id="login-panel-surround" class="png">
								<div id="login-panel" class="png">
									<div id="login-module">
										<!--<jdoc:include type="modules" name="login" style="xhtml" />-->
									</div>
								</div>
							</div>
						<?php endif; ?>
						<!--Begin Showcase-->
						<?php if ($showcase or $scroller) : ?>
						<div class="showcase-surround">
							<div class="show-br"></div>
							<div id="showcase">
								<div id="showcase2">
									<div id="showmodules" class="spacer <?php echo $showcase_width; ?>">
										<?php if ($showcase) : ?>
										
											<?php echo $showcase; ?>
									
										<?php endif; ?>
										
									</div>
									<?php print $scroller; ?>
								</div>
							</div>
							<div class="show-bl"></div>
						</div>
						<?php endif; ?>
						<!--End Showcase-->
						<div class="sec-div"></div>
						<!--Begin Main Content Block-->
						<div id="main-content-surround">
						<div id="main-content" class="<?php echo $col_mode; ?>">
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
                    										<?php if ($inset2) : ?>
                    										<div id="inset-block-right"><div class="right-padding">
                    											<?php print $inset2; ?>
                    										</div></div>
                    										<?php endif; ?>
                    										<?php if ($inset) : ?>
                    										<div id="inset-block-left"><div class="left-padding">
                    											<?php print $inset; ?>
                    										</div></div>
                    										<?php endif; ?>
                    										<div id="maincontent-block">
                												
                												<!-- Print Section Heading -->
																<?php
																	echo "<h2 class='contentheading'>" . $title . "</h2>";	
																?>
                												
																<?php print $content; ?>
																<br /><br />
																	
																
                    										</div>
                    										</div>
                    										<div class="clr"></div>
                        									<?php if ($user456) : ?>
                        									<div id="mainmodules2" class="spacer <?php echo $user456_width; ?>">
                        									
                        										<?php print $user456; ?>
                        										
                        									</div>
                        									<?php endif; ?>
                    									</div>
                    								</div>    
                    							</div>
            						        </div>
            						    </div>
            						    <!--End col1wrap -->
           						        <!--Begin col2 -->
           						        <?php if (theme_get_setting(leftcolumn_width) != 0) : ?>
            						    <div class="col2">
                							<div id="leftcol">
                                                <div id="leftcol-bg">
                  									<?php if ($searchleft) : ?>
                										<?php print $searchleft; ?>
                									<?php endif; ?>
                									<?php if ($submenu and theme_get_setting(splitmenu_col) == "leftcol") : ?>
                									<div class="sidenav-block">
                										<?php echo $subnav; ?>
                									</div>
                									<?php endif; ?>
                									
                									<?php print $left; ?>
                							
                                                </div>
                							</div>
            						    </div>
            						    <?php endif; ?> 
            						    <!---End col2 -->
            						    <!--Begin col3 -->
            						    <?php if (theme_get_setting(rightcolumn_width) != 0) : ?>
            						    <div class="col3">
                							<div id="rightcol">
												<?php if ($searchright) : ?>
            										<?php print $searchright; ?>
            									<?php endif; ?>
           										<?php if ($submenu and theme_get_setting(splitmenu_col) == "rightcol") : ?>
            									<div class="sidenav-block">
            										<?php echo $subnav; ?>
            									</div>
            									<?php endif; ?>
            									<?php print $right; ?>
                							</div>
            						    </div>
            						    <?php endif; ?> 
            						    <!--End col3-->
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
							<div id="ql-button"><a href="#" class="ql-button-desc" rel="rokbox[400 200][module=popup]">More Information</a></div>
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