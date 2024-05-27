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
	// Enqueue build stylesheet.
	wp_enqueue_style(
		'style',
		TEMPLATE_PATH . '/build/css/style.css',
		array(),
		time()
	);

	// Enqueue The Vogne stylesheet.
	wp_enqueue_style(
		'thevogne',
		'//thevogne.ru/clients/esh/utopia/style.css',
		array( 'style' ),
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

	wp_localize_script(
		'bundle',
		'UTOPIA',
		array(
			'AJAX_URL' => admin_url( 'admin-ajax.php' ),
		)
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
			'has_archive'   => true,
			'rewrite'       => array(
				'slug' => 'utopians',
			),
			'query_var'     => true,
		)
	);

	register_post_type(
		'concert',
		array(
			'label'         => null,
			'labels'        => array(
				'name'               => 'Concerts',
				'singular_name'      => 'Concert',
				'add_new'            => 'Add new',
				'add_new_item'       => 'Add new Concert',
				'edit_item'          => 'Edit Concert',
				'new_item'           => 'New Concert',
				'view_item'          => 'View Concert',
				'search_items'       => 'Search Concerts',
				'not_found'          => 'No Concerts found',
				'not_found_in_trash' => 'No Concerts found in Trash',
				'parent_item_colon'  => '',
				'menu_name'          => 'Concerts',
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
			'menu_icon'     => 'dashicons-tickets',
			// 'capability_type'   => 'post',
			// 'capabilities'      => 'post',
			// 'map_meta_cap'      => null,
			'hierarchical'  => false,
			'supports'      => array( 'title', 'editor', 'thumbnail' ), // 'title','editor','author','thumbnail','excerpt','trackbacks','custom-fields','comments','revisions','page-attributes','post-formats'
			'taxonomies'    => array(),
			'has_archive'   => true,
			'rewrite'       => array(
				'slug' => 'concerts',
			),
			'query_var'     => true,
		)
	);

	flush_rewrite_rules( false );
}

add_filter( 'the_content', 'utopia_wrap_images_on_utopian_posts' );
/**
 * Wrap images in <figure> tags on Utopian posts
 *
 * This function is a filter that is added to the 'the_content' filter.
 * It will wrap any images in a post with a class of 'w-richtext-align-center w-richtext-figure-type-image'
 * wrapped in a <figure> tag. This is to enable the correct styling of images in the Rich Text
 * editor.
 *
 * @param string $content The post content.
 * @return string The updated post content.
 */
function utopia_wrap_images_on_utopian_posts( $content ) {
	if ( is_singular( 'utopian' ) ) {
		$counter = 0;
		$content = preg_replace_callback(
			'/<img[^>]+>/i',
			function ( $matches ) use ( &$counter ) {
				$figure_attr = 'data-image-index="' . $counter . '" data-gallery="content"';
				$counter++;
				return '<figure class="w-richtext-align-center w-richtext-figure-type-image" ' . $figure_attr . '>'
				. '<div>'
				. $matches[0] // The image tag that was matched.
				. '</div>'
				. '</figure>';
			},
			$content
		);
	}
	return $content;
}

add_filter( 'the_content', 'utopia_wrap_images_on_articles', 100, 1 );
function utopia_wrap_images_on_articles( $content ) {
	if ( is_singular( 'post' ) ) {
		$counter = 0;
		$content = preg_replace_callback(
			'/<div[^>]*\bclass="(.*?\bwp-caption\b.*?)">(<img.+src="(.+)".*>)(<p.+>(.*)<\/p>)?<\/div>/mU',
			function ( $matches ) use ( &$counter ) {
				$figure_classes = 'w-richtext-align-center w-richtext-figure-type-image';

				if ( strpos( $matches[1], 'aligncenter' ) !== false ) {
					$figure_classes = 'w-richtext-align-fullwidth w-richtext-figure-type-image';
				}

				$gallery_attr = 'data-image-index="' . $counter . '" data-gallery="content"';
				$counter++;

				return '<figure class="' . $figure_classes . '" ' . $gallery_attr . '>'
					. '<div>'
						. $matches[2]
					. '</div>'
					. '<figcaption>'
						. $matches[5]
					. '</figcaption>'
				. '</figure>';
			},
			$content
		);
	}

	return $content;
}

