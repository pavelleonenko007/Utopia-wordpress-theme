<?php
/**
 * Header
 *
 * @package 0.0.1
 */

defined( 'ABSPATH' ) || exit;

$data_wf_page                  = ! empty( $args['data-wf-page'] ) ? $args['data-wf-page'] : '';
$barba_container_extra_classes = ! empty( $args['barba-container-extra-classes'] ) ? $args['barba-container-extra-classes'] : '';
$namespace                     = ! empty( $args['barba-namespace'] ) ? $args['barba-namespace'] : '';
$current_language              = pll_current_language();
?>
<!DOCTYPE html>
<html data-wf-page="<?php echo esc_attr( $data_wf_page ); ?>" data-wf-site="<?php echo esc_attr( DATA_WF_SITE ); ?>" <?php language_attributes(); ?>>
	<head>
		<meta charset="<?php echo esc_attr( get_bloginfo( 'charset' ) ); ?>">
		<meta content="width=device-width, initial-scale=1" name="viewport">
		<script type="text/javascript">!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);</script>
		<style>
			.u-link, 
			.map, 
			.u-block{
				background: transparent !important;
			}
		</style>
		<?php utopia_head_code(); ?>
	</head>
	<body class="body opacity-0">
		<?php utopia_after_body(); ?>
		<div data-animation="default" data-collapse="none" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar w-nav">
			<header class="header">
				<a href="<?php echo esc_url( get_home_url( null, '/' ) ); ?>" class="brand w-nav-brand"></a>
				<?php
				$main_menu_name  = 'Main menu ' . strtolower( $current_language );
				$main_menu_items = wp_get_nav_menu_items( $main_menu_name );
				if ( ! empty( $main_menu_items ) ) :
					?>
					<nav role="navigation" class="nav-menu w-nav-menu">
						<?php foreach ( $main_menu_items as $main_menu_item ) : ?>
							<a href="<?php echo esc_url( $main_menu_item->url ); ?>" class="w-nav-link"><?php echo esc_html( $main_menu_item->title ); ?></a>
						<?php endforeach; ?>
					</nav>
				<?php endif; ?>
				<div class="menu-button w-nav-button">
					<div class="w-icon-nav-menu"></div>
				</div>
				<div class="left-menu">
					<?php if ( ! empty( $main_menu_items ) ) : ?>
					<div class="dopmenu">
						<?php foreach ( $main_menu_items as $main_menu_item ) : ?>
							<a href="<?php echo esc_url( $main_menu_item->url ); ?>" class="us-link w-inline-block">
								<div><?php echo esc_html( $main_menu_item->title ); ?></div>
							</a>
						<?php endforeach; ?>
					</div>
					<?php endif; ?>
					<div class="div-block-9">
						<div class="zoomzoom">
							<div class="zoom-mom">
								<a href="#" class="dot-zoom _3 no-barba w-inline-block">
									<div class="dot-zoom-dot"></div>
								</a>
								<a href="#" class="dot-zoom _2 no-barba w-inline-block">
									<div class="dot-zoom-dot"></div>
								</a>
								<a href="#" class="dot-zoom _1 no-barba w-inline-block">
									<div class="dot-zoom-dot"></div>
								</a>
								<div class="zoom-line">
									<div class="homenavliner"></div>
								</div>
								<div class="zoom-viewer">
									<div class="a-dot">
										<img src="<?php echo esc_url( TEMPLATE_PATH . '/build/images/65fd3f8809f4adcb3a38c081_Unionjh.svg' ); ?>" loading="lazy" alt class="img-arr">
									</div>
								</div>
								<a data-w-id="80008aa7-ecff-174b-98ba-e874be983bec" href="#" class="dot-zoom _3 opgs barba-prevent w-inline-block">
									<div class="dot-zoom-dot"></div>
								</a>
								<a data-w-id="98347db9-7deb-161e-019f-56b5f46dc922" href="#" class="dot-zoom _2 opgs barba-prevent w-inline-block">
									<div class="dot-zoom-dot"></div>
								</a>
								<a data-w-id="53652b2f-2989-7556-15dc-ba7a37ea03f1" href="#" class="dot-zoom _1 opgs barba-prevent w-inline-block">
									<div class="dot-zoom-dot"></div>
								</a>
							</div>
						</div>
					</div>
					<div class="top-m">
						<a data-w-id="abca3ef8-89fd-419b-96ff-5437a51c3d48" href="#" class="search-btn w-inline-block" onclick="window.searchDialog.hasAttribute('open') ? window.searchDialog.close() : window.searchDialog.showModal();">
							<div><?php pll_e( 'Search' ); ?></div>
						</a>
						<?php
						$translation = utopia_get_language_switcher();
						if ( ! empty( $translation ) ) :
							?>
							<a href="<?php echo esc_url( $translation['url'] ); ?>" class="lang barba-prevent w-inline-block">
								<div><?php echo esc_html( strtoupper( $translation['slug'] ) ); ?></div>
							</a>
						<?php endif; ?>
					</div>
					<button type="button" class="omen-menu w-inline-block">
						<img src="<?php echo esc_url( TEMPLATE_PATH . '/build/images/6630adc6066c2de7d1e3ada7_i.svg' ); ?>" loading="lazy" alt class="open-m ravno">
						<img src="<?php echo esc_url( TEMPLATE_PATH . '/build/images/close-mobile-menu.svg' ); ?>" loading="lazy" alt class="open-m crest">
					</button>
				</div>
			</header>
			<dialog class="search-block" id="searchDialog">
				<div class="search-block__controls">
					<div class="search-block__title"><?php pll_e( 'Search' ); ?></div>
					<form method="dialog" class="search-block__close-button-wrapper">
						<button class="search-block__close-btn" type="submit">
							<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="currentColor"/>
							</svg>
							<span class="sr-only"><?php pll_e( 'Close' ); ?></span>
						</button>
					</form>
				</div>
				<div class="text-block-6"><?php pll_e( 'Search in Utopia' ); ?></div>
				<div class="serch-form">
					<form role="search" id="searchform" data-wf-page-id="65e57c8082e6072b394e6a12" data-wf-element-id="a14c8d4c-d230-02dc-0c8c-ea633d30d88d">
						<input class="search-input w-input" autofocus="true" maxlength="256" value="<?php echo get_search_query(); ?>" name="s" id="s" placeholder="<?php pll_e( 'What are you looking for?' ); ?>" type="search">
						<input type="hidden" name="action" value="search">
						<?php wp_nonce_field( 'search_action', 'search_nonce', false ); ?>
					</form>
				</div>
				<div class="div-block-8 search-results"></div>
			</dialog>
		</div>
		<div id="barba-wrapper" data-barba="wrapper" class="wrapper">
			<div class="barba-container <?php echo esc_attr( $barba_container_extra_classes ); ?>" data-barba="container" data-barba-namespace="<?php echo esc_attr( $namespace ); ?>">
