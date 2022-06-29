function sortString(str){
    var arr = str.split("");
    var sorted = arr.sort();
    return sorted.join('');
  }

st = "pujitha"
console.log(sortString(st))