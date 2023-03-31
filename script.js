let x = 0;
let mul = 1; 
let x2 = 0;

function clicker(){

    if(x2 == 0){
        document.getElementById("double").innerHTML = "2x - 100 clk";
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
            document.getElementById("mult").innerHTML = "2";
            document.getElementById("num").innerHTML = x.toString();
            document.getElementById("double").innerHTML = "Purchased";
            x2 = 1;
        } else{
            document.getElementById("double").innerHTML = "Invalid";
        }
    }
    
}

