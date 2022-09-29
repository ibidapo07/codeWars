function anagrams(word, words) {
    let temp = [];
    let dac = (x,y) => {
      let [left,right] = [y.slice(0,y.length/2),y.slice(Math.floor(y.length/2),y.length)];

      if(left.length == 1){
        validAnagram(x,left[0]) ? temp.push(left[0]) : -1;
      }else{
        dac(x,left)
      }

      if(right.length == 1){
        validAnagram(x,right[0]) ? temp.push(right[0]) : -1;
      }else{
        dac(x,right)
      }
    }

    dac(word,words)

    return temp
  }

function validAnagram(first, second) {
    if (first.length !== second.length) {
      return false;
    }
  
    const lookup = {};
  
    for (let i = 0; i < first.length; i++) {
      let letter = first[i];
      // if letter exists, increment, otherwise set to 1
      lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    //console.log(lookup)
  
    for (let i = 0; i < second.length; i++) {
      let letter = second[i];
      // can't find letter or letter is zero then it's not an anagram
      if (!lookup[letter]) {
        return false;
      } else {
        lookup[letter] -= 1;
      }
    }
  
    return true;
  }