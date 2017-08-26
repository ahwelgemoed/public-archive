$(document).ready(function(){
        $("#redbox").fadeIn(5000);
        $("#open").fadeIn(10000);
        setTimeout(function() {
            $(".dogicon").addClass("dogan");
        }, 3000);
        
});

$(".dogicon").click(function(){
    $("#redbox").animate({opacity: '0'}
    
);
    $(".dogicon").animate({opacity: '0'}
);
    $("video").animate({opacity: '0'});
}); 
