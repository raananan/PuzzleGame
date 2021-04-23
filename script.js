/* exported myFunction */
/*eslint no-unused-vars: ["error", { "vars": "local" }]*/
/*global document, window, alert, console, require*/

var arr1=[180,0,180,0,180,0,180,0];


  var flag=0;
  function func(sum,id)
    {
   
  document.getElementById(id).style.transform += "rotate(180deg)"; 
    arr1[id]+=180;
    if(arr1[id]==360){arr1[id]=0}
    check();
     }

    function check()
     {
      flag=0;
         
      for(var i=0;i<8;i++)
         {
           if(arr1[i]==0)
           flag++;
         }
       
      if(flag==8)
         {
           document.getElementById('Finish').style.display = "block"; 
           setTimeout(function() {
           window.location.href = "Two.html";
            }, 3000); 
         }
       
     }