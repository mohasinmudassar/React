
// Challange 1
// Taking square of elements in array using map function/method

const nums =[2,3,4,5]
console.log(nums.map(num => num * num))

// Challange 2
const words = ['hello', 'world', 'this', 'is', 'map']
// Printing  length of each word in array
console.log(words.map(word => word.length))
// Uppercasinf first letter of each word in array
console.log(words.map(word => word.charAt(0).toUpperCase() + word.slice(1)))

// Challange 3
// Giving string and returing it with html-like <p> </p> tag.

const name = ['John', 'Doe', 'Smith']
console.log(name.map(name => `<p>${name}</p>`))





