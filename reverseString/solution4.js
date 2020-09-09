let str = "hello"; 

function reverse(str) {
    let ans = ''; 
  
    for(let character of str) {
  
      ans = character + ans; 
    }
  
    console.log(ans)
}

reverse(str); 