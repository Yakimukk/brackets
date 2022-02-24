module.exports = function check(str, bracketsConfig) {
  // your solution
  arr = []
  if (str.length % 2 != 0) {
    return false;
  } else {
    for (let i = 0; i < str.length; i++) {
      for (let j = 0; j < bracketsConfig.length; j++) {
        if ((bracketsConfig[j][0] === bracketsConfig[j][1])&&(str[i] === bracketsConfig[j][1])) {
          if (stack[stack.length - 1] === str[i]) arr.pop()
          else arr.push(str[i])
        } else {
              if (str[i] === bracketsConfig[j][0]) arr.push(str[i])
              if ((str[i] === bracketsConfig[j][1])&&(arr[arr.length - 1] === bracketsConfig[j][0])) arr.pop()  
        }
      }
    }
  }
  if (arr.length === 0) {
    return true;
  } else {
    return false
  }
}