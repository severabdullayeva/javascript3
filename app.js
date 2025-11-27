// 1
let a = prompt ("Yaz");
console.log(a);
console.log("stringin uzunlugu", a.length);

// 2
let b = Boolean(a.indexOf("e") + 1)
console.log("'e' herfi var?", b)

// 3
console.log("'code' sozu ile baslayib?", a.startsWith("code"))

// 4
console.log("'code' sozu ile bitib?", a.endsWith("code"))

// 5
console.log(a.replaceAll("t","####"))