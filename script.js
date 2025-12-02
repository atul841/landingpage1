// If you want button click action



const langBtns = document.querySelectorAll(".lang-switch button");

langBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    langBtns.forEach(b => b.classList.remove("active-lang"));
    btn.classList.add("active-lang");
  });
});

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  item.addEventListener("click", () => {

    // Close previously opened
    faqItems.forEach(i => {
      if (i !== item) i.classList.remove("open");
    });

    // Toggle clicked
    item.classList.toggle("open");
  });
});






// ---------------- FORM SHAKE (Same) ----------------
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

  



