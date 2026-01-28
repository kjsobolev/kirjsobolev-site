function openOverlay(name) {
  const el = document.getElementById(`overlay-${name}`);
  if (!el) return;

  el.classList.add("is-open");
  el.setAttribute("aria-hidden", "false");
}

function closeOverlay(name) {
  const el = document.getElementById(`overlay-${name}`);
  if (!el) return;

  el.classList.remove("is-open");
  el.setAttribute("aria-hidden", "true");
}

document.addEventListener("click", (e) => {
  const openBtn = e.target.closest("[data-open]");
  if (openBtn) {
    e.preventDefault();
    openOverlay(openBtn.getAttribute("data-open"));
    return;
  }

  const closeBtn = e.target.closest("[data-close]");
  if (closeBtn) {
    closeOverlay(closeBtn.getAttribute("data-close"));
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;

  const opened = document.querySelector(".overlay.is-open");
  if (!opened) return;

  opened.classList.remove("is-open");
  opened.setAttribute("aria-hidden", "true");
});

window.addEventListener("DOMContentLoaded", () => {
  const v = document.querySelector(".bg__video");
  const bg = document.querySelector(".bg");
  if (!v || !bg) return;

  v.muted = true;
  v.playsInline = true;

  v.addEventListener("playing", () => {
    bg.classList.add("is-playing");
  }, { once: true });

  const p = v.play();
  if (p && typeof p.catch === "function") {
    p.catch(() => {});
  }
});
