let song =
"Aku ingin begini Aku ingin begitu Ingin ini itu banyak sekali Semua semua semua Dapat dikabulkan Dapat dikabulkan Dengan kantong ajaib Aku ingin terbang bebas Di angkasa Hei… baling baling bambu La...la...la...Aku sayang sekali Doraemon La...la...la... Aku sayang sekali";

 var count =  (song.match(/\b(?:aku|dapat|ingin)\b/igm)).length; 
 console.log(count);