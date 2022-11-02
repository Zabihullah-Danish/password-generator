const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3",
 "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",
 ";","<",">",".","?","/"];
 const Strings = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"
 ];
 const Numbers = [
    "1", "2", "3",
    "4", "5", "6", "7", "8", "9"
 ];
 const SpecialChars = [
    "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",
    ";","<",">",".","?","/"
 ];

 let passwordOneEl = document.getElementById('password1');
 let passwordTwoEl = document.getElementById('password2');

 let passOne = "";
 let passTwo = "";
 let copied = false;
 //password type elements
 
 let stringEl = document.getElementById('strings');
 let numbersEl = document.getElementById('numbers');
 let stringNumberEl = document.getElementById('stringNumber');
 let stringSpecialCharEl = document.getElementById('stringSpecialChar');
 let stringNumberSpecialCharEl = document.getElementById('stringNumberSpecialChar');

 function getPassword(){
    complexPassword();
    passwordOneEl.textContent = passOne;
    passwordTwoEl.textContent = passTwo;
    passOne = "";
    passTwo = "";
    document.getElementById('copied1').style.display = "none";
    document.getElementById('copied2').style.display = "none";
 }

 function copyToClipboardPassword1(){
    let copiedText1 = passwordOneEl;
    navigator.clipboard.writeText(copiedText1.textContent);
    document.getElementById('copied1').style.display = "block";
    
    // alert("Copied to Clipboard");
 }
 function copyToClipboardPassword2(){
    let copiedText2 = passwordTwoEl;
    navigator.clipboard.writeText(copiedText2.textContent);
    document.getElementById('copied2').style.display = "block";
    
    // alert("Copied to Clipboard");
 }

 function complexPassword(){
    
    for(let i = 0; i < 15; i++){
        let password1 = Math.floor(Math.random() * characters.length);
        let password2 = Math.floor(Math.random() * characters.length);

        passOne += characters[password1];
        passTwo += characters[password2];
    }
 }
 function stringPassword(){
    for(let i = 0; i < 15; i++){
        let password1 = Math.floor(Math.random() * Strings.length);
        let password2 = Math.floor(Math.random() * Strings.length);

        passOne += Strings[password1];
        passTwo += Strings[password2];
    }
 }
 function numberPassword(){
    for(let i = 0; i < 15; i++){
        let password1 = Math.floor(Math.random() * Numbers.length);
        let password2 = Math.floor(Math.random() * Numbers.length);

        passOne += Numbers[password1];
        passTwo += Numbers[password2];
    }
 }
 function stringNumberPassword(){

 }

