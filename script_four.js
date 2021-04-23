/* exported myFunction */
/*eslint no-unused-vars: ["error", { "vars": "local" }]*/
/*global document, window, alert, console, require*/

var arr1=[180,90,180,90,0,180,0,180,180,90,90,90,90,90,90,90];



  var flag=0;
  function func(id,sum)
    {
   
  document.getElementById(id).style.transform+= "rotate(90deg)"; 
    arr1[id]+=90;
    if(arr1[id]==360){arr1[id]=0}
    check();
      
     }
   function check()
     {
      flag=0;
      for(var i=0;i<11;i++)
        {
          if(arr1[i]==0)
          flag++;
        }
       
       if(flag==11)
         {
           document.getElementById('Finish').style.display = "block"; 
           setTimeout(function() {
           window.location.href = "cc.html";
            }, 3000); 
         }
       
     }