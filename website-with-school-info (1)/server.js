const http = require("http")
const fs = require("fs")
const path = require("path")

const PORT = 3000

// MIME types untuk berbagai file
const mimeTypes = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "application/javascript",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
}

const server = http.createServer((req, res) => {
  // Default ke index.html jika request ke root
  let filePath = req.url === "/" ? "/index.html" : req.url

  // Remove query string jika ada
  filePath = filePath.split("?")[0]

  // Build full path
  const fullPath = path.join(__dirname, filePath)

  // Get file extension
  const ext = path.extname(fullPath)

  // Set content type
  const contentType = mimeTypes[ext] || "text/plain"

  // Read dan serve file
  fs.readFile(fullPath, (err, content) => {
    if (err) {
      if (err.code === "ENOENT") {
        res.writeHead(404, { "Content-Type": "text/html" })
        res.end("<h1>404 - File Not Found</h1>", "utf-8")
      } else {
        res.writeHead(500)
        res.end("Server Error: " + err.code, "utf-8")
      }
    } else {
      res.writeHead(200, { "Content-Type": contentType })
      res.end(content, "utf-8")
    }
  })
})

server.listen(PORT, () => {
  console.log("===========================================")
  console.log("🚀 Server Website Sekolah Berjalan!")
  console.log("===========================================")
  console.log(`📍 Buka browser dan akses: http://localhost:${PORT}`)
  console.log("⏹️  Tekan CTRL+C untuk menghentikan server")
  console.log("===========================================")
})
