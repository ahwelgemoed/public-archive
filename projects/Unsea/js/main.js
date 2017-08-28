"use strict";

setTimeout(function() {
    $(document).ready(function(){
        $("#redbox1").fadeIn(2000);
        $("#open1").fadeIn(2000);
        $("#redbox2").fadeIn(4000);
        $("#open2").fadeIn(4000);
        $("#redbox3").fadeIn(6000);
        $("#open3").fadeIn(6000);
        $("#redbox4").fadeIn(8000);
        $("#open4").fadeIn(8000);
            setTimeout(function() {
                $(".dogicon").addClass("dogan");
            }, 3000);
            
    });
}, 2000);

$(".dogicon").click(function(){
    $("#redbox1").animate({opacity: '0'}
    );
    $("#redbox2").animate({opacity: '0'}
    );
    $("#redbox3").animate({opacity: '0'}
    );
    $("#redbox4").animate({opacity: '0'}
    );
    $(".dogicon").animate({opacity: '0'}
    );
    $("#bgvid").animate({opacity: '0'});
    $( "audio" ).remove();

    setTimeout(function() {
        $( "#redbox1" ).remove();
        $( "#redbox2" ).remove();
        $( "#redbox3" ).remove();
        $( "#redbox4" ).remove();
        $( ".dogicon" ).remove();
        $( "#bgvid" ).remove();
        $(".off1").addClass("animated fadeInDown mainstage ")
        $(".off2").addClass("animated fadeInDown jamesstage")
        $(".off3").addClass("animated fadeInDown food")
    

    }, 1000);
}); 
// myVideo[0].load()   //if there is only one

// for(var i=0;i<myVideo.length;i++){
//     myVideo[i].load();    //if there is more
// }

// var videos = [
//     "video/sea.mp4",
//     "video/1.mp4",
//     "video/2.mp4",
//     "video/3.mp4"
// ];

// function playArray(index,ele,array,listener){
//     ele.removeEventListener(listener||0);
//     ele.src = array[index];
//     ele.load();
//     ele.play();
//     index++;
//     if(index>=array.length){
//         index=0;
//     }
//     listener = ele.addEventListener('ended',function(){
//         playArray(index,ele,array,listener);
//     },false);
// }
// playArray(0,document.getElementById("myVid"),videos);
window.onload =  function build(){
    var videos = [
    "video/sea.mp4",
    "video/1.mp4",
    "video/2.mp4",
    "video/3.mp4"
];
    var random = Math.floor(Math.random()* videos.length);
    var videos1 = videos[random]; // Changes random selected value to corresponding name in index//


    var video = document.getElementById('stuff');
    var source = document.createElement('source');
    var audio = document.getElementById('Jonk')


    source.setAttribute('src', videos1);
    video.appendChild(source);
    video.play();

  video.addEventListener("ended", function(){
    

  });




    //     // Inputs Colour and Border//
    //    for(var i = 0; i < video.length; i++)
    //         {
    //             var random = Math.floor(Math.random()* videos.length);
    //             var videos1 = videos[random]; // Changes random selected value to corresponding name in index//

            
            
    //             source.setAttribute('src', videos1);
    //             video.appendChild(source);
    //             video.play();
           
            // }



            // });
    

}