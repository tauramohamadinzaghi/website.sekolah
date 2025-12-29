# Cara Deploy Website Sekolah ke Online

## CARA TERMUDAH: Gunakan Vercel (Sangat Disarankan!)

**Vercel adalah platform yang dibuat oleh pembuat Next.js, jadi 100% kompatibel dan tidak akan error!**

### Langkah Deploy ke Vercel:

1. **Klik tombol "Publish"** di pojok kanan atas layar v0 ini

2. **Login dengan GitHub** (jika diminta)

3. **Beri nama project:** `sekolahnya`

4. **Klik "Deploy"**

5. **Selesai!** Website langsung online di: `https://sekolahnya.vercel.app`

**Keuntungan Vercel:**
- Deploy hanya 1 menit
- Tidak ada error compatibility
- GRATIS selamanya
- Update otomatis
- HTTPS otomatis

---

## Alternatif: Deploy ke Netlify

Jika Anda sudah mencoba Netlify, pastikan perubahan terbaru sudah di-upload:

1. **Download ulang** website dengan klik titik tiga (...) > Download ZIP

2. **Buka** https://app.netlify.com/drop

3. **Drag & drop** file ZIP yang baru ke halaman tersebut

4. **Tunggu** proses build (2-3 menit)

5. **Selesai!** Website online

**Catatan:** Saya sudah memperbaiki `netlify.toml` untuk menggunakan Node 20 yang kompatibel dengan Next.js.

---

## Link Website Anda

Setelah deploy, website akan bisa diakses dengan link seperti:
- Vercel: `https://sekolahnya.vercel.app`
- Netlify: `https://sekolahnya.netlify.app`

Link ini bisa dibagikan ke siapa saja dan diakses dari seluruh dunia!
