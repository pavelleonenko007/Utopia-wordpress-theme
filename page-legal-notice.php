<?php
	/**
	 * Template Name: Legal Notice Template
	 *
	 * @package 0.0.1
	 */

	defined( 'ABSPATH' ) || exit;

	global $post;

	$extra_classes = array();

	$extra_classes[] = 'post-' . $post->post_name;

	get_header(
		null,
		array(
			'data-wf-page'                  => '665723f572caecd02591aa75',
			'barba-container-extra-classes' => 'inner-page ' . implode( ' ', $extra_classes ),
			'barba-namespace'               => 'simple-page',
		)
	);

	the_post();
	?>
<div class="usual-page">
	<h1 class="heading"><?php the_title(); ?></h1>
	<div class="legal-wrapper">
		<?php
			$company = get_field( 'company' );
		if ( ! empty( $company ) ) :
			?>
		<div class="legal-wrapper__item">
			<p><?php echo $company; ?></p>
		</div>
		<?php endif; ?>
		<?php
			$representative = get_field( 'representative' );
		if ( ! empty( $representative ) ) :
			?>
		<div class="legal-wrapper__item">
			<strong><?php pll_e( 'Represented by' ); ?></strong>
			<p><?php echo $representative; ?></p>
		</div>
		<?php endif; ?>
		<?php
			$registration_number = get_field( 'registration_number' );
		if ( ! empty( $registration_number ) ) :
			?>
		<div class="legal-wrapper__item">
			<strong><?php pll_e( 'Registration number' ); ?></strong>
			<p><?php echo $registration_number; ?></p>
		</div>
		<?php endif; ?>
		<?php
			$vat_number = get_field( 'vat_number' );
		if ( ! empty( $vat_number ) ) :
			?>
		<div class="legal-wrapper__item">
			<strong><?php pll_e( 'VAT number' ); ?></strong>
			<p><?php echo $vat_number; ?></p>
		</div>
		<?php endif; ?>
		<?php
			$email = get_field( 'email' );
			$phone = get_field( 'phone' );
		if ( ! empty( $email ) || ! empty( $phone ) ) :
			?>
		<div class="legal-wrapper__item">
			<?php if ( ! empty( $phone ) ) : ?>
			<p><strong>Tel </strong><a href="<?php echo esc_url( utopia_format_phone_link( $phone ) ); ?>"><?php echo esc_html( $phone ); ?></a></p>
			<?php endif; ?>
			<?php if ( ! empty( $email ) ) : ?>
			<p><strong>Email </strong><a href="<?php echo esc_url( utopia_format_email_link( $email ) ); ?>"><?php echo esc_html( $email ); ?></a></p>
			<?php endif; ?>
		</div>
	<?php endif; ?>
	<?php
	$disclaimer = get_field( 'disclaimer' );
	if ( ! empty( $disclaimer ) ) :
		?>
	<div class="legal-disclaimer">
		<h2 class="legal-disclaimer__title"><?php pll_e( 'Haftungsausschluss (Disclaimer) ' ); ?></h2>
		<div class="legal-disclaimer__content">
		<?php foreach ( $disclaimer as $item ) : ?>
			<div class="legal-disclaimer__content-item">
				<h3 class="legal-disclaimer__content-title"><?php echo esc_html( $item['title'] ); ?></h3>
				<?php
				$content = $item['content'];
				$dom     = new DOMDocument();
				$dom->loadHTML( mb_convert_encoding( $content, 'HTML-ENTITIES', 'UTF-8' ) );
				$ps = $dom->getElementsByTagName( 'p' );
				foreach ( $ps as $p ) {
					$class = $p->getAttribute( 'class' );
					$p->setAttribute( 'class', $class ? $class . ' legal-disclaimer__content-text' : 'legal-disclaimer__content-text' );
				}
				echo wp_kses_post( $dom->saveHTML() );
				?>
			</div>
		<?php endforeach; ?>
		</div>
	</div>
	<?php endif; ?>
	</div>
  
	<?php
		get_template_part(
			'inc/components/footer',
		);
		?>
</div>
<?php get_footer(); ?>
