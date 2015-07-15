/*globals jQuery, _, wp */

(function ($, _, wp) {
	"use strict";

	var $body,
		mediaGrid,
		ViewToggle;

	// Take a meat cleaver and override this class
	wp.media.view.Attachment.Library = wp.media.view.Attachment.Library.extend({
		attributes: function() {
			var image = this.model.get( 'image' ),
				atts = {
					'tabIndex':     0,
					'role':         'checkbox',
					'aria-label':   this.model.get( 'title' ),
					'aria-checked': false,
					'data-id':      this.model.get( 'id' )
				};

			if ( image ) {
				atts['data-full'] = image.src;
				atts['data-width'] = image.width;
				atts['data-height'] = image.height;
			} else {
				atts['data-full'] = this.model.get( 'url' );
				atts['data-width'] = this.model.get( 'width' );
				atts['data-height'] = this.model.get( 'height' );
			}

			return atts;
		}
	});

	// Add the toggle to the toolbar
	ViewToggle = wp.media.view.Button.extend({
		initialize: function () {
			wp.media.view.Button.prototype.initialize.apply( this, arguments );

			this.listenTo( this.model, 'change:atts-view', this.toggleView );
		},

		toggleView: function () {
			var browser = this.controller.content.get( 'attachments-browser' ),
				fullClass = 'image-flow-attachments-full',
				img = '.centered img',
				children = '.centered, div.thumbnail, .attachment-preview',
				atts;

			atts = browser.attachments;

			if ( 'full-width' === this.model.get( 'atts-view' ) ) {
				atts.$el.addClass( fullClass );

				_.each( atts.$( 'li' ), function ( att ) {
					var $att = $( att );

					$att
						.data( 'original', $att.find( img ).attr( 'src' ) )
						.find( img ).attr( 'src', $att.data( 'full' ) ).end()
						.find( children ).addBack().css( {
							'min-height': $att.data( 'height' ),
							'height': 'auto',
							'width': '100%'
						} );
				} );

				atts.$window.off( atts.resizeEvent );
			} else {
				_.each( atts.$( 'li' ), function ( att ) {
					var $att = $( att );
					$att
						.find( img ).attr( 'src', $att.data( 'original' ) ).end()
						.find( children ).addBack()
							.removeAttr( 'style' );
				} );

				atts.$el.removeClass( fullClass );

				atts.$window.on( atts.resizeEvent, _.debounce( atts.setColumns, 50 ) );
			}
		}
	});

	function listenForMediaGrid() {
		var browser;

		mediaGrid = wp.media.frame;
		if ( ! mediaGrid ) {
			window.setTimeout( listenForMediaGrid, 50 );
		} else {
			browser = mediaGrid.content.get( 'attachments-browser' );

			browser.toolbar.set( 'image-flow-toggle', new ViewToggle({
				controller: mediaGrid,
				priority: -70,
				className: 'media-button button-primary image-flow-att-toggle',
				text: 'Toggle',
				click: function () {
					if ( 'full-width' === this.model.get( 'atts-view' ) ) {
						this.model.set( 'atts-view', '' );
					} else {
						this.model.set( 'atts-view', 'full-width' );
					}
				}
			}).render() );
		}
	}

    $(document).ready(function () {
		$body = $( document.body );

		if ( $body.hasClass( 'upload-php' ) ) {
			// this is technically a race condition
			_.defer( listenForMediaGrid );
		}
    });

}(jQuery, _, wp));