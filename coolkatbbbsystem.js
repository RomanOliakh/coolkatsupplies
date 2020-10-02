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

$('.b1, .b2, .b3, .b4, .b5, .b6, .b7, .b8, .b9, .b10, .b11, .b12, .b13, .b14, .b15, .b16, .b17, .b18, .b19, .b20, .top').click(function() {
    $(this).toggleClass('active');
    
});

/*Click to (toggle ALL) Active Balloon START*/

document.addEventListener('DOMContentLoaded', ()=>{
 document.querySelectorAll('.toggle-select').forEach(trigger => {
  trigger.addEventListener('click', function(){ 
    this.x = ((this.x || 0) + 1)%2; 
    if(this.x){ 
      document.querySelectorAll('.b1, .b2, .b3, .b4, .b5, .b6, .b7, .b8, .b9, .b10, .b11, .b12, .b13, .b14, .b15, .b16, .b17, .b18, .b19, .b20, .top').forEach(target => target.classList.add('active'));
    }
    else{ 
      document.querySelectorAll('.b1, .b2, .b3, .b4, .b5, .b6, .b7, .b8, .b9, .b10, .b11, .b12, .b13, .b14, .b15, .b16, .b17, .b18, .b19, .b20, .top').forEach(target => target.classList.remove('active'));
    } 
  });
 });
});



/* Click to select-deselect ALL balloon START*/

$('#opt-select').click(function () {
    $('.b1, .b2, .b3, .b4, .b5, .b6, .b7, .b8, .b9, .b10, .b11, .b12, .b13, .b14, .b15, .b16, .b17, .b18, .b19, .b20, .top').addClass('active');
});

$('#opt-deselect').click(function () {
    $('.active').removeClass('active');
});

/* Click to select-deselect ALL balloon END*/



/* Click to ADD-REMOVE balloon START*/

$('#opt-remove-cascading').click(function () {
    $(".balloons.cascadingarrangement > [class*='r']:visible:first").hide();
});

$('#opt-add-cascading').click(function () {
    $(".balloons.cascadingarrangement > [class*='r']:hidden:last").css('display', 'block');
});


$('#opt-remove-classic').click(function () {
    $(".balloons.classicarrangement > [class*='r']:visible:first").hide();
});

$('#opt-add-classic').click(function () {
    $(".balloons.classicarrangement > [class*='r']:hidden:last").css('display', 'block');
});


$('#opt-remove-singles').click(function () {
    $(".balloons.singles > [class*='r']:visible:first").hide();
});

$('#opt-add-singles').click(function () {
    $(".balloons.singles > [class*='r']:hidden:last").css('display', 'block');  
});

/* Click to ADD-REMOVE balloon END*/




var customizeclasses = "cascadingarrangement classicarrangement singles expanded gobacktemplates";

var titleCascading = "Cascading Arrangement";
var listCascading = "A multi-purpose classic. Each balloon is anchored to the weight with even vertical spacing.<br /><br />Arrangement details:<br />• 11\" and 16\" balloons only<br />• 2 - 7 balloons total";
var titleClassicArrangement = "Classic Arrangement";
var listClassicArrangement = "A big and beautiful bouquet. Rows of 3 balloons tied to a single weighted line with a standard topper. Great for centerpieces and focal points.<br /><br />Arrangement details:<br />• 11\" and 16\" balloons only<br />• 4 - 18 balloons";
var titleSingles = "Singles (No Arrangement)";
var listSingles = "Make your own bunch of balloons. This style has NO structure or staggering.<br /><br />Arrangement details:<br />• 11\" and 16\" balloons only<br />• 13 - 20 balloons<br />• Select colour and quantity";


