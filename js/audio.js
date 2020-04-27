// Data for the "HTML Audio" Page
window.onload = function Audio(){
var HTMLID=document.getElementById("audio");
var AudioElement = document.createElement("audio");
var AudioAttribute = AudioElement.setAttribute('controls',audio.controls);
var IDtoAudio = HTMLID.appendChild(AudioElement);
for(i=0;i<audio.source.length;i++){
var SourceElement =document.createElement("source")
var SourceLink = SourceElement.setAttribute('src',audio.source[i].src)
var SourceType = SourceElement.setAttribute('type',audio.source[i].type)
IDtoAudio.appendChild(SourceElement);

}
}



const audio = {
  controls: true,
  source: [
    {
      src: 'https://scs.senecac.on.ca/~tanvir.alam/shared/fall-2018/web222/Track03.mp3',
      type: 'audio/mpeg'
    },
    {
      src: 'https://scs.senecac.on.ca/~tanvir.alam/shared/fall-2018/web222/Track03.ogg',
      type: 'audio/ogg'
    }
  ]
};
