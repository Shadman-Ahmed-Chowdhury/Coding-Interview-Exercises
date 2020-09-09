let str = "hello"; 

function reverse(str) {
    return str.split('').reverse().join('');
}

let ans = reverse(str);
console.log(ans); 