const skor = 85;
let huruf = "";

if (skor < 0 || skor > 100) {
    huruf = "Nilai tidak valid";
} else if (skor >= 85) {
    huruf = "A";
} else if (skor >= 70) {
    huruf = "B";
} else if (skor >= 55) {
    huruf = "C";
} else if (skor >= 40) {
    huruf = "D";
} else {
    huruf = "E";
}

console.log(huruf);