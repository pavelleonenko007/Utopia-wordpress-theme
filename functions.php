<?php
/**
 * Functions
 *
 * @package 0.0.1
 */

defined( 'ABSPATH' ) || exit;

define( 'DATA_WF_SITE', '65e57c8082e6072b394e6a13' );
define( 'TEMPLATE_PATH', get_template_directory_uri() );

add_action( 'after_setup_theme', 'utopia_setup_theme' );
function utopia_setup_theme(): void {
	add_theme_support( 'menus' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'title-tag' );
	add_theme_support( 'editor-styles' );
}

require_once ABSPATH . 'wp-admin/includes/plugin.php';

define( 'MY_ACF_PATH', get_stylesheet_directory() . '/vendor/acf/' );
define( 'MY_ACF_URL', TEMPLATE_PATH . '/vendor/acf/' );
require_once MY_ACF_PATH . 'acf.php';
add_filter( 'acf/settings/url', 'utopia_acf_settings_url' );
function utopia_acf_settings_url( $url ) {
	return MY_ACF_URL;
}

if ( ! function_exists( 'ctl_sanitize_title' ) ) {
	function ctl_sanitize_title( $title ) {
		global $wpdb;

		$iso9_table = array(
			'А' => 'A',
			'Б' => 'B',
			'В' => 'V',
			'Г' => 'G',
			'Ѓ' => 'G',
			'Ґ' => 'G',
			'Д' => 'D',
			'Е' => 'E',
			'Ё' => 'YO',
			'Є' => 'YE',
			'Ж' => 'ZH',
			'З' => 'Z',
			'Ѕ' => 'Z',
			'И' => 'I',
			'Й' => 'J',
			'Ј' => 'J',
			'І' => 'I',
			'Ї' => 'YI',
			'К' => 'K',
			'Ќ' => 'K',
			'Л' => 'L',
			'Љ' => 'L',
			'М' => 'M',
			'Н' => 'N',
			'Њ' => 'N',
			'О' => 'O',
			'П' => 'P',
			'Р' => 'R',
			'С' => 'S',
			'Т' => 'T',
			'У' => 'U',
			'Ў' => 'U',
			'Ф' => 'F',
			'Х' => 'H',
			'Ц' => 'c',
			'Ч' => 'CH',
			'Џ' => 'DH',
			'Ш' => 'SH',
			'Щ' => 'SCH',
			'Ъ' => '',
			'Ы' => 'Y',
			'Ь' => '',
			'Э' => 'E',
			'Ю' => 'YU',
			'Я' => 'YA',
			'а' => 'a',
			'б' => 'b',
			'в' => 'v',
			'г' => 'g',
			'ѓ' => 'g',
			'ґ' => 'g',
			'д' => 'd',
			'е' => 'e',
			'ё' => 'yo',
			'є' => 'ye',
			'ж' => 'zh',
			'з' => 'z',
			'ѕ' => 'z',
			'и' => 'i',
			'й' => 'j',
			'ј' => 'j',
			'і' => 'i',
			'ї' => 'yi',
			'к' => 'k',
			'ќ' => 'k',
			'л' => 'l',
			'љ' => 'l',
			'м' => 'm',
			'н' => 'n',
			'њ' => 'n',
			'о' => 'o',
			'п' => 'p',
			'р' => 'r',
			'с' => 's',
			'т' => 't',
			'у' => 'u',
			'ў' => 'u',
			'ф' => 'f',
			'х' => 'h',
			'ц' => 'c',
			'ч' => 'ch',
			'џ' => 'dh',
			'ш' => 'sh',
			'щ' => 'sch',
			'ъ' => '',
			'ы' => 'y',
			'ь' => '',
			'э' => 'e',
			'ю' => 'yu',
			'я' => 'ya',
		);
		$geo2lat    = array(
			'ა' => 'a',
			'ბ' => 'b',
			'გ' => 'g',
			'დ' => 'd',
			'ე' => 'e',
			'ვ' => 'v',
			'ზ' => 'z',
			'თ' => 'th',
			'ი' => 'i',
			'კ' => 'k',
			'ლ' => 'l',
			'მ' => 'm',
			'ნ' => 'n',
			'ო' => 'o',
			'პ' => 'p',
			'ჟ' => 'zh',
			'რ' => 'r',
			'ს' => 's',
			'ტ' => 't',
			'უ' => 'u',
			'ფ' => 'ph',
			'ქ' => 'q',
			'ღ' => 'gh',
			'ყ' => 'qh',
			'შ' => 'sh',
			'ჩ' => 'ch',
			'ც' => 'ts',
			'ძ' => 'dz',
			'წ' => 'ts',
			'ჭ' => 'tch',
			'ხ' => 'kh',
			'ჯ' => 'j',
			'ჰ' => 'h',
		);
		$iso9_table = array_merge( $iso9_table, $geo2lat );

		$locale = get_locale();
		switch ( $locale ) {
			case 'bg_BG':
				$iso9_table['Щ'] = 'SCH';
				$iso9_table['щ'] = 'sch';
				$iso9_table['Ъ'] = 'A';
				$iso9_table['ъ'] = 'a';
				break;
			case 'uk':
			case 'uk_ua':
			case 'uk_UA':
				$iso9_table['И'] = 'Y';
				$iso9_table['и'] = 'y';
				break;
		}

		$is_term   = false;
		$backtrace = debug_backtrace();
		foreach ( $backtrace as $backtrace_entry ) {
			if ( $backtrace_entry['function'] == 'wp_insert_term' ) {
				$is_term = true;
				break;
			}
		}

		$term = $is_term ? $wpdb->get_var( "SELECT slug FROM {$wpdb->terms} WHERE name = '$title'" ) : '';
		if ( empty( $term ) ) {
			$title = strtr( $title, apply_filters( 'ctl_table', $iso9_table ) );
			if ( function_exists( 'iconv' ) ) {
				$title = iconv( 'UTF-8', 'UTF-8//TRANSLIT//IGNORE', $title );
			}
			$title = preg_replace( "/[^A-Za-z0-9'_\-\.]/", '-', $title );
			$title = preg_replace( '/\-+/', '-', $title );
			$title = preg_replace( '/^-+/', '', $title );
			$title = preg_replace( '/-+$/', '', $title );
		} else {
			$title = $term;
		}

		return $title;
	}
	add_filter( 'sanitize_title', 'ctl_sanitize_title', 9 );
	add_filter( 'sanitize_file_name', 'ctl_sanitize_title' );

	function ctl_convert_existing_slugs() {
		global $wpdb;

		$posts = $wpdb->get_results( "SELECT ID, post_name FROM {$wpdb->posts} WHERE post_name REGEXP('[^A-Za-z0-9\-]+') AND post_status IN ('publish', 'future', 'private')" );
		foreach ( (array) $posts as $post ) {
			$sanitized_name = ctl_sanitize_title( urldecode( $post->post_name ) );
			if ( $post->post_name != $sanitized_name ) {
				add_post_meta( $post->ID, '_wp_old_slug', $post->post_name );
				$wpdb->update( $wpdb->posts, array( 'post_name' => $sanitized_name ), array( 'ID' => $post->ID ) );
			}
		}

		$terms = $wpdb->get_results( "SELECT term_id, slug FROM {$wpdb->terms} WHERE slug REGEXP('[^A-Za-z0-9\-]+') " );
		foreach ( (array) $terms as $term ) {
			$sanitized_slug = ctl_sanitize_title( urldecode( $term->slug ) );
			if ( $term->slug != $sanitized_slug ) {
				$wpdb->update( $wpdb->terms, array( 'slug' => $sanitized_slug ), array( 'term_id' => $term->term_id ) );
			}
		}
	}

	function ctl_schedule_conversion() {
		add_action( 'shutdown', 'ctl_convert_existing_slugs' );
	}
	register_activation_hook( __FILE__, 'ctl_schedule_conversion' );
}

