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
		<?php utopia_header_code(); ?>
	</head>
	<body class="body">
		<?php utopia_after_body(); ?>
		<div data-animation="default" data-collapse="none" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar w-nav">
			<header class="header">
				<a href="<?php echo esc_url( get_home_url( null, '/' ) ); ?>" class="brand w-nav-brand"></a>
				<nav role="navigation" class="nav-menu w-nav-menu">
					<a href="#" class="w-nav-link">Home</a>
					<a href="#" class="w-nav-link">About</a>
					<a href="#" class="w-nav-link">Contact</a>
				</nav>
				<div class="menu-button w-nav-button">
					<div class="w-icon-nav-menu"></div>
				</div>
				<div class="left-menu">
					<div class="dopmenu">
						<a href="/concerts" class="us-link w-inline-block">
							<div>concerts</div>
						</a>
						<a href="/idea" class="us-link w-inline-block">
							<div>idea</div>
						</a>
						<a href="/utopians" class="us-link w-inline-block">
							<div>utopians</div>
						</a>
					</div>
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
								<a data-w-id="80008aa7-ecff-174b-98ba-e874be983bec" href="/" aria-current="page" class="dot-zoom _3 opgs w-inline-block w--current">
									<div class="dot-zoom-dot"></div>
								</a>
								<a data-w-id="98347db9-7deb-161e-019f-56b5f46dc922" href="/" aria-current="page" class="dot-zoom _2 opgs w-inline-block w--current">
									<div class="dot-zoom-dot"></div>
								</a>
								<a data-w-id="53652b2f-2989-7556-15dc-ba7a37ea03f1" href="/" aria-current="page" class="dot-zoom _1 opgs w-inline-block w--current">
									<div class="dot-zoom-dot"></div>
								</a>
							</div>
						</div>
					</div>
					<div class="top-m">
						<a data-w-id="abca3ef8-89fd-419b-96ff-5437a51c3d48" href="#" class="search-btn w-inline-block">
							<div>search</div>
						</a>
						<a href="#" class="lang w-inline-block">
							<div>DE</div>
						</a>
					</div>
					<a href="#" class="omen-menu w-inline-block">
						<img src="<?php echo esc_url( TEMPLATE_PATH . '/build/images/6630adc6066c2de7d1e3ada7_i.svg' ); ?>" loading="lazy" alt class="open-m ravno">
						<img src="<?php echo esc_url( TEMPLATE_PATH . '/build/images/6630adc6c69faae0e10f4d93_Frame202087326858.svg' ); ?>" loading="lazy" alt class="open-m crest">
					</a>
				</div>
			</header>
			<div class="search-block">
				<div class="text-block-6">Search in utopia</div>
				<div class="serch-form">
					<form role="search" method="get" id="searchform" action="<?php echo home_url( '/' ); ?>" data-wf-page-id="65e57c8082e6072b394e6a12" data-wf-element-id="a14c8d4c-d230-02dc-0c8c-ea633d30d88d">
						<input class="search-input w-input" autofocus="true" maxlength="256" value="<?php echo get_search_query(); ?>" name="s" id="s" placeholder="What are you looking for?" type="search">
					</form>
				</div>
				<div class="div-block-8">
					<div id="w-node-_0a595cc9-8957-c7f3-c082-caafc0635ada-a51c3d38" class="conc-card min">
						<a href="#" class="conc-link min serchert w-inline-block">
							<div class="p-28-120 serach">14 NOV</div>
							<div class="p-28-120 _2 search">Brahms: Violin Concerto, Tchaikovsky: Symphony No. 5</div>
							<div class="p-16-120 _4 min">Philharmonie BerlinBerlin, Germany</div>
						</a>
					</div>
					<div id="w-node-_53b63f5b-57b7-5c58-ef8e-407679001952-a51c3d38" class="artic-item">
						<a href="#" class="artic-link serch w-inline-block">
							<img src="<?php echo esc_url( TEMPLATE_PATH . '/build/images/65ef01b0aafe177ef258df9d_25.png' ); ?>" loading="lazy" alt class="image-3">
							<div class="vert servf">
								<div class="p-24-120 sercg">Exquisite sensitivity of The Indian Queenin Salzburg</div>
								<div class="p-16-120">read</div>
							</div>
						</a>
					</div>
					<div id="w-node-c510bd07-5263-2909-f3d3-ada46a8ff710-a51c3d38" class="artic-item">
						<a href="#" class="artic-link serch w-inline-block">
							<div class="vert servf">
								<div class="p-24-120 sercg">c-Moll-Messe — Utopia · Currentzis</div>
								<div class="p-16-120">read</div>
							</div>
						</a>
					</div>
					<div id="w-node-_8f0d8c0e-acb3-cdd3-10c9-17cb68af3f6b-a51c3d38" class="artic-item">
						<a href="#" class="artic-link serch w-inline-block">
							<img src="<?php echo esc_url( TEMPLATE_PATH . '/build/images/65ef01b0aafe177ef258df9d_25.png' ); ?>" loading="lazy" alt class="image-3">
							<div class="vert servf">
								<div class="p-24-120 sercg">Jeanine De Bique. Exquisite sensitivity of The Indian Queenin Salzburg</div>
								<div class="p-16-120">read</div>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
		<div id="barba-wrapper" class="wrapper">
			<div class="barba-container <?php echo esc_attr( $barba_container_extra_classes ); ?>" data-namespace="<?php echo esc_attr( $namespace ); ?>">
