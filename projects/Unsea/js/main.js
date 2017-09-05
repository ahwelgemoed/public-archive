"use strict";

$('.next').click(function () {
    // $('.browsergif').addClass('animated fadeOut');
    build();
    audio.play();
    $('.viewer').addClass('animated fadeOut');

    setTimeout(function () {
        // $('.browsergif').remove();
        $(".viewer").remove();
        // $(this).remove();
    }, 2000)

});
document.body.style.overflow = 'hidden';

var aud = document.getElementById("Jonk");
var clicks = 0;

$('.dogicon').click(function () {
    // If time is past Poem Part it makes so that the Button only needs one click too skip Music Video //
    if (aud.currentTime > 195) {

        ++clicks;
    };
    if (clicks == 0) {

        aud.currentTime = 191.5;
    } else {
        $("#redbox1").animate({
            opacity: '0'
        });
        $("#redbox2").animate({
            opacity: '0'
        });
        $("#redbox3").animate({
            opacity: '0'
        });
        $("#redbox4").animate({
            opacity: '0'
        });
        $(".dogicon").animate({
            opacity: '0'
        });
        $("#stuff").animate({
            opacity: '0'
        });
        $("audio").remove();

        setTimeout(function () {
            $("#redbox1").remove();
            $("#redbox2").remove();
            $("#redbox3").remove();
            $("#redbox4").remove();
            // $(".dogicon").remove();
            $("#stuff").remove();
            // Animate In Map Icons //

            $("#lineup").addClass("animated fadeInDown lineup ");
            $("#rules").addClass("animated fadeInDown rules");
            $("#book").addClass("animated fadeInDown book");
        }, 1000);
    }
    ++clicks;
});


function shuffle(array) {
    var m = array.length,
        t, i;
    while (m > 0) {
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
    "video/37.mp4",
    "video/38.mp4",
    "video/39.mp4",
    "video/40.mp4",
    "video/41.mp4",
    "video/42.mp4",
    "video/43.mp4",
    "video/44.mp4",
    "video/45.mp4",
    "video/46.mp4",
    "video/47.mp4",
    "video/48.mp4",
    "video/49.mp4",
    "video/50.mp4",
    "video/51.mp4",
    "video/52.mp4",
    "video/53.mp4",
    "video/54.mp4",
    "video/55.mp4",
];



var video = document.getElementById('stuff');
var audio = document.getElementById('Jonk');
var duration
var current

function build() {

    shuffle(videos); // shuffles the array

    var random = Math.floor(Math.random() * videos.length);

    var videos1 = videos[random]; // Changes random selected value to corresponding name in index//

    video.setAttribute('src', videos1);
    //      console.log(videos1);
    video.play();
    videos.splice(random, 1); //Removes Already Played Video from Array

}
video.addEventListener("ended", function () {

    build();
});


audio.addEventListener("ended", function () {

    $(".dogicon").animate({
        opacity: '0'
    });
    $("#stuff").animate({
        opacity: '0'
    });
    $("audio").remove();

    setTimeout(function () {
        $("#redbox1").remove();
        $("#redbox2").remove();
        $("#redbox3").remove();
        $("#redbox4").remove();
        $(".dogicon").remove();
        $("#stuff").remove();
        // Animation for "Menue" goes here //
        $(".off1").addClass("animated fadeInDown mainstage ")
        $(".off2").addClass("animated fadeInDown jamesstage")
        $(".off3").addClass("animated fadeInDown food")
        $("body").addClass("body")
    }, 1000);

});
var aud = document.getElementById("Jonk");

$("#Jonk").bind("timeupdate", function () {
    setTimeout(function () {
        $(".dogicon").addClass("dogan");
    }, 3000);
    var currentTime = parseInt(this.currentTime, 10);
    if (currentTime == 193) {
        $(document).ready(function () {
            $("#redbox1").fadeIn(2000);
            $("#open1").fadeIn(2000);
            $("#redbox2").fadeIn(10000);
            $("#open2").fadeIn(10000);
            setTimeout(function () {

                $("#redbox3").fadeIn(2000);
                $("#open3").fadeIn(2000);
                $("#redbox4").fadeIn(15000);
                $("#open4").fadeIn(15000);
            }, 10000);

        });


        $(this).unbind("timeupdate");
    }
});

$("#lineup").hover(function () {
    $(this).css("width", "250px");
}, function () {
    $(this).css("width", "150px");
});
$("#rules").hover(function () {
    $(this).css("width", "250px");
}, function () {
    $(this).css("width", "180px");
});
$("#book").hover(function () {
    $(this).css("width", "250px");
}, function () {
    $(this).css("width", "150px");
});

// Cheacks Aspectratio of Browser and Adds and removes Divs acordingly //

$(window).resize(function () {
    var aspectratio = $(window).width() / $(window).height()
    if (aspectratio <= 1 || aspectratio >= 1.5) {
        $(".good").hide();
        $(".next").hide();
        $("#viewertext").show();
        $(".browsergif").show();
    } else {
        $(".good").show()
        $(".next").show()
        $(".browsergif").hide();
        $("#viewertext").hide();
    }
}).resize();

// Promo For clicking on all Links //

var click = 0



$('#lineupModalClick, #rulesModal, #bookModal').click(function () {

    setTimeout(function () {
        if (click === 3) {
            modal.open();
            $(this).remove()
        }
    }, 5000)
    if (this.id == 'lineupModalClick') {

        click++;
    } else if (this.id == 'rulesModal') {

        click++;
    } else if (this.id == 'bookModal') {
        click++;
    }


});
// ----------------------  Modals  ---------------------- //

// Get the modal
var modala = document.getElementById('lineupModal');

// Get the button that opens the modal
var btn = document.getElementById("lineupModalClick");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modala.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modala.style.display = "none";
}


// Get the modal
var modals = document.getElementById('rulesModal');

// Get the button that opens the modal
var btns = document.getElementById("rulesModalClick");

// Get the <span> element that closes the modal
var spans = document.getElementsByClassName("closes")[0];

// When the user clicks the button, open the modal 
btns.onclick = function () {
    modals.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spans.onclick = function () {
    modals.style.display = "none";
}


// Get the modal

var modalss = document.getElementById('bookModal');

// Get the button that opens the modal

var btnss = document.getElementById("bookModalClick");

// Get the <span> element that closes the modal
var spanss = document.getElementById("closess");

// When the user clicks the button, open the modal 
btnss.onclick = function () {
    modalss.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanss.onclick = function () {
    modalss.style.display = "none";
}

var modal = new tingle.modal({
    footer: true,
    stickyFooter: false,
    closeMethods: ['overlay', 'escape'],
    // closeLabel: "Close",
    cssClass: ['custom-class-1', 'custom-class-2'],
    onOpen: function () {
        console.log('modal open');
    },
    onClose: function () {
        console.log('modal closed');
    },
    beforeClose: function () {
        // here's goes some logic
        // e.g. save content before closing the modal
        return true; // close the modal
        return false; // nothing happens
    }
});

// set content
modal.setContent('You Seem Too Like Dust, use this Promo code for 10% off <mark class="yellow">Kreef Hotel:</mark><br><br><mark class="yellows">STOFTOTSTOF</mark>');

// add a button
modal.addFooterBtn('Book It', 'tingle-btn tingle-btn--primary', function () {
    modal.close();
    modalss.style.display = "block";
});

// add another button
modal.addFooterBtn('No Thanks I hate Free Things', 'tingle-btn tingle-btn--danger', function () {
    // here goes some logic
    modal.close();
});