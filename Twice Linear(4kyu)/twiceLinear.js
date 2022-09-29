function dblLinear(n) {
    //first number in the sequence is 1
    let k = [1]
    //based on initial number, grow array
    for(let i = 0; i<7*n ; i++){
        //add new numbers y and z where y = 2 * current number + 1 and z = 3 * current number + 1
        k.push(k[i] * 2 + 1);
        k.push(k[i] * 3 + 1);
    }
    
    //sort in ascending order
    k.sort((a,b)=> {
    return a-b;
    })
    
    //remove duplicate numbers
    k = [...new Set(k)]
  return k[n];
}
