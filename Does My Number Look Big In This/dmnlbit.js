function narcissistic(value) {
    count = 0
    for (i = 0; i< value.toString().length;i++){
      count += Math.pow(parseInt(value.toString()[i]),value.toString().length)
    }
     count == value ? result = true : result =  false
    
    return result
  }