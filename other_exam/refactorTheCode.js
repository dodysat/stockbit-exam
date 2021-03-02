function findFirstStringInBracket(str) {
  var strmatch = str.match(/\(([^)]+)\)/);
  if (strmatch) {
    return strmatch[1];
  } else {
    return "";
  }
}

var findstring = findFirstStringInBracket(
  "Lorem ipsum dolor sit amet, ectet(ur adipiscing elit. Mauris i)aculis consectetur ipsum, sed ultrices leo egestas ac."
);
console.log(findstring);
