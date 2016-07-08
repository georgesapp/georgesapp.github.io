$(document).ready(function () {

  $('body').scrollspy({
    target: '.navbar-fixed-top',
    offset: 80
  });

  // Page scrolling feature
  $('a.page-scroll').bind('click', function(event) {
    var link = $(this);
    $('html, body').stop().animate({
      scrollTop: $(link.attr('href')).offset().top - 50
    }, 500);
    event.preventDefault();
  });


  $('.contact-button').click(function(event) {
    event.preventDefault();
    Intercom('show');
  });

  $('.intercom-launcher-button').click(function(event) {
    dataLayer.push({'event': 'eventGA', 'eventCategory' : 'chat', 'eventAction' : 'bulle en fixe'});
  });
});

var cbpAnimatedHeader = (function() {
  var docElem = document.documentElement,
  header = document.querySelector( '.navbar-default' ),
  didScroll = false,
  changeHeaderOn = 120;
  function init() {
    window.addEventListener( 'scroll', function( event ) {
      if( !didScroll ) {
        didScroll = true;
        setTimeout( scrollPage, 250 );
      }
    }, false );
  }
  function scrollPage() {
    var sy = scrollY();
    if ( sy >= changeHeaderOn ) {
      $(header).addClass('navbar-scroll')
    }
    else {
      $(header).removeClass('navbar-scroll')
    }
    didScroll = false;
  }
  function scrollY() {
    return window.pageYOffset || docElem.scrollTop;
  }
  init();

})();

// Activate WOW.js plugin for animation on scroll
new WOW().init();



// VIDEO

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    playerVars: {
      autoplay: 1,
      loop: 1,
      playlist: '_LEc90wj8ww',
      controls: 1,
      showinfo: 0,
      autohide: 1,
      modestbranding: 1,
      vq: 'hd1080'
    },
    videoId: '_LEc90wj8ww',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
  player.mute();
  player.setLoop(true);
}

var done = false;
function onPlayerStateChange(event) {

}
function stopVideo() {
  player.stopVideo();
}
