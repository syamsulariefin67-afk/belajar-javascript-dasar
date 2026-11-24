const belanja = 300000;
let persenDiskon = 0;

if (belanja >= 250000) {
    persenDiskon = 20;
} else if (belanja >= 100000) {
    persenDiskon = 10;
} else {
    persenDiskon = 0;
}
const potongan = (belanja * persenDiskon) / 100;
const totalBayar = belanja - potongan

console.log(`Total Bayar: Rp${totalBayar}`);