$(document).ready(function() {

		/*Main Setup Arrangement*/

    $('.templates-holder div').click(function() {
        $('.balloons, .customize').removeClass(customizeclasses);
        $('.templates div').removeClass('selected');
        $(this).addClass('selected');
        $('.templates-holder').hide();
        $('.content, .cost').show();
	$('.info1').css('display', 'none');
	$('.info2').css('display', 'flex');
    });
  
    /*Cascading Arrangement*/
  
    $('.template-cascadingarrangement').click(function() {
        $('.b1, .b2, .b3, .b4, .b5, .top').removeClassExcept("b1 b2 b3 b4 b5 top ");
        $('.b1, .b2, .b3, .b4, .b5, .top').addClass("qualatex-yellow-latex-107290");
        $('.balloons, .customize').addClass('cascadingarrangement');
	$('.balloons').addClass('expanded');
	document.getElementById("ribbonchange").src="https://uploads-ssl.webflow.com/5d53e5f001f72ae5acff44a9/5e35a7c4a3d85b8cdc17df65_string-simpleribbon.png";
	    
	$('.b1, .b2, .b3, .b4, .b5, .top').addClass('11in');
	    
        $('.info2 .arrangement-title').html(titleCascading);
	$('.info2 .arrangement-text').html(listCascading);
        $('.desc_template').html('Classic Arrangement');
        $('.step-link').removeClassExcept("step-link");
	$('#builder-step2').addClass("select");
	$('#btn-holder-classic').css('display', 'none');
	$('#btn-holder-singles').css('display', 'none');
        $('#btn-holder-cascading').css('display', 'flex');
    
        

	});

  
        /*Classic Arrangement*/
  
    $('.template-classicarrangement').click(function() {
        $('.b1, .b2, .b3, .b4, .b5, .top').removeClassExcept("b1 b2 b3 b4 b5 top ");
        $('.b1, .b2, .b3, .b4, .b5, .top').addClass("qualatex-yellow-latex-107290");
        $('.balloons, .customize').addClass('classicarrangement');
	$('.balloons').addClass('expanded');
	document.getElementById("ribbonchange").src="https://uploads-ssl.webflow.com/5d53e5f001f72ae5acff44a9/5e8e11ed7bc08b5a67d3ac80_string-cluster.png";
	    
	$('.b1, .b2, .b3, .b4, .b5, .top').addClass('11in');

        $('.info2 .arrangement-title').html(titleClassicArrangement);
	$('.info2 .arrangement-text').html(listClassicArrangement);
        $('.desc_template').html('Classic Arrangement');
        $('.step-link').removeClassExcept("step-link");
        $('#builder-step2').addClass("select");
	$('#btn-holder-cascading').css('display', 'none');
	$('#btn-holder-singles').css('display', 'none');
        $('#btn-holder-classic').css('display', 'flex');


	});
  
        /*Singles Arrangement*/
  
    $('.template-singles').click(function() {
        $('.b1, .b2, .b3, .b4, .b5, .top').removeClassExcept("b1 b2 b3 b4 b5 top ");
        $('.b1, .b2, .b3, .b4, .b5, .top').addClass("qualatex-yellow-latex-107290");
        $('.balloons, .customize').addClass('singles');
	$('.balloons').addClass('expanded');
	document.getElementById("ribbonchange").src="https://uploads-ssl.webflow.com/5d53e5f001f72ae5acff44a9/5e8ef5815d89c2c8c2d524d6_string-umbrella2.png";
	    
	$('.b1, .b2, .b3, .b4, .b5, .top').addClass('11in');

        $('.ribbon').addClass('wide');
        $('.info2 .arrangement-title').html(titleSingles);
	$('.info2 .arrangement-text').html(listSingles);
        $('.desc_template').html('Singles Arrangement');
        $('.step-link').removeClassExcept("step-link");
	$('#builder-step2').addClass("select");
	$('#btn-holder-classic').css('display', 'none');
	$('#btn-holder-cascading').css('display', 'none');
        $('#btn-holder-singles').css('display', 'flex');


	});  
	
	
	$('#proceed').click(function() {
		$('.baloons-options').hide();		  
		$('.balloons').removeClass('expanded');
		$('.b1, .b2, .b3, .b4, .b5, .top').removeClass('active')	
		$('#information').show();
      
      		$('#select-btn-holder').css('display', 'none'); 
		$('#order-btn-holder').css('display', 'flex');
      
		$('.info2').css('display', 'none');
	    	$('.info3').css('display', 'flex');
      
      		$('.step-link').removeClassExcept("step-link");
		$('#builder-step3').addClass("select");
  
	});
  
  
  	$('#goback').click(function() {
		$('.desc_row-1').html('');
		$('.desc_top').html('');
		$('.desc_acc').html('');
		$('.select').show();
      		$('.baloons-options').show();
      		$('#information').hide();
		$('.balloons').addClass('expanded');

      
      		$('.info3').css('display', 'none');
	    	$('.info2').css('display', 'flex');
		
		$('#select-btn-holder').css('display', 'flex'); 
		$('#order-btn-holder').css('display', 'none');
      
		$('.step-link').removeClassExcept("step-link");
		$('#builder-step2').addClass("select");
			   
	});
	
	
	$('#opt-expand').click(function() {
		$('.balloons').toggleClass('expanded');
		$('#expand1').toggle();
		$('#expand2').toggle();
	});
	
	
/*Draggable Balloon holder START*/
$( function() {
    $( "#latex-holder" ).draggable({ 
    	handle: ".balloon-box-header", 
      containment: "#builder-section",
      });
   
    
    $( "#foil-holder" ).draggable({ 
    	handle: ".balloon-box-header", 
      containment: "#builder-section",
      });
    
   
   $( "#supershape-holder" ).draggable({ 
    	handle: ".balloon-box-header", 
      containment: "#builder-section",
      });
    
  } );
  
	/*Draggable Balloon holder END*/

/*Plus Minus Counter START*/
$('#opt-add-cascading').click(function () {
		if ($(this).prev().text() < 20) {
    	$(this).prev().text(+$(this).prev().text() + 1);
		}
});
$('#opt-remove-cascading').click(function () {
		if ($(this).next().text() > 3) {
    	if ($(this).next().text() > 3) $(this).next().text(+$(this).next().text() - 1);
		}
});

$('#opt-add-classic').click(function () {
		if ($(this).prev().text() < 61) {
    	$(this).prev().text(+$(this).prev().text() + 3);
		}
});
$('#opt-remove-classic').click(function () {
		if ($(this).next().text() > 7) {
    	if ($(this).next().text() > 7) $(this).next().text(+$(this).next().text() - 3);
		}
});

$('#opt-add-singles').click(function () {
		if ($(this).prev().text() < 19) {
    	$(this).prev().text(+$(this).prev().text() + 3);
		}
});
$('#opt-remove-singles').click(function () {
		if ($(this).next().text() > 13) {
    	if ($(this).next().text() > 13) $(this).next().text(+$(this).next().text() - 3);
		}
});

/*Plus Minus Counter END*/
	
	$('#gobacktemplates').click(function() {
    location.reload();
});

});	
	
