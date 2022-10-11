var countBits = function(n) {
    let count = 0 
    let number = n
    if(number == 0){return 0}
    if(number == 1){return 1}
    while(number >= 1){
      if (number%2 == 1){count += 1}
      number = Math.floor(number/2)
    }
    
    return count
  };