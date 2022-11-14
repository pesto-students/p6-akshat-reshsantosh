let str = "santosh is good boy"
let map = new Map();
let vowel = "aeiou"
let len = str.length;

for (let i = 0; i < len; i++) {
   
    let char = str.charAt(i)
    if (str.charAt(i) == "a" || str.charAt(i) == "e" || str.charAt(i) == "i" || str.charAt(i) == "o" || str.charAt(i) == "u")
    {

    if (map.has(char)) {
        let value = map.get(char)
        // console.log(value);
        map.set(char, value + 1)
    } else {
        map.set(char, 1)
    }
}

}
console.log(map);