document.addEventListener('DOMContentLoaded', ()=>{
 document.querySelectorAll('#latex-btn').forEach(trigger => {
  trigger.addEventListener('click', function(){ 
    this.x = ((this.x || 0) + 1)%2; 
    if(this.x){ 
      document.querySelectorAll('#latex-btn').forEach(target => target.classList.add('btn-active'));
      document.querySelectorAll('#latex-holder').forEach(target => target.classList.add('open'));
    }
    else{ 
      document.querySelectorAll('#latex-btn').forEach(target => target.classList.remove('btn-active'));
      document.querySelectorAll('#latex-holder').forEach(target => target.classList.remove('open'));
    } 
  });
	 
	 
 });
 
 document.querySelectorAll('#foil-btn').forEach(trigger => {
  trigger.addEventListener('click', function(){ 
    this.x = ((this.x || 0) + 1)%2; 
    if(this.x){ 
      document.querySelectorAll('#foil-btn').forEach(target => target.classList.add('btn-active'));
      document.querySelectorAll('#foil-holder').forEach(target => target.classList.add('open'));
    }
    else{ 
      document.querySelectorAll('#foil-btn').forEach(target => target.classList.remove('btn-active'));
      document.querySelectorAll('#foil-holder').forEach(target => target.classList.remove('open'));
    } 
  });
 });

 document.querySelectorAll('#supershape-btn').forEach(trigger => {
  trigger.addEventListener('click', function(){ 
    this.x = ((this.x || 0) + 1)%2; 
    if(this.x){ 
      document.querySelectorAll('#supershape-btn').forEach(target => target.classList.add('btn-active'));
      document.querySelectorAll('#supershape-holder').forEach(target => target.classList.add('open'));
    }
    else{ 
      document.querySelectorAll('#supershape-btn').forEach(target => target.classList.remove('btn-active'));
      document.querySelectorAll('#supershape-holder').forEach(target => target.classList.remove('open'));
    } 
  });
 });
});
	
