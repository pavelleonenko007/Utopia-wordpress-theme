<?php
/**
 * Template Name: Simple Page Template
 *
 * @package 0.0.1
 */

defined( 'ABSPATH' ) || exit;

global $post;

$extra_classes = array();

$extra_classes[] = 'post-' . $post->post_name;

get_header(
	null,
	array(
		'data-wf-page'                  => '665723f572caecd02591aa75',
		'barba-container-extra-classes' => 'inner-page ' . implode( ' ', $extra_classes ),
		'barba-namespace'               => 'simple-page',
	)
);

the_post();
?>
<div class="usual-page">
	<h1 class="heading"><?php the_title(); ?></h1>
	<div class="text-richer w-richtext">
		<?php the_content(); ?>
	</div>
	<?php get_template_part( 'inc/components/footer' ); ?>
</div>
<?php get_footer(); ?>
