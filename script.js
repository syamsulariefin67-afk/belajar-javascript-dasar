console.log("javascript")

// mendapaatkan element button toggle warna di javascript
const btn_toggle_box = document.getElementById("toggle-button");
console.log(btn_toggle_box)

// mendapatkan element box di javascript
const element_box = document.getElementById("box")
console.log(element_box)

// kasih event ke button toggle warna box nya
btn_toggle_box.onclick = function () {
    // perintah-perintah saat diklik tombol toggle warna
    console.log("button berhasil diklik")

    element_box.style

    // check apakah ada class box-gray di element box
    if (element_box.classList.contains("box-gray")) {

        // jika warna sekarang gray, maka ganti ke yellow
        element_box.classList.remove("box-gray")
        element_box.classList.add("box-yellow")
    }
    else {
        element_box.classList.remove("box-yellow")
        element_box.classList.add("box-gray")
    }

    // lainnya ganti ke gray
}
