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
					<footer class="footer">
						<div class="sub-from w-form">
							<form id="email-form" name="email-form" data-name="Email Form" method="get" class="form" data-wf-page-id="65ef0726d2531bad1f44ea0e" data-wf-element-id="175357ac-dc97-ffe8-4592-427bd0633297">
								<p class="p-24-120 subs">Subscribe to be the first to know about upcoming concerts</p>
								<input class="sub-input w-input" maxlength="256" name="email" data-name="Email" placeholder="your email" type="email" id="email" required autocomplete="off">
								<button class="send-btn">
									<div class="pre-send w-embed">
										<svg width="100%" height="100%" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M2.07797 11.0802L2.07797 9.08016L14.078 9.08016L8.57797 3.58016L9.99797 2.16016L17.918 10.0802L9.99797 18.0002L8.57797 16.5802L14.078 11.0802L2.07797 11.0802Z" fill="#757575"></path>
										</svg>
									</div>
									<div class="done-send w-embed">
										<svg width="100%" height="100%" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M1.83203 10.0001L8.8306 15.8323L18.162 4.16797" stroke="#FFFAF6" stroke-width="2.33286"></path>
										</svg>
									</div>
								</button>
							</form>
							<div class="w-form-done">
								<div>Thank you! Your submission has been received!</div>
							</div>
							<div class="w-form-fail">
								<div>Oops! Something went wrong while submitting the form.</div>
							</div>
						</div>
						<div class="div-block-5">
							<a href="#" class="foo-logo w-inline-block">
								<div class="html-embed w-embed">
									<svg width="100%" height="100%" viewbox="0 0 123 20" fill="none" xmlns="http://www.w3.org/2000/svg">
										<g clip-path="url(#clip0_7097_7011)">
											<path d="M0.767578 11.09V1.18359L3.01864 1.19191V11.09C3.01864 15.6254 5.59963 17.2965 8.64838 17.2965C11.6971 17.2965 14.2781 15.6212 14.2781 11.09V6.27189H16.5292V11.09C16.5292 16.7561 12.9542 19.3169 8.64838 19.3169C4.34255 19.3169 0.767578 16.7561 0.767578 11.09Z" fill="#757575"></path>
											<path d="M33.0857 6.26307H40.3985V7.28988H33.0857V8.31668H40.3985V9.33517H33.0857V19.3247H30.8513V9.33517H23.5469V8.31668H30.8513V7.28156H23.5469V6.26307H30.8513V1.19141H33.0857V6.26723V6.26307Z" fill="#757575"></path>
											<path d="M55.9893 0.945312C61.3183 0.945312 65.0562 4.78648 65.0562 10.2614C65.0562 15.7363 61.31 19.5774 55.981 19.5774C50.6519 19.5774 46.9141 15.7363 46.9141 10.2614C46.9141 4.78648 50.6603 0.945312 55.9893 0.945312ZM49.0524 10.2614C49.0524 14.5224 51.9174 17.5238 55.981 17.5238C60.0446 17.5238 62.9179 14.5224 62.9179 10.2614C62.9179 6.00035 60.0613 2.99892 55.9893 2.99892C51.9173 2.99892 49.0524 6.00035 49.0524 10.2614Z" fill="#757575"></path>
											<path d="M87.9205 6.92821C87.9205 9.97537 86.0788 12.7107 81.6685 12.7107H75.6211V19.3247H73.416V1.19141H81.6435C85.3897 1.19141 87.9247 3.29074 87.9247 6.92821H87.9205ZM81.6059 10.7527C84.5251 10.7527 85.753 9.10653 85.753 6.92821C85.753 4.47552 84.2662 3.14525 81.5725 3.14525H75.6211V10.7527H81.61H81.6059Z" fill="#757575"></path>
											<path d="M95.3066 1.19141H96.3841V19.3247H95.3066V1.19141ZM98.5893 1.19141V19.3247H97.5118V1.19141H98.5893Z" fill="#757575"></path>
											<path d="M122.769 9.28812V19.3317H120.493V9.28812C120.493 4.69036 117.878 3.00258 114.784 3.00258C111.689 3.00258 109.083 4.69452 109.083 9.28812V10.6516H114.784V12.6346H106.803V9.28812C106.803 3.53884 110.424 0.953125 114.78 0.953125C119.136 0.953125 122.769 3.53884 122.769 9.28396V9.28812Z" fill="#757575"></path>
										</g>
										<defs>
											<clippath id="clip0_7097_7011">
												<rect width="122" height="18.6321" fill="white" transform="translate(0.767578 0.945312)"></rect>
											</clippath>
										</defs>
									</svg>
								</div>
							</a>
							<div class="vert foo-vert">
								<div class="p-16-120 m11">Become a part of our world by donating to us</div>
								<a href="#" class="link-shos ll foo-link hvr w-inline-block">
									<div class="btn-xtx">support the utopia</div>
									<div class="hover-liner"></div>
								</a>
							</div>
							<div class="vert foo-vert">
								<a href="#" class="foo-text-link w-inline-block">
									<div>orchestra@utopia.com</div>
								</a>
								<a href="#" class="foo-text-link w-inline-block">
									<div>pr@utopia.com</div>
								</a>
							</div>
							<div class="vert foo-vert forzi">
								<a href="#" class="foo-text-link _2 w-inline-block">
									<div>Instagram</div>
								</a>
								<a href="#" class="foo-text-link w-inline-block">
									<div>Facebook</div>
								</a>
							</div>
						</div>
					</footer>
				</div>
				<div class="bg-keeper"></div>
				<?php get_footer(); ?>
