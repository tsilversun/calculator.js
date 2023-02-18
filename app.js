
function plus(){
    let firstnumber = document.getElementById('firstnumber').value;
    let secondnumber = document.getElementById('secondnumber').value;
    let result = parseInt(firstnumber)+parseInt(secondnumber);
    document.getElementById('result').innerHTML= result;
}
function sum(firstnumber,secondnumber,callback){
    let result = firstnumber + secondnumber;
    callback(result)
 }
 sum(1,1,function(result){
    console.log(result);
 });

function minus(){
    let firstnumber = document.getElementById('firstnumber').value;
    let secondnumber = document.getElementById('secondnumber').value;
    let result = parseInt(firstnumber)-parseInt(secondnumber);
    document.getElementById('result').innerHTML= result;
}
function minus(firstnumber,secondnumber,callback){
    let result = firstnumber - secondnumber;
    callback(result)
 }
 minus(1,1,function(result){
    console.log(result);
 });

function times(){
    let firstnumber = document.getElementById('firstnumber').value;
    let secondnumber = document.getElementById('secondnumber').value;
    let result = parseInt(firstnumber)*parseInt(secondnumber);
    document.getElementById('result').innerHTML= result;
}
function times(firstnumber,secondnumber,callback){
    let result = firstnumber * secondnumber;
    callback(result)
 }
 times(1,1,function(result){
    console.log(result);
 });

function divide(){
    let firstnumber = document.getElementById('firstnumber').value;
    let secondnumber = document.getElementById('secondnumber').value;
    let result = parseInt(firstnumber)/parseInt(secondnumber);
    document.getElementById('result').innerHTML= result;
}
function divide(firstnumber,secondnumber,callback){
    let result = firstnumber / secondnumber;
    callback(result)
 }
divide(1,1,function(result){
    console.log(result);
 });



 
