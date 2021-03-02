let arr = ["kita", "atik", "tika", "aku", "kia", "makan", "kua"];

function fidAnagram(arr) {
  let result = {};
  for (let text of arr) {
    let gathered = text.split("").sort().join("");

    if (result[gathered]) {
      result[gathered].push(text);
    } else {
      result[gathered] = [text];
    }
  }
  return Object.values(result);
}
console.log(fidAnagram(arr));
