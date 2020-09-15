let str = "aldkajg"; 

function rev(str) {
  return str.split('').reverse().join(''); 
}

function pallindrome(str) {
  let revStr = rev(str); 
  if(str === revStr) {
    return true; 
  }
  else { 
    return false; 
  }
}
console.log(pallindrome(str));