// Assignment Code
let generateBtn = document.querySelector("#generate");
let lower = "getRandomLower";
let upper = "getRandomUpper";
let number = "getRandomNumber";
let symbol = "getRandomSymbol";
let pwLength = "pwlength";
let pwLengthAsNumber = parseInt(pwLength);
let finalpw='';


// document.getElementById("generate").onclick = function() {
//   pwLength = prompt("Enter a password length between 8 - 28.")
//   lower = confirm("Do you want lowercase characters?");
//   upper = confirm("Do you want uppercase characters?");
//   number = confirm("Do you want numbers?");
//   symbol = confirm("Do you want special characters?");
//   return;
// };
  console.log(getRandomUpper());


var usersOption=[];

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


function generatePassword(){
  usersOption=[];
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
  pwLength = prompt("Enter a password length between 8 - 128.");

  while(parseInt(pwLength)>128 || parseInt(pwLength)<8)
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
    usersOption.push('lower')
  }
  if(upper){
    usersOption.push('upper')
  }
  if(number){
    usersOption.push('number')
  }
  if(symbol){
    usersOption.push('symbol')
  }

  //if yes to lowers
    //refer to fx to get lowercase

    console.log(usersOption)
    console.log(pwLength)

    for(var i=0;i<parseInt(pwLength);i++){
      //Math.floor(Math.random() * (max - min) + min);
      //console.log(usersOption[Math.floor(Math.random() * ((usersOption.length) - 0) + 0)]);
      if(usersOption[Math.floor(Math.random() * ((usersOption.length) - 0) + 0)]=="lower")
        {
          finalpw+=getRandomLower();
        }
        if(usersOption[Math.floor(Math.random() * ((usersOption.length) - 0) + 0)]=="symbol")
        {
          finalpw+=getRandomSymbol();
        }
        if(usersOption[Math.floor(Math.random() * ((usersOption.length) - 0) + 0)]=="upper")
        {
          finalpw+=getRandomUpper();
        }
        if(usersOption[Math.floor(Math.random() * ((usersOption.length) - 0) + 0)]=="number")
        {
          finalpw+=getRandomNumber();
        }
        
    }

    console.log(finalpw);
  



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
