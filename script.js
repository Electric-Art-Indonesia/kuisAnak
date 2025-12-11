
const QUESTIONS = [
  {q:"Berapakah 2 + 3 ?",a:["4","5","6","7"],c:1},
  {q:"Hewan apa yang bisa terbang?",a:["Kucing","Burung","Ikan","Gajah"],c:1},
  {q:"Hari setelah Senin adalah …",a:["Minggu","Selasa","Rabu","Kamis"],c:1},
  {q:"Warna bendera Indonesia adalah …",a:["Merah Putih","Biru Putih","Hijau Kuning","Hitam Putih"],c:0},
  {q:"Buah apa yang berwarna kuning?",a:["Apel","Pisang","Semangka","Anggur"],c:1},
  {q:"Berapakah 10 – 7 ?",a:["2","3","4","5"],c:1},
  {q:"Apa lawan kata besar?",a:["Kecil","Tinggi","Pendek","Banyak"],c:0},
  {q:"Kita minum dengan …",a:["Telinga","Mulut","Mata","Hidung"],c:1},
  {q:"Matahari terbit dari arah …",a:["Utara","Barat","Timur","Selatan"],c:2},
  {q:"Berapakah jumlah hari dalam seminggu?",a:["5","6","7","8"],c:2},
  {q:"Berapakah 1 + 1 ?",a:["1","2","3","4"],c:1},
  {q:"Binatang yang suka wortel adalah …",a:["Kelinci","Kucing","Ayam","Ikan"],c:0},
  {q:"Ibu kota Indonesia adalah …",a:["Bandung","Surabaya","Jakarta","Medan"],c:2},
  {q:"Hewan yang hidup di air adalah …",a:["Kuda","Ikan","Kucing","Burung"],c:1},

  {q:"Berapakah 5 – 2 ?",a:["2","3","4","5"],c:1},
  {q:"Warna daun biasanya adalah …",a:["Merah","Kuning","Hijau","Biru"],c:2},
  {q:"Siang kebalikan dari …",a:["Malam","Pagi","Sore","Subuh"],c:0},
  {q:"Kaki manusia ada …",a:["1","2","3","4"],c:1},
  {q:"Hewan yang mengeluarkan suara 'meong' adalah …",a:["Ayam","Kucing","Anjing","Sapi"],c:1},
   {q:"Berapakah 1 + 3 ?",a:["2","3","4","5"],c:2},
  {q:"Hewan apa yang suka menggonggong?",a:["Kucing","Anjing","Ayam","Bebek"],c:1},
  {q:"Buah berwarna oranye adalah …",a:["Pisang","Jeruk","Apel","Mangga"],c:1},
  {q:"Berapakah 6 – 1 ?",a:["4","5","6","7"],c:1},
  {q:"Kita menulis di …",a:["Buku","Meja","Kursi","Papan"],c:0},
  {q:"Benda yang bisa dipakai untuk melihat jam adalah …",a:["Bola","Jam","Sepatu","Kursi"],c:1},
  
  {q:"Lawan kata siang adalah …",a:["Malam","Pagi","Sore","Subuh"],c:0},
  {q:"Berapakah 3 + 5 ?",a:["7","8","9","10"],c:1},
  {q:"Binatang yang bertelur adalah …",a:["Kucing","Ayam","Kambing","Sapi"],c:1},
  {q:"Kita berjalan dengan …",a:["Kaki","Tangan","Mata","Telinga"],c:0},
  {q:"Berapakah 7 – 2 ?",a:["4","5","6","7"],c:1},
  {q:"Hewan yang berbelalai adalah …",a:["Sapi","Kuda","Gajah","Kelinci"],c:2},
  {q:"Langit di siang hari berwarna …",a:["Hijau","Biru","Merah","Putih"],c:1},
  {q:"Berapakah 2 + 7 ?",a:["8","9","10","11"],c:1},
  {q:"Kita membaca dengan …",a:["Telinga","Mata","Mulut","Kaki"],c:1},
  {q:"Hewan yang punya sayap adalah …",a:["Burung","Ikan","Kucing","Kuda"],c:0},
  {q:"Buah naga warnanya …",a:["Hijau","Merah","Biru","Kuning"],c:1},
  {q:"Berapakah 4 – 1 ?",a:["2","3","4","5"],c:1},
  {q:"Lawan kata jauh adalah …",a:["Dekat","Lama","Kecil","Besar"],c:0},
  {q:"Kita makan nasi dengan …",a:["Mata","Tangan","Kaki","Hidung"],c:1},
  {q:"Hewan yang bertanduk adalah …",a:["Ayam","Sapi","Kelinci","Bebek"],c:1},
  {q:"Berapakah 9 – 1 ?",a:["7","8","9","10"],c:1},
  {q:"Warna rumput adalah …",a:["Merah","Kuning","Hijau","Putih"],c:2},
  {q:"Kita tidur pada waktu …",a:["Pagi","Siang","Malam","Sore"],c:2},
  {q:"Hewan yang berbulu tebal dan bisa aum adalah …",a:["Kucing","Harimau","Sapi","Ayam"],c:1},
  
  {q:"Berapakah 5 + 2 ?",a:["6","7","8","9"],c:1},
  {q:"Buah mangga rasanya …",a:["Asin","Manis","Pahit","Tawar"],c:1},
  {q:"Lawan kata ringan adalah …",a:["Cepat","Berat","Lambat","Tinggi"],c:1},
  {q:"Berapakah 8 – 6 ?",a:["1","2","3","4"],c:1},
  {q:"Kendaraan di udara adalah …",a:["Mobil","Sepeda","Pesawat","Kapal"],c:2},
  {q:"Kita minum air agar tidak …",a:["Lapar","Haus","Ngantuk","Marah"],c:1},
  {q:"Hewan yang bisa berubah warna adalah …",a:["Kucing","Bebek","Bunglon","Burung"],c:2},
  {q:"Berapakah 4 + 2 ?",a:["5","6","7","8"],c:1},
  {q:"Lawan kata tinggi adalah …",a:["Kecil","Rendah","Dekat","Berat"],c:1},
  {q:"Buah berwarna merah kecil-kecil adalah …",a:["Apel","Semangka","Stroberi","Pisang"],c:2},
  {q:"Berapakah 10 – 9 ?",a:["0","1","2","3"],c:1},
  {q:"Kita belajar di …",a:["Rumah","Sekolah","Pasar","Kebun"],c:1},
  {q:"Hewan yang punya cula adalah …",a:["Gajah","Kuda","Badak","Kelinci"],c:2},
  {q:"Berapakah 6 + 3 ?",a:["8","9","10","11"],c:1},
  {q:"Buah apel biasanya berwarna …",a:["Biru","Hijau/Merah","Kuning","Hitam"],c:1},
  {q:"Lawan kata cepat adalah …",a:["Pelan","Lambat","Berat","Dekat"],c:1},
  {q:"Kita menghirup udara dengan …",a:["Hidung","Mata","Mulut","Telinga"],c:0},
  {q:"Hewan yang suka madu adalah …",a:["Kucing","Beruang","Ayam","Ikan"],c:1},
  {q:"Berapakah 2 + 8 ?",a:["9","10","11","12"],c:1},
  {q:"Bintang terlihat di waktu …",a:["Siang","Malam","Pagi","Sore"],c:1},
  {q:"Buah yang bentuknya lonjong dan berwarna ungu adalah …",a:["Mangga","Jambu","Terong","Semangka"],c:2},
  
  {q:"Berapakah 7 – 3 ?",a:["2","3","4","5"],c:2},
  {q:"Lawan kata banyak adalah …",a:["Sedikit","Sedang","Kosong","Penuh"],c:0},
  {q:"Burung berkaki …",a:["1","2","3","4"],c:1},
  {q:"Berapakah 3 + 6 ?",a:["7","8","9","10"],c:2},
  {q:"Air kita simpan di …",a:["Botol","Kursi","Buku","Papan"],c:0},
  {q:"Buah pisang tumbuh di …",a:["Pohon","Tanah","Air","Rumah"],c:0},
  {q:"Berapakah 4 + 1 ?",a:["4","5","6","7"],c:1},
  {q:"Lawan kata pendek adalah …",a:["Tinggi","Kecil","Lebar","Rendah"],c:0},
  {q:"Binatang yang punya ekor panjang dan suka pisang adalah …",a:["Kelinci","Monyet","Ayam","Burung"],c:1},
  
  {q:"Berapakah 8 + 1 ?",a:["8","9","10","11"],c:1},
  {q:"Warna darah adalah …",a:["Biru","Hijau","Merah","Putih"],c:2},
  {q:"Kita duduk di atas …",a:["Meja","Kursi","Lantai","Kasur"],c:1},
  {q:"Hewan yang bertaring besar adalah …",a:["Kucing","Harimau","Ayam","Ikan"],c:1},
  {q:"Berapakah 5 – 3 ?",a:["1","2","3","4"],c:1},
  {q:"Benda yang dipakai untuk menghapus pensil adalah …",a:["Buku","Penghapus","Bolpoin","Kertas"],c:1},
  {q:"Lawan kata masuk adalah …",a:["Naik","Turun","Keluar","Jauh"],c:2},
  {q:"Berapakah 7 + 1 ?",a:["6","7","8","9"],c:2},
  {q:"Buah durian punya kulit …",a:["Lembut","Halus","Berduri","Licin"],c:2},
  {q:"Kita makan buah dengan …",a:["Mata","Hidung","Mulut","Kaki"],c:2},
  {q:"Hewan yang suka susu adalah …",a:["Kucing","Ayam","Bebek","Ikan"],c:0},
  {q:"Berapakah 9 – 7 ?",a:["1","2","3","4"],c:1},
  {q:"Benda yang digunakan untuk melihat adalah …",a:["Mata","Telinga","Hidung","Mulut"],c:0},
  {q:"Buah berwarna hijau kecil-kecil adalah …",a:["Anggur","Semangka","Stroberi","Jeruk"],c:0},
  
  
  {q:"Berapakah 6 – 5 ?",a:["0","1","2","3"],c:1},
  {q:"Lawan kata dingin adalah …",a:["Panas","Hangat","Gerah","Bekunya"],c:0},
  {q:"Kita bermain bola dengan …",a:["Kaki","Tangan","Hidung","Mata"],c:0},
  {q:"Hewan yang bisa berenang adalah …",a:["Burung","Kucing","Ikan","Ayam"],c:2},
  {q:"Berapakah 3 + 7 ?",a:["9","10","11","12"],c:1},
  {q:"Buah berwarna hijau besar dengan isi merah adalah …",a:["Mangga","Pisang","Semangka","Jeruk"],c:2},
  {q:"Kita bersekolah untuk …",a:["Belajar","Tidur","Makan","Bermain"],c:0},
  {q:"Hewan yang bertelur di air adalah …",a:["Ayam","Kuda","Katak","Kelinci"],c:2},
  {q:"Berapakah 10 – 2 ?",a:["7","8","9","10"],c:1},
  {q:"Buah pepaya biasanya berwarna …",a:["Hijau","Kuning/Oranye","Putih","Hitam"],c:1},
  {q:"Lawan kata kuat adalah …",a:["Lemah","Pelan","Tinggi","Besar"],c:0},
  {q:"Berapakah 4 + 4 ?",a:["6","7","8","9"],c:2},
  {q:"Air laut rasanya …",a:["Manis","Asin","Pahit","Tawar"],c:1},
  {q:"Bulan berada di …",a:["Langit","Laut","Gunung","Hutan"],c:0},
  {q:"Berapakah 3 + 0 ?",a:["0","1","2","3"],c:3},
  {q:"Alat untuk menulis adalah …",a:["Penggaris","Pensil","Buku","Meja"],c:1},
  {q:"Berapakah 6 – 4 ?",a:["1","2","3","4"],c:1},
  {q:"Hewan yang suka makan pisang adalah …",a:["Gajah","Monyet","Ayam","Bebek"],c:1},
  {q:"Lawan kata panas adalah …",a:["Dingin","Hangat","Gerah","Sejuk"],c:0},
  {q:"Buah semangka warnanya …",a:["Merah dan Hijau","Biru dan Putih","Kuning dan Hitam","Coklat"],c:0},
  
  
  
  {q:"Berapakah 9 – 5 ?",a:["3","4","5","6"],c:1},
  {q:"Burung tinggal di …",a:["Sarang","Laut","Rumah","Lubang"],c:0},
  {q:"Hari setelah Jumat adalah …",a:["Sabtu","Minggu","Senin","Kamis"],c:0},
  {q:"Kita mendengar dengan …",a:["Mata","Telinga","Mulut","Hidung"],c:1},
  {q:"Sapi menghasilkan …",a:["Telur","Susu","Daging","Madu"],c:1},
  {q:"Berapakah 7 + 2 ?",a:["8","9","10","11"],c:1},
  {q:"Benda yang kita pakai saat hujan adalah …",a:["Payung","Topi","Sapu","Sepeda"],c:0},
  {q:"Lawan kata panjang adalah …",a:["Lebar","Pendek","Tinggi","Kecil"],c:1},
  {q:"Berapakah 5 + 5 ?",a:["9","10","11","12"],c:1},
  
  
  {q:"Kita tidur di atas …",a:["Meja","Kursi","Kasur","Lemari"],c:2},
  {q:"Lebah menghasilkan …",a:["Gula","Madu","Susu","Kue"],c:1},
  {q:"Hari Minggu adalah hari untuk …",a:["Belajar","Bekerja","Libur","Tidur"],c:2},
  {q:"Berapakah 8 – 3 ?",a:["4","5","6","7"],c:1},
  {q:"Kendaraan di laut adalah …",a:["Mobil","Kapal","Pesawat","Sepeda"],c:1},
  
  
  
  {q:"Berapakah 2 + 6 ?",a:["6","7","8","9"],c:2},
  {q:"Berapakah 5 – 2 ?",a:["1","2","3","4"],c:2},
  {q:"Benda apa yang kita pakai untuk menulis?",a:["Pensil","Sendok","Piring","Sepatu"],c:0},
  {q:"Buah yang warnanya merah dan bijinya banyak adalah …",a:["Mangga","Apel","Semangka","Pisang"],c:2},
  
  
  
  
  {q:"Hari sebelum Jumat adalah …",a:["Rabu","Kamis","Sabtu","Minggu"],c:1},
  {q:"Di langit malam kita melihat …",a:["Matahari","Bintang","Pelangi","Awan"],c:1},
  {q:"Kita memakai sepatu di …",a:["Tangan","Kaki","Kepala","Leher"],c:1},
  {q:"Warna daun kebanyakan adalah …",a:["Biru","Hijau","Ungu","Merah"],c:1},
  {q:"Berapakah 3 + 4 ?",a:["6","7","8","9"],c:1},
  {q:"Hewan yang bisa melompat dan suka serangga adalah …",a:["Kuda","Katak","Ikan","Ayam"],c:1},
  {q:"Kita mandi menggunakan …",a:["Sabun","Pensil","Buku","Topi"],c:0},
  {q:"Di pagi hari kita sarapan untuk …",a:["Tidur","Belajar","Menggambar","Makan Malam"],c:1},
  {q:"Berapakah 8 – 3 ?",a:["4","5","6","7"],c:1},
  {q:"Benda apa yang kita gunakan untuk melihat jam?",a:["Jam Tangan","Topi","Bola","Tas"],c:0},
  {q:"Binatang yang berbulu dan suka susu adalah …",a:["Kucing","Ikan","Ayam","Ular"],c:0},
  {q:"Berapakah 4 + 5 ?",a:["8","9","10","11"],c:1},
  {q:"Hewan yang memiliki belalai adalah …",a:["Gajah","Kuda","Kerbau","Kelinci"],c:0},
  {q:"Buah yang rasanya asam dan berwarna oranye adalah …",a:["Mangga","Jeruk","Pisang","Pepaya"],c:1},
  {q:"Hari setelah Jumat adalah …",a:["Sabtu","Minggu","Senin","Rabu"],c:0},
  {q:"Kita memotong kertas dengan …",a:["Penggaris","Gunting","Buku","Pulpen"],c:1},
  {q:"Berapakah 7 – 5 ?",a:["1","2","3","4"],c:1},
  {q:"Benda untuk membawa buku ke sekolah adalah …",a:["Tas","Sepatu","Topi","Jam"],c:0},
  {q:"Pelangi biasanya muncul setelah …",a:["Hujan","Pagi","Malam","Tidur"],c:0},
  {q:"Hewan yang suka madu adalah …",a:["Lebah","Gajah","Kucing","Ikan"],c:0},
];