add_action( 'pre_get_posts', 'utopia_sort_concerts_by_date' );
function utopia_sort_concerts_by_date( $query ) {
	if ( ! is_admin() && $query->is_main_query() && $query->is_post_type_archive( 'concert' ) ) {
		$query->set( 'orderby', 'meta_value' );
		$query->set( 'meta_key', 'start_date' );
		$query->set( 'meta_type', 'DATETIME' );
		$query->set( 'order', 'ASC' );
		$query->set( 'posts_per_page', -1 );
		$query->set(
			'meta_query',
			array(
				array(
					'key'     => 'start_date',
					'value'   => gmdate( 'Y-m-d H:i:s' ),
					'type'    => 'DATETIME',
					'compare' => '>=',
				),
			)
		);
	}
}

/**
 * Formats a phone number into a tel: link.
 *
 * @param string $phone_number The phone number to format.
 * @return string The formatted tel: link.
 */
function utopia_format_phone_link( string $phone_number ): string {
	if ( empty( $phone_number ) ) {
		return '';
	}

	$formatted_phone_number = preg_replace( '/[^0-9+]/', '', $phone_number );

	return 'tel:' . $formatted_phone_number;
}

/**
 * Formats an email address into a mailto: link.
 *
 * @param string $email The email address to format.
 * @param string $subject (optional) The subject line for the email.
 * @return string The formatted mailto: link.
 */
function utopia_format_email_link( string $email, string $subject = '' ): string {
	$email_link = "mailto:{$email}";

	if ( ! empty( $subject ) ) {
		$email_link .= "?subject={$subject}";
	}

	return $email_link;
}

add_action( 'wp_ajax_search', 'utopia_search_site_content_via_ajax' );
add_action( 'wp_ajax_nopriv_search', 'utopia_search_site_content_via_ajax' );
function utopia_search_site_content_via_ajax() {
	if ( ! isset( $_POST['search_nonce'] ) || ! wp_verify_nonce( $_POST['search_nonce'], 'search_action' ) || ! isset( $_POST['s'] ) ) {
		wp_send_json_error( array( 'message' => 'Bad request' ), 400 );
	}

	$query_args = array(
		'post_type'  => array( 'post', 'utopian', 'concert' ),
		's'          => sanitize_text_field( wp_unslash( $_POST['s'] ) ),
		'meta_query' => array(
			'relation' => 'OR',
			array(
				'key'     => 'start_date',
				'compare' => 'NOT EXISTS',
			),
			array(
				'key'     => 'start_date',
				'value'   => gmdate( 'Y-m-d H:i:s' ),
				'type'    => 'DATETIME',
				'compare' => '>=',
			),
		),
	);

	$query = new WP_Query( $query_args );

	ob_start();

	if ( $query->have_posts() ) {
		while ( $query->have_posts() ) {
			$query->the_post();

			global $post;

			switch ( $post->post_type ) {
				case 'concert':
					get_template_part( 'inc/components/concert-card-min' );
					break;
				case 'utopian':
					get_template_part( 'inc/components/utopian-search-card' );
					break;
				default:
					get_template_part( 'inc/components/article-card' );
					break;
			}
		}
	} else {
		echo '<p style="color: #fff; font-size: 24rem; line-height: 120%;">No results found.</p>';
	}

	wp_reset_postdata();

	$html = ob_get_clean();

	wp_send_json_success(
		array(
			'html'    => $html,
			'message' => 'Posts successfully loaded',
		)
	);
}

add_action( 'after_setup_theme', 'utopia_create_subscribers_table' );
/**
 * Creates the subscribers table.
 *
 * @since 0.0.1
 */
function utopia_create_subscribers_table(): void {
	global $wpdb;

	$table_name      = $wpdb->prefix . 'utopia_subscribers';
	$charset_collate = $wpdb->get_charset_collate();

	// Create the subscribers table.
	$sql = "CREATE TABLE $table_name (
			id mediumint(9) NOT NULL AUTO_INCREMENT,
			email varchar(100) NOT NULL,
			token varchar(100) NOT NULL,
			confirmed tinyint(1) DEFAULT 0 NOT NULL,
			PRIMARY KEY  (id)
	) $charset_collate;";

	require_once ABSPATH . 'wp-admin/includes/upgrade.php';
	/**
	 * Execute the SQL statement to create the table.
	 *
	 * @since 0.0.1
	 *
	 * @param string $sql The SQL statement to execute.
	 */
	dbDelta( $sql );
}

