"use strict";

// setTimeout(function() {
//     $(document).ready(function(){
//         $("#redbox1").fadeIn(2000);
//         $("#open1").fadeIn(2000);
//         $("#redbox2").fadeIn(4000);
//         $("#open2").fadeIn(4000);
//         $("#redbox3").fadeIn(6000);
//         $("#open3").fadeIn(6000);
//         $("#redbox4").fadeIn(8000);
//         $("#open4").fadeIn(8000);
//             setTimeout(function() {
//                 $(".dogicon").addClass("dogan");
//             }, 3000);
            
//     });
// }, 2000);

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
// window.onload =  function build(){
//     var videos = [
//     "video/sea.mp4",
//     "video/1.mp4",
//     "video/2.mp4",
//     "video/3.mp4"
// ];
//     var random = Math.floor(Math.random()* videos.length);
//     var videos1 = videos[random]; // Changes random selected value to corresponding name in index//
//     var video = document.getElementById('stuff');
//     var source = document.createElement('source');
//     var audio = document.getElementById('Jonk')

//     source.removeAttribute('src');
//     source.setAttribute('src', videos1);
//     video.appendChild(source);
//     video.play();

// video.addEventListener("ended", function(){
//     build();
//         // build(0,document.getElementById("video"),videos);
//         source.setAttribute('src', videos1);
//         video.play();

    

//   });
// };
function shuffle(array)
{
  var m = array.length, t, i;
  while (m > 0) 
  {
	i = Math.floor(Math.random() * m--);
	t = array[m];
	array[m] = array[i];
	array[i] = t;
  }
  return array;
}

var videos = [
    "video/Sea.mp4",
    "video/1.mp4",
    "video/2.mp4",
    "video/3.mp4",
    "video/Fire_1.mp4",
    "video/Fire_2.mp4",
    "video/Fire_3.mp4",
    "video/Face_1.mp4",
    "video/Face_2.mp4",
    "video/4.mp4",
    "video/5.mp4",
    "video/6.mp4",
    "video/7.mp4",
    "video/8.mp4",
    "video/9.mp4",
    "video/10.mp4",
    "video/11.mp4",
    "video/12.mp4",
    "video/13.mp4",
    "video/14.mp4",
    "video/15.mp4",
    "video/16.mp4",
    "video/17.mp4",
    "video/18.mp4",
    "video/19.mp4",
    "video/20.mp4",
    "video/21.mp4",
    "video/22.mp4",
    "video/23.mp4",
    "video/24.mp4",
    "video/25.mp4",
    "video/26.mp4",
    "video/27.mp4",
    "video/28.mp4",
    "video/29.mp4",
    "video/30.mp4",
    "video/31.mp4",
    "video/32.mp4",
    "video/33.mp4",
    "video/34.mp4",
    "video/35.mp4",
    "video/36.mp4",
];



var video = document.getElementById('stuff');
var audio = document.getElementById('Jonk');
var duration
var current
function build(){

shuffle(videos); // shuffles the array

    var random = Math.floor(Math.random()* videos.length);

        var videos1 = videos[random]; // Changes random selected value to corresponding name in index//

        video.setAttribute('src', videos1);
//      console.log(videos1);
        video.play();
        videos.splice( random, 1 );
        
}
video.addEventListener("ended", function(){
    
    build();
});
window.onload = build();
 
audio.addEventListener("ended", function(){
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
var aud = document.getElementById("Jonk");

$("#Jonk").bind("timeupdate", function() {
    var currentTime = parseInt(this.currentTime, 10);
    if(currentTime == 193) { 
            $(document).ready(function(){
                $("#redbox1").fadeIn(2000);
                $("#open1").fadeIn(2000);
                $("#redbox2").fadeIn(10000);
                $("#open2").fadeIn(10000);
                setTimeout(function() {

                $("#redbox3").fadeIn(2000);
                $("#open3").fadeIn(2000);
                $("#redbox4").fadeIn(10000);
                $("#open4").fadeIn(10000);
            }, 10000);
                    setTimeout(function() {
                        $(".dogicon").addClass("dogan");
                    }, 3000);
                    
            });
        $(this).unbind("timeupdate");
    }
});