function showSection(id) {
     document.getElementById("menu").classList.add("hidden");
     document.getElementById(id).classList.remove("hidden");
}

function backToMenu() {
     document.querySelectorAll(".container > div").forEach(div => div.classList.add("hidden"));
     document.getElementById("menu").classList.remove("hidden");
}

function toggleInput(id, checkbox) {
     document.getElementById(id).style.display = checkbox.checked ? "block" : "none";
}

function hitungFitrah() {
     let jiwa = parseInt(document.getElementById("jiwa").value);
     let muzakki = document.getElementById("muzakkiFitrah").value || "Muzakki";

     if (isNaN(jiwa) || jiwa <= 0) {
          document.getElementById("hasilFitrah").innerHTML = "Masukkan jumlah jiwa dengan benar.";
          return;
     }

     let total = jiwa * 50000;

     document.getElementById("hasilFitrah").innerHTML = `
          <div class="fitrah-result">
               ${muzakki} wajib membayar zakat fitrah sebesar 
               <b>Rp ${total.toLocaleString()}</b> untuk ${jiwa} jiwa.<br><br>
               <b>Distribusi Zakat:</b>
               <div class="mustahik-box">
     <div class="mustahik-item">
          <label><input type="checkbox" class="mustahik" value="Fakir"> <span class="mustahik-name">Fakir</span>
          <span class="desc">Tidak memiliki harta untuk kebutuhan dasar.</span></label>
     </div>

     <div class="mustahik-item">
          <label><input type="checkbox" class="mustahik" value="Miskin"> <span class="mustahik-name">Miskin</span>
          <span class="desc">Punya penghasilan tapi tidak cukup untuk kebutuhan pokok.</span></label>
     </div>

     <div class="mustahik-item">
          <label><input type="checkbox" class="mustahik" value="Amil"> <span class="mustahik-name">Amil</span>
          <span class="desc">Petugas yang mengelola zakat.</span></label>
     </div>

     <div class="mustahik-item">
          <label><input type="checkbox" class="mustahik" value="Muallaf"> <span class="mustahik-name">Muallaf</span>
          <span class="desc">Orang yang baru masuk Islam.</span></label>
     </div>

     <div class="mustahik-item">
          <label><input type="checkbox" class="mustahik" value="Gharim"> <span class="mustahik-name">Gharim</span>
          <span class="desc">Orang berutang karena kebutuhan hidup pokok.</span></label>
     </div>

     <div class="mustahik-item">
          <label><input type="checkbox" class="mustahik" value="Fisabilillah"> <span class="mustahik-name">Fi Sabilillah</span>
          <span class="desc">Pejuang di jalan Allah.</span></label>
     </div>

     <div class="mustahik-item">
          <label><input type="checkbox" class="mustahik" value="IbnuSabil"> <span class="mustahik-name">Ibnu Sabil</span>
          <span class="desc">Musafir yang kehabisan bekal dalam perjalanan.</span></label>
     </div>

     <div class="mustahik-item">
          <label><input type="checkbox" class="mustahik" value="Riqab"> <span class="mustahik-name">Riqab</span>
          <span class="desc">Hamba sahaya yang ingin memerdekakan diri.</span></label>
     </div>
</div>
               <button onclick="cekMustahikFitrah(${total})" class="btn-hitung">Hitung Distribusi</button>
               <div id="hasilMustahikFitrah" class="result"></div>
          </div>
     `;
}

