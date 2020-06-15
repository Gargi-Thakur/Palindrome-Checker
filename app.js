var form = document.getElementById('form');
var wordInput = document.getElementById('wordInput');
var result = document.getElementById('result');

form.addEventListener('submit', function(e){
	e.preventDefault();
 
	var userInput = wordInput.value;
    
	result.innerHTML = isPalindrome(userInput);
  
});

/*

isPalindrome will determine if the given string is palindrome or not
1. letter on the first i postion will be compared with the last i 
2. 1/2 of letter will be compared otherwise it will be compared twice
3. compare if palindrome true or false
*/

function isPalindrome(userInput){
  
  for ( let i = 0; i <= ( userInput.length / 2 ); i++ ) {
	if ( userInput[i] != userInput[(userInput.length - 1 - i)] ) {
    	return "This is not a palindrome.";
    } 
  }
		return "It's a Palindrome!" ;
}