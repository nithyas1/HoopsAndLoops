/*
	Big Picture by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$all = $body.add($header);

	// Breakpoints.
		breakpoints({
			xxlarge: [ '1681px',  '1920px' ],
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '1001px',  '1280px' ],
			medium:  [ '737px',   '1000px' ],
			small:   [ '481px',   '736px'  ],
			xsmall:  [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Touch mode.
		if (browser.mobile)
			$body.addClass('is-touch');
		else {

			breakpoints.on('<=small', function() {
				$body.addClass('is-touch');
			});

			breakpoints.on('>small', function() {
				$body.removeClass('is-touch');
			});

		}

	// Fix: IE flexbox fix.
		if (browser.name == 'ie') {

			var $main = $('.main.fullscreen'),
				IEResizeTimeout;

			$window
				.on('resize.ie-flexbox-fix', function() {

					clearTimeout(IEResizeTimeout);

					IEResizeTimeout = setTimeout(function() {

						var wh = $window.height();

						$main.each(function() {

							var $this = $(this);

							$this.css('height', '');

							if ($this.height() <= wh)
								$this.css('height', (wh - 50) + 'px');

						});

					});

				})
				.triggerHandler('resize.ie-flexbox-fix');

		}

	// Gallery.
		$window.on('load', function() {

			var $gallery = $('.gallery');

			var totalPhotos = 55;

				for (i=totalPhotos; i>=1; i--) {
					var styleDirection = "from-left";
					if(i%2 === 0) {
						styleDirection = "from-right";
					}
					$('#addpagination .gallery').append('<article class="' +styleDirection+ '"><a href="images/fulls/' +i+ '.jpg" class="image fit"><img src="images/thumbs/' +i+ '.jpg" title="The Anonymous Red" alt="" /></a></article>');
				}

				$('#addpagination').after ('<div class="center"><div id="nav" class="pagination"></div?</div>');  
				var rowsShown = 6;  
				var rowsTotal = $('#addpagination .gallery article').length;  
				var numPages = rowsTotal/rowsShown; 
				// $('#nav').append ('<a href="#">&laquo;</a> ');
				for (i = 0;i < numPages;i++) {  
					var pageNum = i + 1;  
					$('#nav').append ('<a href="#" rel="'+i+'">'+pageNum+'</a> ');  
				}  
				// $('#nav').append ('<a href="#">&raquo;</a> ');
				$('#addpagination .gallery article').hide();  
				$('#addpagination .gallery article').slice (0, rowsShown).show();  
				$('#nav a:first').addClass('active'); 

				$('#nav a').bind('click', function() {  
					$('#nav a').removeClass('active');  
					$(this).addClass('active');
					var currPage = $(this).attr('rel');  
					var startItem = currPage * rowsShown;  
					var endItem = startItem + rowsShown;  
					$('#addpagination .gallery article').css('opacity','0.0').hide().slice(startItem, endItem).  
					css('display','flex').animate({opacity:1}, 300);

					$('html, body').animate({
						scrollTop: $("#portfolio").offset().top
					}, 1000);  
				}); 


			$gallery.poptrox({
				baseZIndex: 10001,
				useBodyOverflow: false,
				usePopupEasyClose: false,
				overlayColor: '#1f2328',
				overlayOpacity: 0.65,
				usePopupDefaultStyling: false,
				usePopupCaption: true,
				popupLoaderText: '',
				windowMargin: 50,
				usePopupNav: true
			});

			// Hack: Adjust margins when 'small' activates.
				breakpoints.on('>small', function() {
					$gallery.each(function() {
						$(this)[0]._poptrox.windowMargin = 50;
					});
				});

				breakpoints.on('<=small', function() {
					$gallery.each(function() {
						$(this)[0]._poptrox.windowMargin = 5;
					});
				});

				
		});

	// Section transitions.
		if (browser.canUse('transition')) {

			var on = function() {

				// Galleries.
					$('.gallery')
						.scrollex({
							top:		'30vh',
							bottom:		'30vh',
							delay:		50,
							initialize:	function() { $(this).addClass('inactive'); },
							terminate:	function() { $(this).removeClass('inactive'); },
							enter:		function() { $(this).removeClass('inactive'); },
							leave:		function() { $(this).addClass('inactive'); }
						});

				// Generic sections.
					$('.main.style1')
						.scrollex({
							mode:		'middle',
							delay:		100,
							initialize:	function() { $(this).addClass('inactive'); },
							terminate:	function() { $(this).removeClass('inactive'); },
							enter:		function() { $(this).removeClass('inactive'); },
							leave:		function() { $(this).addClass('inactive'); }
						});

					$('.main.style2')
						.scrollex({
							mode:		'middle',
							delay:		100,
							initialize:	function() { $(this).addClass('inactive'); },
							terminate:	function() { $(this).removeClass('inactive'); },
							enter:		function() { $(this).removeClass('inactive'); },
							leave:		function() { $(this).addClass('inactive'); }
						});

				// Contact.
					$('#contact')
						.scrollex({
							top:		'50%',
							delay:		50,
							initialize:	function() { $(this).addClass('inactive'); },
							terminate:	function() { $(this).removeClass('inactive'); },
							enter:		function() { $(this).removeClass('inactive'); },
							leave:		function() { $(this).addClass('inactive'); }
						});

			};

			var off = function() {

				// Galleries.
					$('.gallery')
						.unscrollex();

				// Generic sections.
					$('.main.style1')
						.unscrollex();

					$('.main.style2')
						.unscrollex();

				// Contact.
					$('#contact')
						.unscrollex();

			};

			breakpoints.on('<=small', off);
			breakpoints.on('>small', on);

		}

	// Events.
		var resizeTimeout, resizeScrollTimeout;

		$window
			.on('resize', function() {

				// Disable animations/transitions.
					$body.addClass('is-resizing');

				clearTimeout(resizeTimeout);

				resizeTimeout = setTimeout(function() {

					// Update scrolly links.
						$('a[href^="#"]').scrolly({
							speed: 1500,
							offset: $header.outerHeight() - 1
						});

					// Re-enable animations/transitions.
						setTimeout(function() {
							$body.removeClass('is-resizing');
							$window.trigger('scroll');
						}, 0);

				}, 100);

			})
			.on('load', function() {
				$window.trigger('resize');
			});

	$("#submitForm").on("click", function() {
		var formContents = $("#contactform").serializeArray();
		$.ajax({
			url: "https://formspree.io/f/xbjeewar", 
			method: "POST",
			data: {name: formContents[0].value, email: formContents[1].value, message: formContents[2].value},
			dataType: "json"
		});
		$('.successmsg').css('visibility', "visible");
		setTimeout(function() {
			$('.successmsg').css('visibility', "hidden");
		}, 5000);
		return false;
	});

})(jQuery);