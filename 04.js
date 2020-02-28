function leapYear(input1, input2) {
  const year2 = input2;
  for (let year1 = input1; year1 <= year2; year1++) {
    if ((year1 % 4 == 0 && year1 % 100 != 0) || year1 % 400 == 0) {
      console.log("Tahun", year1, "Adalah Kabisat");
    } else {
      console.log("Tahun", year1, "Adalah Bukan Kabisat");
    }
  }
}

leapYear(2010, 2020);
