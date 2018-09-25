console.log("Sanity Check: JS is working!");


$("#time").text( Date.now() );

$(document).ready(function(){
            $(".total").val("0");
            $(".add").val("");

            function calc(){
            var $left= +$("#left").val();
            var $right= +$("#right").val();
            $("#total").val($left + $right);
        }
        $(".add").keyup(function(){
            calc();
        });
});