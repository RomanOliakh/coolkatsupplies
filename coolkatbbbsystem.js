
    /*Order Information START*/

    $(document).ready(function () {
        var orderID = function () {
            var text = "";
            var possible = "abdegijklmopqrstuvwxyz0123456789";

            for (var i = 0; i < 5; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));

            return text;
        }

        $('.refresh').click(function () {
            window.location.reload(true);
        });

        $('#proceed').click(function () {
            $('.balloons .b1:visible, .balloons .b2:visible, .balloons .b3:visible, .balloons .b4:visible, .balloons .b5:visible').each(function () {
                $(this).removeClass('active');
                var getDesc = $(this).attr('class');
                var useDesc = getDesc.split(' ');
                $('.desc_row-1').append('<br/>| ' + getDesc);
            });
            if ($('#top').is(':visible')) {
                var getTop = $('.balloons #top:visible').attr('class');
                var useTop = getTop.split(' ');
                $('.desc_top').append('<br/>| ' + getTop);
            }
            if ($('.build-extra').hasClass('3ft-tassel')) {
                var getTas = $('#ribbonchange').attr('class');
                $('.desc_acc').append('<br/>| ' + getTas);

            }
            $('.finaltitle').show();
            $('#orderID').html(orderID);
        });

        $('#inputquantity').change(function () {
            var costCalc = ($('#inputquantity').val()) * ($('.costCalc').text());
            $('.finalCost').html("$" + costCalc.toFixed(2));
        });

        $('#finalize').click(function () {
            var provide = document.querySelector('input[name="provide"]:checked').value;
            $(this).fadeOut(1000);

            var data =
                {
                    name: $("#name").val(),
                    orderID: $("#orderID").text(),
                    quantity: $("#inputquantity").val(),
                    cost: $("#totalvalue").text(),
                    costCalc: $(".finalCost").text(),
                    deliver: $('input[name="provide"]:checked').val(),
                    deliveryaddress: $("#deliveryaddress").val(),
                    deliverycity: $("#deliverycity").val(),
                    deliverypostal: $("#deliverypostal").val(),
                    date: $("#inputdate").val(),
                    time: $("#inputtime").val(),
                    email: $("#email").val(),
                    message: $("#message").val(),
                    temBal: $(".desc_template").text(),
                    topBal: $(".desc_top").text(),
                    bodBal: $(".desc_row-1").text(),
                    accessories: $(".desc_acc").text(),
                };
            $.ajax(
                {
                    type: "POST",
                    url: "send.php",
                    data: data,
                    success: function () {
                        $('#progress, #information').hide();
                        $('.success, #finished').show();
                    }
                });
        });
    });

/*Order Information END*/



/*Change BG Img Webflow CMS START*/

$(document).ready(function() {
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

    $('.sample').click(function() {
        var getColor = $(this).attr('class');
        var useColor = getColor.split(' ');

        $('.active').removeClassExcept("b1 b2 b3 b4 b5 b6 b7 b8 b9 b10 b11 b12 b13 b14 b15 b16 b17 b18 b19 b20 top alt single-string active");
        $('.active').addClass([useColor[1], useColor[2]].join(" ") );

    });





});
/*Change BG Img Webflow CMS END*/



/*Click to (toggle) Active Balloon START*/

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

/*Click to (toggle) Active Balloon END*/



/* Click to select-deselect ALL balloon START*/

$('#opt-select').click(function () {
    $('.b1, .b2, .b3, .b4, .b5, .b6, .b7, .b8, .b9, .b10, .b11, .b12, .b13, .b14, .b15, .b16, .b17, .b18, .b19, .b20, .top').addClass('active');
});

$('#opt-deselect').click(function () {
    $('.active').removeClass('active');
});

/* Click to select-deselect ALL balloon END*/



/* Click to ADD-REMOVE balloon START*/

$('#opt-sub').click(function () {
    $(".balloons > [class*='r']:visible:first").hide();
    $(".select > [class*='opt-r']:visible:first").hide(100);
});

$('#opt-add').click(function () {
    $(".balloons > [class*='r']:hidden:last").show();
    $(".select > [class*='opt-r']:hidden:last").show(100);

});

/* Click to ADD-REMOVE balloon END*/





