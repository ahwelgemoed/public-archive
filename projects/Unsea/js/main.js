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
    "video/1.mp4",
    "video/2.mp4",
    "video/3.mp4",
    "video/Fire_1.mp4",
    "video/Fire_2.mp4",
    "video/Fire_3.mp4",
    "video/Face_1.mp4",
    "video/Face_2.mp4",
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



// video.addEventListener("progress", function() {
//     // When buffer is 1 whole video is buffered
//     if (Math.round(video.buffered.end(0)) / Math.round(video.seekable.end(0)) === 1) {
//         build();
//    }
//   }, false);

// var duration = video.duration
// var current = video.currentTime




