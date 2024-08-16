<?php
/**
 * Article Card
 *
 * @package 0.0.1
 */

defined( 'ABSPATH' ) || exit;
$post_author = get_field( 'author' );
?>
<div id="w-node-_7cd3ecbb-0adc-fbe2-33ca-4b33d28cf0e4-f702ec0a" class="artic-item">
	<a href="<?php the_permalink(); ?>" class="artic-link w-inline-block">
		<div class="p-16-120 w"><?php the_title(); ?></div>
		<div class="p-16-120"><?php echo esc_html( $post_author ); ?></div>
	</a>
</div>
