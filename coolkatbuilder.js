var customizeclasses = "11inclusterstring classicarrangement 11induoclusterstring duoarrangement cascadingarrangement 16insimpleribbon 11insimplestring 16insimplestring umbrella 3ft-tassel megaloon-string supershape-duo supershape-classic column-classic helium-arch";

var listCascading = "A multi-purpose classic. Each balloon is anchored to the weight with even vertical spacing.<br /><br />Arrangement details:<br />• 11\" and 16\" balloons only<br />• 2 - 7 balloons total";
var titleSinglestring = "Single String Arrangement";


$(document).ready(function () {






    $('.templates-holder div').click(function () {
        $('.balloons, .customize').removeClass(customizeclasses);
        $('.templates-holder div').removeClass('selected');
        $(this).addClass('selected');
        $('.templates').hide();
        $('.content, .cost').show();
        $('#begin, #progress1, .info1').css('display', 'none');
        $('#progress2, .info2').css('display', 'block');
        $('#proceed, #gobacktemplates').css('display', 'inline-block');
    });
    
    
    $('.template-cascadingarrangement').click(function () {
        $('.r1, .r2, .r3').show();
        $('.ctop').hide();
        document.getElementById("ribbonchange").src = "img/string-simpleribbon.png";
        $('.b1, .b2, .b3, .b4, .b5, .top').removeClassExcept("b1 b2 b3 b4 b5 top");
        $('.b1, .b2, .b3, .b4, .b5').addClass('11in');
        $('.info2 h1').html(titleCascading);
        $('.info2 p').html(listCascading);
        $('.balloons, .customize').addClass('cascadingarrangement');
        $('.desc_template').html('Cascading');

    });
    
   

});
