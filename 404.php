<?php
/**
 * Template Name: 404
 *
 * @package 0.0.1
 */

defined( 'ABSPATH' ) || exit;

get_header(
	null,
	array(
		'data-wf-page'                  => '665726fa62141312aaa1445d',
		'barba-container-extra-classes' => 'inner-page',
		'barba-namespace'               => '404-page',
	)
); ?>

<div class="usual-page">
	<h1 class="heading _2">Sorry the page you requested was not found</h1>
	<div class="rich-right-side _404page w-richtext">
		<p>Go to our <a href="<?php echo esc_url( home_url( '/' ) ); ?>">main page</a></p>
	</div>
</div>

<?php get_footer(); ?>
