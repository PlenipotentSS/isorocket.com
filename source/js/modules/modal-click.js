//FUNCTION TO GET AND AUTO PLAY YOUTUBE VIDEO FROM DATATAG
function autoPlayYouTubeModal(){
  var trigger = $("body").find('[data-toggle="modal"]');
  trigger.click(function() {
    var theModal = $(this).data( "target" ),
    videoSRC = $(this).attr( "data-theVideo" ), 
    videoSRCauto = videoSRC+"?byline=0&portrait=0&autoplay=1" ;
    $(theModal+' iframe').attr('src', videoSRCauto);
    $(theModal+' .close-modal').click(function () {
        $(theModal+' iframe').attr('src', videoSRC);
    });   
  });
}

$(document).ready(function(){
  autoPlayYouTubeModal();
});