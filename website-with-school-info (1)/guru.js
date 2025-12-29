// Initialize sample data if not exists
function initializeTeachers() {
  if (!localStorage.getItem("teachers")) {
    const sampleTeachers = [
      {
        id: 1,
        name: "Siti Nurhaliza, S.Pd",
        subject: "Matematika",
        photo: "https://placehold.co/200x200?text=Guru+Matematika+wanita+dengan+kacamata+dan+jilbab",
      },
      {
        id: 2,
        name: "Ahmad Dahlan, M.Pd",
        subject: "Bahasa Indonesia",
        photo: "https://placehold.co/200x200?text=Guru+Bahasa+Indonesia+pria+dengan+kemeja+formal",
      },
      {
        id: 3,
        name: "Dewi Sartika, S.Si",
        subject: "Fisika",
        photo: "https://placehold.co/200x200?text=Guru+Fisika+wanita+dengan+jas+lab",
      },
      {
        id: 4,
        name: "Budi Santoso, S.Kom",
        subject: "Informatika",
        photo: "https://placehold.co/200x200?text=Guru+Informatika+pria+dengan+kacamata",
      },
      {
        id: 5,
        name: "Rina Kusuma, S.S",
        subject: "Bahasa Inggris",
        photo: "https://placehold.co/200x200?text=Guru+Bahasa+Inggris+wanita+dengan+blazer",
      },
    ]
    localStorage.setItem("teachers", JSON.stringify(sampleTeachers))
  }
}

// Load teachers
function loadTeachers() {
  initializeTeachers()
  const teachers = JSON.parse(localStorage.getItem("teachers")) || []
  const tbody = document.getElementById("teacherTableBody")
  tbody.innerHTML = ""

  teachers.forEach((teacher, index) => {
    const row = document.createElement("tr")
    row.innerHTML = `
            <td>${index + 1}</td>
            <td>${teacher.name}</td>
            <td>${teacher.subject}</td>
            <td><img src="${teacher.photo}" alt="${teacher.name}" class="teacher-photo"></td>
            <td>
                <button class="action-btn" onclick="editTeacher(${teacher.id})">Edit</button>
                <button class="action-btn delete-btn" onclick="deleteTeacher(${teacher.id})">Hapus</button>
            </td>
        `
    tbody.appendChild(row)
  })
}

// Show add teacher form
function showAddTeacherForm() {
  document.getElementById("modalTitle").textContent = "Tambah Guru"
  document.getElementById("teacherForm").reset()
  document.getElementById("teacherId").value = ""
  document.getElementById("teacherModal").style.display = "block"
}

// Close teacher form
function closeTeacherForm() {
  document.getElementById("teacherModal").style.display = "none"
}

// Edit teacher
function editTeacher(id) {
  const teachers = JSON.parse(localStorage.getItem("teachers")) || []
  const teacher = teachers.find((t) => t.id === id)

  if (teacher) {
    document.getElementById("modalTitle").textContent = "Edit Guru"
    document.getElementById("teacherId").value = teacher.id
    document.getElementById("teacherName").value = teacher.name
    document.getElementById("teacherSubject").value = teacher.subject
    document.getElementById("teacherModal").style.display = "block"
  }
}

// Delete teacher
function deleteTeacher(id) {
  if (confirm("Apakah Anda yakin ingin menghapus data guru ini?")) {
    let teachers = JSON.parse(localStorage.getItem("teachers")) || []
    teachers = teachers.filter((t) => t.id !== id)
    localStorage.setItem("teachers", JSON.stringify(teachers))
    loadTeachers()
  }
}

// Handle form submission
document.getElementById("teacherForm").addEventListener("submit", (e) => {
  e.preventDefault()

  const id = document.getElementById("teacherId").value
  const name = document.getElementById("teacherName").value
  const subject = document.getElementById("teacherSubject").value
  const photoFile = document.getElementById("teacherPhoto").files[0]

  const teachers = JSON.parse(localStorage.getItem("teachers")) || []

  const processTeacher = (photoUrl) => {
    if (id) {
      // Update existing teacher
      const index = teachers.findIndex((t) => t.id === Number.parseInt(id))
      if (index !== -1) {
        teachers[index].name = name
        teachers[index].subject = subject
        if (photoUrl) teachers[index].photo = photoUrl
      }
    } else {
      // Add new teacher
      const newId = teachers.length > 0 ? Math.max(...teachers.map((t) => t.id)) + 1 : 1
      teachers.push({
        id: newId,
        name,
        subject,
        photo: photoUrl || "https://placehold.co/200x200?text=Foto+Guru",
      })
    }

    localStorage.setItem("teachers", JSON.stringify(teachers))
    closeTeacherForm()
    loadTeachers()
  }

  if (photoFile) {
    const reader = new FileReader()
    reader.onload = (e) => {
      processTeacher(e.target.result)
    }
    reader.readAsDataURL(photoFile)
  } else {
    processTeacher(null)
  }
})

// Close modal when clicking outside
window.onclick = (event) => {
  const modal = document.getElementById("teacherModal")
  if (event.target === modal) {
    closeTeacherForm()
  }
}

// Load teachers on page load
loadTeachers()
