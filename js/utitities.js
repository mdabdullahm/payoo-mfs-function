/**
 * common shared function here
 */ 

// console.log('utilities loaded');

// function getElementById(){
//     console.log('will get value by id');
//     const addMoney = document.getElementById('input-add-money').Value;
//     return addMoney;
//}


function gitInputFieldValueById(id){
    const inputValue = document.getElementById(id).Value;
    return inputValue;
}