if ( file_exists( __DIR__ . '/inc/configurator.php' ) ) {
	include_once __DIR__ . '/inc/configurator.php';
}

if (
	file_exists( __DIR__ . '/vendor/acf-code-field' )
	&& ! is_plugin_active( 'acf-code-field/acf-code-field.php' )
	&& ! is_plugin_active( 'nice_configurator/wtw_adv.php' )
) {
	include_once 'vendor/acf-code-field/acf-code-field.php';
}

add_filter( 'widget_text', 'do_shortcode' );

add_action( 'admin_enqueue_scripts', 'utopia_add_admin_scripts' );
function utopia_add_admin_scripts() {
	wp_register_script( 'admin_script', TEMPLATE_PATH . '/js/admin.js', array( 'jquery' ), false, true );
	wp_enqueue_script( 'admin_script' );
}

add_action( 'wp_enqueue_scripts', 'utopia_add_site_scripts' );
/**
 * Enqueue scripts and styles for the frontend.
 *
 * @since 1.0.0
 */
function utopia_add_site_scripts() {
	// Enqueue The Vogne stylesheet.
	wp_enqueue_style(
		'thevogne',
		'//thevogne.ru/clients/esh/utopia/style.css',
		array(),
		time()
	);

	// Enqueue build stylesheet.
	wp_enqueue_style(
		'style',
		TEMPLATE_PATH . '/build/css/style.css',
		array( 'thevogne' ),
		time()
	);

	// Deregister and register jQuery as core script.
	wp_deregister_script( 'jquery-core' );
	wp_register_script(
		'jquery-core',
		'//ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js',
		false,
		time(),
		true
	);

	// Enqueue jQuery.
	wp_enqueue_script( 'jquery' );

	// Conditionally enqueue jQuery UI core and slider.
	if ( ! is_admin() ) {
		wp_enqueue_script( 'jquery-ui-core', array( 'jquery' ) );
		wp_enqueue_script(
			'jquery-ui-slider',
			array( 'jquery', 'jquery-ui-core' ),
			null,
			null,
			true
		);
	}

	// Enqueue build script.
	wp_enqueue_script(
		'bundle',
		TEMPLATE_PATH . '/build/js/bundle.js',
		array( 'jquery' ),
		time(),
		true
	);
}

