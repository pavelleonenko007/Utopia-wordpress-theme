<?php
/**
 *  Cookie
 *
 * @package 0.0.1
 */

defined( 'ABSPATH' ) || exit;

$accepted               = isset( $_COOKIE['cookie_accepted'] ) ? wp_unslash( $_COOKIE['cookie_accepted'] ) : null;
$privacy_policy_page_id = get_option( 'wp_page_for_privacy_policy' );
$privacy_policy_page    = get_post( $privacy_policy_page_id );

if ( null === $accepted ) : ?>

	<dialog open aria-label="Cookie Policy" class="coocky-block">
		<div class="text-block-7">By using this site, you are agreeing to our use of cookies</div>
		<form method="dialog" onsubmit="document.cookie = 'cookie_accepted=yes; max-age=604800;'">
			<button class="accbtn">Accept</button>
		</form>
		<a href="<?php echo esc_url( get_the_permalink( $privacy_policy_page ) ); ?>" class="text-block-8">Learn more</a>
	</dialog>

<?php endif; ?>
