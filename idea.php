<?php
/**
 * Template name: Idea
 *
 * @package 0.0.1
 */

defined( 'ABSPATH' ) || exit;
get_header(
	null,
	array(
		'data-wf-page'                  => '65eefdcf9cf03e9f8bd9f3e0',
		'barba-container-extra-classes' => 'inner-page',
		'barba-namespace'               => 'idea',
	)
);

the_post();

$video_block       = get_field( 'video' );
$video_type        = $video_block['type'];
$video             = 'file' === $video_type ? $video_block['video_file'] : $video_block['video_url'];
$video_poster      = ! empty( $video_block['video_poster'] ) ? $video_block['video_poster'] : '';
$video_description = ! empty( $video_block['description'] ) ? $video_block['description'] : '';
?>
				<div class="usual-page wh-bg">
					<div class="iaea-page top">
						<div class="idea-midle">
							<div class="vert art-vert">
								<h1 class="h1-single art-h blk">
									<?php
									// phpcs:ignore
									echo utopia_get_page_title(); ?>
								</h1>
								<div class="p-24-120 grey ide-t"><?php the_field( 'author' ); ?></div>
							</div>
							<?php
							the_post_thumbnail(
								'full',
								array(
									'class'   => 'art-img idea-img',
									'loading' => 'eager',
								)
							);
							?>
						</div>
						<div class="art-rich idea-p">
							<?php
							$lead = get_field( 'lead' );
							if ( ! empty( $lead ) ) :
								?>
								<p class="descr-art blk">
									<?php
									// phpcs:ignore
									echo $lead; 
									?>
								</p>
							<?php endif; ?>
							<?php
							$content_modules = get_field( 'content_modules' );

							if ( ! empty( $content_modules ) ) :
								?>
								<div class="rich-right-side uto idear w-richtext">
									<?php
									foreach ( $content_modules as $content_module ) :

										if ( 'image_module' === $content_module['acf_fc_layout'] && ! empty( $content_module['image'] ) ) :
											$image             = $content_module['image'];
											$image_type        = $content_module['image_type'];
											$image_description = $content_module['image_description'];
											if ( 'fullwidth' === $image_type ) :
												?>
												<figure style="max-width:1280pxpx" class="w-richtext-align-fullwidth w-richtext-figure-type-image">
													<div>
														<?php
														// phpcs:ignore
														echo utopia_remove_dimension_image_attributes( wp_get_attachment_image( $image, 'full', false, array( 'loading' => 'lazy' ) ) ); ?>
													</div>
												</figure>
											<?php else : ?>
												<figure class="w-richtext-align-center w-richtext-figure-type-image">
													<div>
													<?php
													// phpcs:ignore
													echo utopia_remove_dimension_image_attributes( wp_get_attachment_image( $image, 'full', false, array( 'loading' => 'lazy' ) ) ); ?>
													</div>
													<?php if ( ! empty( $image_description ) ) : ?>
														<figcaption><?php echo esc_html( $image_description ); ?></figcaption>
													<?php endif; ?>
												</figure>
												<?php
										endif;
										else :
											// phpcs:ignore
											echo $content_module['text'];
										endif;
									endforeach;
									?>
								</div>
							<?php endif; ?>
							<?php if ( ! empty( $video ) ) : ?>
								<a href="#" onclick="window.videoModal.showModal();" class="videobox w-inline-block">
									<div class="rel flex-center">
										<?php
										// phpcs:ignore
										echo utopia_remove_dimension_image_attributes(
											wp_get_attachment_image(
												$video_poster,
												'full',
												false,
												array(
													'loading' => 'lazy',
													'class'   => 'image-4',
												)
											)
										);
										?>
										<div class="html-embed-2 w-embed">
											<svg width="100%" height="100%" viewbox="0 0 130 92" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M127.987 19.8366C127.987 19.8366 126.73 10.9127 122.854 6.97876C117.947 1.8232 112.442 1.80249 109.927 1.49192C91.8665 0.1875 64.776 0.1875 64.776 0.1875H64.7141C64.7141 0.1875 37.6236 0.1875 19.5632 1.49192C17.048 1.80249 11.5433 1.8232 6.63645 6.97876C2.76048 10.9127 1.50285 19.8366 1.50285 19.8366C1.50285 19.8366 0.224609 30.3134 0.224609 40.8108V50.6457C0.224609 61.1225 1.52347 71.5992 1.52347 71.5992C1.52347 71.5992 2.7811 80.5231 6.65707 84.4571C11.5639 89.6126 18.017 89.447 20.8827 89.9853C31.1911 90.9791 64.7554 91.2897 64.7554 91.2897C64.7554 91.2897 91.8665 91.2483 109.927 89.9439C112.442 89.6333 117.947 89.6126 122.854 84.4571C126.73 80.5231 127.987 71.5992 127.987 71.5992C127.987 71.5992 129.286 61.1225 129.286 50.6457V40.8108C129.286 30.3134 127.987 19.8366 127.987 19.8366Z" fill="black" fill-opacity="0.25"></path>
												<path d="M51.4395 26.125V62.5245L86.3025 44.3869L51.4395 26.125Z" fill="#EAEAEA"></path>
											</svg>
										</div>
									</div>
									<?php if ( ! empty( $video_description ) ) : ?>
										<div><?php echo esc_html( $video_description ); ?></div>
									<?php endif; ?>
								</a>
							<?php endif; ?>
						</div>
					</div>
					<?php
					$articles_query_args = array(
						'post_type'      => 'post',
						'posts_per_page' => 6,
					);

					$articles_query = new WP_Query( $articles_query_args );

					if ( $articles_query->have_posts() ) :
						?>
						<div id="blog" class="usual-page-idea def-color">
							<h2 class="h2-idea">Our world</h2>
							<div class="iaea-page ltr">
								<div class="conc-core in-page idea-page">
									<?php
									while ( $articles_query->have_posts() ) :
										$articles_query->the_post();
										?>
										<div id="w-node-e4e544f0-71e8-0317-502c-21d5e098212b-8bd9f3e0" class="conc-card min">
											<a href="<?php the_permalink(); ?>" class="conc-link min idea-link w-inline-block">
												<div class="p-17">Article</div>
												<?php
												the_post_thumbnail(
													'full',
													array(
														'class'   => 'img-240-150',
														'loading' => 'lazy',
													)
												);
												?>
												<div class="p-28-120 _3"><?php the_title(); ?></div>
												<div class="link-shos ll _3 hvr">
													<div class="btn-xtx">read article</div>
													<div class="hover-liner"></div>
												</div>
											</a>
										</div>
										<?php
									endwhile;
									wp_reset_postdata();
									?>
								</div>
								<?php
								// TODO: add ajax for load more!
								if ( $articles_query->max_num_pages > 1 ) :
									?>
									<button type="button" data-button="load-more" data-type="article" class="link">load more</button>
								<?php endif; ?>
							</div>
							<?php get_template_part( 'inc/components/footer' ); ?>
						</div>
					<?php endif; ?>
				</div>
				<?php if ( ! empty( $video ) ) : ?>
					<dialog id="videoModal" class="image-gallery" onclick="this.close();">
						<div class="image-gallery__header">
							<div class="image-gallery__counter gallery-counter">
							</div>
							<button type="button" class="image-gallery__close-button">
								<span>Close</span>
							</button>
						</div>
						<div class="image-gallery__body" onclick="event.stopPropagation();">
							<?php if ( 'file' === $video_type ) : ?>
								<div class="video-player">
									<video class="video-player__video">
										<source src="<?php echo esc_attr( $video['url'] ); ?>" type="<?php echo esc_attr( $video['mime_type'] ); ?>">
									</video>
									<div class="video-player__controls">
										<div class="video-player__buttons">
											<button type="button" class="video-player__button video-player__button--play">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M6 2V22L21 12L6 2Z" fill="#FFFAF6"/>
												</svg>
												<span class="sr-only">Play</span>
											</button>
											<button type="button" class="video-player__button video-player__button--pause">
												<span class="sr-only">Pause</span>
												<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M4.75781 22.0996H10.0859V3.45117H4.75781V22.0996ZM15.4141 3.45117V22.0996H20.7422V3.45117H15.4141Z" fill="#FFFAF6"/>
												</svg>
											</button>
											<button type="button" class="video-player__button video-player__button--volume">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M17.6008 12C17.6008 10.6133 16.7361 9.42578 15.5087 8.92578L14.8551 10.4648C15.4688 10.7148 15.8992 11.3086 15.8992 12.0039C15.8992 12.6953 15.4688 13.2891 14.8551 13.543L15.5087 15.082C16.7361 14.5742 17.6008 13.3867 17.6008 12ZM16.8158 5.84766L16.1622 7.38672C18.0073 8.14062 19.3024 9.92188 19.3024 12C19.3024 14.082 18.0073 15.8594 16.1622 16.6133L16.8158 18.1523C19.2745 17.1484 21 14.7734 21 12C21 9.22656 19.2745 6.85156 16.8158 5.84766ZM4 7.83203V16.1641H7.3992L13.3488 22V2L7.3992 7.83203H4Z" fill="#FFFAF6"/>
												</svg>
												<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M4.25 8.60742V16.9395H7.6492L13.5988 22.7754V2.77539L7.6492 8.60742H4.25Z" fill="#FFFAF6"/>
													<g clip-path="url(#clip0_5417_64132)">
														<path d="M21.25 10.6214L20.404 9.77539L18.25 11.9294L16.096 9.77539L15.25 10.6214L17.404 12.7754L15.25 14.9294L16.096 15.7754L18.25 13.6214L20.404 15.7754L21.25 14.9294L19.096 12.7754L21.25 10.6214Z" fill="#FFFAF6"/>
													</g>
													<defs>
														<clipPath id="clip0_5417_64132">
															<rect width="8" height="8" fill="white" transform="translate(15.25 8.77539)"/>
														</clipPath>
													</defs>
													</svg>

											</button>
											<button type="button" class="video-player__button video-player__button--fullscreen">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M3 21V16H5V19H8V21H3ZM16 21V19H19V16H21V21H16ZM3 8V3H8V5H5V8H3ZM19 8V5H16V3H21V8H19Z" fill="#FFFAF6"/>
												</svg>
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M5 16H8V19H10V14H5V16ZM8 8H5V10H10V5H8V8ZM14 19H16V16H19V14H14V19ZM16 8V5H14V10H19V8H16Z" fill="#FFFAF6"/>
												</svg>
											</button>
										</div>
										<div class="video-player__timeline">
											<div class="video-player__line">
												<div class="video-player__progress"></div>
												<div class="video-player__ghost"></div>
											</div>
										</div>
									</div>
								</div>
							<?php else : ?>
								<iframe src="<?php echo esc_attr( $video ); ?>" loading="lazy" title="Video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
							<?php endif; ?>
						</div>
					</dialog>
				<?php endif; ?>
				<?php get_footer(); ?>
