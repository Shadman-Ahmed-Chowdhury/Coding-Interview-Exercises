let str = "hello"; 

function reverse(str) {
    return str.split('').reduce((rev, char) => char + rev, ''); 
}

reverse(str); 