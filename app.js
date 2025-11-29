// 1
let a = prompt ("Yaz");
console.log(a);
console.log("stringin uzunlugu", a.length);

// 2
console.log("'e' herfi var?", Boolean(a.indexOf("e") + 1))
// console.log("'e' herfi var?", Boolean(a.toLowerCase().indexOf("e") + 1))

// 3
console.log("'code' sozu ile baslayib?", a.startsWith("code"))
// console.log("'code' sozu ile baslayib?", a.toLowerCase().startsWith("code"))

// 4
console.log("'code' sozu ile bitib?", a.endsWith("code"))
// console.log("'code' sozu ile bitib?", a.toLowerCase().endsWith("code"))

// 5
console.log(a.replaceAll("t","####"))
// console.log(a.toLowerCase().replaceAll("t","####"))