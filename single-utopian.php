<?php
/**
 * Template name: Utopian
 *
 * @package 0.0.1
 */

defined( 'ABSPATH' ) || exit;
get_header(
	null,
	array(
		'data-wf-page'                  => '65eef967e4c8e68931e902ea',
		'barba-container-extra-classes' => 'inner-page',
	)
);

the_post();
?>
				<div class="usual-page">
					<div class="article-page">
						<div class="top-line-article">
							<a href="<?php echo esc_url( get_post_type_archive_link( 'utopian' ) ); ?>" class="gery-link art-p w-inline-block">
								<div class="text-block">all utopians</div>
							</a>
						</div>
						<div class="article-midle">
							<div class="vert art-vert">
								<h1 class="h1-single art-h"><?php the_title(); ?></h1>
								<div class="p-24-120 uto-t"><?php the_field( 'role' ); ?></div>
								<?php
								$concert = get_field( 'concert' );
								if ( ! empty( $concert ) ) :
									?>
									<div class="p-24-120 grey uto-t"><?php echo esc_html( $concert ); ?></div>
								<?php endif; ?>
							</div>
							<?php
							the_post_thumbnail(
								'full',
								array(
									'class'        => 'art-img',
									'loading'      => 'eager',
									'data-gallery' => 'thumbnail',
								)
							);
							?>
						</div>
						<div class="art-rich">
							<?php
							$lead = get_field( 'lead' );
							if ( ! empty( $lead ) ) :
								?>
								<p class="descr-art"><?php echo esc_html( $lead ); ?></p>
							<?php endif; ?>
							<div class="rich-right-side utop w-richtext">
								<?php the_content(); ?>
							</div>
						</div>
					</div>
					<?php get_template_part( 'inc/components/footer' ); ?>
				</div>
				<?php if ( has_post_thumbnail() ) : ?>
					<dialog class="image-gallery" id="thumbnailGallery">
						<div class="image-gallery__header">
							<div class="image-gallery__counter gallery-counter">
							</div>
							<button type="button" class="image-gallery__close-button">
								<span>Close</span>
							</button>
						</div>
						<div class="image-gallery__body">
							<ul class="image-gallery__list">
								<li class="image-gallery__item">
									<figure class="image-gallery__element">
										<div>
											<?php the_post_thumbnail( 'full' ); ?>
										</div>
									</figure>
								</li>
							</ul>
						</div>
					</dialog>
				<?php endif; ?>
				<?php get_footer(); ?>
