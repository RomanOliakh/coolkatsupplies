var optionslist1 = ('.palette, .weights, .ribbons');

var customizelist1 = ('.customize .top, .customize .r2, .customize .r1, .customize .r3, .customize .r4, .customize .r5, .weights, .ribbons, .tassels');

var customizelist2 = ('.customize .top, .customize .r2, .customize .r1, .customize .r3, .customize .r4, .customize .r5, .palette, .weights, .ribbons, .tassels');

var customizeclasses = "11inclusterstring classicarrangement 11induoclusterstring duoarrangement cascadingarrangement 16insimpleribbon 11insimplestring 16insimplestring umbrella 3ft-tassel megaloon-string supershape-duo supershape-classic column-classic helium-arch";

var colorList = ('[class^=standard-], [class^=fashion-], [class^=pearl-');

var tutorial1 = "<strong>Now let your imagination expand!</strong><br/><br/>From here you're free to select balloons (active balloons are shown with a Check Mark) and change them to anything shown in the Palette.<br/><br/><strong>Try changing the top balloon,</strong> there's hundreds of big beautiful bouquet toppers!<br/><br/>Tap or click anywhere to close.";

var top = ('.top');

var titleCascading = "Cascading Arrangement";

var listCascading = "A multi-purpose classic. Each balloon is anchored to the weight with even vertical spacing.<br /><br />Arrangement details:<br />• 11\" and 16\" balloons only<br />• 2 - 7 balloons total";

var titleSinglestring = "Single String Arrangement";

var listSinglestring = "Clean, compact, balloons! This arrangement staggers each balloon on a single weighted line.<br /><br />Arrangement details:<br />• 11\" and 16\" balloons only<br />• 1 - 16 balloons";

var titleDuostring = "Duo String Arrangement";

var listDuostring = "Perfect for colour harmonies. This arrangement staggers pairs of balloons on a single weighted line with a standard topper. Great for centerpieces and scattered decor.<br /><br />Arrangement details:<br />• 11\" and 16\" balloons only<br />• 3 - 15 balloons";

var titleClassic = "Classic Arrangement";

var listClassic = "A big and beautiful bouquet. Rows of 3 balloons tied to a single weighted line with a standard topper. Great for centerpieces and focal points.<br /><br />Arrangement details:<br />• 11\" and 16\" balloons only<br />• 4 - 18 balloons";

var titleSingles = "Singles (No Arrangement)";

var listSingles = "Make your own bunch of balloons. This style has NO structure or staggering.<br /><br />Arrangement details:<br />• 11\" and 16\" balloons only<br />• 13 - 20 balloons<br />• Select colour and quantity";

var titleMegaduo = "Supershape Duo Arrangement";

var listMegaduo = "This arrangement staggers pairs of balloons on a single weighted line with a specialty topper. Customize for any occasion!<br /><br />Arrangement details:<br />• 11\" and 16\" balloons for bouquet body<br />• Choice of Megaloon top balloon<br />• 3 - 15 balloons";

var titleMegaclassic = "Supershape Classic Arrangement";

var listMegaclassic = "The original bouquet with an eye-catching Megaloon top. Rows of 3 balloons tied to a single weighted line. Great for centerpieces and focal points.<br /><br />Arrangement details:<br />• 11\" and 16\" balloons for bouquet body<br />• Choice of Megaloon top balloon<br />• 4 - 18 balloons";

var titlemegaloontassel = "Megaloon on String";

var listmegaloontassel = "Keep it simple and fun with a helium megaloon. Great for kids and get-well-soons.<br /><br />Arrangement details:<br />• Helium inflated<br />• Choice of Megaloon";

var title3fttassel = "3ft with Confetti / Tassels / Collars";

var list3fttassel = "The gigantic 36\" round balloon adorned with beautiful trims. Complete a banquet room or photoshoot with custom tassels and balloon collars, or even colourful confetti!<br /><br />Arrangement details:<br />• Balloon sizes cannot be changed<br />• Select 3ft, collar, and tassel colours<br />• Confetti available with Diamond Clear 3ft topper (select in Palette)";

var titlecolumnclassic = "Column Classic";

var listcolumnclassic = "Perfect for entryways, the eye-catching column is mounted on a centre frame and weighted base.<br /><br />Arrangement details:<br />• Balloon sizes cannot be changed<br />• Select up to 4 colours<br />• Call and ask about a full archway!";

var titleheliumarch = "Helium Arch";

var listheliumarch = "The elegant floating archway with helium-inflated balloons! This inexpensive archway design is great for backdrops and entryways.<br /><br />Arrangement details:<br />• Balloon sizes cannot be changed<br />• UNDER DEVELOPMENT";

var titleFinished = "Thank YOU! Order placed.";

var listFinished = "Please pay in advance to pick up your bouquet on time. Currently accepted payment methods: e-Transfer, over the phone, in-store*.<br />• * = Please allow a 30 minute - 1 hour build time when paying in store.";





