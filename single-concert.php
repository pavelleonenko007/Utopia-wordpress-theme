<?php
/**
 * Template name: Concert full
 *
 * @package 0.0.1
 */

defined( 'ABSPATH' ) || exit;

get_header(
	null,
	array(
		'data-wf-page'                  => '65e5e24540c1f882634e5a7e',
		'barba-container-extra-classes' => 'inner-page',
	)
);

$start_date = get_field( 'start_date' );
$support    = get_field( 'support' );
$disclaimer = get_field( 'disclaimer' );

$buy_button = get_field( 'buy_button' );
?>
				<div class="usual-page">
					<div class="concert-single">
						<div class="concert-left">
							<a href="<?php echo esc_url( get_post_type_archive_link( 'concert' ) ); ?>" class="gery-link w-inline-block">
								<div class="text-block">all concerts</div>
							</a>
							<div class="p-56-105 sing"><?php echo esc_html( gmdate( 'j M', $start_date ) ); ?></div>
							<h1 class="h1-single n-pc"><?php the_title(); ?></h1>
							<div class="p-24-120 mnd"><?php echo esc_html( gmdate( 'l', $start_date ) ); ?></div>
							<?php
							$location = get_field( 'location' );
							if ( ! empty( $location['location_name'] ) ) :
								?>
								<a href="<?php echo ! empty( $location['link'] ) ? esc_url( $location['link'] ) : '#'; ?>" class="p-24-120"><?php echo esc_html( $location['location_name'] ); ?></a>
							<?php endif; ?>
							<?php
							$city = get_field( 'city' );
							if ( ! empty( $city ) ) :
								?>
								<div class="p-24-120 grey"><?php echo esc_html( $city ); ?></div>
							<?php endif; ?>
							<?php if ( time() < $start_date && ! empty( $buy_button['link'] ) ) : ?>
								<a href="<?php echo esc_url( $buy_button['link'] ); ?>" class="link-shos ll hvr single-page w-inline-block">
									<div class="btn-xtx"><?php echo ! empty( $buy_button['button_text'] ) ? esc_html( $buy_button['button_text'] ) : 'buy tickets'; ?></div>
									<div class="hover-liner"></div>
								</a>
							<?php endif; ?>
							<div class="other-info">
								<div class="rich-left-single w-richtext">
									<?php the_field( 'track_list' ); ?>
									<?php
									$participants = get_field( 'participants' );
									if ( ! empty( $participants ) ) :
										foreach ( $participants as $participant ) :
											?>
											<p><?php echo $participant['participant']; ?></p>
											<?php
										endforeach;
									endif;
									?>
								</div>
								<div class="pc-block">
									<?php
									if ( ! empty( $support ) ) :
										?>
										<div class="rich-left-single pc w-richtext">
											<p><?php echo $support; ?></p>
										</div>
									<?php endif; ?>
									<?php if ( ! empty( $disclaimer ) ) : ?>
										<div class="rich-left-single-lst lst pc w-richtext">
											<p>‍<em class="italic-text">* <?php echo esc_html( $disclaimer ); ?></em></p>
										</div>
									<?php endif; ?>
								</div>
							</div>
						</div>
						<div class="div-block-4">
							<div class="concert-right">
								<h1 class="h1-single n-mob"><?php the_title(); ?></h1>
								<div class="rich-right-side w-richtext">
									<?php the_content(); ?>
								</div>
								<?php
								$gallery = get_field( 'gallery' );
								if ( ! empty( $gallery ) ) :
									?>
								<div class="concert-slider-line">
									<div class="concert-slider-line_core">
										<?php
										$counter = 0;
										foreach ( $gallery as $index => $gallery_img ) :
											if ( $counter > 2 ) {
												break;
											}
											?>
											<a href="#" class="con-slide-mom w-inline-block" data-image-index="<?php echo esc_attr( $index ); ?>" data-gallery="gallery">
												<?php
												echo wp_get_attachment_image(
													$gallery_img['image'],
													'full',
													false,
													array(
														'loading' => 'lazy',
														'class'   => 'img-concert',
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
								<div class="pc-block mob-blk">
									<?php if ( ! empty( $support ) ) : ?>
										<div class="rich-left-single pc w-richtext">
											<p><?php echo $support; ?></p>
										</div>
									<?php endif; ?>
									<?php if ( ! empty( $disclaimer ) ) : ?>
										<div class="rich-left-single-lst lst pc w-richtext">
											<p>‍<em class="italic-text">* <?php echo esc_html( $disclaimer ); ?></em></p>
										</div>
									<?php endif; ?>
								</div>
							</div>
							<?php
							$related_concerts = get_field( 'related_concerts' );

							if ( ! empty( $related_concerts ) ) :
								?>
								<div class="conc-core in-page">
									<?php
									foreach ( $related_concerts as $post ) :
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
							<div id="w-node-_386c8b68-fa8e-59d1-8beb-14094e48cacb-634e5a7e" class="artic-core min">
								<?php
								foreach ( $related_articles as $post ) :
									setup_postdata( $post );
									get_template_part( 'inc/components/article-card' );
									?>
								<!-- <div id="w-node-_07d73132-fc6d-cb50-a71f-39b9d09d1dc3-634e5a7e" class="artic-item">
									<a href="#" class="artic-link w-inline-block">
										<div class="p-16-120 w">Mezzo-soprano Dominika Hirschler has written in depth about her experience of performing the Utopia choir...</div>
										<div class="p-16-120">by Opera Wire</div>
									</a>
								</div> -->
									<?php
								endforeach;
								wp_reset_postdata();
								?>
							</div>
							<?php endif; ?>
						</div>
					</div>
					<?php get_template_part( 'inc/components/footer' ); ?>
				</div>
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
