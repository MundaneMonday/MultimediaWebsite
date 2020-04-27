// Data for the "HTML Lists" Page

const fruits = ['Apples', 'Oranges', 'Pears', 'Grapes', 'Pineapples', 'Mangos'];
 window.onload = function Lists(){
  var htmlID = document.getElementById("fruit");
  var OLelement = document.createElement('ol')
  var IDtoOL = htmlID.appendChild(OLelement);
  
  for(var i = 0;i<fruits.length;i++){
   
    var ILelement = document.createElement('li');
    var textNode = document.createTextNode(fruits[i]);
    var ListElement = ILelement.appendChild(textNode);
    var IDtoOLtoIL = IDtoOL.appendChild(ILelement);
    
  }
  {
    var ID = document.getElementById("directories");
    var ul = document.createElement("ul");
    var AppendIDtoUL = ID.appendChild(ul); 
    for (var i in directory){
        var node = document.createElement("LI")            
            var data = document.createTextNode(directory[i]["name"])      
            node.appendChild(data);
            AppendIDtoUL.appendChild(node)
        if(directory[i]["type"]=="directory") {
            var ul2 = document.createElement("ul")
            for(var j in directory[i]["files"]){
                var node = document.createElement("li")          
                var data = document.createTextNode(directory[i]["files"][j]["name"])      
                node.appendChild(data);
                ul2.appendChild(node)
            }
            AppendIDtoUL.appendChild(ul2)
        }
        
    }
    
    
    }
  

}

const directory = [
  { type: 'file', name: 'file1.txt' },
  { type: 'file', name: 'file2.txt' },
  {
    type: 'directory',
    name: 'HTML Files',
    files: [
      { type: 'file', name: 'file1.html' },
      { type: 'file', name: 'file2.html' }
    ]
  },
  { type: 'file', name: 'file3.txt' },
  {
    type: 'directory',
    name: 'JavaScript Files',
    files: [
      { type: 'file', name: 'file1.js' },
      { type: 'file', name: 'file2.js' },
      { type: 'file', name: 'file3.js' }
    ]
  }
];
