function checkPalindrome() {  // 1. Function to check if the input is a palindrome

    var txt = document.getElementById("inputBox").value;

    var len = txt.length;
    for (var i = 0; i < len / 2; i++) {
        if (txt[i] !== txt[len - 1 - i]) {
            alert("The input is not a palindrome");
            return;
        }
    }
    alert("The input is a palindrome!");
}





function countUniqueWords() {  //2. 
    var sentence = document.getElementById("inputBox").value;
    var words = sentence.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").toLowerCase().split(' ');
       // Create an object to store unique words
    var uniqueWords = {};
     // Iterate through the words and store them in the object
    for (var i = 0; i < words.length; i++) {
        uniqueWords[words[i]] = true;
    }

    // Count the number of keys in the object (unique words)
    var count = Object.keys(uniqueWords).length;

    // Alert the number of unique words
    alert("The number of unique words in the input is: " + count);
}





// Function to reverse the input string
function reverseString() {  //3.
    // Get the input value from the HTML input box
    var inputText = document.getElementById("inputBox").value;

    // Split the string into an array of characters, reverse it, and join back into a string
    var reversedText = inputText.split('').reverse().join('');

    // Alert the reversed string
    alert("The reversed string of the input is: " + reversedText);
}





// Function to sum the elements of an array
function sumArrayElements() {  //4.
    // Get the input value from the HTML input box
    var inputText = document.getElementById("inputBox").value;

    // Split the input string into an array of numbers, converting each element to a number
    var numbers = inputText.split(',').map(Number);

    // Use reduce to calculate the sum of the array elements
    var sum = numbers.reduce(function (acc, curr) {
        return acc + curr;
    }, 0);

    // Alert the sum of array elements
    alert("The sum of array elements in the input is: " + sum);
}






// Function to check if a number is prime
function checkPrimeNumbers() { //5.
    // Get the input value from the HTML input box
    var inputText = document.getElementById("inputBox").value;

    // Parse the input as an integer
    var number = parseInt(inputText);

    // Check if the input is a valid positive integer greater than 1
    if (isNaN(number) || number <= 1) {
        alert("Please enter a valid positive integer greater than 1.");
        return;
    }

    // Iterate through potential divisors up to the square root of the number
    for (var i = 2; i <= Math.sqrt(number); i++) {
        // If the input is divisible by any number, it's not prime
        if (number % i === 0) {
            alert("The input is not a prime number.");
            return;
        }
    }

    // If the loop completes, the input is a prime number
    alert("The input is a prime number!");
}
