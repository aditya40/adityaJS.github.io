function cetakAngka() {
  for (let counter = 1; counter <= 1000; counter++) {
      let notPrime = false;
      for (let i = 2; i <= counter; i++) {
          if (counter % i === 0 && i !== counter) {
              notPrime = true;
          }
      }
      if (counter == 1) {
          console.log(counter + '. Ganjil')
      } else if (notPrime === false && counter < 100) {
          console.log(counter + '. Bilangan Prima Kurang Dari Seratus dan ganjil');
      } else if (notPrime === false) {
          console.log(counter + '. Bilangan Prima dan ganjil');
      } else if (counter % 5 == 0 && counter % 2 === 0) {
          console.log(counter + '. Kelipatan Lima dan genap')
      } else if (counter % 5 == 0 && counter % 2 === 1) {
          console.log(counter + '. Kelipatan Lima dan ganjil')
      } else if (counter % 2 === 0) {
          console.log(counter + '. Genap')
      } else if (counter % 2 === 1) {
          console.log(counter + '. Ganjil')
      }
  }
}
cetakAngka();