/**********************************************************************************************************************//
//                                              JS YOL HARİTASI                                                         //
//                                                                                                                      // 
//   1.JS DOCS 14-84                                                                                                    //
//   2.Oyun 86-304  (İlk fonksiyon)                                                                                     //
//   3.Yasaklı kelimeler 306-348                                                                                        //
//   4.Tasarımsal 351-387                                                                                               // 
//   5.yeniden başlatma 389-422                                                                                         //
//                                                                                                                      //
//                                                                                                                      //
//                                                                                                                      //
//**********************************************************************************************************************//
//DOC
const nesne = document.getElementById("anlatilicak");
const nasil = document.getElementById("nasil-anlatilicak");
const zaman = document.getElementById("zaman");
const kutu = document.getElementById("kutu");
const sure = document.getElementById("sure");
const baslamabtn = document.getElementById("basla-btn");
const dogrubtn = document.getElementById("dogru-btn");

const takim1 = document.getElementById("team1");
const takim2 = document.getElementById("team2");

const iconlar = document.getElementById("icon");
const aciklama = document.getElementById("anlatimaciklama");

const yasaklibaslik = document.getElementById("ybaslik");
const yasaklikelimeler = [document.getElementById("yasaklikelime1"), document.getElementById("yasaklikelime2"),document.getElementById("yasaklikelime3")];
//Anlatılıcaklar
const filmler = ["Recep ivedik", "Örümcek adam", "Hızlı ve öfkeli","Görevimiz Tehlike"," Hababam sınıfı","7.Koğuştaki mucize","Matrix","Avatar","Kurtlar Vadisi Gladio","Iron man"]
const diziler = ["Çukur","Mucize Doktor","Öğretmen","Alemin Kralı","Akasya Durağı","İçerde","3 Kuruş","Mahkum","Yasak Elma","Squid Game","La Casa De Papel"];
const bitkiler = ["Zencefil","Zerdeçal","Zambak","Ihlamur","Sarımsak"];
const hayvanlar = ["Aslan","Fil","Fare","Yarasa","Köpek","Kedi","Zürafa","Maymun","Goril","At","Eşek","Yarasa","Koyun","Tavuk","Penguen","Ayı","Kaplumbağa","Rakun"];
const esyalar = ["Dolap","Yatak","Bilgisayar","Gardolap","Masa","Sandalye","Masa örtüsü","Yastık","Bardak","Telefon","Şişe","Televizyon","Mikrofon"];
//rastgele anlatım şekli
const anlatim = ["O Ses Sen!","O Ses Sen!","Sessiz sinema!","Olmak ya da Olmamak!","Soytarı!","Oyuncu!","Ressamlığını Konuştur!","İşte gerçek Joker!"];
//özel anlatim
const filmanlatim = ["O Ses Sen!","O Ses Sen!","Sessiz Sinema!","Sessiz Sinema!","Soytarı!","Soytarı!","Oyuncu!","Oyuncu!","Ressamlığını Konuştur!","Ressamlığını Konuştur!","İşte gerçek Joker!","İşte gerçek Joker!"];
const dizianlatim = ["O Ses Sen!","O Ses Sen!","Sessiz Sinema!","Sessiz Sinema!","Soytarı!","Soytarı!","Oyuncu!","Oyuncu!","Ressamlığını Konuştur!","Ressamlığını Konuştur","İşte gerçek Joker!","İşte gerçek Joker!"]
const bitkianlatim = ["O Ses Sen!","O Ses Sen!","Ressamlığı Konuştur!","Ressamlığı Konuştur!"];
const hayvananlatim = ["O Ses Sen!","O Ses Sen!","Sessiz Sinema!","Sessiz Sinema!","Soytarı!","Oyuncu!","Ressamlığını Konuştur!","Ressamlığını Konuştur!","Ressamlığını Konuştur!","Ressamlığını Konuştur!","Ressamlığını Konuştur!","Ressamlığını Konuştur!","Ressamlığını Konuştur!","Ressamlığını Konuştur!"];
const esyaanlatim = ["O Ses Sen!","O Ses Sen!","Ressamlığını Konuştur!","Ressamlığını Konuştur!"];
//Yasaklı kelimeler
const yasaklikelimefilm = ["Film","Aksiyon","Komedi","Agresifim","Kompleksliyim","Araba","Deli"];
//0-1-2 = çukur,  3-4-5 = mucize doktor, 6-7-8 = Öğretmen, 9-10-11 = Alemin kıralı, 12-13-14 = Akasya durağı 23-24-25 = yasak elma, 26-27-28 squid game , 29-30-31 la case de papel
const yasaklikelimelerdizi = ["Yamaç","Delik","Mafia","Doktor","Ameliyat","Hastane","Okul","Bomba","Ders","Aslan kıral","Pet shop","3 kız babası","Taksi","Şoför","Durak","Dayı","","","","","Hapisane","","","Aşk","Elmas","Aptal kızlar","Kalamar","Kurabiye","Oyun","Soygun","Profesör","İspanya merkez bankası"]
const yasaklikelimebitki = [];
const yasaklikelimehayvan = [];
const yasaklikelimeesya = [];
//rastele
var random_nesne = Math.floor(Math.random() * 50); //0-10 arası = film, 10-20 arası = dizi, 20-30 arası = bitki, 30-40 arası = hayvan, 40-50 arası = eşya
//rastgele nesne
var rastgelefilm =  filmler[Math.floor(Math.random() * 10)];
var rastgeledizi = diziler[Math.floor(Math.random() * 11)]; 
var rastgelebitki = bitkiler[Math.floor(Math.random() * 5)];
var rastgelehayvan = hayvanlar[Math.floor(Math.random() * 9)];
var rastgeleesya = esyalar[Math.floor(Math.random() * 8)];
//rastgele anlatım
var rastgeleanlatim = anlatim[Math.floor(Math.random() * 7)];

