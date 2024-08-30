<?php
/**
 * Concert Card
 *
 * @package 0.0.1
 */

defined( 'ABSPATH' ) || exit;
$start_date = get_field( 'start_date' );
?>
<div id="w-node-_9e7eefe4-b340-cc4e-91d8-16ae6d3c2620-b6fdfdcd" class="conc-card">
	<a href="<?php the_permalink(); ?>" class="conc-link w-inline-block">
		<div class="p-16-120 w"><?php echo esc_html( pll__( gmdate( 'l', $start_date ) ) ); ?></div>
		<div class="p-36-36 in-card"><?php echo esc_html( gmdate( 'j', $start_date ) ) . ' ' . esc_html( pll__( gmdate( 'M', $start_date ) ) ); ?></div>
		<?php
		the_post_thumbnail(
			'full',
			array(
				'class'   => 'conc-img',
				'loading' => 'lazy',
			)
		);
		?>
		<div class="p-36-36 in-card in_2"><?php the_title(); ?></div>
		<?php
		$location_name = utopia_get_concert_location( get_the_ID() );
		if ( ! empty( $location_name ) ) :
			?>
			<div class="p-16-120 _4"><?php echo esc_html( $location_name ); ?></div>
		<?php endif; ?>
		<?php
		$buy_button           = get_field( 'buy_button' );
		$buy_button_link_attr = ! empty( $buy_button['link'] ) ? 'data-href="' . esc_url( $buy_button['link'] ) . '"' : '';
		$buy_button_text      = ! empty( $buy_button['button_text'] ) ? $buy_button['button_text'] : pll__( 'buy tickets' );
		?>
		<div 
			class="link-shos ll hvr" 
			<?php
			// phpcs:ignore
			echo $buy_button_link_attr; ?>
		>
			<div class="btn-xtx"><?php echo esc_html( $buy_button_text ); ?></div>
			<div class="hover-liner"></div>
		</div>
	</a>
</div>
