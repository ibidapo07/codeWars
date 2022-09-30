function likes(names) {
    let like = names
    switch(like.length){
        case  0 : return "no one likes this";
        case  1 : return `${like[0]} likes this`;
        case 2 : return `${like[0]} and ${like[1]} like this`;
        case  3 : return `${like[0]}, ${like[1]} and ${like[2]} like this`;
        default : return `${like[0]}, ${like[1]} and ${like.length - 2} others like this`;
    }
  }