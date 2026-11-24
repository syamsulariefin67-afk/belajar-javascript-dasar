const angka = 7;
for (let i = 1; i <= 10; i++) {
    console.log(`${angka} x ${i} = ${angka * i}`);
}

for (let tabel = 1; tabel <= 5; tabel++) {
    console.log(`--- tabel ${tabel} ---`);
    for (let pengali = 1; pengali <= 10; tabel++) {
        console.log(`${tabel} x ${pengali} = ${tabel * pengali}`);
    }
}