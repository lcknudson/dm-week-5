/* 
Write a function that takes in aone agurment, word. 
When the fucntino is called, return true if that word contains more vowels than non-vowls; otherwise return false. 
*/


//THIS SECTION WORKS

// function getCount(str) {
//     let vowelsCount = 0
//     const vowels = ['a', 'e', 'i', 'o', 'u']
//     for (let char of str) {
//         if (vowels.includes(char)) {
//             vowelsCount++
//         }
//     }
//     return vowelsCount
// }

// console.log(getCount("moose"))


// function hasMoreVowels(str) {
//     const vowelsCount = 0
//     let charCount = str.length
//     // console.log(charCount)
//     function getCount(str) {
//         const vowels = ['a', 'e', 'i', 'o', 'u']
//         for (let char of str) {
//             if (vowels.includes(char)) {
//                 vowelsCount++
//             }
//             return vowelsCount;
//         }
        
//     } 
    
//     console.log("vowel count", vowelsCount);
//     console.log("length:", charCount);

// }

// hasMoreVowels('moose')


// function getCount(str) {
//     let vowelsCount = 0
//     const vowels = ['a', 'e', 'i', 'o', 'u']
//     for (let char of str) {
//         if (vowels.includes(char)) {
//             vowelsCount++
//         }
//     }
//     return vowelsCount
// }

// console.log(getCount("moose"))



/* THIS EXPERIMENT #2 LOST TRACTION 

function hasMoreVowels(str) {
    // let vowelsCount = 0
    let charCount = str.length
    // console.log(charCount)

    const vowelsCount2 = vowelCounter()
    
    function vowelCounter() {
        const vowels = ['a', 'e', 'i', 'o', 'u']
        for (let char of str) {
            if (vowels.includes(char)) {
                vowelsCount++
            }
            return vowelsCount;
        }
        
    } 
    console.log("vowel count", vowelsCount);
    console.log("length:", charCount);
}



hasMoreVowels('moose')
// }

// }
// if (vowelsCount > (charCount - vowelsCount)) {
//     console.log("true")
// } else { 
//     console.log("false")
END EXPERIMENT #2 
*/


//ATTEMPT-EXPERIMENT #3

function getCount(str) {
    let vowelsCount = 0
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    for (let char of str) {
        if (vowels.includes(char)) {
            vowelsCount++
        }
    }
    return vowelsCount
}

// console.log(getCount("moose"))

function hasMoreVowels(str) {
    
    if (getCount(str) > (str.length - getCount(str))) {
        console.log('true')
    } else {
        console.log('false')
    }
    
    
}

hasMoreVowels('moose')
hasMoreVowels('mice')
hasMoreVowels('graph')
hasMoreVowels('yay')
hasMoreVowels('Aal')

