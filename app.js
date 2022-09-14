let counting = 0;

function increament (){
    counting++;
    document.getElementById("counter").innerHTML = counting;
}

function decreament (){
    counting--;
    document.getElementById("counter").innerHTML = counting;
}
function reset (){
    counting = 0;
    document.getElementById("counter").innerHTML = counting;
}