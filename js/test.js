 let cpt=0;
function decre(){
    cpt-=1;
   document.getElementById("val").innerHTML=cpt;

}
function ann(){
    cpt=0;
    document.getElementById("val").innerHTML=cpt;
}
 function incre(){
    cpt+=1;
    document.getElementById("val").innerHTML=cpt;
}

function moi(){
    document.getElementById("t").innerHTML="moi je test";
   }
   
// let deplacement=20;

 function gauche(){
 var g=document.getElementById("objet");
   g.style.marginLeft=0;

//   alert("color");
 }

 function droit(){
    var d=document.getElementById("objet");
    d.display.style.marginRight=-100;
  
   }
 

 function haut(){
    var h=document.getElementById("objet");
    h.display.style.marginTop=-99;
 }
 function bas(){
    var b=document.getElementById("objet");
    b.display.style.marginBottom=50;
 }

