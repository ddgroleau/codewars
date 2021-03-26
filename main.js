function pipeFix(numbers){
    let index = 0;
    const arr = []
    const recurse = (i) => {
    if (i != numbers[numbers.length-1]) {
      arr.push(numbers[i])
      recurse(i+1)
    }
    return arr;
    }
    recurse(index);
    return arr;
    }