function hitungMal() {
     let muzakki = document.getElementById("muzakkiMal").value || "Muzakki";
     // Ambil semua nilai input
     let emas = parseFloat(document.getElementById("emas").value) || 0;
     let perak = parseFloat(document.getElementById("perak").value) || 0;
     let panen = parseFloat(document.getElementById("panen").value) || 0;
     let uang = parseFloat(document.getElementById("uang").value) || 0;
     let irigasi = document.getElementById("irigasi").value;
     // Rikaz & Tambang
     let nilaiRikaz = parseFloat(document.getElementById("nilaiRikaz").value) || 0;
     let jenisRikaz = document.getElementById("jenisRikaz").value;
     // Koversi Ke rupiah
     let nilaiEmas = emas * 2321000;
     let nilaiPerak = perak * 12000;
     let totalPanen = irigasi === "alami" ? panen * 0.1 * 5000 : panen * 0.05 * 5000;
     // ⚒️ Zakat Rikaz & Tambang
     let zakatRikaz = 0;
     if (jenisRikaz === "rikaz") {
          zakatRikaz = nilaiRikaz * 0.2; // 20%
     } else if (jenisRikaz === "tambang" && nilaiRikaz >= 197285000) {
          zakatRikaz = nilaiRikaz * 0.025; // 2.5%
     }
     // Tambahkan zakat rikaz & ternak ke total zakat

     let totalHarta = nilaiEmas + nilaiPerak + uang + totalPanen + nilaiRikaz;
     let wajibZakat = totalHarta >= 197285000;
     let zakat = wajibZakat ? totalHarta * 0.025 : 0;
     zakat += zakatRikaz;


     document.getElementById("hasilMal").innerHTML = `
          Total harta ${muzakki} (Anda): <b>Rp ${totalHarta.toLocaleString()}</b><br>
          Status: ${wajibZakat
                         ? "<span style='color:#4ade80'>Wajib Zakat</span>"
                         : "<span style='color:#f87171'>Tidak Wajib Zakat Tapi Bisa Berinfaq</span>"
                    }<br>
          ${wajibZakat ? `
               <h2 class="bayarh2">Anda harus membayar zakat sebesar : <b class="warnaangka">Rp ${zakat.toLocaleString()}</b></h2><br><br>
               <b>Distribusi Zakat:</b>
               <div class="mustahik-box">
     <div class="mustahik-item">
          <label><input type="checkbox" class="mustahik" value="Fakir"> <span class="mustahik-name">Fakir</span>
          <span class="desc">Tidak memiliki harta untuk kebutuhan dasar.</span></label>
     </div>

     <div class="mustahik-item">
          <label><input type="checkbox" class="mustahik" value="Miskin"> <span class="mustahik-name">Miskin</span>
          <span class="desc">Punya penghasilan tapi tidak cukup untuk kebutuhan pokok.</span></label>
     </div>

     <div class="mustahik-item">
          <label><input type="checkbox" class="mustahik" value="Amil"> <span class="mustahik-name">Amil</span>
          <span class="desc">Petugas yang mengelola zakat.</span></label>
     </div>

     <div class="mustahik-item">
          <label><input type="checkbox" class="mustahik" value="Muallaf"> <span class="mustahik-name">Muallaf</span>
          <span class="desc">Orang yang baru masuk Islam.</span></label>
     </div>

     <div class="mustahik-item">
          <label><input type="checkbox" class="mustahik" value="Gharim"> <span class="mustahik-name">Gharim</span>
          <span class="desc">Orang berutang karena kebutuhan hidup pokok.</span></label>
     </div>

     <div class="mustahik-item">
          <label><input type="checkbox" class="mustahik" value="Fisabilillah"> <span class="mustahik-name">Fi Sabilillah</span>
          <span class="desc">Pejuang di jalan Allah.</span></label>
     </div>

     <div class="mustahik-item">
          <label><input type="checkbox" class="mustahik" value="IbnuSabil"> <span class="mustahik-name">Ibnu Sabil</span>
          <span class="desc">Musafir yang kehabisan bekal dalam perjalanan.</span></label>
     </div>

     <div class="mustahik-item">
          <label><input type="checkbox" class="mustahik" value="Riqab"> <span class="mustahik-name">Riqab</span>
          <span class="desc">Hamba sahaya yang ingin memerdekakan diri.</span></label>
     </div>
</div>
               <button onclick='cekMustahikMal(${zakat})' class='btn-hitung'>Hitung Distribusi</button>
               <div id='hasilMustahikMal' class='result'></div>
          ` : ""}
     `;
}

