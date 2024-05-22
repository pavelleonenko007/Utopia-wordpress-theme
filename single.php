<?php
/**
 * Template name: Article
 *
 * @package 0.0.1
 */

defined( 'ABSPATH' ) || exit;
get_header(
	null,
	array(
		'data-wf-page'                  => '65eecf06a5d1856af702ec0a',
		'barba-container-extra-classes' => 'inner-page',
	)
);

the_post();

$gallery = get_field( 'gallery' );
?>
				<div class="usual-page">
					<div id="top" class="article-page">
						<div class="top-line-article">
							<?php // TODO: ask where the link should lead ?>
							<a href="#" class="gery-link art-p w-inline-block">
								<div class="text-block">all articles</div>
							</a>
							<div class="art-top">
								<div class="text-block grey"><?php the_date( 'j F Y' ); ?></div>
								<?php
								$tags = get_the_tags( get_the_ID() );
								if ( ! empty( $tags ) ) :
									?>
									<div class="text-block grey"><?php echo esc_html( $tags[0]->name ); ?></div>
								<?php endif; ?>
								<?php $author = get_the_author(); ?>
								<div class="text-block grey">by <?php echo esc_html( $author ); ?></div>
							</div>
						</div>
						<div class="article-midle single-article">
							<div class="vert art-vert">
								<h1 class="h1-single art-h"><?php the_title(); ?></h1>
								<div class="p-24-120 grey art-t"><?php the_field( 'description' ); ?></div>
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
							<div class="rich-right-side w-richtext">
								<?php the_content(); ?>
							</div>
							<?php if ( ! empty( $gallery ) ) : ?>
								<div class="concert-slider-line arc-line">
									<div class="concert-slider-line_core">
										<?php
										$counter = 0;
										foreach ( $gallery as $index => $image ) :
											if ( $index > 2 ) {
												break;
											}
											?>
											<a href="#" class="con-slide-mom w-inline-block" data-image-index="<?php echo esc_attr( $index ); ?>" data-gallery="gallery">
												<?php
												echo wp_get_attachment_image(
													$image['image'],
													'full',
													false,
													array(
														'class'   => 'img-concert',
														'loading' => 'lazy',
													)
												);
												++$counter;
												?>
											</a>
										<?php endforeach; ?>
									</div>
									<div class="p-24-120 grey slider-in">
										<span class="visible-slides"><?php echo esc_html( $counter ); ?></span>/<span class="count-slides"><?php echo count( $gallery ); ?></span>
									</div>
								</div>
							<?php endif; ?>
							<?php
							$two_column = get_field( 'two_column' );
							if ( ! empty( $two_column ) ) :
								?>
								<div class="end-of-single">
									<?php foreach ( $two_column as $column ) : ?>
										<div id="w-node-_00773223-6a9b-abe9-f330-f06b52ca8069-f702ec0a" class="vert">
											<div class="rich-bottom w-richtext">
												<h2><?php echo esc_html( $column['column']['heading'] ); ?></h2>
												<p><?php echo esc_html( $column['column']['text'] ); ?></p>
											</div>
										</div>
									<?php endforeach; ?>
								</div>
							<?php endif; ?>
							<?php
							$concerts = get_field( 'concerts' );
							if ( ! empty( $concerts ) ) :
								?>
								<div class="conc-core in-page art-page">
									<?php
									foreach ( $concerts as $post ) :
										setup_postdata( $post );
										get_template_part( 'inc/components/concert-card-min' );
									endforeach;
									wp_reset_postdata();
									?>
								</div>
							<?php endif; ?>
							<?php
							$related_articles = get_field( 'related_articles' );
							if ( ! empty( $related_articles ) ) :
								?>
								<div class="artic-core min">
									<?php
									foreach ( $related_articles as $post ) :
										setup_postdata( $post );
										get_template_part( 'inc/components/article-card' );
									endforeach;
									wp_reset_postdata();
									?>
								</div>
							<?php endif; ?>
							<?php
							$footer_text = get_field( 'footer_text' );
							if ( ! empty( $footer_text ) ) :
								?>
								<p class="paragraph"><?php echo esc_html( $footer_text ); ?></p>
							<?php endif; ?>
							<a href="#top" class="link-shos ll hvr w-inline-block">
								<div class="btn-xtx">back to top</div>
								<div class="hover-liner"></div>
							</a>
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
				<?php if ( ! empty( $gallery ) ) : ?>
					<dialog class="image-gallery" id="postGallery">
						<div class="image-gallery__header">
							<div class="image-gallery__counter gallery-counter">
								<svg class="image-gallery__arrow-icon image-gallery__arrow-icon--left" width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M6.53033 5.46967C6.82322 5.76256 6.82322 6.23743 6.53033 6.53033L1.75737 11.3033C1.46448 11.5962 0.989606 11.5962 0.696712 11.3033C0.403818 11.0104 0.403817 10.5355 0.69671 10.2427L4.93934 6L0.696689 1.75737C0.403795 1.46448 0.403793 0.989604 0.696686 0.69671C0.989579 0.403816 1.46445 0.403814 1.75735 0.696707L6.53033 5.46967ZM5 5.25L6 5.25L6 6.75L5 6.75L5 5.25Z" fill="#818181"/>
								</svg>
								<span>
									<span class="gallery-counter__current">1</span>/<span class="gallery-counter__total"><?php echo count( $gallery ); ?></span>
								</span>
								<svg class="image-gallery__arrow-icon image-gallery__arrow-icon--right" width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M6.53033 5.46967C6.82322 5.76256 6.82322 6.23743 6.53033 6.53033L1.75737 11.3033C1.46448 11.5962 0.989606 11.5962 0.696712 11.3033C0.403818 11.0104 0.403817 10.5355 0.69671 10.2427L4.93934 6L0.696689 1.75737C0.403795 1.46448 0.403793 0.989604 0.696686 0.69671C0.989579 0.403816 1.46445 0.403814 1.75735 0.696707L6.53033 5.46967ZM5 5.25L6 5.25L6 6.75L5 6.75L5 5.25Z" fill="#818181"/>
								</svg>
							</div>
							<button type="button" class="image-gallery__close-button">
								<span>Close</span>
							</button>
						</div>
						<div class="image-gallery__body">
							<ul class="image-gallery__list">
								<?php foreach ( $gallery as $gallery_image ) : ?>
									<li class="image-gallery__item">
										<figure class="image-gallery__element">
											<div>
												<?php echo wp_get_attachment_image( $gallery_image['image'], 'full', false ); ?>
											</div>
										</figure>
									</li>
								<?php endforeach; ?>
							</ul>
						</div>
						<button type="button" class="image-gallery__nav image-gallery__nav--prev"><span class="sr-only">Previous</span></button>
						<button type="button" class="image-gallery__nav image-gallery__nav--next"><span class="sr-only">Next</span></button>
					</dialog>
				<?php endif; ?>
				<?php get_footer(); ?>
