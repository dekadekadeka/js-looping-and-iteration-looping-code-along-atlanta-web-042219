// Code your solutions in this file
function writeCards(array, holiday) {
    let holidaycards = []
    for (let i = 0; i < array.length; i++){
        holidaycards.push(`Thank you, ${array[i]}, for the wonderful ${holiday} gift!`)
    }
    return holidaycards;
}

function countdown(num){
    while (num > 0) {
        console.log(num);
        num -= 1;
    }
    console.log(num);
}