const TOTAL = 10;
let current=0, score=0, timeLeft=15, timerId=null, order=[];

const qnumEl=document.getElementById('qnum');
const scoreEl=document.getElementById('score');
const questionText=document.getElementById('questionText');
const optionsEl=document.getElementById('options');
const timerEl=document.getElementById('timer');
const quizEl=document.getElementById('quiz');
const resultBox=document.getElementById('resultBox');
const finalText=document.getElementById('finalText');
const playAgain=document.getElementById('playAgain');

function shuffle(arr){
  for(let i=arr.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [arr[i],arr[j]]=[arr[j],arr[i]];
  }
}
function startGame(){
  order=[...Array(QUESTIONS.length).keys()];
  shuffle(order);
  order=order.slice(0,TOTAL);
  current=0; score=0;
  quizEl.classList.remove('hidden');
  resultBox.classList.add('hidden');
  nextQuestion();
}

function nextQuestion(){
  if(current>=TOTAL){ endGame(); return; }
  const q=QUESTIONS[order[current]];
  qnumEl.textContent=current+1;
  questionText.textContent=q.q;
  optionsEl.innerHTML='';
  q.a.forEach((opt,i)=>{
    const b=document.createElement('button');
    b.className='option';
    b.textContent=opt;
    b.onclick=()=>checkAnswer(i,q.c,b);
    optionsEl.appendChild(b);
  });
  timeLeft=15;
  timerEl.style.width='100%';
  clearInterval(timerId);
  timerId=setInterval(updateTimer,2500);
}

function updateTimer(){
  timeLeft--;
  timerEl.style.width=(timeLeft/15*100)+'%';
  if(timeLeft<=0){
    clearInterval(timerId);
    lockOptions(-1,QUESTIONS[order[current]].c);
    setTimeout(()=>{current++;nextQuestion();},1000);
  }
}
function checkAnswer(choice,correct,btn){
  clearInterval(timerId);
  lockOptions(choice,correct,btn);
  if(choice===correct){ score+=10; scoreEl.textContent=score; }
  setTimeout(()=>{current++;nextQuestion();},1000);
}
function lockOptions(choice,correct,btn){
  [...optionsEl.children].forEach((b,i)=>{
    b.disabled=true;
    if(i===correct) b.classList.add('correct');
    else if(i===choice) b.classList.add('wrong');
  });
}
function endGame(){
  quizEl.classList.add('hidden');
  resultBox.classList.remove('hidden');
  finalText.textContent=`Hebat! Skor kamu: ${score} dari ${TOTAL*10}`;
}
playAgain.addEventListener('click',startGame);
startGame();