function cekMustahikFitrah(totalZakat) {
     const selected = [...document.querySelectorAll(".mustahik-box input.mustahik:checked")].map(i => i.value);

     if (selected.length === 0) {
          document.getElementById("hasilMustahik").innerHTML = "Silakan pilih minimal satu mustahik.";
          return;
     }

     // sebealah sini
     const persentaseDefault = {
          Fakir: 25,
          Miskin: 25,
          Amil: 12.5,
          Muallaf: 10,
          Riqab: 5,
          Gharim: 10,
          Fisabilillah: 7.5,
          IbnuSabil: 5
     };
     let totalPersenDipilih = selected.reduce((sum, key) => sum + (persentaseDefault[key] || 0), 0);
     let hasilDistribusi = selected.map(key => {
          let proporsi = (persentaseDefault[key] / totalPersenDipilih);
          let jumlah = totalZakat * proporsi;
          return {
               nama: key,
               persen: (proporsi * 100).toFixed(2),
               jumlah: jumlah.toFixed(0)
          };
     });
     let hasilHTML = hasilDistribusi.map(
          h => `${h.nama}: <b>${h.persen}%</b> → Rp ${parseInt(h.jumlah).toLocaleString()}`
     ).join("<br>");
     document.getElementById("hasilMustahikFitrah").innerHTML = `
          Mustahik terpilih: ${selected.join(", ")}.<br><br>
          <b>Distribusi:</b><br>${hasilHTML}
     `;
}

function cekMustahikMal(totalZakat) {
     // Hanya ambil checkbox dengan class 'mustahik'
     console.log("Hello word")
     const selected = [...document.querySelectorAll(".mustahik-box input.mustahik:checked")].map(i => i.value);

     if (selected.length === 0) {
          document.getElementById("hasilMustahik").innerHTML = "Silakan pilih minimal satu mustahik.";
          return;
     }

     // sebealah sini
     const persentaseDefault = {
          Fakir: 25,
          Miskin: 25,
          Amil: 12.5,
          Muallaf: 10,
          Riqab: 5,
          Gharim: 10,
          Fisabilillah: 7.5,
          IbnuSabil: 5
     };
     let totalPersenDipilih = selected.reduce((sum, key) => sum + (persentaseDefault[key] || 0), 0);
     let hasilDistribusi = selected.map(key => {
          let proporsi = (persentaseDefault[key] / totalPersenDipilih);
          let jumlah = totalZakat * proporsi;
          return {
               nama: key,
               persen: (proporsi * 100).toFixed(2),
               jumlah: jumlah.toFixed(0)
          };
     });
     let hasilHTML = hasilDistribusi.map(
          h => `${h.nama}: <b>${h.persen}%</b> → Rp ${parseInt(h.jumlah).toLocaleString()}`
     ).join("<br>");
     document.getElementById("hasilMustahikMal").innerHTML = `
          Mustahik terpilih: ${selected.join(", ")}.<br><br>
          <b>Distribusi:</b><br>${hasilHTML}
     `;


     // end

     // let persentase = (100 / selected.length).toFixed(2);
     // let perBagian = (totalZakat / selected.length).toFixed(0);

     // document.getElementById("hasilMustahikMal").innerHTML = `
     //      Mustahik terpilih: ${selected.join(", ")}.<br>
     //      Masing-masing mendapat <b>${persentase}%</b> dari total zakat.<br>
     //      Total per mustahik: <b>Rp ${parseInt(perBagian).toLocaleString()}</b>
     // `;
}
// Reset hasil ketika checkbox mustahik diubah
function toggleInput(id, checkbox) {
     const div = document.getElementById(id);

     if (checkbox.checked) {
          div.style.display = "block";
     } else {
          div.style.display = "none";
          // 🔥 Hapus semua nilai input di dalam div ketika checkbox di-uncheck
          div.querySelectorAll("input, select").forEach(el => {
               if (el.type === "number" || el.type === "text") el.value = "";
               if (el.tagName === "SELECT") el.selectedIndex = 0;
          });
     }
}