add_action( 'wp_ajax_subscribe', 'utopia_subscribe_user_via_ajax' );
add_action( 'wp_ajax_nopriv_subscribe', 'utopia_subscribe_user_via_ajax' );
function utopia_subscribe_user_via_ajax() {
	if ( ! isset( $_POST['subscribe_nonce'] ) || ! wp_verify_nonce( $_POST['subscribe_nonce'], 'ajax_subscribe' ) || ! isset( $_POST['email'] ) ) {
		wp_send_json_error( array( 'message' => 'Bad request' ), 400 );
	}

	if ( empty( $_POST['email'] ) || ! is_email( $_POST['email'] ) ) {
		wp_send_json_error( array( 'message' => 'Invalid email address' ), 400 );
	}

	global $wpdb;

	$table_name = $wpdb->prefix . 'utopia_subscribers';
	$email      = sanitize_email( wp_unslash( $_POST['email'] ) );
	$token      = wp_generate_uuid4();

	$subscriber = $wpdb->get_row( $wpdb->prepare( "SELECT * FROM $table_name WHERE email = %s", $email ) );

	if ( $subscriber ) {
			wp_send_json_success( array( 'message' => 'Already subscribed' ), 200 );
	}

	$wpdb->insert(
		$table_name,
		array(
			'email' => $email,
			'token' => $token,
		),
		array( '%s', '%s' )
	);

	$confirm_link = add_query_arg(
		array( 'utopia_subscribe_confirm' => $token ),
		home_url()
	);

	$subject = 'Utopia Subscription confirmation';
	$message = 'Please confirm your subscription by clicking on the link: ' . $confirm_link;
	$headers = array( 'Content-Type: text/html; charset=UTF-8' );

	wp_mail( $email, $subject, $message, $headers );

	wp_send_json_success( array( 'message' => 'Subscription successful' ), 200 );
}

add_action( 'init', 'utopia_manage_subscriptions' );
function utopia_manage_subscriptions() {

	if ( isset( $_GET['utopia_subscribe_confirm'] ) ) {
		$token = sanitize_text_field( $_GET['utopia_subscribe_confirm'] );
		global $wpdb;
		$table_name = $wpdb->prefix . 'utopia_subscribers';

		$subscriber = $wpdb->get_row( $wpdb->prepare( "SELECT * FROM $table_name WHERE token = %s", $token ) );
		if ( $subscriber ) {
				$wpdb->update(
					$table_name,
					array( 'confirmed' => 1 ),
					array( 'token' => $token ),
					array( '%d' ),
					array( '%s' )
				);

				echo '<p>Subscription confirmed!</p>';
				exit;
		} else {
				echo '<p>There is no such subscription.</p>';
				exit;
		}
	}

	if ( isset( $_GET['utopia_unsubscribe'] ) ) {
		$token = sanitize_text_field( $_GET['utopia_unsubscribe'] );
		global $wpdb;
		$table_name = $wpdb->prefix . 'utopia_subscribers';

		$subscriber = $wpdb->get_row( $wpdb->prepare( "SELECT * FROM $table_name WHERE token = %s", $token ) );
		if ( $subscriber ) {
				$wpdb->delete(
					$table_name,
					array( 'token' => $token ),
					array( '%s' )
				);

				echo "<p>You've unsubscribed from the newsletter.</p>";
				exit;
		}
	}
}

add_action( 'publish_concert', 'utopia_notify_subscribers', 10, 2 );
/**
 * Notify subscribers about new concerts
 *
 * @since 0.0.1
 *
 * @param int     $post_id Post ID of the new concert
 * @param WP_Post $post Post object of the new concert
 */
function utopia_notify_subscribers( $post_id, $post ) {
	global $wpdb;

	$table_name  = $wpdb->prefix . 'utopia_subscribers';
	$subscribers = $wpdb->get_results( "SELECT email, token FROM $table_name WHERE confirmed = 1" );

	$subject = 'New Utopia concert';
	$message = 'Find out more about the new utopia concert: ' . get_permalink( $post_id );
	$headers = array( 'Content-Type: text/html; charset=UTF-8' );

	foreach ( $subscribers as $subscriber ) {
		$unsubscribe_link = add_query_arg(
			array( 'utopia_unsubscribe' => $subscriber->token ),
			home_url()
		);

		$message_with_unsubscribe = $message . '<br><br><a href="' . $unsubscribe_link . '">Unsubscribe</a>';

		wp_mail( $subscriber->email, $subject, $message_with_unsubscribe, $headers );
	}
}
