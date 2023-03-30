let x = 0;
            function clicker(){
                if(x >= 100){
                    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ"); 
                    document.getElementById("num").innerHTML = x.toString();
                }else{
                    x += 1
                    document.getElementById("num").innerHTML = x.toString();
                }
                
            }