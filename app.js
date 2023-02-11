
function plus(){
    let firstnumber = document.getElementById('firstnumber').value;
    let secondnumber = document.getElementById('secondnumber').value;
    let result = parseInt(firstnumber)+parseInt(secondnumber);
    document.getElementById('result').innerHTML= result;
}

function minus(){
    let firstnumber = document.getElementById('firstnumber').value;
    let secondnumber = document.getElementById('secondnumber').value;
    let result = parseInt(firstnumber)-parseInt(secondnumber);
    document.getElementById('result').innerHTML= result;
}

function times(){
    let firstnumber = document.getElementById('firstnumber').value;
    let secondnumber = document.getElementById('secondnumber').value;
    let result = parseInt(firstnumber)*parseInt(secondnumber);
    document.getElementById('result').innerHTML= result;
}

function divide(){
    let firstnumber = document.getElementById('firstnumber').value;
    let secondnumber = document.getElementById('secondnumber').value;
    let result = parseInt(firstnumber)/parseInt(secondnumber);
    document.getElementById('result').innerHTML= result;
}

let sum = function(firstnumber){
    return function(secondnumber){
        return firstnumber+secondnumber; 
    }
};
let minus = function(firstnumber){
    return function(secondnumber){
        return firstnumber-secondnumber; 
    }
};
let times = function(firstnumber){
    return function(secondnumber){
        return firstnumber*secondnumber; 
    }
};
let divide = function(firstnumber){
    return function(secondnumber){
        return firstnumber/secondnumber; 
    }
};