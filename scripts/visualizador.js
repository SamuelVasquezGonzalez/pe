let cerrar1 = document.getElementById("cerrar1");
let cerrar2 = document.getElementById("cerrar2");
let cerrar3 = document.getElementById("cerrar3");
let abrir1 = document.getElementById("abrir1");
let abrir2 = document.getElementById("abrir2");
let abrir3 = document.getElementById("abrir3");
let modal1 = document.getElementById("img1");
let modal2 = document.getElementById("img2");
let modal3 = document.getElementById("img3");

//botones cerrar

cerrar1.addEventListener('click',function(){
    modal1.style.display = "none";
});

cerrar2.addEventListener('click',function(){
    modal2.style.display = "none";
});

cerrar3.addEventListener('click',function(){
    modal3.style.display = "none";
});

// botones para abrir

abrir1.addEventListener('click', function(){
    modal1.style.display = "block";
});

abrir2.addEventListener('click', function(){
    modal2.style.display = "block";
});

abrir3.addEventListener('click', function(){
    modal3.style.display = "block";
});