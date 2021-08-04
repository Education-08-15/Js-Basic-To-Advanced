/* Strings in javascipt */

//A javascript string is zero or more characters written inside quotes.
// A javascript String is used to represent and manipulate a sequence of characters.
// We can use double or single quotes
// Strings can be created as primitives. from string literals or as objects, using the String() constructor

let myName = 'shikshya gautam';
let myNickName = 'Nanu';

console.log(myName); // shikshya gautam
console.log(typeof myNickName); // string

// string.prototype.length
// Reflects the length of the string and counts spaces also
console.log(myName.length); // 15

//Escape character
let anySentence =
  'The open Web present\'s incredible opportunities for "developers." ';
console.log(anySentence);
// The open Web present's incredible opportunities for "developers."

//String.prototype.indexOf(searchValue [, fromIndex])
// Finding a string in a string
// searches forward
// Returns the index within the calling String object of the first occurrence of searchValue, or -1 if not found.

const paragraph =
  'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

let searchTerm = 'dog';
console.log(paragraph.indexOf(searchTerm)); //40

console.log(paragraph.indexOf('dog', 42)); //52

// String.prototype.lastIndexOf(searchValue [, fromIndex])
// Returns the index within the calling String object of the last occurrence of searchValue, or -1 if not found.

let anyString = 'Brave new world';
console.log(anyString.lastIndexOf('e', 6)); //4

//String.prototype.search(regexp)
// Searching for a string in a string
// The search() method searches a string for a specified value and returns the position of the match

const myInterest = 'I love coding';
console.log(myInterest.search('love')); // 2

//Extracting strings parts
// There are 3 methods for extracting a part of a string
// slice(start,end)
// substring(start,end)
// substr(start,length)

// String.prototype.slice()
// The slice() method extracts a section of a string and returns it as a new string,
// The slice() method selects the elements starting at the given start number and ends at , but doesnot include the given end argument

const str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.slice(5)); // uick brown fox jumps over the lazy dog.
console.log(str.slice(9, 22)); // brown fox ju

console.log(str.slice(0, -3)); // The quick brown fox jumps over the lazy d

// Challange Time
// Display only 50 characters of  a string?

let myTweets =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ducimus culpa repellendus doloremque id aspernatur qui minus autem a debitis labore numquam dolor deserunt';

let myActualChars = myTweets.slice(0, 50);
console.log(myActualChars); // Lorem ipsum dolor sit amet consectetur adipisicing

//String.prototype.substring()
// The substring() method returns the part of the string between the start and end indexes, or to the end of the string.
//Substring( cannot take negative numbers) if we give negative value then the characters are counted from the 0th position

const length = 'Mozilla';
console.log(length.substring(3, 6)); // ill

console.log(length.substring(4)); // lla

// String.prototype.substr()
// similar to slice() but the seconf parameter specifies the length of the extracted part

console.log(length.substr(2, 5)); // zilla
console.log(length.substr(-3)); // lla

// Replacing string content

// String.prototype.replace(searchFor, replaceWith)
//THe replace() method replaces a specified value with another value in a string

const p =
  'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(p.replace('dog', 'monkey')); // The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?

//points to remember
// 1. The replace() doesnot change the string it is called on . It returns a new String.
// 2. By default, the replace() method replaces only the first match.
// 3. By default, the replace() method is case sensitive.

// Extracting string characters
// There are 3 methods for extracting string characters

// charAt(index)
// charCodeAt(index)
// property acccess []

// THe charAt() method
// Returns the character at the specified index (position) in the string

let s = 'Hello World';
console.log(s.charAt(6)); // W

// charCodeAt() method
// returns the unicode of the character at a specified index of  string
//THe method returns a UTF-16 code (an integer between 0 and 65535)

console.log(s.charCodeAt(6)); //87

// Return the Unicode of the last character in a string
let Str = 'specified offset';
let unicode = Str.charCodeAt(Str.length - 1);
console.log(unicode); // 116

// property access []

let property = 'Hello World';
console.log(property[4]); // o

// String.prototype.toUpperCase()
// Returns the calling string value converted to uppercase.

const sentence = 'The Quick Brown Fox Jumps Over The Lazy Dog.';
console.log(sentence.toUpperCase()); // THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.

// String.prototype.toLowerCase()
// Returns the calling string value converted to lowercase.
console.log(sentence.toLowerCase()); // the quick brown fox jumps over the lazy dog.

// String.prototype.concat(str [, ...strN ])
// Combines the text of two (or more) strings and returns a new string.
const str1 = 'Hello';
const str2 = 'World';
const str3 = 'Welcome';
console.log(str1.concat(str2)); //HelloWorld
console.log(str1.concat(' ', str2)); // Hello World
console.log(str1.concat(',', str2, ',', str3)); // Hello,World,Welcome

// String.prototype.trim()
// Trims whitespace from the beginning and end of the string.

const greeting = '   Hello world!   ';
console.log(greeting); //    Hello world!
console.log(greeting.trim()); // Hello world!

//Converting a String to an Array
//A string can be converted in to array using split method

let txt = 'a,b, c|d,e';
console.log(txt.split(','));
console.log(txt.split(' '));
console.log(txt.split('|'));
