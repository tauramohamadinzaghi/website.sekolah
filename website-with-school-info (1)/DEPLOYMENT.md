# Panduan Deploy Website Sekolah ke Online

Website ini bisa diakses online secara GRATIS menggunakan beberapa platform hosting. Berikut panduannya:

## Opsi 1: Deploy ke Vercel (PALING MUDAH & GRATIS) ⭐

### Langkah-langkah:

1. **Buat Akun Vercel**
   - Kunjungi https://vercel.com
   - Klik "Sign Up" dan daftar menggunakan GitHub, GitLab, atau Bitbucket
   - Gratis selamanya untuk project personal

2. **Deploy dari Folder Lokal (Tanpa Git)**
   - Install Vercel CLI:
     ```bash
     npm install -g vercel
     ```
   
   - Di folder project, jalankan:
     ```bash
     vercel
     ```
   
   - Ikuti instruksi:
     - Login dengan akun Vercel
     - Confirm project settings (tekan Enter untuk default)
     - Website akan otomatis ter-deploy!
   
   - Vercel akan memberikan link seperti: `https://sekolahnya-xxxx.vercel.app`

3. **Deploy dari GitHub (Recommended)**
   - Upload folder project ke GitHub repository
   - Login ke Vercel Dashboard (https://vercel.com/dashboard)
   - Klik "Add New" → "Project"
   - Import repository GitHub Anda
   - Klik "Deploy"
   - Selesai! Website langsung online

4. **Custom Domain (Opsional)**
   - Di Vercel Dashboard, pilih project Anda
   - Ke tab "Settings" → "Domains"
   - Tambahkan domain custom seperti `sekolahnya.com` (jika punya)

---

## Opsi 2: Deploy ke Netlify (GRATIS)

### Langkah-langkah:

1. **Buat Akun Netlify**
   - Kunjungi https://netlify.com
   - Sign up gratis

2. **Deploy via Drag & Drop**
   - Login ke Netlify
   - Ke bagian "Sites"
   - Drag & drop seluruh folder project Anda
   - Website langsung live!
   - Link: `https://sekolahnya-random.netlify.app`

3. **Deploy via GitHub**
   - Connect repository GitHub
   - Netlify otomatis deploy setiap kali ada update

---

## Opsi 3: Deploy ke GitHub Pages (GRATIS)

### Langkah-langkah:

1. **Upload ke GitHub**
   - Buat repository baru di GitHub
   - Upload semua file project

2. **Aktifkan GitHub Pages**
   - Ke repository Settings
   - Scroll ke "Pages" section
   - Source: pilih "main branch"
   - Klik Save
   - Website akan tersedia di: `https://username.github.com/nama-repo`

---

## Opsi 4: Deploy ke Render (GRATIS)

### Langkah-langkah:

1. **Buat Akun Render**
   - Kunjungi https://render.com
   - Sign up gratis

2. **Deploy Static Site**
   - Click "New" → "Static Site"
   - Connect GitHub repository atau upload manual
   - Build command: (kosongkan)
   - Publish directory: `/`
   - Deploy!

---

## Custom Domain untuk Website "sekolahnya.com"

Jika ingin punya domain sendiri seperti `sekolahnya.com`:

1. **Beli Domain** (sekitar Rp 100.000-200.000/tahun):
   - Niagahoster: https://www.niagahoster.co.id
   - Domainesia: https://www.domainesia.com
   - Namecheap: https://www.namecheap.com

2. **Hubungkan ke Hosting**:
   - Setelah deploy di Vercel/Netlify
   - Tambahkan custom domain di dashboard
   - Update DNS settings di provider domain
   - Tunggu 1-24 jam untuk propagasi

---

## Rekomendasi Terbaik

**Untuk Pemula**: Gunakan **Vercel** atau **Netlify**
- Paling mudah
- Gratis selamanya
- Auto-deploy dari GitHub
- HTTPS otomatis
- CDN global (loading cepat)

**Link yang Akan Didapat**:
- Vercel: `https://sekolahnya.vercel.app`
- Netlify: `https://sekolahnya.netlify.app`
- GitHub Pages: `https://username.github.io/sekolahnya`

---

## Catatan Penting

⚠️ **Data Storage**: Website ini menggunakan localStorage untuk menyimpan data guru dan berita. Data tersimpan di browser masing-masing user, bukan di server. Jika ingin data tersinkronisasi antar device, perlu tambahkan database (Firebase, Supabase, dll).

✅ **Website Sudah Siap Deploy**: Semua file sudah dikonfigurasi dengan benar untuk deployment.

---

## Troubleshooting

**Problem**: Halaman tidak muncul setelah deploy
**Solusi**: Pastikan file `index.html` ada di root folder

**Problem**: CSS/JS tidak load
**Solusi**: Check path file di HTML, pastikan relatif (tidak pakai `/` di awal)

**Problem**: Data guru/berita hilang setelah refresh
**Solusi**: Normal, karena menggunakan localStorage. Data tersimpan per browser.

---

## Butuh Bantuan?

Jika ada masalah saat deploy, check:
- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com
- GitHub Pages Docs: https://pages.github.com

Selamat mencoba! 🚀
