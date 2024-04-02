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

		const galleryItems = {
			1: {
				title: "Soft White Gloves"
			},
			2: {
				title: "Halloween Pumpkins",
				pattern: "https://amigurumi.today/free-halloween-amigurumi-pumpkin-crochet-pattern/"
			},
			3: {
				title: "Fox Lovey"
			},
			4: {
				title: "Little Sheep and Bunny"
			},
			5: {
				title: "Granny Square Cardigan",
				pattern: "https://www.yarnspirations.com/patons-coziest-crochet-cardigan/PAC0128-001968M.html"
			},
			6: {
				title: "Paw Print on Sweater"
			},
			7: {
				title: "Soft Dice",
				pattern: "https://www.elisascrochet.com/post/soft-dice-free-crochet-pattern"
			},
			8: {
				title: "Sheep Lovey"
			},
			9: {
				title: "Soft Football"
			},
			10: {
				title: "Little Girl Doll"
			},
			11: {
				title: "Flower Cap with Hair",
				pattern: "https://www.youtube.com/watch?v=EP6U4jjKTCA&t=0s&ab_channel=HanDIYTutorials"
			},
			12: {
				title: "Frozen's Elsa Cap",
				pattern: "https://www.youtube.com/watch?v=EP6U4jjKTCA&t=0s&ab_channel=HanDIYTutorials"
			},
			13: {
				title: "Dandelion in Resin Pendant"
			},
			14: {
				title: "Rose Petals Earrings and Pendant"
			},
			15: {
				title: "Dragonfly Wings Earrings - design 1"
			},
			16: {
				title: "Dragonfly Wings Earrings - design 2"
			},
			17: {
				title: "Dragonfly Wings Earrings - design 3"
			},
			18: {
				title: "Personalised Letter Keychain"
			},
			19: {
				title: "Beach Themed Couple's Name Wall Hanging"
			},
			20: {
				title: "Beach Themed Home Wall Hanging"
			},
			21: {
				title: "Marble Effect Clock"
			},
			22: {
				title: "Key Holder"
			},
			23: {
				title: "Holographic Trinket Bowl"
			},
			24: {
				title: "Memories Preserved in Resin"
			},
			25: {
				title: "Crochet Bralette",
				pattern: "https://www.youtube.com/watch?v=TzTfxzUlGBU&ab_channel=ChendaDIY"
			},
			26: {
				title: "Crocheted and Sewed Dress with Pockets"
			},
			27: {
				title: "Multicolor Puff Stitch Beanie",
				pattern: "https://www.youtube.com/watch?v=X4uivY5FfSw&ab_channel=ClaudettaCrochet"
			},
			28: {
				title: "Fit and Flare Skirt"
			},
			29: {
				title: "Crochet pineapple crop top",
				pattern: "https://www.youtube.com/watch?v=9-SzGEBaosE&ab_channel=PassioKnitKelsie"
			},
			30: {
				title: "Crochet Round Boho Purse",
				pattern: "https://makeanddocrew.com/street-fair-crochet-hippie-purse-free-pattern/"
			},
			31: {
				title: "Baby Dress Set"
			},
			32: {
				title: "Baby Owl Cap"
			},
			33: {
				title: "Baby Earflap Cap"
			},
			34: {
				title: "Cloud Cradle Hanging"
			},
			35: {
				title: "Colorful Caterpillar"
			},
			36: {
				title: "Sleepy Dog"
			},
			37: {
				title: "Hello Kitty"
			},
			38: {
				title: "Cat in a dress",
				pattern: "https://yourcrochet.com/cat-doll-in-dress-free-crochet-pattern/"
			},
			39: {
				title: "Brontosaurus",
				pattern: "https://stringydingding.com/brontosaurus-dinosaur-amigurumi-free-crochet-pattern/"
			},
			40: {
				title: "Fox",
				pattern: ""
			},
			41: {
				title: "Cat with an attitude",
				pattern: "https://amigurumi.today/large-ami-cat-crochet-pattern/"
			},
			42: {
				title: "Cuddly sheep",
				pattern: "https://amigurumi.today/amigurumi-sheep-plush-toy-pattern/"
			},
			43: {
				title: "Snowman",
				pattern: "https://amigurumi.today/crochet-snowman-amigurumi-pattern/"
			},
			44: {
				title: "Teddy Bear",
				pattern: "https://amigurumi.today/crochet-bear-in-overalls-free-pattern/"
			},
			45: {
				title: "Yellow Rabbit"
			},
			46: {
				title: "Yellow llama",
				pattern: "https://www.yarnspirations.com/row-en/red-heart-llama-no-drama/RHC0334-024120M.html"
			},
			47: {
				title: "Pink llama",
				pattern: "https://www.yarnspirations.com/row-en/red-heart-llama-no-drama/RHC0334-024120M.html"
			},
			48: {
				title: "Honey Bee"
			},
			49: {
				title: "Owl"
			},
			50: {
				title: "Angel",
				pattern: "https://www.youtube.com/watch?v=3qe5hM-y2qQ&ab_channel=OombawkaDesignCrochet"
			},
			51: {
				title: "Basket weave crochet cushion cover"
			},
			52: {
				title: "Flower Coasters and Pot",
				pattern: "https://youtu.be/GqRXD7nzaRk?si=Geq8iQ95hDKRYmvB"
			},
			53: {
				title: "Sewed Boston Bag",
				Pattern: "https://www.youtube.com/watch?v=Fuu2Hq2ihQY"
			},
			54: {
				title: "Crochet Roses",
				Pattern: "https://www.youtube.com/watch?v=z4VoUx2mC_U"
			},
			55: {
				title: "Pikachu",
				pattern: "https://www.ravelry.com/patterns/library/pikachu-from-pokemon"
			},
			56: {
				title: "Mr. Bean's Teddy"
			},
			57: {
				title: "Squirtle",
				pattern: "https://www.ravelry.com/patterns/library/squirtle-from-pokemon"
			},
			58: {
				title: "Sweater, Beanie and Booties set"
			},
			59: {
				title: "Squishy Donut Cushion"
			},
			60: {
				title: "Onesie, Beanie and Booties set"
			},
			61: {
				title: "Air Dry Clay Dragonair"
			},
			62: {
				title: "Toothless"
			},
			63: {
				title: "Purple Dino",
				pattern: "https://bumcraftcrochet.com/2022/06/26/free-t-rex-dinosaur-crochet-pattern"
			},
			64: {
				title: "Charmander",
				pattern: "https://www.1upcrochet.com/charmander-amigurumi-pattern-copy"
			},
			65: {
				title: "Lapras",
				pattern: "https://www.deviantart.com/geekmakerart/art/Amigurumi-Pattern-Lapras-903506210"
			},
			66: {
				title: "Naruto"
			}
	}

	// Gallery.
		$window.on('load', function() {

			var $gallery = $('.gallery');

			var totalPhotos = Object.keys(galleryItems).length;

				for (i=totalPhotos; i>=1; i--) {
					var styleDirection = "from-right";
					if(i%2 === 0) {
						styleDirection = "from-left";
					}
					$('#addpagination .gallery').append('<article class="' +styleDirection+ '"><a href="images/fulls/' +i+ '.jpg" class="image fit"><img src="images/thumbs/' +i+ '.jpg" title="' +galleryItems[i].title+ '" alt="" /></a></article>');
				}

				$('#addpagination').after ('<div class="center"><div id="nav" class="pagination"></div?</div>');  
				var rowsShown = 6;  
				var rowsTotal = $('#addpagination .gallery article').length;  
				var numPages = rowsTotal/rowsShown; 
				// $('#nav').append ('<a href="#">&laquo;</a> ');
				for (i = 0;i < numPages;i++) {  
					var pageNum = i + 1;  
					if (pageNum < 10) {
						$('#nav').append ('<a href="#" rel="'+i+'">'+pageNum+'</a> ');  
					} else {
						$('#nav').append ('<a class="doubledigit" href="#" rel="'+i+'">'+pageNum+'</a> ');  						
					}
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