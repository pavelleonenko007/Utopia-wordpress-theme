<?php
/**
 * Functions
 *
 * @package 0.0.1
 */

defined( 'ABSPATH' ) || exit;

define( 'DATA_WF_SITE', '65e57c8082e6072b394e6a13' );
define( 'TEMPLATE_PATH', get_template_directory_uri() );
define( 'BEEHIIV_PUBLICATION_ID', 'pub_e3350db7-aee2-4087-80f8-7644602af36c' );
define( 'BEEHIIV_API_KEY', 'On3RsDkq8viZgvfc3vT03WnKAHKhGtukNpzWfTScYaz3o8RmCgYBjaRJGEl7dHwx' );

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

add_action( 'wp_enqueue_scripts', 'utopia_add_site_scripts' );
/**
 * Enqueue scripts and styles for the frontend.
 *
 * @since 1.0.0
 */
function utopia_add_site_scripts() {
	// Enqueue build stylesheet.
	wp_enqueue_style(
		'bundle',
		TEMPLATE_PATH . '/build/css/style.css',
		array(),
		time()
	);

	wp_enqueue_style( 'style', TEMPLATE_PATH . '/style.css', array( 'bundle' ), time() );

	wp_enqueue_style( 'thevogne', '//thevogne.ru/clients/esh/utopia/style.css', array( 'style' ), time() );

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
			'AJAX_URL'         => admin_url( 'admin-ajax.php' ),
			'CURRENT_LANGUAGE' => pll_current_language(),
			'HOME_URL'         => home_url( '/' ),
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
function utopia_head_code(): void {
	/**
	 * Enqueue scripts and styles.
	 */
	wp_head();

	/**
	 * Get header code from ACF field.
	 */
	the_field( 'head_code', 'option' );
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
			'supports'      => array( 'title', 'editor', 'thumbnail', 'revisions' ), // 'title','editor','author','thumbnail','excerpt','trackbacks','custom-fields','comments','revisions','page-attributes','post-formats'
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
			'supports'      => array( 'title', 'editor', 'thumbnail', 'revisions' ), // 'title','editor','author','thumbnail','excerpt','trackbacks','custom-fields','comments','revisions','page-attributes','post-formats'
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

	$request_url      = 'https://api.beehiiv.com/v2/publications/' . BEEHIIV_PUBLICATION_ID . '/subscriptions';
	$request_args     = array(
		'headers'   => array(
			'Accept'        => 'application/json',
			'Authorization' => 'Bearer ' . BEEHIIV_API_KEY,
		),
		'body'      => array(
			'email'          => sanitize_text_field( wp_unslash( $_POST['email'] ) ),
			'referring_site' => home_url(),
		),
		'sslverify' => false,
	);
	$beehiiv_response = wp_remote_post(
		$request_url,
		$request_args
	);

	if ( is_wp_error( $beehiiv_response ) || 300 <= wp_remote_retrieve_response_code( $beehiiv_response ) ) {
		wp_send_json_error(
			array(
				'message' => 'Something went wrong',
				'data'    => json_decode( wp_remote_retrieve_body( $beehiiv_response ) ),
			),
			! empty( $beehiiv_response['response']['code'] ) ? $beehiiv_response['response']['code'] : 500
		);
	}

	wp_send_json_success(
		array(
			'message' => 'Successfully subscribed',
			'data'    => ( json_decode( wp_remote_retrieve_body( $beehiiv_response ) ) )->data,
		),
		wp_remote_retrieve_response_code( $beehiiv_response )
	);
}

add_action( 'edit_page_form', 'utopia_validate_default_wordpress_fields' );
add_action( 'edit_form_advanced', 'utopia_validate_default_wordpress_fields' );

/**
 * Validates the default WordPress fields when editing a post.
 *
 * Adds a JavaScript event listener to the DOMContentLoaded event, which
 * sets the 'required' attribute of the 'title' input field to true.
 *
 * @param WP_Post $post The post object being edited.
 */
function utopia_validate_default_wordpress_fields( $post ) {
	?>
	<!-- Validate default WordPress fields when editing a post. -->
	<style>
		.wp-input-error {
			border: 1px solid red !important;
		}
	</style>
	<script type="text/javascript">
		const POST_TYPE = <?php echo wp_json_encode( $post->post_type ); ?>;
		document.addEventListener('DOMContentLoaded', function() {
			const postForm = document.querySelector('form#post');

			postForm.addEventListener('submit', function(event) {
				const requiredFieldsSelectors = [
					'#title',
				];

				// if (POST_TYPE !== 'page' && POST_TYPE !== 'concert') {
				// 	requiredFieldsSelectors.push('#content');
				// }

				if ( POST_TYPE === 'concert' || POST_TYPE === 'utopian' ) {
					requiredFieldsSelectors.push('#_thumbnail_id');
				}

				const failedFields = requiredFieldsSelectors.some(selector => {
					const field = document.querySelector(selector);

					if (field) {
						if (!field.value || 
							(POST_TYPE === 'post' && selector === '#title' && field.value.length > 100) ||
							(POST_TYPE === 'concert' && selector === '#title' && field.value.length < 3) ||
							(POST_TYPE === 'concert' && selector === '#title' && field.value.length > 70) || 
							(POST_TYPE === 'utopian' && selector === '#title' && (field.value.length < 3 ||field.value.length > 30)) || 
							(selector === '#_thumbnail_id' && parseInt(field.value) < 0)) {
							event.preventDefault();

							let errorBlock;

							switch (selector) {
								case '#content':
								case '#_thumbnail_id': {
									errorBlock = field.previousElementSibling;
									break;
								}
								default: {
									errorBlock = field;
									break;
								}
							}

							field.focus();
							field.onchange = () => errorBlock.classList.remove('wp-input-error');

							errorBlock.classList.add('wp-input-error');

							return true;
						}
					}
				});
			});
		});
	</script>
	<?php
}

add_filter( 'acf/validate_value/type=url', 'utopia_acf_validate_url', 10, 3 );
function utopia_acf_validate_url( $valid, $value, $field ) {
	if ( strlen( $value ) > 0 && ! preg_match( '/^(http|https):\/\/([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.[a-z]{2,6}(\/.*)?$/', $value ) ) {
		return 'Please enter a valid URL';
	}

	return true;
}

add_filter( 'acf/validate_value/key=field_66476fd756dda', 'utopia_acf_validate_main_page_quote', 10, 3 );
add_filter( 'acf/validate_value/key=field_6647700e56ddf', 'utopia_acf_validate_main_page_quote', 10, 3 );
add_filter( 'acf/validate_value/key=field_6647701656de4', 'utopia_acf_validate_main_page_quote', 10, 3 );
function utopia_acf_validate_main_page_quote( $valid, $value, $field ) {
	$value = preg_replace( '/\s+/', '', $value );

	if ( strlen( $value ) > 0 && ( strlen( $value ) < 3 || strlen( $value ) > 230 ) ) {
		return 'The quote should be between 3 and 230 characters without spaces.';
	}

	return true;
}

add_filter( 'acf/validate_value/key=field_66476fe556ddb', 'utopia_acf_validate_main_page_quote_author', 10, 3 );
add_filter( 'acf/validate_value/key=field_6647700e56de0', 'utopia_acf_validate_main_page_quote_author', 10, 3 );
add_filter( 'acf/validate_value/key=field_6647701656de5', 'utopia_acf_validate_main_page_quote_author', 10, 3 );
function utopia_acf_validate_main_page_quote_author( $valid, $value, $field ) {
	$value = preg_replace( '/\s+/', '', $value );

	if ( strlen( $value ) > 0 && ( strlen( $value ) < 3 || strlen( $value ) > 50 ) ) {
		return 'The author name should be between 3 and 50 characters without spaces.';
	}

	return true;
}

add_filter( 'acf/validate_value/key=field_6647711156df6', 'utopia_acf_validate_main_page_image_description', 10, 3 );
add_filter( 'acf/validate_value/key=field_6647714056dfb', 'utopia_acf_validate_main_page_image_description', 10, 3 );
add_filter( 'acf/validate_value/key=field_6647714356e00', 'utopia_acf_validate_main_page_image_description', 10, 3 );
add_filter( 'acf/validate_value/key=field_6647714556e05', 'utopia_acf_validate_main_page_image_description', 10, 3 );
add_filter( 'acf/validate_value/key=field_6647714856e0a', 'utopia_acf_validate_main_page_image_description', 10, 3 );
add_filter( 'acf/validate_value/key=field_6647714a56e0f', 'utopia_acf_validate_main_page_image_description', 10, 3 );
add_filter( 'acf/validate_value/key=field_6647714d56e14', 'utopia_acf_validate_main_page_image_description', 10, 3 );
add_filter( 'acf/validate_value/key=field_6647714f56e19', 'utopia_acf_validate_main_page_image_description', 10, 3 );
function utopia_acf_validate_main_page_image_description( $valid, $value, $field ) {
	$value = preg_replace( '/\s+/', '', $value );

	if ( strlen( $value ) > 0 && ( strlen( $value ) < 3 || strlen( $value ) > 65 ) ) {
		return 'The description should be between 3 and 65 characters without spaces.';
	}

	return true;
}

add_filter( 'acf/validate_value/key=field_663e135da1743', 'utopia_acf_validate_lead', 10, 3 );
add_filter( 'acf/validate_value/key=field_66365ddb54a81', 'utopia_acf_validate_lead', 10, 3 );
function utopia_acf_validate_lead( $valid, $value, $field ) {
	$value = str_replace( ' ', '', $value );

	if ( strlen( $value ) < 100 ) {
		return 'The lead should be up to 100 characters without spaces.';
	}

	return true;
}

add_filter( 'acf/validate_value/key=field_66365be62f501', 'utopia_acf_validate_concert_content_field', 10, 3 );
function utopia_acf_validate_concert_content_field( $valid, $value, $field ) {
	$value = preg_replace( '/\s+/', '', $value );

	if ( strlen( $value ) < 3 ) {
		return 'The concert field should be up to 3 characters without spaces.';
	}

	return true;
}

add_filter( 'acf/validate_value/key=field_6636398d8dd00', 'utopia_acf_validate_role', 10, 3 );
function utopia_acf_validate_role( $valid, $value, $field ) {
	$value = str_replace( ' ', '', $value );

	if ( strlen( $value ) < 3 ) {
		return 'The role should be at least 3 characters without spaces.';
	}

	return true;
}

add_filter( 'acf/validate_value/key=field_6641efd47d697', 'utopia_acf_validate_buy_button_text', 10, 3 );
function utopia_acf_validate_buy_button_text( $valid, $value, $field ) {
	$value = str_replace( ' ', '', $value );

	if ( strlen( $value ) > 0 && strlen( $value ) < 3 ) {
		return 'The role should be empty or at least 3 characters without spaces.';
	}

	return true;
}

add_filter( 'acf/validate_value/key=field_6641f0c27d69a', 'utopia_acf_validate_location_name', 10, 3 );
function utopia_acf_validate_location_name( $valid, $value, $field ) {
	$value = str_replace( ' ', '', $value );

	if ( strlen( $value ) < 3 ) {
		return 'The name of location should be at least 3 characters without spaces.';
	}

	return true;
}

add_filter( 'acf/validate_value/key=field_6670346691059', 'utopia_acf_validate_concert_content', 10, 3 );
function utopia_acf_validate_concert_content( $valid, $value, $field ) {
	$value = str_replace( ' ', '', $value );

	if ( strlen( $value ) < 100 ) {
		return 'The content should be up to 100 characters without spaces.';
	}

	return true;
}

add_filter( 'acf/validate_value/key=field_66703735b3419', 'utopia_acf_validate_track_length', 10, 3 );
function utopia_acf_validate_track_length( $valid, $value, $field ) {
	$value = str_replace( ' ', '', $value );

	if ( strlen( $value ) < 20 ) {
		return 'The track length should be up to 20 characters without spaces.';
	}

	return true;
}

add_filter( 'acf/validate_value/key=field_6641f1367d69e', 'utopia_acf_validate_participant_length', 10, 3 );
function utopia_acf_validate_participant_length( $valid, $value, $field ) {
	$value = str_replace( ' ', '', $value );

	if ( strlen( $value ) < 10 ) {
		return 'The track length should be up to 10 characters without spaces.';
	}

	return true;
}

add_filter( 'acf/the_field/allow_unsafe_html', '__return_true' );

function utopia_get_page_title( $post = null ) {
	if ( ! $post ) {
		global $post;
	}

	return ! empty( get_field( 'title', $post ) ) ? get_field( 'title', $post ) : get_the_title( $post );
}


function utopia_wrap_long_text( $text ) {
	// new
	if ( ! $text ) {
		return;
	}

	$max_length = 685;

	// Используем DOMDocument для корректной работы с HTML
	$dom = new DOMDocument();
	libxml_use_internal_errors( true );
	$convmap = array( 0x80, 0x10ffff, 0, 0xffffff );
	$dom->loadHTML(
		mb_encode_numericentity(
			htmlspecialchars_decode(
				htmlentities( $text, ENT_NOQUOTES, 'UTF-8', false ),
				ENT_NOQUOTES
			),
			$convmap,
			'UTF-8'
		)
	);
	libxml_clear_errors();

	$body                  = $dom->getElementsByTagName( 'body' )->item( 0 );
	$truncated_content     = '';
	$remaining_content     = '';
	$current_length        = 0;
	$truncated             = false;
	$nodes_to_be_visible   = array();
	$nodes_to_be_invisible = array();

	foreach ( $body->childNodes as $node ) {
		if ( $node->nodeType !== XML_ELEMENT_NODE ) {
			continue;
		}

		$node_content = $dom->saveHTML( $node );
		$node_length  = mb_strlen( strip_tags( $node_content ) );

		if ( $current_length + $node_length < $max_length ) {
			$nodes_to_be_visible[] = $node;
		} else {
			$truncated               = true;
			$nodes_to_be_invisible[] = $node;
		}

		$current_length += $node_length;
	}

	// $nodes_to_be_visible   = array_filter(
	// $nodes_to_be_visible,
	// function ( $node ) {
	// return $node->nodeType === XML_ELEMENT_NODE;
	// }
	// );
	// $nodes_to_be_invisible = array_filter(
	// $nodes_to_be_visible,
	// function ( $node ) {
	// return $node->nodeType === XML_ELEMENT_NODE;
	// }
	// );

	// var_dump(
	// array_map(
	// function ( $node ) use ( $dom ) {
	// return $dom->saveHTML( $node );
	// },
	// $nodes_to_be_visible
	// ),
	// array_map(
	// function ( $node ) use ( $dom ) {
	// return $dom->saveHTML( $node );
	// },
	// $nodes_to_be_invisible
	// )
	// );
	// var_dump(
	// $nodes_to_be_visible,
	// $nodes_to_be_invisible
	// );

	if ( $truncated ) {
		$last_visible_node = end( $nodes_to_be_visible );

		$node_content = strip_tags( $dom->saveHTML( $last_visible_node ) );
		$last_char    = $node_content[ strlen( $node_content ) - 1 ];

		if ( ! preg_match( '/\s/', $last_char ) ) {
			$last_visible_node->appendChild( $dom->createTextNode( ' ' ) );
		}

		$button = $dom->createElement( 'button', pll__( 'more' ) );
		$button->setAttribute( 'class', 'concert-more-button' );
		$button->setAttribute( 'onclick', 'this.parentElement.nextElementSibling.hidden = false; this.hidden = true;' );
		$last_visible_node->appendChild( $button );
	}

	foreach ( $nodes_to_be_visible as $node ) {
		$truncated_content .= $dom->saveHTML( $node );
	}

	foreach ( $nodes_to_be_invisible as $node ) {
		$remaining_content .= $dom->saveHTML( $node );
	}

	return $truncated_content . '<div hidden>' . $remaining_content . '</div>';

	foreach ( $body->childNodes as $node ) {
		if ( $truncated ) {
			$remaining_content .= $dom->saveHTML( $node );
		} else {
			$node_content = $dom->saveHTML( $node );
			$node_length  = mb_strlen( strip_tags( $node_content ) );

			if ( $current_length + $node_length > $max_length ) {
				$truncated = true;
				$button    = $dom->createElement( 'button', pll__( 'more' ) );
				$button->setAttribute( 'class', 'concert-more-button' );
				$node->appendChild( $button );

				$remaining_content .= $node_content;
			} else {
				$truncated_content .= $node_content;
				$current_length    += $node_length;
			}
		}
	}

	// var_dump( $truncated_content, $remaining_content );

	echo '<div class="acf-content">';
	echo $truncated_content;

	if ( $remaining_content ) {
		echo '<div class="remaining-content" style="display: none;">' . $remaining_content . '</div>';
	}

	echo '</div>';

	// // JavaScript для обработки клика по кнопке
	// echo "
	// <script>
	// document.addEventListener('DOMContentLoaded', function() {
	// var button = document.querySelector('.show-more');
	// var remainingContent = document.querySelector('.remaining-content');

	// if (button && remainingContent) {
	// button.addEventListener('click', function() {
	// if (remainingContent.style.display === 'none') {
	// remainingContent.style.display = 'block';
	// button.textContent = 'Show less';
	// } else {
	// remainingContent.style.display = 'none';
	// button.textContent = 'Show more';
	// }
	// });
	// }
	// });
	// </script>
	// ";

	// old
	// if ( strlen( $text ) > 685 ) {
	// $trimmed_text        = substr( $text, 0, 685 );
	// $last_space_position = strrpos( $trimmed_text, ' ' );

	// if ( false !== $last_space_position ) {
	// $trimmed_text = substr( $trimmed_text, 0, $last_space_position );
	// }

	// $remaining_text      = substr( $text, $last_space_position );
	// $concert_more_text   = '<span class="concert-more-text" hidden>' . $remaining_text . '</span>';
	// $concert_more_button = ' <button class="concert-more-button" onclick="this.previousElementSibling.hidden = false; this.hidden = true;">' . pll__( 'more' ) . '</button>';
	// return $trimmed_text . $concert_more_text . $concert_more_button;
	// } else {
	// return $text;
	// }
}

function utopia_get_language_switcher() {
	$lang      = pll_current_language();
	$languages = pll_the_languages( array( 'raw' => 1 ) );

	foreach ( $languages as $key => $language ) {
		if ( $key !== $lang ) {
			return $languages[ $key ];
		}
	}

	return array();
}

function utopia_get_concert_location( $concert ) {
	$location = get_field( 'location', $concert );
	$venue    = get_field( 'venue', $concert );

	$location_name = '';

	if ( ! empty( $location ) ) {
		$location_name = $location;
	}

	if ( ! empty( $venue ) && ! empty( $venue['title'] ) ) {
		$location_name = ! empty( $location ) ? $venue['title'] . ', ' . $location_name : $venue['title'];
	}

	return $location_name;
}

add_action( 'wp_ajax_load_more_articles', 'utopia_load_more_articles_via_ajax' );
add_action( 'wp_ajax_nopriv_load_more_articles', 'utopia_load_more_articles_via_ajax' );

function utopia_load_more_articles_via_ajax() {
	if ( empty( $_POST['page'] ) ) {
		wp_send_json_error( array( 'message' => 'Bad request' ), 400 );
	}

	$articles_query_args = array(
		'post_type'      => 'post',
		'posts_per_page' => 6,
		'paged'          => (int) $_POST['page'],
	);

	$articles_query = new WP_Query( $articles_query_args );

	ob_start();

	if ( $articles_query->have_posts() ) {
		while ( $articles_query->have_posts() ) {
			$articles_query->the_post();
			?>
			<div id="w-node-e4e544f0-71e8-0317-502c-21d5e098212b-8bd9f3e0" class="conc-card min">
				<a href="<?php the_permalink(); ?>" class="conc-link min idea-link w-inline-block">
					<div class="p-17"><?php pll_e( 'Article' ); ?></div>
					<?php
					the_post_thumbnail(
						'full',
						array(
							'class'   => 'img-240-150',
							'loading' => 'lazy',
						)
					);
					?>
					<div class="p-28-120 _3"><?php the_title(); ?></div>
					<div class="link-shos ll _3 hvr">
						<div class="btn-xtx"><?php pll_e( 'read article' ); ?></div>
						<div class="hover-liner"></div>
					</div>
				</a>
			</div>
			<?php
		}

		wp_reset_postdata();
	}

	$html = ob_get_clean();

	wp_send_json_success(
		array(
			'html'    => $html,
			'message' => 'Success',
		)
	);
}

function utopia_remove_language_slug( $url ) {
	$pattern                   = '/^(https?:\/\/[^\/]+)\/[a-z]{2}\/(.*)$/i';
	$replacement               = '$1/$2';
	$url_without_language_slug = preg_replace( $pattern, $replacement, $url );

	return $url_without_language_slug;
}


function utopia_generate_language_url( $url, $lang ) {
	$normalized_url = utopia_remove_language_slug( $url );
	$url_schema     = parse_url( $normalized_url );

	if ( 'en' === $lang ) {
		return $normalized_url;
	} else {
		return $url_schema['scheme'] . '://' . $url_schema['host'] . '/' . $lang . $url_schema['path'];
	}
}

add_action( 'wp_ajax_get_translation_for_page', 'utopia_get_translation_for_page_via_ajax' );
add_action( 'wp_ajax_nopriv_get_translation_for_page', 'utopia_get_translation_for_page_via_ajax' );

function utopia_get_translation_for_page_via_ajax() {
	$post_types               = array( 'utopian', 'concert' );
	$current_language         = pll_current_language();
	$language_for_translation = $current_language === 'en' ? 'de' : 'en';

	$post_id = url_to_postid( $_POST['url'] );

	$url_to_return = utopia_generate_language_url( home_url(), $language_for_translation );

	if ( 0 < $post_id ) {
		$translated_post_id = pll_get_post( $post_id, $language_for_translation );

		if ( 0 < $translated_post_id ) {
			$url_to_return = get_permalink( $translated_post_id );
		}
	} else {
		$post_types_url = array_map(
			function ( $post_type ) {
				return get_post_type_archive_link( $post_type );
			},
			$post_types
		);

		if ( in_array( $_POST['url'], $post_types_url ) ) {
			$url_to_return = utopia_generate_language_url( $_POST['url'], $language_for_translation );
		}
	}

	wp_send_json_success( array( 'url' => $url_to_return ), 200 );
}

add_action( 'pre_get_posts', 'utopia_utopians_archive_page' );
function utopia_utopians_archive_page( $query ) {
	if ( is_post_type_archive( 'utopian' ) && $query->is_main_query() ) {
		$query->set( 'posts_per_page', -1 );
	}
}

require_once get_template_directory() . '/inc/translations.php';
