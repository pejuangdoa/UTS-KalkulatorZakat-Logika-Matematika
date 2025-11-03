# Kalkulator Zakat — UTS Logika Matematika

**Kata Pengantar**

Assalamu’alaikum — Selamat datang di *Kalkulator Zakat* hasil pengembangan untuk tugas UTS Mata Kuliah **Logika Matematika**.  
Aplikasi web sederhana ini dibuat dengan tujuan membantu perhitungan zakat secara cepat dan memberikan gambaran penerapan operasi logika dasar (AND, OR, NOT) dalam pengambilan keputusan—mis. menentukan wajib/tidaknya zakat berdasarkan nisab dan haul.

Saya menyadari sepenuhnya bahwa perangkat lunak ini masih jauh dari kata sempurna. Masih banyak keterbatasan pada tampilan, validasi, dan cakupan aturan fiqh yang mungkin berbeda menurut madzhab atau konteks lokal. Oleh karena itu, saya sangat menghargai **masukan, koreksi, dan saran** yang membangun agar aplikasi ini dapat diperbaiki dan bermanfaat bagi lebih banyak orang. Terima kasih atas perhatian dan partisipasinya.

---

## Isi Repository
- `index.html` — Halaman utama (UI) kalkulator zakat.
- `style.css` — Styling (tema gelap, responsif).
- `main.js` — Logika perhitungan zakat, fungsi interaksi UI.
- `README.md` — (file ini) kata pengantar, petunjuk dan informasi penting.

> Catatan: Nama file JS/CSS bisa berbeda pada repositori — sesuaikan referensi di `index.html` jika perlu.

---

## Fitur Utama
- Menghitung zakat fitrah (per jiwa).
- Menghitung zakat mal untuk berbagai jenis harta:
  - Emas (gram → konversi ke Rupiah)
  - Perak
  - Uang / Tabungan / Penghasilan
  - Hasil panen (irigasi alami vs berbayar)
  - Rikaz / tambang
  - (Opsional) peternakan, investasi, perniagaan, tabungan, dsb.
- Menentukan status *Wajib Zakat* berdasarkan nisab / haul (logika Implikasi dan Konjungsi — AND).
- Menampilkan teks niat zakat sesuai jenis harta.
- Distribusi zakat ke mustahik (opsional): pemilihan kategori penerima dan proporsi default.

---

## Prinsip Logika yang Digunakan
Aplikasi ini sengaja menerapkan konsep Logika Matematika sebagai pengantar implementasi aturan:
- **Konjungsi (AND)**: Contoh—`(totalHarta >= nisab) AND (haul >= 1)` → wajib zakat.
- **Disjungsi (OR)**: Menggabungkan beberapa sumber harta dalam perhitungan total.
- **Negasi (NOT)**: Memeriksa kondisi yang meniadakan kewajiban (mis. di bawah nisab).
- **Implikasi**: `Jika kondisi terpenuhi → maka hasil` (bentuk IF → THEN pada kode).

Kode JavaScript menggunakan `if/else` dan operator logika (`&&`, `||`, `!`) sebagai implementasi langsung konsep-konsep tersebut.

---

## Cara Pakai (Quick Start)
1. Buka `index.html` di browser (double-click atau via `Live Server` pada VSCode).
2. Pilih menu **Zakat Fitrah** atau **Zakat Mal**.
3. Untuk Zakat Mal:
   - Centang jenis harta yang dimiliki (Emas, Perak, Panen, Uang, dsb.).
   - Isi nilai/kuantitas dan lama kepemilikan (haul) sesuai input.
   - Klik **Hitung Zakat Mal**.
4. Hasil akan menampilkan:
   - Total harta (dalam Rupiah),
   - Status wajib/tidak wajib zakat,
   - Total zakat yang harus dikeluarkan (dalam Rupiah),
   - Teks niat zakat yang dapat disalin.
5. Untuk mendistribusikan zakat, pilih penerima (mustahik) dan gunakan tombol distribusi (opsional).

---

## Contoh Penggunaan
- Jika Anda memiliki **100 gram emas** selama **1 tahun**, dengan asumsi harga emas per gram = Rp 2.321.000:
  - `nilaiEmas = 100 * 2.321.000`
  - Jika total harta >= nisab (85 gram × harga per gram), maka zakat emas = `nilaiEmas × 2.5%`.

---

## Batasan & Catatan Penting
- **Kewajiban Agama**: Aplikasi ini hanya alat bantu perhitungan. Untuk keputusan fiqh dan zakat resmi, selalu rujuk ke ulama atau lembaga zakat setempat.
- **Harga & Nisab**: Harga emas/perak dan nilai nisab bisa berubah — perbarui konstanta bila diperlukan.
- **Validasi Input**: Pastikan memasukkan nilai numerik yang benar; beberapa validasi sederhana telah ditambahkan, tetapi tetap berhati-hati.
- **Perbedaan Fiqh**: Terdapat variasi aturan zakat di kalangan ulama — aplikasi ini mengadopsi asumsi tertentu untuk tujuan akademis/praktis.

---

## Ingin Berkontribusi?
Terima kasih! Kamu bisa:
1. Fork repository ini.
2. Buat branch baru (`feature/penyempurnaan`, `fix/validasi-input`, dsb.).
3. Lakukan perubahan dan ajukan Pull Request.
4. Sertakan deskripsi perubahan dan contoh kasus uji.

Beberapa area yang sangat terbuka untuk kontribusi:
- Penambahan cek validasi input yang lebih ketat.
- Menyimpan data pengguna (opsional) menggunakan LocalStorage.
- Menambahkan opsi pengaturan harga emas/perak dinamis (API atau input manual).
- Perbaikan UI/UX dan aksesibilitas.

---

## Kontak
Muhammad Galang Rusdiansyah — *Pembuat proyek*  
Email: `galangsyah2006@gmail.com`  
WhatsApp: `089698941254`
GitHub: `github.com/pejuangdoa/UTS-KalkulatorZakat-Logika-Matematika`

---

## Lisensi
Lisensi: **MIT** — Bebas dipakai dan dimodifikasi. Mohon sertakan kredit jika menggunakannya untuk tujuan publik.

---

**Terima kasih** telah menggunakan dan/atau memberikan masukan pada proyek ini. Semoga bermanfaat, Berkah Selalu... ✨
