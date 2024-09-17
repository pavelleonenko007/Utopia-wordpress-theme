<?php
/**
 * Concert Card Min
 *
 * @package 0.0.1
 */

defined( 'ABSPATH' ) || exit;
$start_date        = get_field( 'start_date' );
$is_single_concert = ! empty( $args['parent'] ) && $args['parent'] === 'single-concert';
?>
<div id="w-node-_7aaefb87-e36f-2cdd-6ef1-cc91a73d7052-f702ec0a" class="conc-card min">
	<?php
	$concert_link_element_classes = array( 'conc-link', 'min' );

	if ( $is_single_concert ) {
		$concert_link_element_classes[] = '_w-fix';
	}

	$concert_link_element_classes[] = 'w-inline-block';
	?>
	<a href="<?php the_permalink(); ?>" class="<?php echo esc_attr( implode( ' ', $concert_link_element_classes ) ); ?>">
		<div class="p-28-120<?php echo $is_single_concert ? ' fix20' : ''; ?>"><?php echo esc_html( gmdate( 'j', $start_date ) ) . ' ' . esc_html( pll__( gmdate( 'M', $start_date ) ) ); ?></div>
		<div class="p-28-120 _2<?php echo $is_single_concert ? ' fix20' : ''; ?>"><?php the_title(); ?></div>
		<?php
		$location_name = utopia_get_concert_location( get_the_ID() );
		if ( ! empty( $location_name ) ) :
			?>
			<div class="p-16-120 _4 min"><?php echo esc_html( $location_name ); ?></div>
		<?php endif; ?>
	</a>
</div>
