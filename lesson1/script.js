/*

THE 4 WAY TO SHOW DATA ON SCREEN BY USINIG JAVASCRIP

WINDOW - 1 WAY
DOCUMENT - 2 WAYS
CONSOLE - 1 WAY

*/

// 1° Way by using the window!
window.alert('This is a message that cames from the window, not the decument or the console.You can just use alert() function as a shortcut.');

// 2° Way by using the document!

document.write('This is not a common way to manipulate the document');

// 3° Way by using the document!

document.getElementById("thisisanidname").innerHTML='I´ve just changed the h1 tag from Hello World to this text that you´re reading right now!';

// 4° Way  is by using the console!The console is an amazing tool for devs, because you can test your code and see if everything is going  as you want.

console.log('This message will apear on the consele at devtools!!')


/*

THE DIFERENCE BETWEEN VAR, LET AND CONST VARIABLES // using typescript


*/

/*
Var declaration has a global scope and can have it´s identifier changed any time you want.As you can change the content.
*/

var name = 'Leandro';

console.log(name);

/*
let declaration has a local or global scope and can´t have it´s identifier changed ny no means.But you can change the content any time.
*/

let number = 90


console.log(number);

number = 30;

console.log(number);

/*
const declaration has a global or a local  scope and can´t have it´s identifier changed by no means and you can´t change the content also.
*/

const foodName = ['banana', 'potato', 'tomato'];

console.log(foodName);



if(number > 0){
    const foodName = 'apple';
    console.log(foodName);
    // The result on the console is apple, because the foodName variable at if statement scope is different than that one declared first at the global scope.
    
};




/*

*/