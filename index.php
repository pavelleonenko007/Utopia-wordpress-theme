<?php
/**
 * Template name: Home page
 *
 * @package 0.0.1
 */

defined( 'ABSPATH' ) || exit;
get_header(
	null,
	array(
		'data-wf-page'                  => '65e57c8082e6072b394e6a12',
		'barba-container-extra-classes' => 'home-page',
		'barba-namespace'               => 'homepage',
	)
);

$idea_page     = pll_get_post( 12 );
$idea_page_url = get_the_permalink( $idea_page );
$idea_0        = get_field( 'idea_0' );
$idea_1        = get_field( 'idea_1' );
$idea_2        = get_field( 'idea_2' );
$idea_3        = get_field( 'idea_3' );
$idea_4        = get_field( 'idea_4' );

$publication_1 = get_field( 'publication_1' );
$publication_2 = get_field( 'publication_2' );
$publication_3 = get_field( 'publication_3' );

$quote_1 = get_field( 'quote_1' );
$quote_2 = get_field( 'quote_2' );
$quote_3 = get_field( 'quote_3' );

$utopian_1     = get_field( 'utopian_1' );
$utopian_2     = get_field( 'utopian_2' );
$utopian_3     = get_field( 'utopian_3' );
$utopian_4     = get_field( 'utopian_4' );
$utopian_5     = get_field( 'utopian_5' );
$utopian_6     = get_field( 'utopian_6' );
$utopians_link = get_post_type_archive_link( 'utopian' );

$concert_1     = get_field( 'concert_1' );
$concert_2     = get_field( 'concert_2' );
$concert_3     = get_field( 'concert_3' );
$concert_4     = get_field( 'concert_4' );
$concerts_link = get_post_type_archive_link( 'concert' );

$photo_1 = get_field( 'photo_1' );
$photo_2 = get_field( 'photo_2' );
$photo_3 = get_field( 'photo_3' );
$photo_4 = get_field( 'photo_4' );
$photo_5 = get_field( 'photo_5' );
$photo_6 = get_field( 'photo_6' );
$photo_7 = get_field( 'photo_7' );
$photo_8 = get_field( 'photo_8' );

