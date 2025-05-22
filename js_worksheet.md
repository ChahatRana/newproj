
JAVASCRIPT WORKSHEET

1.
let str = "  A1phaIntern  ";
console.log(str.trim().toUpperCase());

Output: "ALPHAINTERN"


2. 
let str = "webdevelopment";
console.log(str.slice(3, 6));

Output: "dev"


3. 
let str = "AlphaIntern";
console.log(str.substring(6));


Output: "ntern"



4. 
let str = "Welcome to AlphaIntern";
console.log(str.includes("Alpha"));

Output: true


5. 

let char = "A";
console.log(char.charCodeAt(0));

Output: 65


Section B

1. 
let name = "Riya";
let score = 92;
console.log(Hello ${name}, you scored ${score} in Web Development!);


2. 
let myName = "YourName";
console.log(myName);


3. let combined = "Alpha" + "Intern";
console.log(combined);


4. let str = "AlphaIntern";
console.log(str.charAt(3));  
Output: h


5. let role = "backend developer";
console.log(role.toUpperCase());


6. let stack = "MERN STACK";
console.log(stack.toLowerCase());


7. let company = "AlphaIntern";
console.log(company.length);



Section C

1. Template literals are enclosed by backticks (`) instead of quotes.

2. str.split("") will return an array of characters.

3. str.toLowerCase() is used to convert a string to lowercase.

4. str.replaceAll("a", "z") replaces all occurrences of "a".

5. str.startsWith("web") returns a boolean value.



Section D

1. console.log("developer".includes("love")); 
false


2. console.log("AlphaIntern".startsWith("Alpha"));
true


3. console.log("AlphaIntern".endsWith("tern"));
true


4. console.log("JavaScript".indexOf("a"));
1


5. console.log("I am a Backend developer".includes("Backend"));
true

   
Section E

1. console.log("AlphaIntern".replace("Intern", "Mentor"));
AlphaMentor


2. console.log("banana".replaceAll("a", "z")); 
bznznz


3. console.log(" JavaScript is awesome ".trim()); 
JavaScript is awesome


4. console.log("AlphaIntern".slice(5));
Intern


5. console.log("AlphaIntern".slice(0, 5)); 
Alpha

Section F


1.
let sentence = "I love coding";
console.log(sentence.split(" "));  
["I", "love", "coding"]


2. 
let str = "Alpha";
console.log(str.split("")); 
["A", "l", "p", "h", "a"]


3. 
let char = "A";
console.log(char.charCodeAt(0)); 
65


4. 
let arr = ["web", "dev"];
console.log(arr.join(" "));  
"web dev"


5. Given let s = "JavaScript is Awesome"

a. console.log(s.toLowerCase());

b. console.log(s.toUpperCase());

c. console.log(s.replace("Awesome", "Powerful"));

d.console.log(s.startsWith("Java"));
true


6. 
let fullStr = "AlphaIntern WebDev";
console.log(fullStr.split(" ")[1]); 
"WebDev"


7.
let fruits = "apple, banana, grape";
console.log(fruits.split(", ")); 
["apple", "banana", "grape"]



Section G:

1. 
function countVowels(str) {
  return (str.match(/[aeiouAEIOU]/g) || []).length;
}


2. 
function reverseString(str) {
  return str.split("").reverse().join("");
}


3.
function isPalindrome(str) {
  let rev = str.split("").reverse().join("");
  return str === rev;
}


4. 
function capitalizeWords(sentence) {
  return sentence.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}


5. 
function countAlpha(str) {
  let replaced = str.replaceAll("Alpha", "");
  return (str.length - replaced.length) / 5; 
}
// "Alpha".length = 5