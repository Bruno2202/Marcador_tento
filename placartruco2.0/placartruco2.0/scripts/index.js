//VAR
var eles = 0;
document.getElementById("score2").innerText=eles;

var nos = 0;
document.getElementById("score").innerText=nos;

var ref0 = 0;
var ref12 = 12;

//DECREMENT_NOS
function decrement(){
    if (nos <= 0 ) {
        nos = ref0
    } else {
        nos = nos - 1;
    }

    document.getElementById("score").innerText=nos;
}

//INCREMENT_NOS
function increment(){
    nos = nos + 1;
    document.getElementById("score").innerText=nos;
    if (nos == 12) {
        nos = ref12;
        location.href = "fimdejogo.html";
    }  
}

//TRUCO_NOS
function truco() {
    if (nos > 9 ){
        nos = 12;
    }   else {
        nos = nos + 3 ;
    }
    
    if (nos >= 12) {
        location.href = "fimdejogo.html";
    }
    document.getElementById("score").innerText=nos;
}


//DECREMENT_ELES
function decrement2(){
    if (eles <= 0 ) {
        eles = ref0;
    } else {
        eles = eles - 1;
    }
    document.getElementById("score2").innerText=eles;
}

//INCREMENT_ELES
function increment2(){
    eles = eles + 1;
    document.getElementById("score2").innerText=eles;
    if (eles == 12) {
        eles = ref12;
        location.href = "fimdejogo.html";
    }            
}

//TRUCO_ELES
function truco2() {
    if (eles > 9 ){
        eles = 12
    }   else {
        eles = eles + 3 ;
    }

    if (eles >= 12) {
        location.href = "fimdejogo.html";
    }            
    document.getElementById("score2").innerText=eles;
}


//RESET_BUTTON
function reset(){
    location.reload()
}