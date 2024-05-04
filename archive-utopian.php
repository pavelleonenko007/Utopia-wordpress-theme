<?php
/**
 * Template name: Utopians
 *
 * @package 0.0.1
 */

defined( 'ABSPATH' ) || exit;

get_header(
	null,
	array(
		'data-wf-page'                  => '65ef0726d2531bad1f44ea0e',
		'barba-container-extra-classes' => 'inner-page',
	)
); ?>
				<div class="usual-page utop-page">
					<div class="div-block-11">
						<div class="utopians-page">
							<?php
							if ( have_posts() ) :
								while ( have_posts() ) :
									the_post();
									?>
									<div class="uto-item">
										<a href="<?php the_permalink(); ?>" class="uto-a w-inline-block">
											<div><?php the_title(); ?></div>
											<?php
											the_post_thumbnail(
												'full',
												array(
													'class'   => 'uto-img-hide',
													'loading' => 'lazy',
												)
											);
											?>
										</a>
										<div class="text-block-3"><?php the_field( 'role' ); ?></div>
									</div>
									<?php
								endwhile;
							else :
								?>
								<p>No Utopians found</p>
							<?php endif; ?>
						</div>
					</div>
					<?php get_template_part( 'inc/components/footer' ); ?>
				</div>
				<div class="bg-keeper"></div>
				<?php get_footer(); ?>
