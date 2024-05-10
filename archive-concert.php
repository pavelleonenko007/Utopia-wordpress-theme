<?php
/**
 * Template name: Concerts
 *
 * @package 0.0.1
 */

defined( 'ABSPATH' ) || exit;
get_header(
	null,
	array(
		'data-wf-page'                  => '65e5ca782508f719b6fdfdcd',
		'barba-container-extra-classes' => 'inner-page',
	)
);
?>
				<div class="usual-page">
					<div class="conc-core">
						<?php
						if ( have_posts() ) :
							while ( have_posts() ) :
								the_post();
								?>
								<?php get_template_part( 'inc/components/concert-card' ); ?>
								<?php
							endwhile;
						else :
							?>
							<p>There is no concerts yet!</p>
						<?php endif; ?>
					</div>
					<?php get_template_part( 'inc/components/footer' ); ?>
				</div>
				<?php get_footer(); ?>