var titleCascading = "Cascading Arrangement";
var listCascading = "A multi-purpose classic. Each balloon is anchored to the weight with even vertical spacing.<br /><br />Arrangement details:<br />• 11\" and 16\" balloons only<br />• 2 - 7 balloons total";
var titleSingleString = "Single String Arrangement";
var listSingleString = "Clean, compact, balloons! This arrangement staggers each balloon on a single weighted line.<br /><br />Arrangement details:<br />• 11\" and 16\" balloons only<br />• 1 - 16 balloons";
var titleDuoString = "Duo String Arrangement";
var listDuoString = "Perfect for colour harmonies. This arrangement staggers pairs of balloons on a single weighted line with a standard topper. Great for centerpieces and scattered decor.<br /><br />Arrangement details:<br />• 11\" and 16\" balloons only<br />• 3 - 15 balloons";
var titleClassicArrangement = "Classic Arrangement";
var listClassicArrangement = "A big and beautiful bouquet. Rows of 3 balloons tied to a single weighted line with a standard topper. Great for centerpieces and focal points.<br /><br />Arrangement details:<br />• 11\" and 16\" balloons only<br />• 4 - 18 balloons";
var titleSingles = "Singles (No Arrangement)";
var listSingles = "Make your own bunch of balloons. This style has NO structure or staggering.<br /><br />Arrangement details:<br />• 11\" and 16\" balloons only<br />• 13 - 20 balloons<br />• Select colour and quantity";
var titleSupershapeDuo = "Supershape Duo Arrangement";
var listSupershapeDuo = "This arrangement staggers pairs of balloons on a single weighted line with a specialty topper. Customize for any occasion!<br /><br />Arrangement details:<br />• 11\" and 16\" balloons for bouquet body<br />• Choice of Megaloon top balloon<br />• 3 - 15 balloons";
var titleSupershapeClassic = "Supershape Classic Arrangement";
var listSupershapeClassic = "The original bouquet with an eye-catching Megaloon top. Rows of 3 balloons tied to a single weighted line. Great for centerpieces and focal points.<br /><br />Arrangement details:<br />• 11\" and 16\" balloons for bouquet body<br />• Choice of Megaloon top balloon<br />• 4 - 18 balloons";



