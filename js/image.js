// Data for the "HTML Images" Page
window.onload = function Images(){
var HTMLID=document.getElementById("image");
var FigureElement = document.createElement("figure");
var IDtoFigure = HTMLID.appendChild(FigureElement);
for(i=0;i<images.length;i++){
var ImageElement = document.createElement("img");
var SourceAttribute = ImageElement.setAttribute('src',images[i].url);
var AltAttribute = ImageElement.setAttribute('alt',images[i].alt);
var BreakElement = document.createElement("br");

var CaptionElement = document.createElement("figcaption");
var CaptionText = document.createTextNode(images[i].caption);
var Caption = CaptionElement.appendChild(CaptionText);
IDtoFigure.appendChild(ImageElement);

IDtoFigure.appendChild(Caption)

IDtoFigure.appendChild(BreakElement);



}

}
document.getElementById("images").addEventListener("load", Images);

const images = [
  {
    caption: 'Red Slate Mountain',
    alt: 'Mountain',
    url:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Red_Slate_Mountain_1.jpg/320px-Red_Slate_Mountain_1.jpg'
  },
  {
    caption: 'St. Petersburg River',
    alt: 'River',
    url:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Saint-petersburg-river-march-24-2016.jpg/320px-Saint-petersburg-river-march-24-2016.jpg'
  },
  {
    caption: 'Lybian Desert',
    alt: 'Desert',
    url:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Libyan_Desert_-_2006.jpg/320px-Libyan_Desert_-_2006.jpg'
  },
  {
    caption: 'Azerbaijan Forest',
    alt: 'Forest',
    url:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Azerbaijan_forest_3.JPG/320px-Azerbaijan_forest_3.JPG'
  },
  {
    caption: 'Indonesian Jungle',
    alt: 'Jungle',
    url:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Indonesian_jungle3%2C_Zoo_Prague.jpg/320px-Indonesian_jungle3%2C_Zoo_Prague.jpg'
  }
];
