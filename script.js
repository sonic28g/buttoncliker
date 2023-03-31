let x = 0;
let mul = 1; 
function clicker(){
    document.getElementById("double").innerHTML = "2x - 50 clk";
    if(x >= 1000){
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ"); 
        document.getElementById("num").innerHTML = x.toString();
    }else{
        x += mul
        document.getElementById("num").innerHTML = x.toString();
    }
                
}

function changeMul(){
    if(x >= 50){
        mul = 2;
        x -= 50;
        document.getElementById("mult").innerHTML = "2";
        document.getElementById("num").innerHTML = x.toString();
    } else{
        document.getElementById("double").innerHTML = "Invalid";
    }
    
}