add_filter( 'wp_default_scripts', 'remove_jquery_migrate' );
/**
 * Remove jQuery Migrate script from frontend.
 *
 * @since 1.0.0
 *
 * @param object $scripts WP_Scripts instance (passed by reference).
 */
function remove_jquery_migrate( &$scripts ) {
	// Remove jQuery Migrate script from frontend.
	if ( ! is_admin() ) {
		$scripts->remove( 'jquery' );
		// Add jQuery (no migrate) as core script.
		$scripts->add(
			'jquery',
			false, // URL.
			array( 'jquery-core' ), // Dependencies.
			'1.12.4', // Version.
			true // In footer.
		);
	}
}

if ( ! function_exists( 'slugify' ) ) {
	function slugify( $text ) {
		$translation = array(
			'а'  => 'a',
			'б'  => 'b',
			'в'  => 'v',
			'г'  => 'g',
			'д'  => 'd',
			'ж'  => 'zh',
			'з'  => 'z',
			'и'  => 'i',
			'й'  => 'j',
			'к'  => 'k',
			'л'  => 'l',
			'м'  => 'm',
			'н'  => 'n',
			'о'  => 'o',
			'п'  => 'p',
			'р'  => 'r',
			'с'  => 's',
			'т'  => 't',
			'у'  => 'u',
			'ф'  => 'f',
			'х'  => 'h',
			'ц'  => 'c',
			'ч'  => 'ch',
			'ш'  => 'sh',
			'щ'  => 'sch',
			'ы'  => 'y',
			'э'  => 'e',
			'ю'  => 'yu',
			'я'  => 'ya',
			'і'  => 'i',
			'ї'  => 'yi',
			'є'  => 'ye',
			'ґ'  => 'g',
			'е'  => 'e',
			'ё'  => 'e',
			'\'' => '',
			'"'  => '',
			'`'  => '',
			'ь'  => '',
			'ъ'  => '',
		);
		$text        = trim( $text );
		$text        = mb_convert_case( $text, MB_CASE_LOWER, 'UTF-8' );
		$text        = strtr( $text, $translation );
		$text        = preg_replace( '~(\W+)~', '_', $text );
		$text        = trim( $text, '_' );
		$text        = strtolower( $text );
		return $text;
	}
}

/**
 * Retrieves the current URL.
 *
 * This function retrieves the current URL based on the server protocol, host, and request URI.
 *
 * @param bool $include_params Whether to include query parameters in the URL. Default is false.
 * @return string The current URL.
 */
function utopia_get_current_url( $include_params = false ) {
	$protocol = ( isset( $_SERVER['HTTPS'] ) && 'on' === $_SERVER['HTTPS'] ) ? 'https://' : 'http://';
		$host = $_SERVER['HTTP_HOST'];
		$uri  = $_SERVER['REQUEST_URI'];
	if ( $include_params ) {
			return $protocol . $host . $uri;
	} else {
		$url_without_params = explode( '?', $uri )[0];
		return $protocol . $host . $url_without_params;
	}
}

function utopia_is_current_url( string $test_url, $include_params = false ) {
	return utopia_get_current_url( $include_params ) === $test_url;
}

add_filter( 'post_thumbnail_html', 'utopia_remove_dimension_image_attributes', 10 );
add_filter( 'image_send_to_editor', 'utopia_remove_dimension_image_attributes', 10 );
/**
 * Removes width and height attributes from images.
 *
 * These attributes are added by WordPress and are not necessary for the
 * responsive images generated by the theme. By removing them, we prevent
 * unnecessary requests for image dimensions and potentially reduce page
 * load times.
 *
 * @param string $image The image HTML markup.
 *
 * @return string The filtered image HTML markup without width and height
 *                attributes.
 */
function utopia_remove_dimension_image_attributes( string $image ): string {
	$image = preg_replace(
		'/(width|height)="\d*"\s/',
		'',
		$image
	);

	return $image;
}

