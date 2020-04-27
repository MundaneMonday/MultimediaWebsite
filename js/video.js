// Data for the "HTML Video" Page
window.onload = function Video(){
  var HTMLID=document.getElementById("video");
  var VideoElement = document.createElement("video");
  var VideoAttributeControl = VideoElement.setAttribute('controls',video.controls);
  var VideoAttributeWidth = VideoElement.setAttribute('width',video.width);
  var VideoAttributeHeight = VideoElement.setAttribute('height',video.height);
  var IDtoVideo = HTMLID.appendChild(VideoElement);
  for(i=0;i<video.source.length;i++){
  var SourceElement =document.createElement("source")
  var SourceLink = SourceElement.setAttribute('src',video.source[i].src)
  var SourceType = SourceElement.setAttribute('type',video.source[i].type)
  IDtoVideo.appendChild(SourceElement);
  }
  }

const video = {
  controls: true,
  width: 320,
  height: 240,
  source: [
    {
      src: 'https://scs.senecac.on.ca/~tanvir.alam/shared/fall-2018/web222/movie.mp4',
      type: 'video/mp4'
    },
    {
      src: 'https://scs.senecac.on.ca/~tanvir.alam/shared/fall-2018/web222/movie.ogg',
      type: 'video/ogg'
    }
  ]
};
