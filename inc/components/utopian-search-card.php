<?php
/**
 * Utopian Search Card
 *
 * @package 0.0.1
 */

defined( 'ABSPATH' ) || exit;
?>
<div id="w-node-_8f0d8c0e-acb3-cdd3-10c9-17cb68af3f6b-a51c3d38" class="artic-item">
	<a href="<?php the_permalink(); ?>" class="artic-link serch w-inline-block" draggable="false">
		<?php
		the_post_thumbnail(
			'full',
			array(
				'loading' => 'lazy',
				'class'   => 'image-3',
			)
		);
		?>
		<div class="vert servf">
			<div class="p-24-120 sercg"><?php the_title(); ?></div>
			<div class="p-16-120"><?php pll_e( 'read' ); ?></div>
		</div>
	</a>
</div>
