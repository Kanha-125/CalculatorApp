let InputTextElement = document.getElementById("inputText");      
let buttonElements = document.getElementsByTagName("button");
let str = "";

for(let i=0; i<buttonElements.length;i++){
    buttonElements[i].addEventListener("click",calculate)
}

function calculate(e){
    let currentButtonValue = e.target.innerText;
    if(currentButtonValue=="C"){
        str="";
        InputTextElement.value=str;   
    }

    else if(currentButtonValue=="="){
        InputTextElement.value = eval(str);
        console.log(eval(str));
        str = InputTextElement.value;
    }

    else{
        str=str+currentButtonValue;
        InputTextElement.value=str;
    }


}


