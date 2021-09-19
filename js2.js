
var score = 0;



function check(){


if(document.getElementById("radio1").checked==true){
    score = score + 1;
    document.getElementById("q2").innerText="correct"
}else{
    document.getElementById("q2").innerText="wrong answer"
}



if(document.getElementById("radio3").checked==true){
    document.getElementById("q3").innerText="correct"
    score = score + 1;
}else{
    document.getElementById("q3").innerText="wrong answer"
}


   



if(document.getElementById("radio6").checked==true){
    score = score + 1;
    document.getElementById("q4").innerText="correct"
}else{
    document.getElementById("q4").innerText="wrong answer"
}



if(document.getElementById("radio8").checked==true){
    score = score + 1;
    document.getElementById("q5").innerText="correct"
}else{
    document.getElementById("q5").innerText="wrong answer"
}









document.getElementById("anserfirst").innerHTML= "your score is " + score
}

function check2(){
    if(document.getElementById("radio9").checked==true){
        score = score + 1;
        document.getElementById("q6").innerText="correct"
    }else{
        document.getElementById("q6").innerText="wrong answer"
    }

    if(document.getElementById("radio12").checked==true){
        score = score + 1;
        document.getElementById("q7").innerText="correct"
    }else{
        document.getElementById("q7").innerText="wrong answer"
    }

    if(document.getElementById("radio13").checked==true){
        score = score + 1;
        document.getElementById("q8").innerText="correct"
    }else{
        document.getElementById("q8").innerText="wrong answer"
    }

    if(document.getElementById("radio15").checked==true){
        score = score + 1;
        document.getElementById("q9").innerText="correct"
    }else{
        document.getElementById("q9").innerText="wrong answer"
    } 
}



