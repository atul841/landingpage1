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



// -----------------------
// 30 MINUTE COUNTDOWN TIMER
// -----------------------
// PREMIUM 3-PART TIMER (Minutes | Seconds | Fast MS)
// FULL DIGIT SPLIT TIMER — 30 minutes
// TOTAL TIME = 30 minutes in ms
const TIMER_DURATION = 30 * 60 * 1000;

// Load saved expiry time if exists
let expiryTime = localStorage.getItem("vv_timer_expiry");

// If no timer exists (new device/user)
if (!expiryTime) {
  expiryTime = Date.now() + TIMER_DURATION;
  localStorage.setItem("vv_timer_expiry", expiryTime);
}

expiryTime = parseInt(expiryTime);

function startSplitDigitTimer() {
  const m1 = document.querySelector(".t-m1");
  const m2 = document.querySelector(".t-m2");
  const s1 = document.querySelector(".t-s1");
  const s2 = document.querySelector(".t-s2");
  const ms1 = document.querySelector(".t-ms1");
  const ms2 = document.querySelector(".t-ms2");

  let t = setInterval(() => {

    let now = Date.now();
    let remaining = expiryTime - now;

    // If timer ended
    if (remaining <= 0) {
      clearInterval(t);
      m1.textContent = "0";
      m2.textContent = "0";
      s1.textContent = "0";
      s2.textContent = "0";
      ms1.textContent = "0";
      ms2.textContent = "0";
      return;
    }

    let minutes = Math.floor(remaining / 60000);
    let seconds = Math.floor((remaining % 60000) / 1000);
    let ms = Math.floor((remaining % 1000) / 10);

    let mm = ("0" + minutes).slice(-2);  
    let ss = ("0" + seconds).slice(-2);  
    let msStr = ("0" + ms).slice(-2);     

    // Update boxes (each digit separate)
    m1.textContent = mm.charAt(0);
    m2.textContent = mm.charAt(1);

    s1.textContent = ss.charAt(0);
    s2.textContent = ss.charAt(1);

    ms1.textContent = msStr.charAt(0);
    ms2.textContent = msStr.charAt(1);

  }, 10);
}

startSplitDigitTimer();


function highlightForm() {
  const form = document.querySelector(".mobile-form-card");
  const msg = document.getElementById("fillMsg");

  // Show message
  msg.classList.add("show");

  // Shake effect
  form.classList.add("shake");

  // Remove shake after 400ms
  setTimeout(() => {
    form.classList.remove("shake");
  }, 400);
}



function startDesktopTimer() {
  let totalMs = getRemainingTime();

  const dt = {
    m1: document.querySelector("#deskTimer .t-m1"),
    m2: document.querySelector("#deskTimer .t-m2"),
    s1: document.querySelector("#deskTimer .t-s1"),
    s2: document.querySelector("#deskTimer .t-s2"),
    ms1: document.querySelector("#deskTimer .t-ms1"),
    ms2: document.querySelector("#deskTimer .t-ms2")
  };

  setInterval(() => {
    let minutes = Math.floor(totalMs / 60000);
    let seconds = Math.floor((totalMs % 60000) / 1000);
    let ms = Math.floor((totalMs % 1000) / 10);

    let mm = ("0" + minutes).slice(-2);
    let ss = ("0" + seconds).slice(-2);
    let mss = ("0" + ms).slice(-2);

    dt.m1.textContent = mm.charAt(0);
    dt.m2.textContent = mm.charAt(1);

    dt.s1.textContent = ss.charAt(0);
    dt.s2.textContent = ss.charAt(1);

    dt.ms1.textContent = mss.charAt(0);
    dt.ms2.textContent = mss.charAt(1);

    totalMs -= 10;
    setRemainingTime(totalMs);

    if (totalMs <= 0) {
      dt.m1.textContent = dt.m2.textContent =
      dt.s1.textContent = dt.s2.textContent =
      dt.ms1.textContent = dt.ms2.textContent = "0";
    }

  }, 10);
}

function highlightDesktopForm() {
  const form = document.querySelector(".hero-right .form-card");
  const msg = document.getElementById("deskFillMsg");

  msg.classList.add("show");
  form.classList.add("shake");

  setTimeout(() => {
    form.classList.remove("shake");
  }, 400);
}

document.addEventListener("DOMContentLoaded", () => {
  startSplitDigitTimer();   // mobile timer
  startDesktopTimer();      // desktop timer
});
