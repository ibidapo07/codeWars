function dblLinear(n) {
    let k = [1]
    for(let i = 0; i<7*n ; i++){
        k.push(k[i] * 2 + 1);
        k.push(k[i] * 3 + 1);
    }
  
    k.sort((a,b)=> {
    return a-b;
    })
  
    k = [...new Set(k)]
  return k[n];
}