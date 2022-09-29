function rgb(r, g, b){
    let color = [r,g,b];
    let toHex = (number=0) =>{
      let hexCode = {0 : '0', 1 : '1', 2 : '2', 3 : '3', 4 : '4', 5 : '5', 6 : '6', 7 : '7', 8 : '8', 
                     9 : '9', 10 : 'A' , 11 : 'B' , 12 : 'C' , 13 : 'D' , 14 : 'E' , 15 : 'F'}
      var string = [];
      number > 255? number = 255 : number = number;
      number < 0? number = 0 : number = number
      for(i=number;i>=16;i = Math.floor(i/16)){
        string.push(hexCode[i%16]);
      }
      number < 16 ? string.push(`0${hexCode[i]}`) : string.push(hexCode[i])
      return string.reverse().join('');
  }
    let final =  color.map(i => toHex(i) ).join('')
    
    return final
  }