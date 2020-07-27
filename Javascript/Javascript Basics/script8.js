function loop() {
  for (let i = 0; i < 10; i++) {
    if (i === 5) {
      break; // early exit
      //   continue; // skip below code for i===5
      //   return;
    }
    console.log(i);
  }
  console.log("loop ended...");
}

loop();
