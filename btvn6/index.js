function js_style() 
{
//font styles added by JS:
 text.style.fontSize = "15pt";
 text.style.fontFamily = "Arial";
 text.style.color = "tan";
}
function getFormvalue()
{
  var x=document.getElementById("form1");
  for (var i=0;i<x.length;i++)
  {
   if (x.elements[i].value!='Submit')
    {  
      console.log(x.elements[i].value);
     }  
   }
}
function set_background() {
  docBody = document.getElementsByTagName("body")[0];
   myBodyElements = docBody.getElementsByTagName("p");
   myp1 = myBodyElements[0];
   myp1.style.background = "blue";
 }
 function getAttributes()
{
 let a = document.getElementById("w3r").href;
 alert('The value of the href attribute of the link is : '+a);
 let b = document.getElementById("w3r").hreflang;   
 alert('The value of the hreflang attribute of the link is : '+b);
 let c = document.getElementById("w3r").rel; 
  alert('The value of the rel attribute of the link is : '+c);
 let d = document.getElementById("w3r").target; 
  alert('The value of the taget attribute of the link is : '+d);
 let e = document.getElementById("w3r").type; 
  alert('The value of the type attribute of the link is : '+e);  
}
 