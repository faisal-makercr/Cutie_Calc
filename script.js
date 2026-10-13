let input= document.getElementById('inputBox');
if(input){

let buttons = document.querySelectorAll('.aribtns, .btn1, .equalbtn');

let string ="";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click',(e) => {
        let buttonText = e.target.innerHTML.trim();
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
            input.value = string;
        }
        else {
        string += e.target.innerHTML;
        input.value = string;
        }
    });
});
}


const userButton = document.getElementById('ask-button');
const secretAnswer = document.getElementById('answer-box');
if (userButton && secretAnswer){

    userButton.addEventListener('click', function(){
    secretAnswer.style.display='block';
    userButton.style.display='none';
});
}
