$(document).ready(function () 
{
  var url = $("#hlsplayer").data("url");
  $.getJSON(url, function (data, textStatus) 
  {
    if (textStatus == "success" && data.Success) 
    {
      // If we use the standard video tag without controls='controls' and autoplay='autoplay' and a <source> tag, the iPad won't play this.
      var poster = data.Poster != '' ? " poster='" + data.Poster + "'" : "";
      var html = "<video id='webmp_video' src='" + data.URL + "' width='" + $("#hlsplayer").width() + "' height='" + $("#hlsplayer").height() + "' controls='controls' autoplay='autoplay'" + poster + ">" +
                   "Your browser does not support playing this video." +
                 "</video>";
      $("#hlsplayer").html(html);
      var video = document.getElementById('webmp_video');
      var videoSrc = data.URL;
      if (Hls.isSupported()) 
      {
        var hls = new Hls();
        hls.loadSource(videoSrc);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, function() {
          video.play();
        });
      }
      else if (video.canPlayType('application/vnd.apple.mpegurl')) 
      {
        video.src = videoSrc;
        video.addEventListener('loadedmetadata', function() 
        {
          video.play();
        });
      }
    } 
    else 
    {
      $("#hlsplayer").hide();
      $("#error").show();
    }
  }).fail(function()
  {
      $("#hlsplayer").hide();
      $("#error").show();
  });
});