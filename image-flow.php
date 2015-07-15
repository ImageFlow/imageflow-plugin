<?php
/*
Plugin Name: Image Flow
Plugin URI: http://wordpress.org/plugins/media-grid/
Description: A new user experience for the Media Flow in WordpPress.
Version: 0.1
Author: The Image Flow Team
*/

// __DIR__ is only available in later versions of PHP
$dir = dirname( __FILE__ );

require_once( $dir . '/php/class-image-flow-plugin.php' );

add_action( 'plugins_loaded', array( 'Image_Flow_Plugin', 'get_instance' ) );