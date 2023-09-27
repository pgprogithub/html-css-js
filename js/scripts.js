// alert("Bienvenue dans notre site web");
// var nom =prompt("comment appelez vous!")
// alert("Bienvenue "+ nom+" dans notre site web");
document.write("Bienvenue ddans notre site web");

function londonClicked(){
    alert('Vous avez choisir London');
}

function valider(){
    var email=document.getElementsByClassName("input")[0].value;
    var pass =document.getElementsByClassName("input")[1].value;
    // alert("Email= "+email+" mot de passe= "+pass);
    var f=document.getElementById("for");
    f.innerHTML="Email= "+email+" <br>mot de passe= "+pass
}

function Design(){
    var color=prompt("Quelle couleur aimez-vous");
    var ent=document.getElementsByClassName("entete")[0];
    var foot=document.getElementsByClassName("pied")[0];

    ent.style.backgroundColor=color;
    foot.style.backgroundColor=color;
}