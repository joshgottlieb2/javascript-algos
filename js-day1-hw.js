//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
// let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
// let dog_names = ["Max", "HAS", "PuRple", "dog"]

// function findWords(str, arr) {
//     matches = 0
//     stringLower = str.toLowerCase()
//     for (each of arr) {
//         if (stringLower.includes(each.toLowerCase())) {
//             console.log("Matched " + each )
//         matches ++
//         } 
//     }
//     if (matches == 0) {
//         console.log("No Matches")
//     }
// }

// findWords(dog_string, dog_names)


//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

// arr == ["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"]

// function replaceEvens(arr) {
//     for (i=0; i<arr.length;i+=2) {
//         arrSpliced = arr.splice(i, 1, "even index")
//     }
    
//     console.log(arr)
//     return arr    
// }

// replaceEvens(["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"])

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]


// Codewars Exercise 1

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// function even_or_odd(number) {
//     if (number % 2 == 0) {
//         return "Even"
//     } else {
//         return "Odd"
//     }
// }


// Codewars Exercise 2

// Return the number(count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata(but not y).
// The input string will only consist of lower case letters and / or spaces.

// function getCount(str) {
//     numVowels = 0
//     vowels = ["a", 'e', 'i', 'o', 'u']
//     for (each of str) {
//         if (vowels.includes(each)) {
//             numVowels++
//         }
//     }

//     return numVowels;
// }