var rastgeleanlatimfilm = filmanlatim[Math.floor(Math.random() * 12)];
var rastgeleanlatimdizi = dizianlatim[Math.floor(Math.random() * 12)];
var rastgeleanlatimbitki = bitkianlatim[Math.floor(Math.random() * 4)];
var rastgeleanlatimhayvan = hayvananlatim[Math.floor(Math.random() * 10)];
var rastgeleanlatimesya = esyaanlatim[Math.floor(Math.random() * 4)];
//Tur sistemi
let tur = 1;
let sira = 1;
//Takımlar
let takim = "takim1";
//Puan sistemi
let takim1puan = 0;
let takim2puan = 0;
//Puan arttırma
var sayac = 60;
//diğer
const filmsayi = 9;
const dizisayi = 10;
const bitkisayi = 4;
const hayvansayi = 17;
const esyasayi = 12;
var oyundurum = false;
var icon = ["mic","movie","mood","sentiment_very_satisfied","color_lens"];
//Oyun başlangıç
function oyun(){
tur++
oyasaklikelimeler()
oyundurum = true;
//Başlangın (TASARIMSAL KISIM)
baslamabtn.style.display = "none";
zaman.style.transition = "all 0.1s"; 
zaman.style.width = "1%";
sure.style.display = "inline-block";
dogrubtn.style.display = "inline-block";
yasaklibaslik.innerHTML = "Yasaklı Kelimeler"
basla()
sayacc()
sure.innerHTML = sayac;
//Tasarım bitiş
//Bilgi alma/tazeleme
random_nesne = Math.floor(Math.random() * 50);

rastgelefilm = filmler[Math.floor(Math.random() * filmsayi)];
rastgeledizi = diziler[Math.floor(Math.random() * dizisayi)];
rastgelebitki = bitkiler[Math.floor(Math.random() * bitkisayi)];
rastgelehayvan = hayvanlar[Math.floor(Math.random() * hayvansayi)];
rastgeleesya = esyalar[Math.floor(Math.random() * esyasayi)];
  
rastgeleanlatimfilm = filmanlatim[Math.floor(Math.random() * 12)];
rastgeleanlatimdizi = dizianlatim[Math.floor(Math.random() * 12)];
rastgeleanlatimbitki = bitkianlatim[Math.floor(Math.random() * 4)];
rastgeleanlatimhayvan = hayvananlatim[Math.floor(Math.random() * 14)];
rastgeleanlatimesya = esyaanlatim[Math.floor(Math.random() * 4)];

rastgeleanlatim = anlatim[Math.floor(Math.random() * 7)];

//Tazeleme bitiş
//Koşullandırmalar , rastgele soru verme
//Rastgele film  
if(random_nesne > 0 && random_nesne <= 10){
nesne.innerHTML = rastgelefilm;
nasil.innerHTML = rastgeleanlatimfilm;
//Yasaklı kelime, vs.
//açıklamalar
sessizsinema()
osessen()
soytari()
oyuncu()
ressam()
joker()
}
//Rastgele dizi
else if(random_nesne > 10 && random_nesne <= 20){
nesne.innerHTML = rastgeledizi;
nasil.innerHTML = rastgeleanlatimdizi; 
sessizsinema()
osessen()
soytari()
oyuncu()
ressam()
joker()
}
//Rastgele bitki
else if(random_nesne > 20 && random_nesne <= 30){
nesne.innerHTML = rastgelebitki;
nasil.innerHTML = rastgeleanlatimbitki;
osessen()
ressam()
}
//Rastgele hayvan
else if(random_nesne > 30 && random_nesne <= 40){
nesne.innerHTML = rastgelehayvan;
nasil.innerHTML = rastgeleanlatimhayvan; 
osessen()
sessizsinema()
soytari()
oyuncu()
ressam()
}
//Rastgele eşya
else if(random_nesne > 40 && random_nesne <= 50){
nesne.innerHTML = rastgeleesya;
nasil.innerHTML = rastgeleanlatimesya;
osessen()
ressam()
}
//bitiş
}
//Baştan başlatma
function basla(){
setTimeout(function(){
zaman.style.backgroundColor = "#dc3545";
zaman.style.transition = "all 60s";
zaman.style.width = "100%";
},110);
setTimeout(function(){
oyunbitti()
},60500); 
}
//sayaç
var surec = 1000;
function sayacc(){
setInterval(function(){
if(sayac == 0){
sayac = 60;
console.log(sayac)
}
if(oyundurum == true){
  console.log(oyundurum)
  sayac--
  sure.innerHTML = sayac;
}
else if(oyundurum == false){
console.log(oyundurum)
sayac = 60;  
surec = 4500;
}
  console.log(sayac)
}, surec);  
}
//doğru bilme / skor ekleme
function dogru(){
oyunbilgi()
if(tur%2 == 0){
  takim1puan++
  takim = "takim1";
  takim1.innerHTML = takim1puan;
}
else{
  takim2puan++
  takim = "takim2";
  takim2.innerHTML = takim2puan;
}
}
//Oyun fonksiyon (2)
function oyunbilgi(){
random_nesne = Math.floor(Math.random() * 50);
rastgelefilm = filmler[Math.floor(Math.random() * filmsayi)];
rastgeledizi = diziler[Math.floor(Math.random() * dizisayi)];
rastgelebitki = bitkiler[Math.floor(Math.random() * bitkisayi)];
rastgelehayvan = hayvanlar[Math.floor(Math.random() * hayvansayi)];
rastgeleesya = esyalar[Math.floor(Math.random() * esyasayi)];
  
rastgeleanlatimfilm = filmanlatim[Math.floor(Math.random() * 12)];
rastgeleanlatimdizi = dizianlatim[Math.floor(Math.random() * 12)];
rastgeleanlatimbitki = bitkianlatim[Math.floor(Math.random() * 4)];
rastgeleanlatimhayvan = hayvananlatim[Math.floor(Math.random() * 14)];
rastgeleanlatimesya = esyaanlatim[Math.floor(Math.random() * 4)];

rastgeleanlatim = anlatim[Math.floor(Math.random() * 7)];
  
//Tazeleme bitiş
//Koşullandırmalar , rastgele soru verme
//Rastgele film  
if(random_nesne > 0 && random_nesne <= 10){
nesne.innerHTML = rastgelefilm;
nasil.innerHTML = rastgeleanlatimfilm;
//açıklamalar
osessen()
sessizsinema()
soytari()
oyuncu()
ressam()
joker()
oyasaklikelimeler()
}
//Rastgele dizi
else if(random_nesne > 10 && random_nesne <= 20){
nesne.innerHTML = rastgeledizi;
nasil.innerHTML = rastgeleanlatimdizi; 
osessen()
sessizsinema()
soytari()
oyuncu()
ressam()
joker()
oyasaklikelimeler()
}
//Rastgele bitki
else if(random_nesne > 20 && random_nesne <= 30){
nesne.innerHTML = rastgelebitki;
nasil.innerHTML = rastgeleanlatimbitki;  
osessen()
ressam()
oyasaklikelimeler()
}
//Rastgele hayvan
else if(random_nesne > 30 && random_nesne <= 40){
nesne.innerHTML = rastgelehayvan;
nasil.innerHTML = rastgeleanlatimhayvan;
osessen()
sessizsinema()
soytari()
oyuncu()
ressam()
oyasaklikelimeler()
}
//Rastgele eşya
else if(random_nesne > 40 && random_nesne <= 50){
nesne.innerHTML = rastgeleesya;
nasil.innerHTML = rastgeleanlatimesya;
osessen()
ressam()
oyasaklikelimeler()
}
}
//Oyun bitti
function oyunbitti(){
yasaklikelimeler[0].innerHTML = "";
yasaklikelimeler[1].innerHTML = "";
yasaklikelimeler[2].innerHTML = "";
yasaklibaslik.innerHTML = "";
iconlar.innerHTML = "";
aciklama.innerHTML = "";
zaman.style.transition = "all 0.01s";
baslamabtn.style.display = "inline-block";
nesne.innerHTML = "OYUN BİTTİ";
nasil.innerHTML = "";
zaman.style.backgroundColor = "white";
sure.style.display = "none";
dogrubtn.style.display = "none";
oyundurum = false;
}
//yasaklı kelime
function oyasaklikelimeler(){
  //filmler
if(nesne.innerHTML == "Recep ivedik"){
 yasaklikelimeler[0].innerHTML = yasaklikelimefilm[2];
 yasaklikelimeler[1].innerHTML = yasaklikelimefilm[3];
 yasaklikelimeler[2].innerHTML = yasaklikelimefilm[4];
  //2 3 4
}
  //diziler
  //0-1-2 = çukur,  3-4-5 = mucize doktor, 6-7-8 = Öğretmen, 9-10-11 = Alemin kıralı, 12-13-14 = Akasya durağı 23-24-25 = yasak elma, 26-27-28 squid game , 29-30-31 la case de papel
else if(nesne.innerHTML == "Çukur"){
 yasaklikelimeler[0].innerHTML = yasaklikelimelerdizi[0];
 yasaklikelimeler[1].innerHTML = yasaklikelimelerdizi[1];
 yasaklikelimeler[2].innerHTML = yasaklikelimelerdizi[2]; 
}
else if(nesne.innerHTML == "Mucize Doktor"){
 yasaklikelimeler[0].innerHTML = yasaklikelimelerdizi[3];
 yasaklikelimeler[1].innerHTML = yasaklikelimelerdizi[4];
 yasaklikelimeler[2].innerHTML = yasaklikelimelerdizi[5];   
}
else if(nesne.innerHTML == "Öğretmen"){
 yasaklikelimeler[0].innerHTML = yasaklikelimelerdizi[6];
 yasaklikelimeler[1].innerHTML = yasaklikelimelerdizi[7];
 yasaklikelimeler[2].innerHTML = yasaklikelimelerdizi[8];   
}
else if(nesne.innerHTML == "Alemin Kralı"){
 yasaklikelimeler[0].innerHTML = yasaklikelimelerdizi[9];
 yasaklikelimeler[1].innerHTML = yasaklikelimelerdizi[10];
 yasaklikelimeler[2].innerHTML = yasaklikelimelerdizi[11];   
}
else if(nesne.innerHTML == "Akasya Durağı"){
 yasaklikelimeler[0].innerHTML = yasaklikelimelerdizi[12];
 yasaklikelimeler[1].innerHTML = yasaklikelimelerdizi[13];
 yasaklikelimeler[2].innerHTML = yasaklikelimelerdizi[14];   
}
//["Çukur","Mucize Doktor","Öğretmen","Alemin Kralı","Akasya Durağı","İçerde","3 Kuruş","Mahkum","Yasak Elma","Squid Game","La Casa De Papel"];
else if(nesne.innerHTML == "İçerde"){
 yasaklikelimeler[0].innerHTML = yasaklikelimelerdizi[15];
 yasaklikelimeler[1].innerHTML = yasaklikelimelerdizi[16];
 yasaklikelimeler[2].innerHTML = yasaklikelimelerdizi[17];    
}
else if(nesne.innerHTML == "Mahkum"){
 yasaklikelimeler[0].innerHTML = yasaklikelimelerdizi[18];
 yasaklikelimeler[1].innerHTML = yasaklikelimelerdizi[19];
 yasaklikelimeler[2].innerHTML = yasaklikelimelerdizi[20];
}
else if(nesne.innerHTML == "3 Kuruş"){
 yasaklikelimeler[0].innerHTML = yasaklikelimelerdizi[21];
 yasaklikelimeler[1].innerHTML = yasaklikelimelerdizi[22];
 yasaklikelimeler[2].innerHTML = "";
} 
else if(nesne.innerHTML == "Yasak Elma"){
yasaklikelimeler[0].innerHTML = yasaklikelimelerdizi[23];
yasaklikelimeler[1].innerHTML = yasaklikelimelerdizi[24];
yasaklikelimeler[2].innerHTML = yasaklikelimelerdizi[25];    
}
else if(nesne.innerHTML == "Squid Game"){
yasaklikelimeler[0].innerHTML = yasaklikelimelerdizi[26];
yasaklikelimeler[1].innerHTML = yasaklikelimelerdizi[27];
yasaklikelimeler[2].innerHTML = yasaklikelimelerdizi[28];    
}
else if(nesne.innerHTML == "La Casa De Papel"){
yasaklikelimeler[0].innerHTML = yasaklikelimelerdizi[29];
yasaklikelimeler[1].innerHTML = yasaklikelimelerdizi[30];
yasaklikelimeler[2].innerHTML = yasaklikelimelerdizi[31];    
}
//bitkler
  
//Hayvanlar
 //["Aslan","Fil","Fare","Yarasa","Köpek","Kedi","Zürafa","Maymun","Goril","At","Eşek","Yarasa","Koyun","Tavuk","Penguen","Ayı","Kaplumbağa","Rakun"];
else if(nesne.innerHTML == "Aslan"){
  
}
else if(nesne.innerHTML == "Fil"){
  
}
else if(nesne.innerHTML == "Fare"){
  
}
else if(nesne.innerHTML == "Yarasa"){
  
}
else if(nesne.innerHTML == "Köpek"){
  
}
else if(nesne.innerHTML == "Kedi"){
  
}
else if(nesne.innerHTML == "Zürafa"){
  
}
else if(nesne.innerHTML == "Maymun"){
  
}
else if(nesne.innerHTML == "Goril"){
  
}
else if(nesne.innerHTML == "At"){
  
}
else if(nesne.innerHTML == "Eşek"){
  
}
else if(nesne.innerHTML == "Koyun"){
  
}
else if(nesne.innerHTML == "Tavuk"){
  
}
else if(nesne.innerHTML == "Penguen"){
  
}
else if(nesne.innerHTML == "Ayı"){
  
}
else if(nesne.innerHTML == "Rakun"){
  
}
//Eşyalar

//HATA VS.
else{
    yasaklikelimeler[0].innerHTML = "";
    yasaklikelimeler[1].innerHTML = "";
    yasaklikelimeler[2].innerHTML = "";  
}
}
//Tasarımsal 
//O Ses Sen açıklama
function osessen(){
if(nasil.innerHTML == "O Ses Sen!"){
iconlar.innerHTML = icon[0];
aciklama.innerHTML = "O Güzel Sesini Konuşturma Vakti Geldi !<br>Hadi ne duruyorsun? şarkılar ile anlat derdini!";
}
}
//Sessiz sinema açıklama
function sessizsinema(){
if(nasil.innerHTML == "Sessiz Sinema!"){
iconlar.innerHTML = icon[1];
aciklama.innerHTML = "Bir pandomim gibi anlatmaya çalış!<br>Sana inanıyoruz!";
}
}
function soytari(){
if(nasil.innerHTML == "Soytarı!"){
iconlar.innerHTML = icon[2];
aciklama.innerHTML = "Oyunculuğunu konuştur!<br>Taklit ile anlatmaya hazırsın, biliyoruz!";
}
} 
function oyuncu(){
if(nasil.innerHTML == "Oyuncu!"){
iconlar.innerHTML = icon[3];
aciklama.innerHTML = "Oyunculuğunu konuştur!<br>Taklit ile anlatmaya hazırsın, biliyoruz!"; 
}
}
function ressam(){
if(nasil.innerHTML == "Ressamlığını Konuştur!"){
iconlar.innerHTML = icon[4];
aciklama.innerHTML = "Çizim yeteneğini konuştur!<br>Eline kağıt kalem aldın mı seni kimse durduramaz!"; 
}
}
function joker(){
if(nasil.innerHTML == "İşte gerçek Joker!"){
iconlar.innerHTML = icon[3];
aciklama.innerHTML = "Komedi yeteneğini kanıtla!<br>Espri yaparak anlatmaya çalış!"; 
}
}
//restart 
function restart(){
    sayac = 60;
    tur = 1;
    yasaklikelimeler[0].innerHTML = "";
    yasaklikelimeler[1].innerHTML = "";
    yasaklikelimeler[2].innerHTML = "";
    iconlar.innerHTML = "";
    aciklama.innerHTML = "";
    nasil.innerHTML = "";
    nesne.innerHTML = "";
    zaman.style.backgroundColor = "#dc3545";
    zaman.style.transition = "all 0.01s";
    baslamabtn.style.display = "inline-block";
    sure.style.display = "none";
    dogrubtn.style.display = "none";
    takim1puan = 0;
    takim = "takim1";
    takim1.innerHTML = takim1puan;
    takim2puan = 0;
    takim = "takim2";
    takim2.innerHTML = takim2puan; 
    oyundurum = false;
    yasaklibaslik.innerHTML = "";
}

 document.addEventListener("keydown", e => {
  console.log(e.keyCode);
  if (e.keyCode == 82){
    restart()
  }
  else if (e.keyCode == 27){
    restart()
  }
});