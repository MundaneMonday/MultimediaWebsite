// Data for the "HTML Tables" Page
window.onload = function CreateTable(){

var HTMLID = document.getElementById("table");
var TableShell = document.createElement("table");
var div = HTMLID.appendChild(TableShell);
var TableHead = document.createElement("thead");
var AppendHeader = TableShell.appendChild(TableHead);
var TableRow = document.createElement("tr");
TableHead.appendChild(TableRow);
for(i=0;i<Object.keys(users[0]).length;i++){
  var TH = document.createElement("th")
  var THText = document.createTextNode((Object.keys(users[0])[i]));
  
  TH.appendChild(THText)
  TableRow.appendChild(TH)  
}
TableShell.setAttribute("border", "5");
TableHead.setAttribute('style','font-weight: bold')

var TableBody = document.createElement("tbody")
var AppendHeader2 = TableShell.appendChild(TableBody);
for(i=0;i<users.length;i++){
var TableRow = document.createElement("tr");
TableBody.appendChild(TableRow);

//Add First Name Column//
var Column1 = document.createElement("td");
var ColumnText1 = document.createTextNode(users[i].first_name);
Column1.appendChild(ColumnText1)
TableRow.appendChild(Column1);

//Add Last Name Column//
var Column2 = document.createElement("td");
var ColumnText2 = document.createTextNode(users[i].last_name);
Column2.appendChild(ColumnText2)
TableRow.appendChild(Column2);
//Add Age Column//
var Column3 = document.createElement("td");
var ColumnText3 = document.createTextNode(users[i].age);
Column3.appendChild(ColumnText3)
TableRow.appendChild(Column3);
//Add Email Column//
var Column4 = document.createElement("td");
var ColumnText4 = document.createTextNode(users[i].email);
var anchor = document.createElement('a');
anchor.href='mailto:' + users[i].email;
anchor.appendChild(ColumnText4)
Column4.appendChild(anchor)
TableRow.appendChild(Column4);

}
var MainCenterID = document.getElementById("main center");
var MainCenterTable = document.createElement("div");
MainCenterID.appendChild(MainCenterTable);
var div2 = (document.createElement("table"))
(div2).setAttribute("border","5");
MainCenterID.appendChild(div2);

}


const users = [
  {
    first_name: 'Kaitlin',
    last_name: 'Burns',
    age: 23,
    email: 'kburns99753@usermail.com'
  },
  {
    first_name: 'Joshua',
    last_name: 'Feir',
    age: 31,
    email: 'josh319726@usermail.com'
  },
  {
    first_name: 'Stephen',
    last_name: 'Shaw',
    age: 28,
    email: 'steve.shaw47628@usermail.com'
  },
  {
    first_name: 'Timothy',
    last_name: 'McAlpine',
    age: 37,
    email: 'Timbo72469@usermail.com'
  },
  {
    first_name: 'Sarah',
    last_name: 'Connor',
    age: 19,
    email: 'SarahC6320@usermail.com'
  }
];
