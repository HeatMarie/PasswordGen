// Assignment Code
let generateBtn = document.querySelector("#generate");
let lower = "getRandomLower";
let upper = "getRandomUpper";
let number = "getRandomNumber";
let symbol = "getRandomSymbol";
let pwLength = 0;
let finalpw='';


// document.getElementById("generate").onclick = function() {
//   pwLength = prompt("Enter a password length between 8 - 28.")
//   lower = confirm("Do you want lowercase characters?");
//   upper = confirm("Do you want uppercase characters?");
//   number = confirm("Do you want numbers?");
//   symbol = confirm("Do you want special characters?");
//   return;
// };



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
function generatePassword(){
  userOptions=[];
  finalpw='';
  //ask users length
  //THEN I choose a length 
    //(8-128) LATER while loop
    //anything less than 8 & greather than 128
    //ask for user length again

  //lowercase, 
  //uppercase, 
  //numeric, 
  //special characters
  pwLength = parseInt(prompt("Enter a password length between 8 - 128."));

  while(pwLength>128 || pwLength<8)
  {
    pwLength = prompt("Error, please enter a password length between 8 - 128.");
    console.log("try again")

  }
  lower = confirm("Do you want lowercase characters?");
  upper = confirm("Do you want uppercase characters?");
  number = confirm("Do you want numbers?");
  symbol = confirm("Do you want special characters?");

  //decide if each one acceptable
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

  //if yes to lowers
    //refer to fx to get lowercase

    console.log("userOptions",userOptions)
    console.log("pwLength",pwLength)

     for(let i=0;i<pwLength;i++){
       let userOption = getRandomUserOption();
      console.log("user option",userOption);
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

    // for(let i=0;i<parseInt(pwLength);i++){
    //   //Math.floor(Math.random() * (max - min) + min);
    //   //console.log(userOptions[Math.floor(Math.random() * ((userOptions.length) - 0) + 0)]);
    //   if(userOptions[Math.floor(Math.random() * ((userOptions.length) - 0) + 0)]=="lower")
    //     {
    //       finalpw+=getRandomLower();
    //     }
    //     if(userOptions[Math.floor(Math.random() * ((userOptions.length) - 0) + 0)]=="symbol")
    //     {
    //       finalpw+=getRandomSymbol();
    //     }
    //     if(userOptions[Math.floor(Math.random() * ((userOptions.length) - 0) + 0)]=="upper")
    //     {
    //       finalpw+=getRandomUpper();
    //     }
    //     if(userOptions[Math.floor(Math.random() * ((userOptions.length) - 0) + 0)]=="number")
    //     {
    //       finalpw+=getRandomNumber();
    //     }
        
    // }

  




  //returns the user's pw
  return finalpw;
}


// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
