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
$content_modules = get_field( 'content_modules' );
$gallery         = get_field( 'gallery' );

$post_date   = get_field( 'publication_date' ); // get_the_date( 'j F Y' );
$post_author = get_field( 'author' );
$categories  = get_the_category( get_the_ID() );
?>
				<div class="usual-page">
					<div id="top" class="article-page">
						<div class="top-line-article">
							<?php $idea_page_id = 12; ?>
							<a href="<?php echo esc_url( get_the_permalink( $idea_page_id ) . '#blog' ); ?>" class="gery-link art-p w-inline-block">
								<div class="text-block"><?php pll_e( 'articles in Our World' ); ?></div>
							</a>
							<div class="art-top">
								<div class="text-block grey"><?php echo esc_html( $post_date ); ?></div>
								<?php
								if ( ! empty( $categories ) && 1 !== $categories[0]->term_id ) :
									?>
									<div class="text-block grey"><?php echo esc_html( $categories[0]->name ); ?></div>
								<?php endif; ?>
								<?php if ( ! empty( $post_author ) ) : ?>
									<div class="text-block grey"><?php echo esc_html( $post_author ); ?></div>
								<?php endif; ?>
							</div>
						</div>
						<div class="article-midle single-article">
							<div class="vert art-vert">
								<h1 class="h1-single art-h"><?php the_title(); ?></h1>
								<div class="p-24-120 grey art-t"><?php the_field( 'description' ); ?></div>
								<ul class="article-meta">
									<li class="article-meta__item"><?php echo esc_html( $post_date ); ?></li>
									<?php if ( ! empty( $categories ) && 1 !== $categories[0]->term_id ) : ?>
										<li class="article-meta__item"><?php echo esc_html( $categories[0]->name ); ?></li>
									<?php endif; ?>
									<?php if ( ! empty( $post_author ) ) : ?>
										<li class="article-meta__item"><?php echo esc_html( $post_author ); ?></li>
									<?php endif; ?>
								</ul>
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
							<?php
							if ( ! empty( $content_modules ) ) :
								?>
							<div class="rich-right-side w-richtext">
								<?php
								$image_counter = 0;
								$video_counter = 0;
								foreach ( $content_modules as $index => $content_module ) :
									if ( 'blockquote_module' === $content_module['acf_fc_layout'] && ! empty( $content_module['text'] ) ) :
										?>
										<blockquote><?php echo esc_html( $content_module['text'] ); ?></blockquote>
									<?php elseif ( 'question_module' === $content_module['acf_fc_layout'] && ! empty( $content_module['text'] ) ) : ?>
										<p><em><?php echo esc_html( $content_module['text'] ); ?></em></p>
										<?php
									elseif ( 'image_module' === $content_module['acf_fc_layout'] && ! empty( $content_module['image'] ) ) :
											$image_type        = $content_module['image_type'];
											$image_description = $content_module['image_description'];

										if ( 'small' === $image_type ) :
											?>
												<figure data-image-index="<?php echo esc_attr( $image_counter ); ?>" data-gallery="content" class="w-richtext-align-center w-richtext-figure-type-image">
													<div>
													<?php
													echo utopia_remove_dimension_image_attributes(
														wp_get_attachment_image(
															$content_module['image'],
															'full',
															false,
															array(
																'loading' => 'lazy',
															)
														)
													);
													?>
													</div>
													<?php if ( ! empty( $image_description ) ) : ?>
														<figcaption><?php echo esc_html( $image_description ); ?></figcaption>
													<?php endif; ?>
												</figure>
											<?php elseif ( 'fullwidth' === $image_type ) : ?>
												<figure data-image-index="<?php echo esc_attr( $image_counter ); ?>" data-gallery="content" class="w-richtext-align-fullwidth w-richtext-figure-type-image">
													<div>
														<?php
														echo utopia_remove_dimension_image_attributes(
															wp_get_attachment_image(
																$content_module['image'],
																'full',
																false,
																array(
																	'loading' => 'lazy',
																)
															)
														);
														?>
													</div>
													<?php if ( ! empty( $image_description ) ) : ?>
														<figcaption><?php echo esc_html( $image_description ); ?></figcaption>
													<?php endif; ?>
												</figure>
												<?php
											endif;
											++$image_counter;
											?>
									<?php elseif ( 'text_module' === $content_module['acf_fc_layout'] && ! empty( $content_module['text'] ) ) : ?>
										<?php echo $content_module['text']; ?>
										<?php
									elseif ( 'video_module' === $content_module['acf_fc_layout'] ) :
										$video_type = ! empty( $content_module['type'] ) ? $content_module['type'] : '';
										$video      = '';

										if ( 'file' === $video_type ) {
											$video = $content_module['video_file'];
										} elseif ( 'url' === $video_type ) {
											$video = $content_module['video_url'];
										}

										$video_poster      = ! empty( $content_module['video_poster'] ) ? $content_module['video_poster'] : '';
										$video_description = ! empty( $content_module['video_description'] ) ? $content_module['video_description'] : '';
										?>
										<a href="#" onclick="window.videoModal<?php echo esc_attr( $video_counter ); ?>.showModal();" class="videobox videobox--article w-inline-block">
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
										<?php
										++$video_counter;
									endif;
									?>
								<?php endforeach; ?>
							</div>
							<?php endif; ?>
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
									<div class="p-24-120 grey slider-in" data-image-index="0" data-gallery="gallery">
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
									//phpcs:ignore
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
									//phpcs:ignore
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
								<div class="btn-xtx"><?php pll_e( 'back to top' ); ?></div>
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
								<span><?php pll_e( 'close' ); ?></span>
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
								<span><?php pll_e( 'close' ); ?></span>
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
						<button type="button" class="image-gallery__nav image-gallery__nav--prev"><span class="sr-only"><?php pll_e( 'Previous' ); ?></span></button>
						<button type="button" class="image-gallery__nav image-gallery__nav--next"><span class="sr-only"><?php pll_e( 'Next' ); ?></span></button>
					</dialog>
				<?php endif; ?>
				<?php
				$video_counter = 0;
				if ( ! empty( $content_modules ) ) :
					foreach ( $content_modules as $index => $content_module ) :
						if ( 'video_module' === $content_module['acf_fc_layout'] ) :
							$video_type = ! empty( $content_module['type'] ) ? $content_module['type'] : '';
							$video      = '';

							if ( 'file' === $video_type ) {
								$video = $content_module['video_file'];
							} elseif ( 'url' === $video_type ) {
								$video = $content_module['video_url'];
							}

							$video_poster      = ! empty( $content_module['video_poster'] ) ? $content_module['video_poster'] : '';
							$video_description = ! empty( $content_module['video_description'] ) ? $content_module['video_description'] : '';
							?>
							<dialog id="videoModal<?php echo esc_attr( $video_counter ); ?>" class="image-gallery" onclick="this.close();">
								<div class="image-gallery__header">
									<div class="image-gallery__counter gallery-counter">
									</div>
									<button type="button" class="image-gallery__close-button">
										<span><?php pll_e( 'close' ); ?></span>
									</button>
								</div>
								<div class="image-gallery__body image-gallery__body--video" onclick="event.stopPropagation();">
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
									<?php if ( ! empty( $video_description ) ) : ?>
										<p class="video-player-caption"><?php echo esc_html( $video_description ); ?></p>
									<?php endif; ?>
								</div>
							</dialog>
							<?php
							++$video_counter;
						endif;
					endforeach;
				endif;
				?>
				<?php get_footer(); ?>