?>
				<div class="map-block">
					<div class="bg-imgers">
						<img src="<?php echo esc_url( TEMPLATE_PATH . '/build/images/65e57c8082e6072b394e6a2d_Favicon.png' ); ?>" loading="lazy" alt class="img-cover-hover">
					</div>
					<div class="div-block-3">
						<div class="mapa tst">
							<div class="map">
								<div class="map-scale">
									<a href="<?php echo esc_url( $idea_page_url ); ?>" class="uto-block _0">
										<div class="logo w-embed">
											<svg width="100%" height="100%" viewbox="0 0 581 89" fill="none" xmlns="http://www.w3.org/2000/svg">
												<g clip-path="url(#clip0_3520_67133)">
													<path d="M0.0332031 48.4125V1.7041L10.735 1.7433V48.4125C10.735 69.7968 23.0052 77.6763 37.4993 77.6763C51.9933 77.6763 64.2636 69.7772 64.2636 48.4125V25.6953H74.9653V48.4125C74.9653 75.1282 57.9696 87.2022 37.4993 87.2022C17.0289 87.2022 0.0332031 75.1282 0.0332031 48.4125Z" fill="#FFFAF6"></path>
													<path d="M153.68 25.655H188.446V30.4964H153.68V35.3377H188.446V40.1399H153.68V87.2403H143.058V40.1399H108.332V35.3377H143.058V30.4572H108.332V25.655H143.058V1.74219H153.68V25.6746V25.655Z" fill="#FFFAF6"></path>
													<path d="M262.568 0.572266C287.903 0.572266 305.673 18.6833 305.673 44.4973C305.673 70.3114 287.864 88.4224 262.529 88.4224C237.194 88.4224 219.424 70.3114 219.424 44.4973C219.424 18.6833 237.234 0.572266 262.568 0.572266ZM229.59 44.4973C229.59 64.588 243.21 78.7397 262.529 78.7397C281.848 78.7397 295.508 64.588 295.508 44.4973C295.508 24.4067 281.927 10.255 262.568 10.255C243.21 10.255 229.59 24.4067 229.59 44.4973Z" fill="#FFFAF6"></path>
													<path d="M414.362 28.7911C414.362 43.1584 405.606 56.0556 384.639 56.0556H355.89V87.2403H345.406V1.74219H384.52C402.33 1.74219 414.382 11.6405 414.382 28.7911H414.362ZM384.342 46.8237C398.22 46.8237 404.057 39.0619 404.057 28.7911C404.057 17.2267 396.989 10.9545 384.183 10.9545H355.89V46.8237H384.361H384.342Z" fill="#FFFAF6"></path>
													<path d="M449.486 1.74219H454.609V87.2403H449.486V1.74219ZM465.092 1.74219V87.2403H459.97V1.74219H465.092Z" fill="#FFFAF6"></path>
													<path d="M580.038 39.9097V87.2649H569.217V39.9097C569.217 18.2313 556.788 10.2735 542.075 10.2735C527.363 10.2735 514.974 18.2509 514.974 39.9097V46.3387H542.075V55.6882H504.133V39.9097C504.133 12.802 521.347 0.610352 542.056 0.610352C562.764 0.610352 580.038 12.802 580.038 39.8901V39.9097Z" fill="#FFFAF6"></path>
												</g>
												<defs>
													<clippath id="clip0_3520_67133">
														<rect width="580" height="87.8502" fill="white" transform="translate(0.03125 0.574219)"></rect>
													</clippath>
												</defs>
											</svg>
										</div>
										<?php
										if ( ! empty( $idea_0 ) ) :
											?>
											<div class="top-abs">
												<div class="p-14-20 _2"><?php echo $idea_0; ?></div>
												<div class="u-link u-i w-inline-block">
													<?php $read_button_text = ! empty( get_field( 'read_button_text' ) ) ? get_field( 'read_button_text' ) : pll__( 'read' ); ?>
													<div class="p-16-120 _2 _33"><?php echo esc_html( $read_button_text ); ?></div>
												</div>
											</div>
										<?php endif; ?>
									</a>
									<?php if ( ! empty( $utopian_1 ) ) : ?>
										<div class="uto-block _1">
											<a href="<?php echo esc_url( get_the_permalink( $utopian_1 ) ); ?>" class="u-link u-u w-inline-block">
												<div class="p-36-36 _2"><?php echo esc_html( get_the_title( $utopian_1 ) ); ?></div>
												<div class="p-16-120 _2"><?php pll_e( 'utopian' ); ?></div>
												<?php
												echo get_the_post_thumbnail(
													$utopian_1,
													'large',
													array(
														'decoding' => 'sync',
														'loading' => 'eager',
														'class'   => 'uu-image',
													)
												);
												?>
											</a>
											<div class="rtz-checker">
												<div class="rtz-checl"></div>
											</div>
										</div>
									<?php endif; ?>
									<?php if ( ! empty( $concert_1 ) ) : ?>
										<div class="uto-block _2">
											<a href="<?php echo esc_url( get_the_permalink( $concert_1 ) ); ?>" class="u-link u-e w-inline-block">
												<div class="ev-mom">
													<?php
													$start_date = get_field( 'start_date', $concert_1 );
													if ( ! empty( $start_date ) ) :
														?>
														<div class="p-36-36 _2"><?php echo esc_html( gmdate( 'j M', $start_date ) ); ?></div>
													<?php endif; ?>
													<div class="p-36-36 _2 mmax"><?php echo esc_html( get_the_title( $concert_1 ) ); ?></div>
													<div class="p-16-120 _2"> </div>
													<?php
													$location_name = utopia_get_concert_location( $concert_1 );
													if ( ! empty( $location_name ) ) :
														?>
														<div class="p-16-120 _2"><?php echo esc_html( $location_name ); ?></div>
													<?php endif; ?>
												</div>
											</a>
											<div class="rtz-checker">
												<div class="rtz-checl"></div>
											</div>
										</div>
									<?php endif; ?>
									<?php
									if ( ! empty( $quote_1 ) && ! empty( $quote_1['quote'] ) ) :
										$quote     = $quote_1['quote'];
										$url       = ! empty( $quote_1['url'] ) ? $quote_1['url'] : '#';
										$link_text = ! empty( $quote_1['link_text'] ) ? $quote_1['link_text'] : pll__( 'read' );
										$author    = ! empty( $quote_1['author'] ) ? $quote_1['author'] : '';
										?>
										<div class="uto-block _3">
											<a href="<?php echo esc_url( $url ); ?>" class="u-link u-q w-inline-block">
												<div class="p-30-120 _2"><?php echo esc_html( $quote ); ?></div>
												<?php if ( ! empty( $author ) ) : ?>
													<div class="p-16-120 _3">— <?php echo esc_html( $author ); ?></div>
												<?php endif; ?>
												<div class="p-16-120 _2"><?php echo esc_html( $link_text ); ?></div>
												<?php // TODO: maybe remove useless image? ?>
												<img src="<?php echo esc_url( TEMPLATE_PATH . '/build/images/65ef11d8aedf8fc3de0d5740_9.png' ); ?>" loading="eager" alt class="hidden-img">
											</a>
											<div class="rtz-checker">
												<div class="rtz-checl"></div>
											</div>
										</div>
									<?php endif; ?>
									<?php
									if ( ! empty( $publication_1 ) && ! empty( $publication_1['publication_text'] ) ) :
										$link            = ! empty( $publication_1['publication_link'] ) ? $publication_1['publication_link'] : array();
										$link_title      = ! empty( $link['title'] ) ? $link['title'] : 'read';
										$link_attributes = '';
										if ( ! empty( $link['url'] ) ) {
											$link_attributes = 'href="' . esc_url( $link['url'] ) . '"';
										}

										if ( ! empty( $link['target'] ) ) {
											$link_attributes .= ' target="' . esc_attr( $link['target'] ) . '"';
										}
										?>
										<div class="uto-block _4">
											<a <?php echo $link_attributes; ?> class="u-link u-p w-inline-block">
												<div class="ev-mom">
													<div class="p-16-120 _2 pol"><?php echo esc_html( $publication_1['publication_text'] ); ?></div>
													<?php
													if ( ! empty( $link_title ) ) :
														?>
														<div class="p-16-120 _2"><?php echo esc_html( $link_title ); ?></div>
													<?php endif; ?>
												</div>
											</a>
											<div class="rtz-checker">
												<div class="rtz-checl"></div>
											</div>
										</div>
									<?php endif; ?>
									<?php if ( ! empty( $idea_2 ) && ! empty( $idea_2['phrase'] ) ) : ?>
										<div class="uto-block _5" data-hover="image">
											<a href="<?php echo esc_url( $idea_page_url ); ?>" class="u-link u-i w-inline-block">
												<div class="p-36-36 _2"><?php echo esc_html( $idea_2['phrase'] ); ?></div>
												<?php
												if ( ! empty( $idea_2['image_on_hover'] ) ) {
													//phpcs:ignore
													echo utopia_remove_dimension_image_attributes(
														wp_get_attachment_image(
															$idea_2['image_on_hover'],
															'full',
															false,
															array(
																'decoding' => 'sync',
																'class' => 'hidden-img',
																'loading' => 'eager',
															)
														)
													);
												}
												?>
											</a>
											<div class="rtz-checker">
												<div class="rtz-checl"></div>
											</div>
										</div>
									<?php endif; ?>
									<?php if ( ! empty( $utopian_3 ) ) : ?>
										<div class="uto-block _6">
											<a href="<?php echo esc_url( get_the_permalink( $utopian_3 ) ); ?>" class="u-link u-u w-inline-block">
												<div class="p-36-36 _2"><?php echo esc_html( get_the_title( $utopian_3 ) ); ?></div>
												<div class="p-16-120 _2"><?php pll_e( 'utopian' ); ?></div>
												<?php
												echo get_the_post_thumbnail(
													$utopian_3,
													'large',
													array(
														'decoding' => 'sync',
														'class'   => 'uu-image',
														'loading' => 'eager',
													)
												);
												?>
											</a>
											<div class="rtz-checker">
												<div class="rtz-checl"></div>
											</div>
										</div>
									<?php endif; ?>
									<?php
									if ( ! empty( $photo_4 ) && ! empty( $photo_4['photo'] ) ) :
										$url         = ! empty( $photo_4['url'] ) ? $photo_4['url'] : '#';
										$description = ! empty( $photo_4['description'] ) ? $photo_4['description'] : '';
										$link_text   = ! empty( $photo_4['link_text'] ) ? $photo_4['link_text'] : pll__( 'read' );
										?>
										<div class="uto-block _7">
											<a href="<?php echo esc_url( $url ); ?>" class="u-link u-img w-inline-block">
												<?php
												echo wp_get_attachment_image(
													$photo_4['photo'],
													'large',
													false,
													array(
														'decoding' => 'sync',
														'class'   => 'u-image',
														'loading' => 'eager',
													)
												);
												?>
											</a>
											<div class="rtz-checker">
												<div class="rtz-checl"></div>
											</div>
											<div class="under-image">
												<div><?php echo esc_html( $description ); ?><br></div>
												<div class="pseudo-link"><?php echo esc_html( $link_text ); ?></div>
											</div>
										</div>
									<?php endif; ?>
									<?php if ( ! empty( $utopians_link ) ) : ?>
										<div class="uto-block _8">
											<a href="<?php echo esc_url( $utopians_link ); ?>" class="u-link u-i w-inline-block">
												<div class="p-56-105 _2"><?php pll_e( 'Utopians' ); ?></div>
											</a>
											<div class="rtz-checker">
												<div class="rtz-checl"></div>
											</div>
											<?php // TODO: maybe remove useless image? ?>
											<img src="<?php echo esc_url( TEMPLATE_PATH . '/build/images/65eef9c50fd2d28579087377_31.png' ); ?>" loading="eager" alt class="uu-image">
										</div>
									<?php endif; ?>
									<?php
									if ( ! empty( $publication_3 ) && ! empty( $publication_3['publication_text'] ) ) :
										$link            = ! empty( $publication_3['publication_link'] ) ? $publication_3['publication_link'] : array();
										$link_title      = ! empty( $link['title'] ) ? $link['title'] : 'read';
										$link_attributes = '';
										if ( ! empty( $link['url'] ) ) {
											$link_attributes = 'href="' . esc_url( $link['url'] ) . '"';
										}

										if ( ! empty( $link['target'] ) ) {
											$link_attributes .= ' target="' . esc_attr( $link['target'] ) . '"';
										}
										?>
										<div class="uto-block _9">
											<a <?php echo $link_attributes; ?> class="u-link u-p w-inline-block">
												<div class="ev-mom">
													<div class="p-16-120 _2 pol"><?php echo esc_html( $publication_3['publication_text'] ); ?></div>
													<?php if ( ! empty( $link_title ) ) : ?>
														<div class="p-16-120 _2"><?php echo esc_html( $link_title ); ?></div>
													<?php endif; ?>
												</div>
											</a>
											<div class="rtz-checker">
												<div class="rtz-checl"></div>
											</div>
										</div>
									<?php endif; ?>
									<?php if ( ! empty( $concert_3 ) ) : ?>
										<div class="uto-block _10">
											<a href="<?php echo esc_url( get_the_permalink( $concert_3 ) ); ?>" class="u-link u-e w-inline-block">
												<div class="ev-mom">
													<?php
													$start_date = get_field( 'start_date', $concert_3 );
													if ( ! empty( $start_date ) ) :
														?>
														<div class="p-36-36 _2"><?php echo esc_html( gmdate( 'j M', $start_date ) ); ?></div>
													<?php endif; ?>
													<div class="p-36-36 _2 mmax"><?php echo esc_html( get_the_title( $concert_3 ) ); ?></div>
													<div class="p-16-120 _2"> </div>
													<?php
													$location_name = utopia_get_concert_location( $concert_3 );
													if ( ! empty( $location_name ) ) :
														?>
														<div class="p-16-120 _2"><?php echo esc_html( $location_name ); ?></div>
													<?php endif; ?>
												</div>
											</a>
											<div class="rtz-checker">
												<div class="rtz-checl"></div>
											</div>
										</div>
									<?php endif; ?>
									<?php if ( ! empty( $utopian_5 ) ) : ?>
										<div class="uto-block _11">
											<a href="<?php echo esc_url( get_the_permalink( $utopian_5 ) ); ?>" class="u-link u-u w-inline-block">
												<div class="p-36-36 _2"><?php echo esc_html( get_the_title( $utopian_5 ) ); ?></div>
												<div class="p-16-120 _2"><?php pll_e( 'utopian' ); ?></div>
												<?php
												echo get_the_post_thumbnail(
													$utopian_5,
													'large',
													array(
														'class'   => 'uu-image',
														'loading' => 'eager',
													)
												);
												?>
											</a>
											<div class="rtz-checker">
												<div class="rtz-checl"></div>
											</div>
										</div>
									<?php endif; ?>
									<?php
									if ( ! empty( $photo_6 ) && ! empty( $photo_6['photo'] ) ) :
										$url         = ! empty( $photo_6['url'] ) ? $photo_6['url'] : '#';
										$description = ! empty( $photo_6['description'] ) ? $photo_6['description'] : '';
										$link_text   = ! empty( $photo_6['link_text'] ) ? $photo_6['link_text'] : pll__( 'read' );
										?>
										<div class="uto-block _12">
											<a href="<?php echo esc_url( $url ); ?>" class="u-link u-img w-inline-block">
												<?php
												echo wp_get_attachment_image(
													$photo_6['photo'],
													'large',
													false,
													array(
														'decoding' => 'sync',
														'class'   => 'u-image',
														'loading' => 'eager',
													)
												);
												?>
											</a>
											<div class="rtz-checker">
												<div class="rtz-checl"></div>
											</div>
											<div class="under-image">
												<div><?php echo esc_html( $description ); ?><br></div>
												<div class="pseudo-link"><?php echo esc_html( $link_text ); ?></div>
											</div>
										</div>
									<?php endif; ?>
									<?php
									if ( ! empty( $photo_2 ) && ! empty( $photo_2['photo'] ) ) :
										$url         = ! empty( $photo_2['url'] ) ? $photo_2['url'] : '#';
										$description = ! empty( $photo_2['descrioption'] ) ? $photo_2['descrioption'] : '';
										$link_text   = ! empty( $photo_2['link_text'] ) ? $photo_2['link_text'] : pll__( 'read' );
										?>
										<div class="uto-block _13">
											<a href="<?php echo esc_url( $url ); ?>" class="u-link u-img w-inline-block">
												<?php
												echo wp_get_attachment_image(
													$photo_2['photo'],
													'large',
													false,
													array(
														'decoding' => 'sync',
														'class'   => 'u-image',
														'loading' => 'eager',
													)
												);
												?>
											</a>
											<div class="rtz-checker">
												<div class="rtz-checl"></div>
											</div>
											<div class="under-image">
												<div><?php echo esc_html( $description ); ?><br></div>
												<div class="pseudo-link"><?php echo esc_html( $link_text ); ?></div>
											</div>
										</div>
									<?php endif; ?>
									<?php
									if ( ! empty( $photo_1 ) && ! empty( $photo_1['photo'] ) ) :
										$url         = ! empty( $photo_1['url'] ) ? $photo_1['url'] : '#';
										$description = ! empty( $photo_1['description'] ) ? $photo_1['description'] : '';
										$link_text   = ! empty( $photo_1['link_text'] ) ? $photo_1['link_text'] : pll__( 'read' );
										?>
										<div class="uto-block _14">
											<a href="<?php echo esc_url( $url ); ?>" class="u-link u-img w-inline-block">
												<?php
												echo wp_get_attachment_image(
													$photo_1['photo'],
													'large',
													false,
													array(
														'decoding' => 'sync',
														'class'   => 'u-image',
														'loading' => 'eager',
													)
												);
												?>
											</a>
											<div class="rtz-checker">
												<div class="rtz-checl"></div>
											</div>
											<div class="under-image">
												<div><?php echo esc_html( $description ); ?><br></div>
												<div class="pseudo-link"><?php echo esc_html( $link_text ); ?></div>
											</div>
										</div>
									<?php endif; ?>
									<div class="uto-block _15">
										<a href="<?php echo esc_url( $idea_page_url ); ?>" class="u-link u-i w-inline-block">
											<div class="p-56-105 _2">idea</div>
										</a>
										<div class="rtz-checker">
											<div class="rtz-checl"></div>
										</div>
									</div>
									<?php
									if ( ! empty( $photo_3 ) && ! empty( $photo_3['photo'] ) ) :
										$url         = ! empty( $photo_3['url'] ) ? $photo_3['url'] : '#';
										$description = ! empty( $photo_3['description'] ) ? $photo_3['description'] : '';
										$link_text   = ! empty( $photo_3['link_text'] ) ? $photo_3['link_text'] : pll__( 'read' );
										?>
										<div class="uto-block _16">
											<a href="<?php echo esc_url( $url ); ?>" class="u-link u-img w-inline-block">
												<?php
												echo wp_get_attachment_image(
													$photo_3['photo'],
													'large',
													false,
													array(
														'decoding' => 'sync',
														'class'   => 'u-image',
														'loading' => 'eager',
													)
												);
												?>
											</a>
											<div class="rtz-checker">
												<div class="rtz-checl"></div>
											</div>
											<div class="under-image">
												<div><?php echo esc_html( $description ); ?><br></div>
												<div class="pseudo-link"><?php echo esc_html( $link_text ); ?></div>
											</div>
										</div>
									<?php endif; ?>
									<?php if ( ! empty( $idea_1 ) && ! empty( $idea_1['phrase'] ) ) : ?>
										<div class="uto-block _17" data-hover="image">
											<a href="<?php echo esc_url( $idea_page_url ); ?>" class="u-link u-i w-inline-block">
												<div class="p-36-36 _2"><?php echo esc_html( $idea_1['phrase'] ); ?></div>
												<?php
												if ( ! empty( $idea_1['image_on_hover'] ) ) {
													//phpcs:ignore
													echo utopia_remove_dimension_image_attributes(
														wp_get_attachment_image(
															$idea_1['image_on_hover'],
															'full',
															false,
															array(
																'decoding' => 'sync',
																'class' => 'hidden-img',
																'loading' => 'eager',
															)
														)
													);
												}
												?>
											</a>
											<div class="rtz-checker">
												<div class="rtz-checl"></div>
											</div>
										</div>
									<?php endif; ?>
									<?php if ( ! empty( $concert_2 ) ) : ?>
										<div class="uto-block _18">
											<a href="<?php echo esc_url( get_the_permalink( $concert_2 ) ); ?>" class="u-link u-e w-inline-block">
												<div class="ev-mom">
													<?php
													$start_date = get_field( 'start_date', $concert_2 );
													if ( ! empty( $start_date ) ) :
														?>
														<div class="p-36-36 _2"><?php echo esc_html( gmdate( 'j M', $start_date ) ); ?></div>
													<?php endif; ?>
													<div class="p-36-36 _2 mmax"><?php echo esc_html( get_the_title( $concert_2 ) ); ?></div>
													<div class="p-16-120 _2"> </div>
													<?php
													$location_name = utopia_get_concert_location( $concert_2 );
													if ( ! empty( $location_name ) ) :
														?>
														<div class="p-16-120 _2"><?php echo esc_html( $location_name ); ?></div>
													<?php endif; ?>
												</div>
											</a>
											<div class="rtz-checker">
												<div class="rtz-checl"></div>
											</div>
										</div>
									<?php endif; ?>
									<?php if ( ! empty( $utopian_2 ) ) : ?>
										<div class="uto-block _19">
											<a href="<?php echo esc_url( get_the_permalink( $utopian_2 ) ); ?>" class="u-link u-u w-inline-block">
												<div class="p-36-36 _2"><?php echo esc_html( get_the_title( $utopian_2 ) ); ?></div>
												<div class="p-16-120 _2"><?php pll_e( 'utopian' ); ?></div>
												<?php
												echo get_the_post_thumbnail(
													$utopian_2,
													'large',
													array(
														'decoding' => 'sync',
														'loading' => 'eager',
														'class'   => 'uu-image',
													)
												);
												?>
											</a>
											<div class="rtz-checker">
												<div class="rtz-checl"></div>
											</div>
										</div>
									<?php endif; ?>
									<?php
									if ( ! empty( $quote_2 ) && ! empty( $quote_2['quote'] ) ) :
										$quote     = $quote_2['quote'];
										$url       = ! empty( $quote_2['url'] ) ? $quote_2['url'] : '#';
										$link_text = ! empty( $quote_2['link_text'] ) ? $quote_2['link_text'] : pll__( 'read' );
										$author    = ! empty( $quote_2['author'] ) ? $quote_2['author'] : '';
										?>
										<div class="uto-block _20">
											<a href="<?php echo esc_url( $url ); ?>" class="u-link u-q w-inline-block">
												<div class="p-30-120 _2"><?php echo esc_html( $quote ); ?></div>
												<?php if ( ! empty( $author ) ) : ?>
													<div class="p-16-120 _3">— <?php echo esc_html( $author ); ?></div>
												<?php endif; ?>
												<div class="p-16-120 _2"><?php echo esc_html( $link_text ); ?></div>
												<?php // TODO: maybe remove useless image? ?>
												<img src="<?php echo esc_url( TEMPLATE_PATH . '/build/images/65ef11d8aedf8fc3de0d5740_9.png' ); ?>" loading="eager" alt class="hidden-img">
											</a>
											<div class="rtz-checker">
												<div class="rtz-checl"></div>
											</div>
										</div>
									<?php endif; ?>
									<?php
									if ( ! empty( $publication_2 ) && ! empty( $publication_2['publication_text'] ) ) :
										$link            = ! empty( $publication_2['publication_link'] ) ? $publication_2['publication_link'] : array();
										$link_title      = ! empty( $link['title'] ) ? $link['title'] : 'read';
										$link_attributes = '';
										if ( ! empty( $link['url'] ) ) {
											$link_attributes = 'href="' . esc_url( $link['url'] ) . '"';
										}

										if ( ! empty( $link['target'] ) ) {
											$link_attributes .= ' target="' . esc_attr( $link['target'] ) . '"';
										}
										?>
										<div class="uto-block _21">
											<a <?php echo $link_attributes; ?> class="u-link u-p w-inline-block">
												<div class="ev-mom">
													<div class="p-16-120 _2 pol"><?php echo esc_html( $publication_2['publication_text'] ); ?></div>
													<?php if ( ! empty( $link_title ) ) : ?>
														<div class="p-16-120 _2"><?php echo esc_html( $link_title ); ?></div>
													<?php endif; ?>
												</div>
											</a>
											<div class="rtz-checker">
												<div class="rtz-checl"></div>
											</div>
										</div>
									<?php endif; ?>
									<?php if ( ! empty( $utopian_4 ) ) : ?>
										<div class="uto-block _22">
											<a href="<?php echo esc_url( get_the_permalink( $utopian_4 ) ); ?>" class="u-link u-u w-inline-block">
												<div class="p-36-36 _2"><?php echo esc_html( get_the_title( $utopian_4 ) ); ?></div>
												<div class="p-16-120 _2"><?php pll_e( 'utopian' ); ?></div>
												<?php
													echo get_the_post_thumbnail(
														$utopian_4,
														'full',
														array(
															'decoding' => 'sync',
															'class'   => 'uu-image',
															'loading' => 'eager',
														)
													);
													?>
											</a>
											<div class="rtz-checker">
												<div class="rtz-checl"></div>
											</div>
										</div>
									<?php endif; ?>
									<?php
									if ( ! empty( $photo_5 ) && ! empty( $photo_5['photo'] ) ) :
										$url         = ! empty( $photo_5['url'] ) ? $photo_5['url'] : '#';
										$description = ! empty( $photo_5['description'] ) ? $photo_5['description'] : '';
										$link_text   = ! empty( $photo_5['link_text'] ) ? $photo_5['link_text'] : pll__( 'read' );
										?>
										<div class="uto-block _23">
											<a href="<?php echo esc_url( $url ); ?>" class="u-link u-img w-inline-block">
												<?php
												echo wp_get_attachment_image(
													$photo_5['photo'],
													'large',
													false,
													array(
														'decoding' => 'sync',
														'class'   => 'u-image',
														'loading' => 'eager',
													)
												);
												?>
											</a>
											<div class="rtz-checker">
												<div class="rtz-checl"></div>
											</div>
											<div class="under-image">
												<div><?php echo esc_html( $description ); ?><br></div>
												<div class="pseudo-link"><?php echo esc_html( $link_text ); ?></div>
											</div>
										</div>
									<?php endif; ?>
									<?php if ( ! empty( $concerts_link ) ) : ?>
										<div class="uto-block _24">
											<a href="<?php echo esc_url( $concerts_link ); ?>" class="u-link u-i w-inline-block">
												<div class="p-56-105 _2">Concerts</div>
											</a>
											<div class="rtz-checker">
												<div class="rtz-checl"></div>
											</div>
										</div>
									<?php endif; ?>
									<?php if ( ! empty( $idea_3 ) && ! empty( $idea_3['phrase'] ) ) : ?>
										<div class="uto-block _25" data-hover="image">
											<a href="<?php echo esc_url( $idea_page_url ); ?>" class="u-link u-i w-inline-block">
												<div class="p-36-36 _2"><?php echo esc_html( $idea_3['phrase'] ); ?></div>
												<?php
												if ( ! empty( $idea_3['image_on_hover'] ) ) {
													//phpcs:ignore
													echo utopia_remove_dimension_image_attributes(
														wp_get_attachment_image(
															$idea_3['image_on_hover'],
															'full',
															false,
															array(
																'decoding' => 'sync',
																'class'   => 'hidden-img',
																'loading' => 'eager',
															)
														)
													);
												}
												?>
											</a>
											<div class="rtz-checker">
												<div class="rtz-checl"></div>
											</div>
										</div>
									<?php endif; ?>
									<?php
									if ( ! empty( $photo_7 ) && ! empty( $photo_7['photo'] ) ) :
										$url         = ! empty( $photo_7['url'] ) ? $photo_7['url'] : '#';
										$description = ! empty( $photo_7['description'] ) ? $photo_7['description'] : '';
										$link_text   = ! empty( $photo_7['link_text'] ) ? $photo_7['link_text'] : pll__( 'read' );
										?>
										<div class="uto-block _26">
											<a href="<?php echo esc_url( $url ); ?>" class="u-link u-img w-inline-block">
												<?php
												echo wp_get_attachment_image(
													$photo_7['photo'],
													'large',
													false,
													array(
														'decoding' => 'sync',
														'class'   => 'u-image',
														'loading' => 'eager',
													)
												);
												?>
											</a>
											<div class="rtz-checker">
												<div class="rtz-checl"></div>
											</div>
											<div class="under-image">
												<div><?php echo esc_html( $description ); ?><br></div>
												<div class="pseudo-link"><?php echo esc_html( $link_text ); ?></div>
											</div>
										</div>
									<?php endif; ?>
									<?php if ( ! empty( $concert_4 ) ) : ?>
										<div class="uto-block _27">
											<a href="<?php echo esc_url( get_the_permalink( $concert_4 ) ); ?>" class="u-link u-e w-inline-block">
												<div class="ev-mom">
													<?php
													$start_date = get_field( 'start_date', $concert_4 );
													if ( ! empty( $start_date ) ) :
														?>
														<div class="p-36-36 _2"><?php echo esc_html( gmdate( 'j M', $start_date ) ); ?></div>
													<?php endif; ?>
													<div class="p-36-36 _2 mmax"><?php echo esc_html( get_the_title( $concert_4 ) ); ?></div>
													<div class="p-16-120 _2"> </div>
													<?php
													$location_name = utopia_get_concert_location( $concert_4 );
													if ( ! empty( $location_name ) ) :
														?>
														<div class="p-16-120 _2"><?php echo esc_html( $location_name ); ?></div>
													<?php endif; ?>
												</div>
											</a>
											<div class="rtz-checker">
												<div class="rtz-checl"></div>
											</div>
										</div>
									<?php endif; ?>
									<?php if ( ! empty( $utopian_6 ) ) : ?>
										<div class="uto-block _28">
											<a href="<?php echo esc_url( get_the_permalink( $utopian_6 ) ); ?>" class="u-link u-u w-inline-block">
												<div class="p-36-36 _2"><?php echo esc_html( get_the_title( $utopian_6 ) ); ?></div>
												<div class="p-16-120 _2"><?php pll_e( 'utopian' ); ?></div>
												<?php
												echo get_the_post_thumbnail(
													$utopian_6,
													'large',
													array(
														'decoding' => 'sync',
														'class'   => 'uu-image',
														'loading' => 'eager',
													)
												);
												?>
											</a>
											<div class="rtz-checker">
												<div class="rtz-checl"></div>
											</div>
										</div>
									<?php endif; ?>
									<?php
									if ( ! empty( $photo_8 ) && ! empty( $photo_8['photo'] ) ) :
										$url         = ! empty( $photo_8['url'] ) ? $photo_8['url'] : '#';
										$description = ! empty( $photo_8['description'] ) ? $photo_8['description'] : '';
										$link_text   = ! empty( $photo_8['link_text'] ) ? $photo_8['link_text'] : pll__( 'read' );
										?>
										<div class="uto-block _29">
											<a href="<?php echo esc_url( $url ); ?>" class="u-link u-img w-inline-block">
												<?php
												echo wp_get_attachment_image(
													$photo_8['photo'],
													'large',
													false,
													array(
														'decoding' => 'sync',
														'class'   => 'u-image',
														'loading' => 'eager',
													)
												);
												?>
											</a>
											<div class="rtz-checker">
												<div class="rtz-checl"></div>
											</div>
											<div class="under-image">
												<div><?php echo esc_html( $description ); ?><br></div>
												<div class="pseudo-link"><?php echo esc_html( $link_text ); ?></div>
											</div>
										</div>
									<?php endif; ?>
									<?php
									if ( ! empty( $quote_3 ) && ! empty( $quote_3['quote'] ) ) :
										$quote     = ! empty( $quote_3['quote'] ) ? $quote_3['quote'] : '';
										$url       = ! empty( $quote_3['url'] ) ? $quote_3['url'] : '#';
										$link_text = ! empty( $quote_3['link_text'] ) ? $quote_3['link_text'] : pll__( 'read' );
										$author    = ! empty( $quote_3['author'] ) ? $quote_3['author'] : '';
										?>
										<div class="uto-block _30">
											<a href="<?php echo esc_url( $url ); ?>" class="u-link u-q w-inline-block">
												<div class="p-30-120 _2"><?php echo esc_html( $quote ); ?></div>
												<?php if ( ! empty( $author ) ) : ?>
													<div class="p-16-120 _3">— <?php echo esc_html( $author ); ?></div>
												<?php endif; ?>
												<div class="p-16-120 _2"><?php echo esc_html( $link_text ); ?></div>
												<?php // TODO: maybe remove useless image? ?>
												<img src="<?php echo esc_url( TEMPLATE_PATH . '/build/images/65ef11d8aedf8fc3de0d5740_9.png' ); ?>" loading="eager" alt class="hidden-img">
											</a>
											<div class="rtz-checker">
												<div class="rtz-checl"></div>
											</div>
										</div>
									<?php endif; ?>
									<?php if ( ! empty( $idea_4 ) && ! empty( $idea_4['phrase'] ) ) : ?>
										<div class="uto-block _31" data-hover="image">
											<a href="<?php echo esc_url( $idea_page_url ); ?>" class="u-link u-i w-inline-block">
												<div class="p-36-36 _2"><?php echo esc_html( $idea_4['phrase'] ); ?></div>
												<?php
												if ( ! empty( $idea_4['image_on_hover'] ) ) {
													//phpcs:ignore
													echo utopia_remove_dimension_image_attributes(
														wp_get_attachment_image(
															$idea_4['image_on_hover'],
															'full',
															false,
															array(
																'decoding' => 'sync',
																'class' => 'hidden-img',
																'loading' => 'eager',
															)
														)
													);
												}
												?>
											</a>
											<div class="rtz-checker">
												<div class="rtz-checl"></div>
											</div>
										</div>
									<?php endif; ?>
								</div>
							</div>
						</div>
					</div>
				</div>
				<?php
				$closest_concerts_args = array(
					'post_type'      => 'concert',
					'posts_per_page' => 4,
					'meta_key'       => 'start_date',
					'orderby'        => 'meta_value',
					'order'          => 'ASC',
					'meta_query'     => array(
						array(
							'key'     => 'start_date',
							'value'   => gmdate( 'Y-m-d H:i:s' ),
							'compare' => '>=',
							'type'    => 'DATETIME',
						),
					),
				);

				$closest_concerts = new WP_Query( $closest_concerts_args );

				if ( $closest_concerts->have_posts() ) :
					?>
					<div class="bottom-home">
						<a href="<?php echo esc_url( get_post_type_archive_link( 'concert' ) ); ?>" class="link-shos bottmer hvr w-inline-block">
							<div class="btn-xtx">discover upcoming tour</div>
							<div class="hover-liner"></div>
						</a>
						<div class="marq-mom">
							<div class="marq">
								<?php
								$line_count = max( ceil( 10 / $closest_concerts->post_count ), 3 );
								for ( $i = 0; $i < $line_count; $i++ ) :
									?>
									<div class="marq-line">
											<?php
											while ( $closest_concerts->have_posts() ) :
												$closest_concerts->the_post();
												?>
												<a href="<?php the_permalink(); ?>" class="marq-link w-inline-block">
														<?php $start_date = get_field( 'start_date' ); ?>
													<div class="p-11"><?php echo esc_html( gmdate( 'j M', $start_date ) ); ?></div>
													<div class="p-11-2"><?php the_title(); ?></div>
												</a>
												<?php
											endwhile;
											wp_reset_postdata();
											?>
									</div>
								<?php endfor; ?>
							</div>
						</div>
					</div>
				<?php endif; ?>
				<a data-w-id="7a9256bf-0e57-2e65-aece-e84ab29ba067" href="#" class="hidden-clicker-home w-inline-block"></a>
				<canvas class="canvas"></canvas>
			</div>
		</div>
		<a href="#" class="rest w-inline-block"></a>
		<div class="hello-screen">
			<div class="hello-screen__body">
				<div class="hello-screen__text"><?php pll_e( 'Utopia is gathering wait till first bar' ); ?></div>
				<div class="hello-screen__text hello-screen__text--hidden"><?php pll_e( 'Zoom and drag to navigate' ); ?></div>
				<div class="hello-screen__loader"></div>
			</div>
		</div>
		<?php get_footer(); ?>
