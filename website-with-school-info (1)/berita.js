// Initialize sample articles if not exists
function initializeArticles() {
  if (!localStorage.getItem("articles")) {
    const sampleArticles = [
      {
        id: 1,
        title: "Tata Tertib Siswa Tahun Ajaran 2024/2025",
        image: "https://placehold.co/400x250?text=Siswa+berbaris+rapi+di+lapangan+upacara+dengan+seragam+lengkap",
        content:
          "Dalam rangka menjaga kedisiplinan dan kenyamanan belajar, sekolah menetapkan tata tertib yang wajib dipatuhi oleh seluruh siswa. Beberapa poin penting meliputi: datang tepat waktu sebelum pukul 07:00, menggunakan seragam lengkap dan rapi sesuai jadwal, membawa buku dan alat tulis lengkap, menjaga kebersihan lingkungan sekolah, tidak membawa barang berbahaya, dan bersikap sopan kepada guru dan sesama siswa. Pelanggaran terhadap tata tertib akan dikenakan sanksi sesuai tingkat pelanggarannya.",
        date: "2024-01-15",
      },
      {
        id: 2,
        title: "Lomba Sains Tingkat Nasional 2024",
        image: "https://placehold.co/400x250?text=Siswa+melakukan+eksperimen+sains+di+laboratorium",
        content:
          "Sekolah kami dengan bangga mengumumkan bahwa tim olimpiade sains kita akan mengikuti Lomba Sains Nasional yang akan diselenggarakan bulan depan di Jakarta. Tim yang terdiri dari 10 siswa terpilih telah menjalani persiapan intensif selama 3 bulan terakhir. Mereka akan berkompetisi dalam bidang Matematika, Fisika, Kimia, dan Biologi. Kepala sekolah menyampaikan harapan terbaik dan dukungan penuh untuk tim kita. Mari kita dukung perjuangan mereka!",
        date: "2024-01-10",
      },
      {
        id: 3,
        title: "Peringatan Hari Pendidikan Nasional",
        image: "https://placehold.co/400x250?text=Perayaan+Hardiknas+dengan+dekorasi+bendera+merah+putih",
        content:
          'Dalam rangka memperingati Hari Pendidikan Nasional, sekolah mengadakan serangkaian kegiatan edukatif dan menarik. Acara dimulai dengan upacara bendera yang diikuti seluruh warga sekolah, dilanjutkan dengan seminar pendidikan, lomba kreativitas siswa, pentas seni, dan pameran karya siswa. Tema tahun ini adalah "Pendidikan Berkualitas untuk Indonesia Maju". Acara berlangsung meriah dan penuh semangat, menunjukkan dedikasi komunitas sekolah terhadap dunia pendidikan.',
        date: "2024-01-05",
      },
    ]
    localStorage.setItem("articles", JSON.stringify(sampleArticles))
  }
}

// Load articles
function loadArticles() {
  initializeArticles()
  const articles = JSON.parse(localStorage.getItem("articles")) || []
  const container = document.getElementById("articlesContainer")
  container.innerHTML = ""

  articles.forEach((article) => {
    const articleCard = document.createElement("div")
    articleCard.className = "article-card"
    articleCard.innerHTML = `
            <img src="${article.image}" alt="${article.title}" class="article-image">
            <div class="article-content">
                <h3>${article.title}</h3>
                <p class="article-date">${formatDate(article.date)}</p>
                <p>${article.content.substring(0, 150)}...</p>
            </div>
        `
    container.appendChild(articleCard)
  })
}

// Format date
function formatDate(dateString) {
  const options = { year: "numeric", month: "long", day: "numeric" }
  return new Date(dateString).toLocaleDateString("id-ID", options)
}

// Show add article form
function showAddArticleForm() {
  document.getElementById("addArticleModal").style.display = "block"
}

// Close add article form
function closeAddArticleForm() {
  document.getElementById("addArticleModal").style.display = "none"
  document.getElementById("articleForm").reset()
}

// Handle form submission
document.getElementById("articleForm").addEventListener("submit", (e) => {
  e.preventDefault()

  const title = document.getElementById("articleTitle").value
  const content = document.getElementById("articleContent").value
  const imageFile = document.getElementById("articleImage").files[0]

  const articles = JSON.parse(localStorage.getItem("articles")) || []

  const processArticle = (imageUrl) => {
    const newId = articles.length > 0 ? Math.max(...articles.map((a) => a.id)) + 1 : 1
    const today = new Date().toISOString().split("T")[0]

    articles.unshift({
      id: newId,
      title,
      content,
      image: imageUrl || "https://placehold.co/400x250?text=Artikel+Berita+Sekolah",
      date: today,
    })

    localStorage.setItem("articles", JSON.stringify(articles))
    closeAddArticleForm()
    loadArticles()
  }

  if (imageFile) {
    const reader = new FileReader()
    reader.onload = (e) => {
      processArticle(e.target.result)
    }
    reader.readAsDataURL(imageFile)
  } else {
    processArticle(null)
  }
})

// Close modal when clicking outside
window.onclick = (event) => {
  const modal = document.getElementById("addArticleModal")
  if (event.target === modal) {
    closeAddArticleForm()
  }
}

// Load articles on page load
loadArticles()