function wp_admin_bar_options() {
	global $wp_admin_bar;
	$wp_admin_bar->add_menu(
		array(
			'id'    => 'wp-admin-bar-options',
			'title' => __( 'Site options', 'wtw-translate' ),
			'href'  => get_site_url() . '/wp-admin/themes.php?page=options',
		)
	);
}
add_action( 'wp_before_admin_bar_render', 'wp_admin_bar_options' );

if ( function_exists( 'acf_add_options_page' ) && current_user_can( 'manage_options' ) ) {
	acf_add_options_page(
		array(
			'page_title'      => __( 'Options', 'wtw-translate' ),
			'menu_title'      => __( 'Options', 'wtw-translate' ),
			'menu_slug'       => 'options',
			'parent_slug'     => 'themes.php',
			'update_button'   => __( 'Update' ),
			'updated_message' => __( 'Item updated.' ),
			'autoload'        => true,
		)
	);
}

if ( function_exists( 'acf_add_options_page' ) && current_user_can( 'manage_options' ) ) {
	acf_add_options_page(
		array(
			'page_title'      => __( 'Site configurator', 'wtw-translate' ),
			'menu_title'      => __( 'Configurator', 'wtw-translate' ),
			'menu_slug'       => 'config',
			'icon_url'        => 'dashicons-screenoptions',
			'parent_slug'     => 'tools.php',
			'update_button'   => __( 'Update' ),
			'updated_message' => __( 'Item updated.' ),
			'autoload'        => true,
		)
	);
}

add_filter(
	'get_the_archive_title',
	'utopia_filter_archive_title'
);
/**
 * Remove prefix from archive titles.
 *
 * @since 1.0.0
 *
 * @param string $title Archive title.
 * @return string       Filtered title.
 */
function utopia_filter_archive_title( string $title ): string {
	/**
	 * Remove prefix from archive titles.
	 *
	 * The regex removes everything up to and including the first colon and
	 * the following space.
	 */
	return preg_replace( '/^[^:]+: /', '', $title );
}

/**
 * Add header code from ACF field to <head>.
 *
 * @since 1.0.0
 */
function utopia_header_code(): void {
	/**
	 * Enqueue scripts and styles.
	 */
	wp_head();

	/**
	 * Get header code from ACF field.
	 */
	the_field( 'header_code', 'option' );
}

/**
 * Output code from ACF field after the opening <body> tag.
 *
 * This function is hooked to the `wp_body_open` action.
 *
 * @since 1.0.0
 */
function utopia_after_body(): void {
	wp_body_open();

	/**
	 * Get body code from ACF field.
	 */
	the_field( 'body_code', 'option' );
}

/**
 * Output code from ACF field before the closing </body> tag.
 *
 * This function is hooked to the `wp_footer` action.
 *
 * @since 1.0.0
 */
function utopia_footer_code(): void {
	/*
	 * Enqueue scripts and styles.
	 */
	wp_footer();

	/*
	 * Get footer code from ACF field.
	 */
	the_field( 'footer_code', 'option' );
}

add_action( 'init', 'utopia_register_post_types' );

function utopia_register_post_types(): void {
	register_post_type(
		'utopian',
		array(
			'label'         => null,
			'labels'        => array(
				'name'               => 'Utopians',
				'singular_name'      => 'Utopian',
				'add_new'            => 'Add new',
				'add_new_item'       => 'Add new Utopian',
				'edit_item'          => 'Edit Utopian',
				'new_item'           => 'New Utopian',
				'view_item'          => 'View Utopian',
				'search_items'       => 'Search Utopians',
				'not_found'          => 'No Utopians found',
				'not_found_in_trash' => 'No Utopians found in Trash',
				'parent_item_colon'  => '',
				'menu_name'          => 'Utopians',
			),
			'description'   => '',
			'public'        => true,
			// 'publicly_queryable'  => null,
			// 'exclude_from_search' => null,
			// 'show_ui'             => null,
			// 'show_in_nav_menus'   => null,
			'show_in_menu'  => null,
			// 'show_in_admin_bar'   => null,
			'show_in_rest'  => true,
			'rest_base'     => null,
			'menu_position' => null,
			'menu_icon'     => 'dashicons-admin-users',
			// 'capability_type'   => 'post',
			// 'capabilities'      => 'post',
			// 'map_meta_cap'      => null,
			'hierarchical'  => false,
			'supports'      => array( 'title', 'editor', 'thumbnail' ), // 'title','editor','author','thumbnail','excerpt','trackbacks','custom-fields','comments','revisions','page-attributes','post-formats'
			'taxonomies'    => array(),
			'has_archive'   => false,
			'rewrite'       => array(
				'slug' => 'utopians',
			),
			'query_var'     => true,
		)
	);

	flush_rewrite_rules( false );
}
