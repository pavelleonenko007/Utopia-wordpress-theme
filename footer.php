<?php
/**
 * Footer
 *
 * @package 0.0.1
 */

defined( 'ABSPATH' ) || exit;

$page_template_slug = get_page_template_slug();

if ( 'index.php' !== $page_template_slug ) : ?>
				<div class="clickers">
					<a href="#" class="hidden-clicker w-inline-block"></a>
					<a href="#" class="hidden-clicker-2 w-inline-block"></a>
					<a href="#" class="hidden-clicker-out w-inline-block"></a>
				</div>
			</div>
		</div>
		<?php if ( 'concert-full.php' === $page_template_slug ) : ?>
			<div class="div-block-10"></div>
		<?php endif; ?>
<?php endif; ?>
<?php get_template_part( 'inc/components/cookie' ); ?>
		<!-- FOOTER CODE -->
		<?php utopia_footer_code(); ?>
	</body>
</html>
