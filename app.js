// 1-savol

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function func(arr) {
//     if (arr.length === 0) {
//         console.log("massiv bosh");
//     }else{
//        return arr[arr.length -1]
//     }
// }

// console.log(func(arr));

// 2-savol

// function func(str) {
//     let arr = str.length;
//     let yangiArr = Math.floor(arr / 2);

//     if (arr === 0) {
//         return 'Sog bolasiz';
//     } else if (arr % 2 === 0) {
//         return str[yangiArr - 1] + str[yangiArr];
//     } else {
//         return str[yangiArr];
//     }
// }

// console.log(func(prompt("Iltimos soz yozing")));


// 3-savol

// let arr = prompt("Iltimos harif yozing")

// function func(arr) {
//     if (arr.length === 0) {
//         return null
//     }

//     return arr.charCodeAt(0)
// }

// console.log(func(arr));


// 4-savol

// let soz = "salom"
// function func(soz) {
//     if (soz.length < 10) {
//         console.log("Qisqa string");
//     } else {
//         console.log("Uzoq string");
//     }
// }

// console.log(func(soz));


// 5-savol

// let soz = "salom"

// function func(soz) {
//     let yangiArr = []

//     for (let i = 0; i < soz.length; i++) {
//         yangiArr.push(soz.charCodeAt(i))
//     }

//     return yangiArr
// }

// console.log(func(soz));


// 6-savol

// let str = "salomat"

// function func(str) {
//     return str.slice(0,3)
// }

// console.log(func(str));


// 7-savol

// let str = "salom"

// function func(str) {
//     return str.slice(-5)
// }
// console.log(func(str));


// 8-savol

// let str = "saloom"

// function func(str) {
//     let num1 = Math.floor(str.length / 2);
//     let sum;

//     if (str.length % 2 === 0) {
//         sum = str.substring(num1 - 1, num1 + 1);
//     } else {
//         sum = str.charAt(num1);
//     }

//     return sum;
// }


// console.log(func(str));


// 9-savol

// let str = "salomsd"

// function func(str) {
//     return str.substr(5,3)
// }

// console.log(func(str));


// 10-savol

// let str = "salomsd"

// function func(str) {
//     return str.substring(0, 10)
// }

// console.log(func(str));

// 11-savol


// let str = "salomsd"

// function func(str) {
//     return str.slice(-3)
// }

// console.log(func(str));


// 12-savol


// let str = "salomsd"

// function func(str) {
//     return str.substring(2)
// }

// console.log(func(str));


// 13-savol

// let str = "salom"

// function func(str) {
//     return str.toUpperCase()
// }
// console.log(func(str));

// 14-savol

// let str = "SALOM"

// function func(str) {
//     return str.toLowerCase()
// }
// console.log(func(str));


// 15-savol

// let a = "SALOM"
// let b = "salom"

// function func(a, b) {
//     return a.concat(b)
// }
// console.log(func(a,b));


// 16-savol

// let str = "          SALOM           "

// function func(str) {
//     return str.trim()
// }
// console.log(func(str));


// 17-savol


// function padStringStart(str, maxLength, padChar) {
//     return str.padStart(maxLength, padChar);
// }

// let str1 = "SALOM";
// console.log(padStringStart(str1, 40, '*'));



// 18-savol


// function padStringStart(str, maxLength, padChar) {
//     return str.padEnd(maxLength, padChar);
// }

// let str1 = "SALOM";
// console.log(padStringStart(str1, 40, '*'));



// 19-savol


// function trimEndString(str) {
//     return str.trimEnd();
// }

// let str1 = "   SALOM   ";
// console.log(trimEndString(str1));


// 20-savol

// let str = "     salom    "

// function func(str) {
//     return str.trimStart()
// }

// console.log(func(str));


// 21-savol

// function func(str, maxLength) {
//     return str.padStart(maxLength, '0');
// }

// let str1 = "123";
// console.log(func(str1, 6));


// 22-savol

// function padStringWithSpacesEnd(str, maxLength) {
//     return str.padEnd(maxLength, ' ');
// }

// let str1 = "SALOM";
// console.log(padStringWithSpacesEnd(str1, 10));


// 23-savol

// function repeatString(str, N) {
//     return str.repeat(N);
// }

// let str1 = "SALOM";
// console.log(repeatString(str1, 3));


// 24-savol

// function replaceAppleWithOrange(str) {
//     return str.replace("apple", "orange");
// }

// let str = "I have an apple.";
// console.log(replaceAppleWithOrange(str));


// 25-savol

// function replaceFirstSmallAToBigA(str) {
//     return str.replace(/a/, "A");
// }

// let str = "apple is a fruit.";
// console.log(replaceFirstSmallAToBigA(str));


// 26-savol

// function replaceAllCatsWithDogs(str) {
//     return str.replace(/cat/g, "dog");
// }

// let str = "I have a cat. My cat is black. The cat is sleeping.";
// console.log(replaceAllCatsWithDogs(str)); 


// 27-savol


// function replaceAllSmallEToBigE(str) {
//     return str.replace(/e/g, "E");
// }

// let str = "The tree is green. The sky is clear.";
// console.log(replaceAllSmallEToBigE(str)); 



// 28-savol

// function splitBySpaces(str) {
//     return str.split(" ");
// }

// let str = "This is a sample string";
// console.log(splitBySpaces(str)); 


// 29-savol

// function splitByEachCharacter(str) {
//     return str.split("");
// }

// let str = "Hello";
// console.log(splitByEachCharacter(str)); 



// 30-savol


// function splitByDelimiter(str, delimiter) {
//     return str.split(delimiter);
// }

// let str = "apple,banana,orange,grape";
// console.log(splitByDelimiter(str, ","));



// 31-savol

// function processString(str) {
//     let step1 = str.replace(/a/g, "*");

//     let step2 = step1.replace(/\b(\w+)\b/g, "$1$1$1");

//     let step3 = step2.split(" ");

//     return step3;
// }

// let str = "apple banana orange grape";
// console.log(processString(str)); 



// 32-savol


// function processString(str) {
//     let arr = str.split(" ");

//     let newArr = arr.map(function(word) {
//         return word.toUpperCase();
//     });

//     let result = newArr.join(", ");

//     return result;
// }

// let str = "apple banana orange grape";
// console.log(processString(str));


// 33-savol


// function joinArrayWithLength(arr) {
//     let result = arr.join("");

//     return result + arr.map(word => word.length).join("");
// }

// let arr = ["apple", "banana", "orange", "grape"];
// console.log(joinArrayWithLength(arr)); 


// 34-savol

// function cleanArrayToString(arr) {
//     let result = arr.join("");

//     result = result.replace(/\s+/g, '');

//     return result;
// }

// let arr = ["apple", "", "banana", "orange", "", "grape"];
// console.log(cleanArrayToString(arr));



// 35-savol


// function stringToUnicodeArray(str) {
//     let arr = str.split("");

//     let unicodeArray = arr.map(char => char.charCodeAt(0));

//     return unicodeArray;
// }

// let str = "Hello";
// console.log(stringToUnicodeArray(str)); 



// 36-savol

// function reverseArrayToString(arr) {
//     let reversedArr = arr.reverse();

//     let result = reversedArr.join("");

//     return result;
// }

// let arr = ["apple", "banana", "orange", "grape"];
// console.log(reverseArrayToString(arr)); 


// 37-savol

// function padArrayElementsWithZeros(str) {
//     let arr = str.split(" ");

//     let paddedArr = arr.map(element => "0" + element);

//     let result = paddedArr.join(" ");

//     return result;
// }

// let str = "apple banana orange grape";
// console.log(padArrayElementsWithZeros(str)); 


// 38-savol

// function lowercaseArrayToString(arr) {
//     let lowercasedArr = arr.map(element => element.toLowerCase());

//     let result = lowercasedArr.join("-");

//     return result;
// }

// let arr = ["Apple", "Banana", "Orange", "Grape"];
// console.log(lowercaseArrayToString(arr));


// 39-savol


// function joinArrayElementsWithXYZ(str) {
//     let arr = str.split(",");

//     let result = arr.join("xyz");

//     return result;
// }

// let str = "apple,banana,orange,grape";
// console.log(joinArrayElementsWithXYZ(str)); 


// 40-savol

// function sumArrayElementsLength(arr) {
//     let sum = arr.reduce((total, element) => total + element.length, 0);

//     let result = sum.toString();

//     return result;
// }

// let arr = ["apple", "banana", "orange", "grape"];
// console.log(sumArrayElementsLength(arr)); 


// 41-savol

// function squareCharactersOfString(str) {
//     let arr = str.split("");

//     let squaredArr = arr.map(char => Math.pow(char.charCodeAt(0), 2));

//     let result = squaredArr.join("");

//     return result;
// }

// let str = "hello";
// console.log(squareCharactersOfString(str)); 


// 42-savol

// function findFirstAppleIndex(str) {
//     return str.indexOf("apple");
// }

// let str = "I have an apple and a banana.";
// console.log(findFirstAppleIndex(str)); 


// 43-savol

// function findFirstAtSymbolIndex(str) {
//     return str.indexOf("@");
// }

// let str = "user@gmail.com";
// console.log(findFirstAtSymbolIndex(str));


// 44-savol

// function searchBanana(str) {
//     return str.search("banana");
// }

// let str1 = "I have a banana";
// let str2 = "There is an apple";

// console.log(searchBanana(str1));


// 45-savol

// function searchForDigit(str) {
//     let regex = /\d/;
//     let index = str.search(regex);
    
//     return index;
// }

// let str1 = "I have 3 apples";
// let str2 = "There are no numbers";

// console.log(searchForDigit(str1));


// 46-savol

// function includesCat(str) {
//     return str.includes("cat");
// }

// let str1 = "I have a cat";
// let str2 = "There are no cats here";

// console.log(includesCat(str1));


// 47-savol

// function includes2024(str) {
//     return str.includes("2024");
// }

// let str1 = "2024 is a leap year";
// let str2 = "There are no leap years";

// console.log(includes2024(str1));



// 48-savol

// function startsWithHello(str) {
//     return str.startsWith("Hello");
// }

// let str1 = "Hello, world!";
// let str2 = "Goodbye, world!";

// console.log(startsWithHello(str1));




















































































