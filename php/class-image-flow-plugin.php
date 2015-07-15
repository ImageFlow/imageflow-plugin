<?php

class Image_Flow_Plugin {
	static $instance;

	public static function get_instance() {
		// static:: is only available in later versions of PHP
		if ( ! isset( self::$instance ) ) {
			self::$instance = new self;
		}

		return self::$instance;
	}

	private function __construct() {
		// actions and filters
		add_action( 'wp_enqueue_media', array( $this, 'wp_enqueue_media' ) );
	}

	public function wp_enqueue_media() {
		$dir = dirname( __FILE__ );
		wp_enqueue_style( 'image-flow-css', plugins_url( 'css/image-flow.css', $dir ) );
		wp_enqueue_script( 'image-flow-js', plugins_url( 'js/image-flow.js', $dir ), array( 'media-views' ), '', true );
	}
}