$(document).ready(function() {



	$('.templates div').click(function() {

		$('.balloons, .customize').removeClass(customizeclasses);

		$('.templates div').removeClass('selected');

		$(this).addClass('selected');

		$('.templates').hide();

		$('.content, .cost').show();

		$('#begin, #progress1, .info1').css('display', 'none');

		$('#progress2, .info2').css('display', 'block');

		$('#proceed, #gobacktemplates').css('display', 'inline-block');

		//$('#begin').addClass('ready');

		//$('#begin').text("Begin Customizing ->");

	});

	$('.template-11inclusterstring').click(function() {

		$('.r1, .r2, .r3, .b1, .b2, .b3').show();

		$('.b1, .b2, .b3, .b4, .b5, .top').removeClassExcept("b1 b2 b3 b4 b5 top");

		$('.b1, .b2, .b3, .b4, .b5, .top').addClass('11in');

		document.getElementById("ribbonchange").src="img/string-cluster-11.png";

		$('.balloons, .customize').addClass('11inclusterstring');

	});

	$('.template-classicarrangement').click(function() {

		$('.r1, .r2, .r3').show();

		$('.b1, .b2, .b3, .b4, .b5, .top').removeClassExcept("b1 b2 b3 b4 b5 top");

		$('.b1, .b2, .b3, .b4, .b5, .top').addClass('11in');

		document.getElementById("ribbonchange").src="img/string-cluster.png";

		$('.balloons, .customize').addClass('classicarrangement');

		$('.info2 h1').html(titleClassic);

		$('.info2 p').html(listClassic);

		$('.desc_template').html('Classic Arrangement');

	});

	$('.template-11induoclusterstring').click(function() {

		$('.r1, .r2, .r3').show();

		$('.b1, .b2, .b3, .b4, .b5, .top').removeClassExcept("b1 b2 b3 b4 b5 top");

		document.getElementById("ribbonchange").src="img/string.png";

		$('.b1, .b2, .b3, .b4, .b5, .top').addClass('11in');

		$('.balloons, .customize').addClass('11induoclusterstring');

	});

	$('.template-duoarrangement').click(function() {

		$('.r1, .r2, .r3').show();

		$('.b1, .b2, .b3, .b4, .b5, .top').removeClassExcept("b1 b2 b3 b4 b5 top");

		document.getElementById("ribbonchange").src="img/string.png";

		$('.b1, .b2, .b3, .b4, .b5, .top').addClass('11in');

		$('.balloons, .customize').addClass('duoarrangement');

		$('.info2 h1').html(titleDuostring);

		$('.info2 p').html(listDuostring);

		$('.desc_template').html('Duo Arrangement');

	});

	$('.template-cascadingarrangement').click(function() {

		$('.r1, .r2, .r3').show();

		$('.ctop').hide();

		document.getElementById("ribbonchange").src="img/string-simpleribbon.png";

		$('.b1, .b2, .b3, .b4, .b5, .top').removeClassExcept("b1 b2 b3 b4 b5 top");

		$('.b1, .b2, .b3, .b4, .b5').addClass('11in');

		$('.info2 h1').html(titleCascading);

		$('.info2 p').html(listCascading);

		$('.balloons, .customize').addClass('cascadingarrangement');

		$('.desc_template').html('Cascading');

	});

	$('.template-16insimpleribbon').click(function() {

		$('.r1, .r2, .r3').show();

		document.getElementById("ribbonchange").src="img/string-simpleribbon.png";

		$('.b1, .b2, .b3, .b4, .b5, .top').removeClassExcept("b1 b2 b3 b4 b5 top");

		$('.b1, .b2, .b3, .b4, .b5').addClass('16in');

		$('.balloons, .customize').addClass('16insimpleribbon');

	});

	$('.template-11insimplestring').click(function() {

		$('.r1, .r2, .r3').show();

		document.getElementById("ribbonchange").src="img/string.png";

		$('.b1, .b2, .b3, .b4, .b5, .top').removeClassExcept("b1 b2 b3 b4 b5 top");

		$('.b1, .b2, .b3, .b4, .b5').addClass('11in');

		$('.balloons, .customize').addClass('11insimplestring');

		$('.info2 h1').html(titleSinglestring);

		$('.info2 p').html(listSinglestring);

		$('.desc_template').html('Single String');

	});

	$('.template-16insimplestring').click(function() {

		$('.r1, .r2, .r3').show();

		document.getElementById("ribbonchange").src="img/string.png";

		$('.b1, .b2, .b3, .b4, .b5, .top').removeClassExcept("b1 b2 b3 b4 b5 top");

		$('.b1, .b2, .b3, .b4, .b5').addClass('16in');

		$('.balloons, .customize').addClass('16insimplestring');

	});

	$('.template-umbrella').click(function() {

		$('.balloons, .customize').addClass('umbrella');

		$('.b1, .b2, .b3, .b4, .b5, .top').removeClassExcept("b1 b2 b3 b4 b5 top");

		document.getElementById("ribbonchange").src="img/string-umbrella2.png";

		$('.b1, .b2, .b3, .b4, .b5').addClass('11in');

		$('.ribbon').addClass('wide');

		$('.r4, .r5, .ctop').hide();

		$('.b1, .b2, .b3, .b4, .b5').css('display', 'inline-block');

		$('.info2 h1').html(titleSingles);

		$('.info2 p').html(listSingles);

		$('.desc_template').html('Singles');

	});





	$('.template-supershape-duo').click(function() {

		$('.r1, .r2, .r3').show();

		$('.b1, .b2').css('display', 'inline-block');

		$('.r4, .r5').hide();

		document.getElementById("ribbonchange").src="img/string.png";

		$('.b1, .b2, .b3, .b4, .b5, .top').removeClassExcept("b1 b2 b3 b4 b5 top");

		$('.b1, .b2, .b3, .b4, .b5').addClass('11in');

		$('.top').addClass('supershape-funnyflower supershape');

		$('.balloons, .customize').addClass('supershape-duo');

		$('.info2 h1').html(titleMegaduo);

		$('.info2 p').html(listMegaduo);

		$('.desc_template').html('Supershape Duo');

		if ($('.app-container').hasClass('beginner')) {

			$('.r1 .b2').addClass('tut-arrow introa');

			$('.top').addClass('tut-arrow');

			$('.label-fashion').addClass('tut-arrow');

		};

	});

	$('.template-supershape-classic').click(function() {

		$('.r1, .r2, .r3').show();

		$('.b1, .b2, .b3').css('display', 'inline-block');

		$('.r4, .r5').hide();

		document.getElementById("ribbonchange").src="img/string-cluster.png";

		$('.b1, .b2, .b3, .b4, .b5, .top').removeClassExcept("b1 b2 b3 b4 b5 top");

		$('.b1, .b2, .b3, .b4, .b5').addClass('11in');

		$('.top').addClass('supershape-sparklybluebday supershape');

		$('.balloons, .customize').addClass('supershape-classic');

		$('.info2 h1').html(titleMegaclassic);

		$('.info2 p').html(listMegaclassic);

		$('.desc_template').html('Supershape Classic');

	});

	$('.template-megaloon-string').click(function() {

		$('.top').show();

		$('.r4, .r5, .r2, .r3, .r1, .r6, .r7, .r8, .r9, .r10').hide();

		document.getElementById("ribbonchange").src="img/string.png";

		$('.b1, .b2, .b3, .b4, .b5, .top').removeClassExcept("b1 b2 b3 b4 b5 top");

		$('.b1, .b2, .b3, .b4, .b5').addClass('5in');

		$('.top').addClass('letter-Bgold ABC123mylar');

		$('.balloons, .customize, .options, .build-extra').addClass('megaloon-string');

		$('.info2 h1').html(titlemegaloontassel);

		$('.info2 p').html(listmegaloontassel);

		$('.desc_template').html('Megaloon');

	});

	$('.template-3ft-tassel').click(function() {

		$('.r1, .r1 .b1, .r1 .b2, .r1 .b3, .r1 .b4').show();

		$('.r4, .r5, .r2, .r3, .b4, .b5').hide();

		document.getElementById("ribbonchange").src="img/tassel-long.png";

		$('.b1, .b2, .b3, .b4, .b5, .top').removeClassExcept("b1 b2 b3 b4 b5 top");

		$('.b1, .b2, .b3, .b4, .b5').addClass('5in');

		$('.top').addClass('3ft-darkblue 3ft');

		$('.balloons, .customize, .options, .build-extra').addClass('3ft-tassel');

		$('#ribbonchange').addClass('tassel-azure');

		$('.info2 h1').html(title3fttassel);

		$('.info2 p').html(list3fttassel);

		$('.desc_template').html('3ft w/ Tassels');

	});

	$('.template-column-classic').click(function() {

		$('.r1, .r2, .r3, .r4, .r5, .r6, .r7, .r8, .b1, .b2, .b3, .b4').show();

		$('.b5, .r9, .r10').hide();

		$('.b1, .b2, .b3, .b4, .b5, .top').removeClassExcept("b1 b2 b3 b4 b5 top");

		$('.b1, .b2, .b3, .b4, .b5').addClass('11in');

		$('#top').addClass('3ft-darkblue 3ft');

		$('.balloons, .customize, .options, .build-extra').addClass('column-classic');

		$('.info2 h1').html(titlecolumnclassic);

		$('.info2 p').html(listcolumnclassic);

		$('.desc_template').html('Column Classic');

	});



	var spiral1 = '.r1 .b1, .r2 .b2, .r3 .b3, .r4 .b4, .r5 .b4, .r6 .b3, .r7 .b2, .r8 .b1, .r9 .b1, .r10 .b2, .r11 .b3, .r12 .b4, .r13 .b4, .r14 .b3, .r15 .b2';

	var spiral2 = '.r1 .b3, .r2 .b4, .r3 .b4, .r4 .b3, .r5 .b2, .r6 .b1, .r7 .b1, .r8 .b2, .r9 .b3, .r10 .b4, .r11 .b4, .r12 .b3, .r13 .b2, .r14 .b1, .r15 .b1';

	var spiral3 = '.r1 .b4, .r2 .b3, .r3 .b2, .r4 .b1, .r5 .b1, .r6 .b2, .r7 .b3, .r8 .b4, .r9 .b4, .r10 .b3, .r11 .b2, .r12 .b1, .r13 .b1, .r14 .b2, .r15 .b3';

	var spiral4 = '.r1 .b2, .r2 .b1, .r3 .b1, .r4 .b2, .r5 .b3, .r6 .b4, .r7 .b4, .r8 .b3, .r9 .b2, .r10 .b1, .r11 .b1, .r12 .b2, .r13 .b3, .r14 .b4, .r15 .b4';





	$(spiral1).click(function() {

		if ($('.balloons').hasClass('column-classic')) {

		$(spiral1).toggleClass('active');

		$(this).toggleClass('active');

		}

	});

	$(spiral2).click(function() {

		if ($('.balloons').hasClass('column-classic')) {

		$(spiral2).toggleClass('active');

		$(this).toggleClass('active');

		}

	});

	$(spiral3).click(function() {



		if ($('.balloons').hasClass('column-classic')) {

		$(spiral3).toggleClass('active');

		$(this).toggleClass('active');

		}

	});

	$(spiral4).click(function() {

		if ($('.balloons').hasClass('column-classic')) {

		$(spiral4).toggleClass('active');

		$(this).toggleClass('active');

		}

	});



	$('.template-helium-arch').click(function() {

		$('.fx, .fx > div').show();

		$('.b1, .b2, .b3, .b4, .b5, .top').removeClassExcept("b1 b2 b3 b4 b5 top");

		$('.balloons, .customize, .options, .build-extra, .balloons-container').addClass('helium-arch');

		$('.info2 h1').html(titleheliumarch);

		$('.info2 p').html(listheliumarch);

		$('.b1, .b2, .b3, .b4, .b5, .b6, .b7, .b8, .b9, .b10, .b11, .b12, .b13, .b14, .b15, .b16, .b17, .b18, .b19, .b20').addClass('11in');

		$('.desc_template').html('Helium Arch');

	});





	$('.r1 div').click(function() {

		if ($('.balloons').hasClass('3ft-tassel')) {

		$('.b1, .b2, .b3, .b4').toggleClass('active');

		$(this).toggleClass('active');

		}

	});



	$('.balloons.3ft-tassel .r1').click(function() {

		$('.r1 .b1, .r1 .b2, .r1 .b3, .r1 .b4').toggleClass('active');

	});



	$('#folder-5in .sample').click(function() {

		var getColor = $(this).attr('class');

		var useColor = getColor.split(' ');



		$('.b1, .b2, .b3, .b4, .b5').removeClassExcept("b1 b2 b3 b4 b5 top active");

		$('.b1, .b2, .b3, .b4, .b5').addClass([useColor[1], useColor[2]].join(" ") );

	});



	//$('.template-natural').click(function() {

	//	$('.r1, .r2, .r3').show();

	//	$('.ctop, .b3, .b4, .b5').hide();

	//	document.getElementById("ribbonchange").src="/img/string-simpleribbon.png";

	//	$('.b1, .b2, .b3, .b4, .b5, .top').removeClassExcept("b1 b2 b3 b4 b5 top");

	//	$('.b1, .b2, .b3, .b4, .b5').addClass('11in');

	//	$('.balloons, .customize').addClass('11in-natural');

	//});



	//$('.template-happybirthday1').click(function() {

	//	$('.balloons, .customize').addClass('happybirthday1');

		//$('.b1, .b2, .b3, .b4, .b5, .top').removeClassExcept("b1 b2 b3 b4 b5 top");

	//	document.getElementById("ribbonchange").src="/img/string-cluster-11.png";

	//	$('.b1, .b2, .b3, .b4, .b5').addClass('11in');

	//	$('.b1, .b2, .b3').css('display', 'inline-block');

	//	$('.r2, .r3, .r4, .r5').hide();

	//	$('.top').addClass('foil1');

	//});

	//$('.template-bubbleboy').click(function() {

	//	$('.balloons, .customize').addClass('bubbleboy');

	//	$('.b1, .b2, .b3, .b4, .b5, .top').removeClassExcept("b1 b2 b3 b4 b5 top");

	//	document.getElementById("ribbonchange").src="/img/string-cluster.png";

	//	$('.b1, .b2, .b3, .b4, .b5').addClass('16in');

	//	$('.r1 .b1, .r1 .b3, .r2 .b2').addClass('fashion-robinseggblue');

	//	$('.r1 .b2, .r2 .b1, .r2 .b3').addClass('pearl-light');

	//	$('.r1, .r2, .b1, .b2, .b3').css('display', 'inline-block');

	//	$('.r3, .r4, .r5').hide();

	//	$('.top').addClass('bubble-babyboymoonstars bubble');

	//});

	//$('.template-bubblegirl').click(function() {

	//	$('.balloons, .customize').addClass('bubblegirl');

	//	$('.b1, .b2, .b3, .b4, .b5, .top').removeClassExcept("b1 b2 b3 b4 b5 top");

	//	document.getElementById("ribbonchange").src="/img/string-cluster.png";

	//	$('.b1, .b2, .b3, .b4, .b5').addClass('16in');

	//	$('.r1 .b1, .r1 .b3, .r2 .b2').addClass('fashion-rose');

	//	$('.r1 .b2, .r2 .b1, .r2 .b3').addClass('standard-pink');

	//	$('.r1, .r2, .b1, .b2, .b3').css('display', 'inline-block');

	//	$('.r3, .r4, .r5').hide();

	//	$('.top').addClass('bubble-babygirlmoonstars bubble');

	//});



	$('.opt-tassel').click(function() {

		$('.tasseloptions').show();

		$('.customize-close').css('opacity', '1.0');

	});



	$('.opt-palette').click(function() {

		$('.customize-container').show();

		$(customizelist1).hide();

		$('.palette').show();

		$('.rotated').removeClass('rotated');

		$('.folder').hide();

		$('.customize-close').css('opacity', '1.0');

		$('.palette').css('opacity', '1.0');

	});



		jQuery.fn.removeClassExcept = function (val) {

        return this.each(function (index, el) {

            var keep = val.split(" "),  // list we'd like to keep

            reAdd = [],          // ones that should be re-added if found

            $el = $(el);       // element we're working on

            // look for which we re-add (based on them already existing)

            for (var c = 0; c < keep.length; c++){

              if ($el.hasClass(keep[c])) reAdd.push(keep[c]);

            }



            // drop all, and only add those confirmed as existing

            $el

              .removeClass()               // remove existing classes

              .addClass(reAdd.join(' '));  // re-add the confirmed ones

        });

    };



	$('.select11').click(function() {

		$('.tab11').show();

		$('.select11').addClass('prep');

		$('.select16').removeClass('prep');

		$('.tab16').hide();

	});

	$('.select16').click(function() {

		$('.tab16').show();

		$('.select16').addClass('prep');

		$('.select11').removeClass('prep');

		$('.tab11').hide();

	});



	$('.sample').click(function() {

		var getColor = $(this).attr('class');

		var useColor = getColor.split(' ');



		$('.active').removeClassExcept("b1 b2 b3 b4 b5 b6 b7 b8 b9 b10 b11 b12 b13 b14 b15 b16 b17 b18 b19 b20 top active");

		$('.active').addClass([useColor[1], useColor[2]].join(" ") );

	});

	$('.tassel-sample').click(function() {

		var getColor = $(this).attr('class');

		var useColor = getColor.split(' ');



		$('.active').children('.tassel').css('display', 'block').removeClassExcept("tassel single mini half long");

		$('.active').children('.tassel').addClass([useColor[1], useColor[2]].join(" ") );

	});

	$('[class*="tassel-"]').not('.customize-close').click(function() {

		var getColor = $(this).attr('class');



		$('#ribbonchange').removeClassExcept("ribbonchange, [class*='length-']");

		$('#ribbonchange').addClass(getColor);

	});

	$('.length-single').click(function() {

		document.getElementById("ribbonchange").src="img/tassel-single.png";

		$('#ribbonchange').removeClass('single mini half long');

		$('#ribbonchange').addClass('single');

	});

	$('.length-mini').click(function() {

		document.getElementById("ribbonchange").src="img/tassel-mini.png";

		$('#ribbonchange').removeClass('single mini half long');

		$('#ribbonchange').addClass('mini');

	});

	$('.length-half').click(function() {

		document.getElementById("ribbonchange").src="img/tassel-half.png";

		$('#ribbonchange').removeClass('single mini half long');

		$('#ribbonchange').addClass('half');

	});

	$('.length-full').click(function() {

		document.getElementById("ribbonchange").src="img/tassel-long.png";

		$('#ribbonchange').removeClass('single mini half long');

		$('#ribbonchange').addClass('long');

	});





	$('.palette div').click(function() {

			$(this).children('img:nth-of-type(2)').toggleClass('rotated');

			$(this).next('.folder').toggle();

	});



	$('.opt-expand').click(function() {

		$('.balloons').toggleClass('expanded');

		$('#expand1').toggle();

		$('#expand2').toggle();

	});



	  // OLD FUNCTIONALITY FOR OPENING CUSTOMIZER PALETTES

//	$('.opt-top').click(function() {

//		$('.customize-container').slideToggle(500);

//		$(customizelist1).hide();

//		$(optionslist1).show();

//		$('.customize .top').show();

//	});

//	$('.opt-string').click(function() {

//		$('.customize-container').slideToggle(500);

//		$(customizelist2).hide();

//		$('.customize-close').css('opacity', '1.0');

//		$('.customize .ribbons').show();

//	});

//	$('.opt-tassels').click(function() {

//		$('.customize-container').slideToggle(500);

//		$(customizelist2).hide();

//		$('.customize-close').css('opacity', '1.0');

//		$('.customize .tassels').show();

//	});

//	$('.opt-weight').click(function() {

//		$('.customize-container').slideToggle(500);

//		$(customizelist2).hide();

//		$('.customize-close').css('opacity', '1.0');

//		$('.customize .weights').show();

//	});

	$('.opt-default').click(function() {

		$('.b1, .b2, .b3, .b4, .b5, .top').removeClass(changelist);

	});



//  OLD FUNCTIONALITY FOR CONFIRMING TEMPLATE WITH BUTTON CLICK BEFORE OPENING STEP 2

//	$(document).on('click', '.ready', function () {

//		$('.templates').hide();

//		$('.content').show();

//		$('#begin, #progress1, .info1').css('display', 'none');

//		$('#progress2, .info2').css('display', 'block');

//		$('#proceed, #gobacktemplates').css('display', 'inline-block');

//	});

	$('#gobacktemplates').click(function() {

		$('.ctop').show();

		$('.templates, .b3').show();

		$('.b4, .b5, .customize-container, .tasseloptions, .cost, .r4, .r5, .r6, .r7, .r8, .r9, .r10, .r11, .r12, .r13, .r14, .r15, .fx').hide();

		$('.balloons, .customize, .balloons-container').removeClass(customizeclasses);

		$('.ribbon').removeClass('wide');

		$('#begin').removeClass('ready');

		$('.content, #gobacktemplates').hide();

		$('#begin').css('display', 'inline-block');

		$('#progress1, .info1').css('display', 'block');

		$('#proceed, #gobacktemplates, #progress2, .info2').css('display', 'none');

		$('.options').removeClassExcept("options");

		$('.build-extra').removeClassExcept("build-extra");

		$('.desc_template').html(' ');

	});

	$('#proceed').click(function() {

		var requests = $('section.requests textarea').val();

		$('textarea#message').val(requests);

		$('.select').hide();

		$('#proceed, #gobacktemplates, #progress2, .info2').css('display', 'none');

		$('.expanded').removeClass('expanded');

		$('.b1, .b2, .b3, .b4, .b5, .top').removeClass('active');

		$('.customize-container').hide();

		$('#information').show();

		$('#goback, #finalize').css('display', 'inline-block');

		$('#progress3, .info3').css('display', 'block');

	});

	$('#goback').click(function() {

		var requestsback = $('textarea#message').val();

		$('section.requests textarea').val(requestsback);

		$('.desc_row-1').html('');

		$('.desc_top').html('');

		$('.desc_acc').html('');

		$('.select').show();

		$('#progress2, .info2').css('display', 'block');

		$('#proceed, #gobacktemplates').css('display', 'inline-block');

		$('#information').hide();

		$('#finalcost').html('Please input quantity.');

		$('#goback, #finalize, #progress3, .info3').css('display', 'none');

	});

	$('#finalize').click(function() {

		$('#send').show();

		$('.info2 h1').html(titleFinished);

		$('.info2 p').html(listFinished);

	});



	$('.weight1').click(function() {

		$('.weight img').attr('src', 'img/weight.png');

	});

	$('.weight2').click(function() {

		$('.weight img').attr('src', 'img/weight2.png');

	});



	$('.string1').click(function() {

		$('.ribbon img').attr('src', 'img/string.png');

	});

	$('.string2').click(function() {

		$('.ribbon img').attr('src', 'img/string2.png');

	});





	$('.customize-close, .palette h4').click(function() {

		$('.palette').css('opacity', '0');

		$('.tasseloptions').hide();

		$('.customize-container').fadeOut(300);

		$('.customize-close').css('opacity', '0');

	});

	$('.opt-select').click(function() {

		$('.b1, .b2, .b3, .b4, .b5, .top').addClass('active');

	});

	$('.opt-cancelselect').click(function() {

		$('.active').removeClass('active');

	});

	$('.opt-sub').click(function() {

		$(".balloons > [class*='r']:visible:first").hide();

		$(".select > [class*='opt-r']:visible:first").hide(100);

	});

	$('.opt-add').click(function() {

		$(".balloons > [class*='r']:hidden:last").show();

		$(".select > [class*='opt-r']:hidden:last").show(100);

	});



	$('.opt-weight').hover(function() {

		$('.weight').toggleClass('indicator');

	});

	$('.opt-string').hover(function() {

		$('.ribbon').toggleClass('indicator-nosize');

	});



	$('.opt-collar').click(function() {

		$('.balloons .r1').toggle();

		$('.balloons .r1').toggleClass('super');

	});

		/*

	$('.b1, .b2, .b3, .b4, .b5, .b6, .b7, .b8, .b9, .b10, .b11, .b12, .b13, .b14, .b15, .b16, .b17, .b18, .b19, .b20, .top').click(function() {



		if ($('.b1.active, .b2.active, .b3.active, .b4.active, .b5.active').length) {

				$('.label-3ft, .label-3ft-sa, .label-bubble, .label-doublebubble, .label-mylar, .label-megaloon, .label-letters, .label-numbers, label-5in').next('.folder').hide();

				$('.label-3ft, .label-3ft-sa, .label-bubble, .label-doublebubble, .label-mylar, .label-megaloon, .label-letters, .label-numbers, label-5in').removeClass('available');

				$('.label-3ft, .label-3ft-sa, .label-bubble, .label-doublebubble, .label-mylar, .label-megaloon, .label-letters, .label-numbers, label-5in').addClass('unavailable');

		}

		if ($('.top.active').length) {

				$('.label-3ft, .label-3ft-sa, .label-bubble, .label-doublebubble, .label-mylar, .label-megaloon, .label-letters, .label-numbers').removeClass('unavailable');

				$('.label-3ft, .label-3ft-sa, .label-bubble, .label-doublebubble, .label-mylar, .label-megaloon, .label-letters, .label-numbers').addClass('available');

		}





		if ($('.5in.active').length) {

				$('.label-5in').removeClass('.unavailable');

				$('.label-5in').addClass('.available');

		}

	}); */





	$('.b1, .b2, .b3, .b4, .b5, .b6, .b7, .b8, .b9, .b10, .b11, .b12, .b13, .b14, .b15, .b16, .b17, .b18, .b19, .b20').click(function() {

		$(this).toggleClass('active');

		if ($('.top').hasClass('active')) {

			$('.top').removeClass('active');

			$('.folder').hide();

		}

	});



	$('.top').click(function() {

		$(this).toggleClass('active');

		$('.b1, .b2, .b3, .b4, .b5, .b6, .b7, .b8, .b9, .b10, .b11, .b12, .b13, .b14, .b15, .b16, .b17, .b18, .b19, .b20').removeClass('active');

			$('.folder').hide();

	});







	$('html').click(function() {

		// recalculate per item change (on page click)

		total = 0;



		// PRICING PER CLASS

		$('.balloons .11in:visible').each(function() {

			total+=295;

		});

		$(".balloons .11cr:visible").each(function() {

			total+=350;

		});

		$('.balloons .11sa:visible').each(function() {

			total+=350;

		});

		$('.balloons .16in:visible').each(function() {

			total+=700;

		});

		$('.balloons .ABC123mylar:visible').each(function() {

			total+=1775;

		});

		$('.balloons .bubble:visible').each(function() {

			total+=1250;

		});

		$('.balloons .doublebubble:visible').each(function() {

			total+=1750;

		});

		$('.balloons .3ft:visible').each(function() {

			total+=2750;

		});

		$('.balloons .megaloon:visible').each(function() {

			total+=2175;

		});

		$('.balloons .supershape:visible').each(function() {

			total+=2300;

		});

		$('.balloons .ultrashape:visible').each(function() {

			total+=2050;

		});

		$('.balloons .18mylar:visible').each(function() {

			total+=650;

		});



		// ADAPTIVE PRICING FOR BOUQUET SIZES



		// Pricing per weight

		var bouquetSize = $('.balloons .b1:visible, .balloons .b2:visible, .balloons .b3:visible, .balloons .b4:visible, .balloons .b5:visible').length;

		// 1-10 balloons

		if (bouquetSize < 11) {

			total+=200;

	 	 // 11-16 balloons

		} else if (bouquetSize < 17) {

			total+=400;

	 	 // 17+

		} else { total+=600; } // ADD $6.00 FOR EXTRA LARGE BOUQUETS





		// UNIQUE PRICING FOR SPECIALTY BALLOONS

		// PLEASE NOTE:

		// IFF (if and only if) the balloon also has a standard Price Class (supershape, megaloon, 11in, bubble, etc), only add the DIFFERENCE IN PRICE here.

		// ex. supershape-girlbabyduck has "supershape" price class, adding $22.50 to the total already. Its retail price is $35.00, so add only ($35-22.50=$12.50) to the total below.



		$('.balloons .supershape-girlbabyduck:visible').each(function() {

			total+=1250;

		});

		$('.balloons .supershape-boybabyduck:visible').each(function() {

			total+=1250;

		});

		$('.balloons .supershape-3dhats:visible').each(function() {

			total+=250;

		});

		$('.balloons .supershape-gradstarts:visible').each(function() {

			total+=2250;

		});





		// PRICING FOR TASSEL LENGTHS

		// PLEASE NOTE: This function does not account for specialty tassel colours.



		$('#ribbonchange.long:visible').each(function() {

			total+=7500;

		});

		$('#ribbonchange.half:visible').each(function() {

			total+=5500;

		});

		$('#ribbonchange.mini:visible').each(function() {

			total+=4500;

		});

		$('#ribbonchange.single:visible').each(function() {

			total+=225;

		});



		//if(document.getElementById('delivery').checked) {

  		//	total+=1200;

		//}else if(document.getElementById('pickup').checked) {

  		//	total+=0;

		//}





		// removed for simplified pricing Dec 2018

		// Pricing for assembly / labour. This function is identical to the previous weight function with adjusted values.

		//var bouquetSize = $('.balloons .b1:visible, .balloons .b2:visible, .balloons .b3:visible, .balloons .b4:visible, .balloons .b5:visible').length;

		// 1-9 balloons

		//if (bouquetSize < 10) {

		//	total+=150;

	  // 10-16 balloons

		//} else if (bouquetSize < 17) {

		//	total+=300;

	  // 17+

		//} else { total+=300; } // ADD $3.00 FOR EXTRA LARGE BOUQUETS / PRICING FOR ARCHES?



		// Pricing for bouquets with jumbo / 3ft classes

		// Checks for ANY of the classes below and changes price if valid

		//var bouquetTopper = $('.balloons .3ft:visible, .balloons .megaloon:visible, .balloons .bubble:visible, .balloons .doublebubble:visible').each;

		//if (bouquetSize < 10 && bouquetTopper > 0) {

		//	total+=200;

		//} else if (bouquetSize < 17 && bouquetTopper > 0) {

		//	total+=400;

		//} else { total+=400; }







		var total = total/100;

		$('.cost span').html('$' + total.toFixed(2) + "/piece");

		$('.cost .costCalc').html(total.toFixed(2));





		var balloonCount = $('.b1:visible, .b2:visible, .b3:visible, .b4:visible, .b5:visible, .b6:visible, .b7:visible, .b8:visible, .b9:visible, .b10:visible, .b11:visible, .b12:visible, .b13:visible, .b14:visible, .b15:visible, .b16:visible, .b17:visible, .b18:visible, .b19:visible, .b20:visible, .top:visible').length;

		$('.counter').html(balloonCount + ' balloons');





	if ($('.top').hasClass("active")) {

		$('.palette').addClass("supercheck");

	} else {

		$('.palette').removeClass("supercheck");

	};



	if ($('.active').length == 0 && $('.app-container').hasClass("beginner")) {

		$('.opt-palette').toggleClass("tut-arrow");

	} else if ($('.active').length == 0) {

		$('#allstyles').hide();

		$('#pickfirst').show();

	} else {

		$('#allstyles').show();

		$('#pickfirst').hide();

	};









	}); /* END OF ON-CLICK DETECTION */



	$('.palette [class*="label-"]').click(function() {

		var chosen = $(this);

    $('.palette').animate({

        scrollTop: $(chosen).position().top},

        'slow');

	});





	$('#tutorial h3').click(function() {

		$(this).next('p').removeClass('hidden');

	});

	$('#tutorial .userlevel.beginner').click(function() {

		$('#tutorial, .app-container').addClass('beginner');

		$('.label-fashion').addClass("tut-arrow");

		$('.tut-box').hide();

		$('.tut-box2').show();

	});

	$('#tutorial .userlevel.advanced').click(function() {

		$('#tutorial, .app-container').addClass('advanced');

		$('#tutorial').hide();

	});

	$('.close-tut').click(function() {

		$('#tutorial').hide();

	});

	$('.beta-warn').click(function() {

		$('.beta-warn').fadeOut('slow', function() {

			$(this).remove();

		});

	});



	$(document).on("click", ".introa", function() {

		$('#pintro').hide();

		$('.select').css('opacity', '1.0');

		$(this).removeClass('tut-arrow introa');

	});

	$(document).on("click", ".tut-arrow", function() {

		$(this).removeClass('tut-arrow');

	});

	$('#pintro').click(function() {

		$('#pintro').hide();

		$('.select').css('opacity', '1.0');

	});



	$('.opt-palette').click(function() {

		if ($('.app-container').hasClass('beginner')) {

		$('#tutorial-box').fadeIn(1000);

		$('#bintro').html(tutorial1);

		} else {

		}

	});



	$('#tutorial-box').click(function() {

		$(this).fadeOut(1000);

	});



	$('input').click(function() {

	if(document.getElementById('delivery').checked) {

  		$('#deliversettings').show();

	}else if(document.getElementById('pickup').checked) {

  		$('#deliversettings').hide();

	}

	});





});

