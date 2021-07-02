let player = videojs('videoPlayer', {

    autoplay:  false, // or true or false
    controls: true,
    poster: 'images/poster3.jpg',
    loop:false,
    muted:true,
    //fluid:true,
    //aspectRatio:'4:3',
    playbackRates:[0.25,0.5,1,1.5,2,2.5,3,3.5,4], // to set the speeds of video
   
    /*
    userActions:{
        hotkeys:true  // to let us play and pause the video py the space tap keyboard
    }
    */
   /* plugin to support many hotkeys to deal with video by keyboard */
   plugins:{
       hotkeys:{
        enableModifiersForNumbers:false,  // to stop the ctrl and number like ctrl 9 to seek video
        seekStep:5 // to make the seek step to 5 second when hedding the left and right key to moveword the video
       }
   }

  
    
})
 /* play with zoom rotate */
 player.zoomrotate({
       zoom:1
});



/* play with thumnails */

player.thumbnails({
    0:{
        src:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
    },
    30:{
        src:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg',
    }
});

/* play with playlist */
player.playlist([{
    sources: [{
      src: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
      type: 'video/mp4'
    }],
    poster: 'http://media.w3.org/2010/05/sintel/poster.png'
  }, {
    sources: [{
      src: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
      type: 'video/mp4'
    }],
    poster: 'http://media.w3.org/2010/05/bunny/poster.png'
  }, {
    sources: [{
      src: 'http://vjs.zencdn.net/v/oceans.mp4',
      type: 'video/mp4'
    }],
    poster: 'http://www.videojs.com/img/poster.jpg'
  }, {
    sources: [{
      src: 'http://media.w3.org/2010/05/bunny/movie.mp4',
      type: 'video/mp4'
    }],
    poster: 'http://media.w3.org/2010/05/bunny/poster.png'
  }, {
    sources: [{
      src: 'http://media.w3.org/2010/05/video/movie_300.mp4',
      type: 'video/mp4'
    }],
    poster: 'http://media.w3.org/2010/05/video/poster.png'
  }]);
   
  // Play through the playlist automatically.
  player.playlist.autoadvance(0);