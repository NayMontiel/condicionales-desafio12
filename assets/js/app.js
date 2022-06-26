let img = document.querySelector("#img");

let result1 = document.querySelector("#result1");

let result2 = document.querySelector("#result2");

function clickImg() {
    let b = img.getAttribute("class");

    if (b == "b-none"){
        img.setAttribute("class", "b-red");
    }
    else{
        img.setAttribute("class", "b-none");
    }
}

function clickVerificar() {
   let box1 = document.getElementById("box1");
   let input1 = parseInt(box1.value);

   let box2 = document.getElementById("box2");
   let input2 = parseInt(box2.value);

   let box3 = document.getElementById("box3");
   let input3 = parseInt(box3.value);

   let suma = input1 + input2 + input3;

    if(suma <=10) {
        result1.innerHTML = " llevas " + suma + " stickers";
   }
   else{
        result1.innerHTML = "llevas demasiados stickes";
   }
}
function clickIngresar() {
    
   let number1 = document.getElementById("number1");
   let select1 = number1.value;

   let number2 = document.getElementById("number2");
   let select2 = number2.value;

   let number3 = document.getElementById("number3");
   let select3 = number3.value;

   let result = select1 + select2 + select3;

   if(result == 911){
        result2.innerHTML = "password 1 correcto";
   }
   else if (result == 714){
        result2.innerHTML = "password 2 correcto";
   }
   else{
        result2.innerHTML = "password incorrecto";
   }
}
