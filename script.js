

// Assignment Code
/* These are the variables
generateBtn gets the id generate from the HTML, later it is used with a click addEventListener.

let lower assigns the variable lower the getRandomLower function.

let upper asssigns the variable upper the getRandomUpper function.

let number assigns the variable number the getRandomNumber function.

let symbol assigns the variable symbol the getRandomSymbol function.

let pwLength assigns the initial value of the pwLength which is 0 and will change on user input. 

let finalpw assigns the variable finalpw an initial empty string that will later be used to hold the value of the final password. 
*/
let generateBtn = document.querySelector("#generate");

let lower = "getRandomLower";

let upper = "getRandomUpper";

let number = "getRandomNumber";

let symbol = "getRandomSymbol";

let pwLength = 0;

let finalpw='';


/* The following code gets the information that will be stored in variables and assigns it into a new variable called userOptions

let userOptions assigns the variable userOptions an inital empty array which holds the following functions: 

function getRandomLower - this function will return a string value that is a sequece of UTF-16 code units. using math.random and math.floor to create whole number value. This function establishes the initial value to begin at 97 ('a') with a range of 26 characters (the amount of letters in the alphabet, so (a-z in all lower case values)).

function getRandomUpper - this function will return a string value that is a sequence of UTF-16 code units. using math.random and math.floor to create a whole number value. This function establishes the initall value to begin at 65 from the charcode which is "A" and creates a range of 26 to allow for the possibilty of all 26 upper case letters (A-Z)

function getRandomNumber this function will return a string value that is a sequece of UTF-16 code units. Using math.random and math.floow it creates a whole number between 0-1 it is then multplied by 10 allowing for a random number between 0-9. It is than multiplied by 48 which will obtain the utf-16 code for numbers 0-9. 

function getRandomSymbol creates a new variable named symbols which is a string of set characters. it then uses math.random() and math.floor to obtain a whole number 0-1 and then multiplies it by length of the symbols variable.

function getRandomOption creates a new variable named randommUserOptionIndex which createss uses the math.floor(math.random()) to create a whole number between 0-1 and then multiplys it by the legnth from userOptions. It then returns an array of the users options.


*/

let userOptions=[];

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }


function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}


function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
} 


function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,.'
  return symbols[Math.floor(Math.random() * symbols.length)];
}


function getRandomUserOption() {
  const randomUserOptionIndex = Math.floor(Math.random() * userOptions.length);
  return userOptions[randomUserOptionIndex];
}


/* The following function generatePassword begins to generate the Password based on user input by doing the following: 

sets userOptions' initial value to an empty array,

sets finalpw's inital value to an empty string

it then prompts the user the following:

Establish a desired password length betweeen 8 - 128 characters. 

The while loop establishes that: 
If the user assigns a value greater than 128 OR less than 8 it will prompt the user with, "Error, please enter a password length between 8 - 128."

if the value entered is between the range of 8-128 it will contine to the next confirm.

lower is assigned a confirm which establishes a boolean value in the case of lowercase characters,

upper is assigned a confirm which establishes a boolean value in the case of uppercase characters,

number is a assigned a confirm which establishes a boolean value in the case of numbers, 

symbol is assigned a confrim which establilshes a boolean vallue in the case of symbols.


*/

function generatePassword(promptMessage){

  userOptions=[];

  finalpw='';

  const lengthPrompt = prompt(promptMessage);
  
  if (lengthPrompt === null){
  return "Your Secure Password";
}

  pwLength = parseInt(lengthPrompt);


  if(isNaN(pwLength)){
  return generatePassword("Error, this needs to be an actual number.");
}


  while(pwLength>128 || pwLength<8)
  {
    return generatePassword("Error, this needs to be a number between 8 - 128.");
  }

 
  lower = confirm("Do you want lowercase characters?");

  upper = confirm("Do you want uppercase characters?");

  number = confirm("Do you want numbers?");

  symbol = confirm("Do you want special characters?");
  

  //if the boolean value is true the following if statements pushes to the userOptions array.

  if(lower){
    userOptions.push('lower')
  }

  if(upper){
    userOptions.push('upper')
  }

  if(number){
    userOptions.push('number')
  }
  
  if(symbol){
    userOptions.push('symbol')
  }
  

  // For loop states that i starts at 0 and increases by 1 until it reaches the password length determined by the user. the userOption variable is created to get the random user options. 

      for(let i=0;i<pwLength;i++){
       let userOption = getRandomUserOption();
    
// Code does not stop if it finds a match for the userOption. Instead it runs through entire code before stopping. The end result is the same as the switch. 

      //  if(userOption === 'lower') {
      //    finalpw +=getRandomLower(); 
      //  }
      //  if(userOption === 'upper'){
      //   finalpw +=getRandomUpper();
      //  }
      //  if(userOption === 'number'){
      //   finalpw +=getRandomNumber();
      //  }
      //  if(userOption === 'symbol'){
      //   finalpw += getRandomSymbol();
      //  }

//Optimized - Evaluating once, if there is a match for the single option the code stops


      switch(userOption){
        case 'lower': 
          finalpw +=getRandomLower();
          break;
        case 'upper': 
          finalpw +=getRandomUpper();
          break; 
        case 'number': 
          finalpw +=getRandomNumber();
          break;
        case 'symbol': 
          finalpw +=getRandomSymbol();
          break;
      }
     }


// This if is the condition that if userOptions has no input it will return an alert. That tells the user to regenerate and select at least one option.
     if (userOptions.length === 0){
      return alert("You must select at least one option. Please click Generate Password to create a password.");
    }
     

  //returns the user's pw
  return finalpw;3
}


// Write password to the #password input
function writePassword() {
  let password = generatePassword("Please enter a password length between 8 - 128.");
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
