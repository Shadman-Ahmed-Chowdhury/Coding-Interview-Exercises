let str = "hello"; 

function reverse(str) {
    const arr = str.split(''); 
    arr.reverse(); 
    return arr.join(''); 
}

let ans = reverse(str); 
console.log(ans);