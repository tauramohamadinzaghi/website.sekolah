document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.querySelector(".welcome-overlay")
  if (!overlay) return

  const hideOverlay = () => {
    overlay.classList.add("welcome-overlay--hide")
  }

  const removeOverlay = () => {
    if (overlay.parentElement) {
      overlay.remove()
    }
  }

  setTimeout(hideOverlay, 1600)
  setTimeout(removeOverlay, 2600)

  overlay.addEventListener("animationend", (event) => {
    if (event.animationName === "welcomeFade") {
      removeOverlay()
    }
  })
})
