<?php
/**
 * Concert Card Min
 *
 * @package 0.0.1
 */

defined( 'ABSPATH' ) || exit;
$start_date = get_field( 'start_date' );
?>
<div id="w-node-_7aaefb87-e36f-2cdd-6ef1-cc91a73d7052-f702ec0a" class="conc-card min">
	<a href="<?php the_permalink(); ?>" class="conc-link min w-inline-block">
		<div class="p-28-120<?php echo esc_html( gmdate( 'j', $start_date ) ) . ' ' . esc_html( pll__( gmdate( 'M', $start_date ) ) ); ?></div>
		<div class="p-28-120 _2"><?php the_title(); ?></div>
		<?php
		$location_name = utopia_get_concert_location( get_the_ID() );
		if ( ! empty( $location_name ) ) :
			?>
			<div class="p-16-120 _4 min"><?php echo esc_html( $location_name ); ?></div>
		<?php endif; ?>
	</a>
</div>
