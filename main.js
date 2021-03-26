function reverseNumber(n) {
    let reverse = 0;
    const recurse = (i) => {
      if (i >= 0) {
        reverse += n.toString()[i].toString();
        recurse(i-1);
      } else { return }
    };
    recurse(n.toString().length-1);
   return  n < 0 ? parseFloat(reverse)*-1 : parseFloat(reverse)
    }
    console.log(reverseNumber(-123))