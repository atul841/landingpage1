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

function openPopup() {
  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}


// Check if popup was already shown
if (!localStorage.getItem("popupShown")) {

  // Auto open after 3 sec
  setTimeout(() => {
    openPopup();
  }, 3000);

  // Auto close after 17 sec
  setTimeout(() => {
    closePopup();
  }, 17000);

  // Mark popup as shown
  localStorage.setItem("popupShown", "true");
}

function openPopup() {
  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}