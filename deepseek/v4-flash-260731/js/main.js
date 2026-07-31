const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const head = document.querySelector(".site-head");
const onScroll = () => head.classList.toggle("scrolled", window.scrollY > 12);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

const revealEls = document.querySelectorAll(".reveal");

if (reduceMotion || !("IntersectionObserver" in window)) {
  revealEls.forEach((el) => el.classList.add("in"));
} else {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          entry.target.style.transitionDelay = `${Math.min(i * 90, 540)}ms`;
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealEls.forEach((el) => io.observe(el));
}

const QUOTES = [
  {
    text: "When you have eliminated the impossible, whatever remains, however improbable, must be the truth.",
    src: "The Sign of the Four"
  },
  {
    text: "You see, but you do not observe. The distinction is clear.",
    src: "A Scandal in Bohemia"
  },
  {
    text: "There is nothing more deceptive than an obvious fact.",
    src: "The Boscombe Valley Mystery"
  },
  {
    text: "It is a capital mistake to theorize before one has data. Insensibly one begins to twist facts to suit theories, instead of theories to suit facts.",
    src: "A Scandal in Bohemia"
  },
  {
    text: "To a great mind, nothing is little.",
    src: "A Study in Scarlet"
  },
  {
    text: "The game is afoot.",
    src: "The Abbey Grange"
  }
];

let qIndex = 0;
let qTimer;
const qText = document.getElementById("quote-text");
const qSrc = document.getElementById("quote-src");
const qBtns = Array.from(document.querySelectorAll(".quote-btn"));

function showQuote(i) {
  qIndex = (i + QUOTES.length) % QUOTES.length;
  qText.classList.remove("show");
  window.setTimeout(() => {
    qText.textContent = QUOTES[qIndex].text;
    qSrc.textContent = "\u2014 " + QUOTES[qIndex].src;
    qText.classList.add("show");
  }, 280);
  qBtns.forEach((btn, bi) => btn.classList.toggle("active", bi === qIndex));
}

function restartTimer() {
  window.clearInterval(qTimer);
  qTimer = window.setInterval(() => showQuote(qIndex + 1), 9000);
}

qBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    showQuote(Number(btn.dataset.i));
    restartTimer();
  });
});

showQuote(0);
restartTimer();

const cipherIn = document.getElementById("cipher-in");
const cipherShift = document.getElementById("cipher-shift");
const shiftOut = document.getElementById("shift-out");
const cipherResult = document.getElementById("cipher-result");

function caesar(text, shift) {
  return text.replace(/[a-z]/gi, (ch) => {
    const base = ch === ch.toLowerCase() ? 97 : 65;
    const code = (ch.charCodeAt(0) - base + shift) % 26;
    return String.fromCharCode((code + 26) % 26 + base);
  });
}

document.getElementById("cipher-enc").addEventListener("click", () => {
  const s = Number(cipherShift.value);
  cipherResult.textContent = caesar(cipherIn.value, s) || "\u2014 nothing to transmit \u2014";
});

document.getElementById("cipher-dec").addEventListener("click", () => {
  const s = Number(cipherShift.value);
  cipherResult.textContent = caesar(cipherIn.value, -s) || "\u2014 nothing to transmit \u2014";
});

cipherShift.addEventListener("input", () => {
  shiftOut.textContent = cipherShift.value;
});
