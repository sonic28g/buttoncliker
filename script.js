let x = 0;
let mul = 1; 
let x2 = 0;
let x5 = 0;

function clicker(){

    if(x2 == 0){
        document.getElementById("double").innerHTML = "2x - 100 clk";
        document.getElementById("quint").innerHTML = "Locked"
    }

    if(x2 == 1 && x5 == 0){
        document.getElementById("quint").innerHTML = "5x - 500 clk";
    }
    
    if(x >= 1000){
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ"); 
        document.getElementById("num").innerHTML = x.toString();
    }else{
        x += mul
        document.getElementById("num").innerHTML = x.toString();
    }
                
}

function changeMul2(){
    if(x2 == 0){
        if(x >= 100){
            mul = 2;
            x -= 100;
            document.getElementById("mult").innerHTML = "Multiplier: 2x";
            document.getElementById("num").innerHTML = x.toString();
            document.getElementById("double").innerHTML = "Purchased";
            document.getElementById("quint").innerHTML = "5x - 500 clk";
            x2 = 1;
        } else{
            document.getElementById("double").innerHTML = "Invalid";
        }
    }
    
}


function changeMul5(){
    if(x5 == 0 && x2 == 1){
        if(x >= 500){
            mul = 5;
            x -= 500;
            document.getElementById("mult").innerHTML = "Multiplier: 5x";
            document.getElementById("num").innerHTML = x.toString();
            document.getElementById("quint").innerHTML = "Purchased";
            x5 = 1;
        } else{
            document.getElementById("quint").innerHTML = "Invalid";
        }
    }
    
}


