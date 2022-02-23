function tugas1() {
  let text1 = "Semangat...";
  
  console.log(text1.repeat(5));
}



function tugas2() {
  let text2 = "*****";

  for (let i = 1; i <= 20; i=i+4) {
    console.log(text2.repeat(i));
  }
  
  for (let x = 13; x >= 1; x=x-4) {
    console.log(text2.repeat(x));
  }
}

tugas1();
console.log("\n");
tugas2();


