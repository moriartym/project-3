const dataContainer = document.getElementById("data-container");
const successContainer = document.getElementById("success-container");
const confirmButton = document.getElementById("confirm-button");
const continueButton = document.getElementById("continue-button");
const nameError = document.getElementById("name-error");
const numberError = document.getElementById("number-error");
const cvcError = document.getElementById("cvc-error");
const monthError = document.getElementById("month-error");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");
const input4 = document.getElementById("input4");
const input5 = document.getElementById("input5");
const output1 = document.getElementById("output1");
const output2 = document.getElementById("output2");
const output3 = document.getElementById("output3");



confirmButton.addEventListener("click",()=>{

    const valid1= validate();
    const valid2= validate2();
    const valid3= validate3();
    const valid4= validate4();
    const valid5= validate5 ();

    if(valid1 && valid2 && valid3 && valid4 && valid5){
        dataContainer.classList.toggle("active");
        successContainer.classList.toggle("active");
    }
})

continueButton.addEventListener("click",()=>{
    dataContainer.classList.toggle("active");
    successContainer.classList.toggle("active");
})


function validate (){
    if(!(input1.value.match(/^[A-Za-z\s'-]+$/))){
    input1.classList.toggle("active");
    nameError.classList.toggle("active");
    } else{
        return true;
    }
}

function validate2 (){
    if(input2.value.match(/^[^0-9]*$/)){
    input2.classList.toggle("active");
    numberError.classList.toggle("active");
    } else{
        return true;
    }
}

function validate3 (){
    if(!input3.value.match(/^(1[0-2]|0?[1-9])$/)){
    input3.classList.toggle("active");
    monthError.classList.toggle("active");
    } else{
        return true;
    }
}

function validate4 (){
    if(!input4.value.match(/^(1000|[1-9]\d{3})$/)){
    input4.classList.toggle("active");
    monthError.classList.toggle("active");
    } else{
        return true;
    }
}
function validate5 (){
    if(!input5.value.match(/^\d{3}$/)){
    input5.classList.toggle("active");
    cvcError.classList.toggle("active");
    } else{         
        return true;  
    }
}

input1.addEventListener("input", function(){
    const Item1= input1.value;
    output2.textContent = Item1.toUpperCase();
})

input2.addEventListener("input", function(){
    const Item2= input2.value;
    output1.textContent = Item2;
})

input3.addEventListener("input", function(){
    const Item3= input3.value;
    output3.textContent = Item3;
})

input4.addEventListener("input", function(){
    const Item4= input4.value;
    output4.textContent = Item4;
})

input5.addEventListener("input", function(){
    const Item5= input5.value;
    output5.textContent = Item5;
})