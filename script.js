let input = document.getElementById('inputBOx');
let aribtns = document.querySelectorAll('aribtns');
let btn1 = document.querySelectorAll('btn1');
let equalbtn = document.querySelectorAll('equalbtn');


const userButton = document.getElementById('ask-button');
const secretAnswer = document.getElementById('answer-box');

let string ="";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click',(e) =>{
        if(e.target.innerHTML == '=')
        {
            string = eval(string);
            input.value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string ="";
            input.value = string;
        }
        else if (e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
        }
        else {
        string += e.target.innerHTML
        input.value = string;
        }
    })
})

userButton.Button.addEventListener('click', function(){
    secretAnswer.style.display='block';
    userButton.style.display='none';
})