console.log("SCRIPT LOADED");

document.addEventListener("DOMContentLoaded", () => {

    const m1 = document.querySelector(".t-m1");
    const m2 = document.querySelector(".t-m2");
    const s1 = document.querySelector(".t-s1");
    const s2 = document.querySelector(".t-s2");

    if (!m1 || !m2 || !s1 || !s2) {
        console.error("❌ Timer HTML not found");
        return;
    }

    console.log("✔ Timer HTML found — starting timer");

    let remaining = 30 * 60; // 30 minutes in seconds

    setInterval(() => {
        remaining--;

        if (remaining <= 0) remaining = 30 * 60;

        let minutes = Math.floor(remaining / 60);
        let seconds = remaining % 60;

        let mm = ("0" + minutes).slice(-2);
        let ss = ("0" + seconds).slice(-2);

        m1.textContent = mm.charAt(0);
        m2.textContent = mm.charAt(1);
        s1.textContent = ss.charAt(0);
        s2.textContent = ss.charAt(1);

    }, 1000);

});




// ---------------- LANGUAGE BUTTONS ----------------
const langBtns = document.querySelectorAll(".lang-switch button");

langBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    langBtns.forEach(b => b.classList.remove("active-lang"));
    btn.classList.add("active-lang");
  });
});

// ---------------- FAQ ----------------
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  item.addEventListener("click", () => {
    faqItems.forEach(i => {
      if (i !== item) i.classList.remove("open");
    });
    item.classList.toggle("open");
  });
});

// ---------------- FORM SHAKE ----------------
function highlightForm() {
  const form = document.querySelector(".mobile-form-card");
  const msg = document.getElementById("fillMsg");
  msg.classList.add("show");
  form.classList.add("shake");
  setTimeout(() => form.classList.remove("shake"), 400);
}

function highlightDesktopForm() {
  const form = document.querySelector(".hero-right .form-card");
  const msg = document.getElementById("deskFillMsg");
  msg.classList.add("show");
  form.classList.add("shake");
  setTimeout(() => form.classList.remove("shake"), 400);
}

// ------------------------------------------------------
// ------------------- MOBILE TIMER ----------------------
// ------------------------------------------------------