$(document).ready(function() {

		/*Main Setup Arrangement*/

    $('.templates-holder div').click(function() {
        $('.balloons, .customize').removeClass(customizeclasses);
        $('.templates div').removeClass('selected');
        $(this).addClass('selected');
        $('.templates-holder').hide();
        $('.content, .cost').show();
  
	});
  
    /*Cascading Arrangement*/
  
    $('.template-cascadingarrangement').click(function() {
        $('.b1, .b2, .b3, .b4, .b5, .top').removeClassExcept("b1 b2 b3 b4 b5 top ");
        $('.b1, .b2, .b3, .b4, .b5, .top').addClass("qualatex-dark-blue-latex-107283");
        $('.balloons, .customize').addClass('cascadingarrangement');
		    document.getElementById("ribbonchange").src="https://uploads-ssl.webflow.com/5d53e5f001f72ae5acff44a9/5e35a7c4a3d85b8cdc17df65_string-simpleribbon.png";
        $('.arrangement-title').html(titleCascading);
		    $('.arrangement-text').html(listCascading);
        $('.desc_template').html('Classic Arrangement');
        $('.step-link').removeClassExcept("step-link");
	$('#builder-step2').addClass("select");
    
        

	});
	
      /*Single String Arrangement*/
  
    $('.template-singlestring').click(function() {
        $('.b1, .b2, .b3, .b4, .b5, .top').removeClassExcept("b1 b2 b3 b4 b5 top ");
        $('.b1, .b2, .b3, .b4, .b5, .top').addClass("qualatex-dark-blue-latex-107283");
        $('.balloons, .customize').addClass('singlestring');
		    document.getElementById("ribbonchange").src="https://uploads-ssl.webflow.com/5d53e5f001f72ae5acff44a9/5e8df7561ce826117f199bf3_string.png";
        $('.arrangement-title').html(titleSingleString);
		    $('.arrangement-text').html(listSingleString);
        $('.desc_template').html('Single String Arrangement');
        $('.step-link').removeClassExcept("step-link");
        $('#builder-step2').addClass("select");


	});
	
      /*Duo Arrangement*/
  
    $('.template-duostring').click(function() {
        $('.b1, .b2, .b3, .b4, .b5, .top').removeClassExcept("b1 b2 b3 b4 b5 top ");
        $('.b1, .b2, .b3, .b4, .b5, .top').addClass("qualatex-dark-blue-latex-107283");
        $('.balloons, .customize').addClass('duostring');
		    document.getElementById("ribbonchange").src="https://uploads-ssl.webflow.com/5d53e5f001f72ae5acff44a9/5e8df7561ce826117f199bf3_string.png";
        $('.arrangement-title').html(titleDuoString);
		    $('.arrangement-text').html(listDuoString);
        $('.desc_template').html('Duo String Arrangement');
        $('.step-link').removeClassExcept("step-link");
        $('#builder-step2').addClass("select");


	});
  
        /*Classic Arrangement*/
  
    $('.template-classicarrangement').click(function() {
        $('.b1, .b2, .b3, .b4, .b5, .top').removeClassExcept("b1 b2 b3 b4 b5 top ");
        $('.b1, .b2, .b3, .b4, .b5, .top').addClass("qualatex-dark-blue-latex-107283");
        $('.balloons, .customize').addClass('classicarrangement');
		    document.getElementById("ribbonchange").src="https://uploads-ssl.webflow.com/5d53e5f001f72ae5acff44a9/5e8e11ed7bc08b5a67d3ac80_string-cluster.png";
        $('.arrangement-title').html(titleClassicArrangement);
		    $('.arrangement-text').html(listClassicArrangement);
        $('.desc_template').html('Classic Arrangement');
        $('.step-link').removeClassExcept("step-link");
        $('#builder-step2').addClass("select");


	});
  
        /*Singles Arrangement*/
  
    $('.template-singles').click(function() {
        $('.b1, .b2, .b3, .b4, .b5, .top').removeClassExcept("b1 b2 b3 b4 b5 top ");
        $('.b1, .b2, .b3, .b4, .b5, .top').addClass("qualatex-dark-blue-latex-107283");
        $('.balloons, .customize').addClass('singles');
		    document.getElementById("ribbonchange").src="https://uploads-ssl.webflow.com/5d53e5f001f72ae5acff44a9/5e8ef5815d89c2c8c2d524d6_string-umbrella2.png";
        $('.ribbon').addClass('wide');
        $('.arrangement-title').html(titleSingles);
		    $('.arrangement-text').html(listSingles);
        $('.desc_template').html('Singles Arrangement');
        $('.step-link').removeClassExcept("step-link");
	$('#builder-step2').addClass("select");


	});  
  
        /*Supershape Duo Arrangement*/
  
    $('.template-supershapeduo').click(function() {
        $('.b1, .b2, .b3, .b4, .b5, .top').removeClassExcept("b1 b2 b3 b4 b5 top ");
        $('.b1, .b2, .b3, .b4, .b5, .top').addClass("qualatex-dark-blue-latex-107283");
        $('.balloons, .customize').addClass('supershapeduo');
		    document.getElementById("ribbonchange").src="https://uploads-ssl.webflow.com/5d53e5f001f72ae5acff44a9/5e8df7561ce826117f199bf3_string.png";
        $('.arrangement-title').html(titleSupershapeDuo);
		    $('.arrangement-text').html(listSupershapeDuo);
        $('.desc_template').html('Supershape Duo Arrangement');
        $('.step-link').removeClassExcept("step-link");
	$('#builder-step2').addClass("select");


	}); 
    
        /*Supershape Classic Arrangement*/
  
    $('.template-supershapeclassic').click(function() {
        $('.b1, .b2, .b3, .b4, .b5, .top').removeClassExcept("b1 b2 b3 b4 b5 top ");
        $('.b1, .b2, .b3, .b4, .b5, .top').addClass("qualatex-dark-blue-latex-107283");
        $('.balloons, .customize').addClass('supershapeclassic');
		    document.getElementById("ribbonchange").src="https://uploads-ssl.webflow.com/5d53e5f001f72ae5acff44a9/5e8e11ed7bc08b5a67d3ac80_string-cluster.png";
        $('.arrangement-title').html(titleSupershapeClassic);
		    $('.arrangement-text').html(listSupershapeClassic);
        $('.desc_template').html('Supershape Classic Arrangement');
        $('.step-link').removeClassExcept("step-link");
	$('#builder-step2').addClass("select");


	}); 
    
        /*Megaloon on String Arrangement*/
  
    $('.template-megaloonstring').click(function() {
        $('.b1, .b2, .b3, .b4, .b5, .top').removeClassExcept("b1 b2 b3 b4 b5 top ");
        $('.b1, .b2, .b3, .b4, .b5').addClass("qualatex-dark-blue-latex-107283");
        $('.top, .ctop').addClass("supershape");
        $('.balloons, .customize').addClass('megaloonstring');
		    document.getElementById("ribbonchange").src="https://uploads-ssl.webflow.com/5d53e5f001f72ae5acff44a9/5e8df7561ce826117f199bf3_string.png";
        $('.arrangement-title').html(titleMegaloonString);
		    $('.arrangement-text').html(listMegaloonString);
        $('.desc_template').html('Megaloon on String');
        $('.step-link').removeClassExcept("step-link");
	$('#builder-step2').addClass("select");

        
       
	}); 
  
});

