(function(){
"use strict";
// ----- ACCORDION for deduction methods -----
const methodTitles = document.querySelectorAll('.method-title');
methodTitles.forEach(title => {
title.addEventListener('click', function(e) {
const targetId = this.dataset.target;
const detail = document.getElementById(targetId);
if (!detail) return;
// Close others? We can keep independent; but nicer if only one open
const allDetails = document.querySelectorAll('.method-detail');
const isActive = this.classList.contains('active');
// Optional: close all others for cleaner UI
allDetails.forEach(d => { if (d.id !== targetId) d.classList.remove('show'); });
document.querySelectorAll('.method-title').forEach(t => t.classList.remove('active'));
if (!isActive) {
this.classList.add('active');
detail.classList.add('show');
} else {
detail.classList.remove('show');
}
});
});
// ----- QUIZ INTERACTION -----
const quizOptions = document.querySelectorAll('.quiz-option');
const feedbackDiv = document.querySelector('.quiz-feedback');
const explanationDiv = document.getElementById('explainDeduction');
const successDiv = document.querySelector('.quiz-success');
const resetBtn = document.querySelector('.reset-quiz');
let quizLocked = false;
let correctAnswerChosen = false;
function resetQuizState() {
quizLocked = false;
correctAnswerChosen = false;
if (feedbackDiv) feedbackDiv.innerHTML = '';
if (explanationDiv) explanationDiv.classList.add('hidden');
if (successDiv) successDiv.classList.add('hidden');
quizOptions.forEach(btn => {
btn.disabled = false;
btn.style.opacity = '1';
btn.style.background = 'transparent';
});
}
quizOptions.forEach(option => {
option.addEventListener('click', function(e) {
if (quizLocked) return;
const answer = this.dataset.answer;
const isCorrect = (answer === 'correct');
quizLocked = true;
quizOptions.forEach(btn => { btn.disabled = true; btn.style.opacity = '0.6'; });
if (isCorrect) {
feedbackDiv.innerHTML = '<i class="fas fa-check" style="color: #b89b7b;"></i> Brilliant! Quite right.';
successDiv.classList.remove('hidden');
explanationDiv.classList.remove('hidden');
this.style.background = '#2c4a2e';
correctAnswerChosen = true;
} else {
feedbackDiv.innerHTML = '<i class="fas fa-times"></i> Not quite. Observe again. The details point elsewhere.';
this.style.background = '#6b2e2e';
// Show explanation anyway? Or we can let them try again via reset.
// We'll enable reset.
explanationDiv.classList.remove('hidden'); // show the deduction regardless
}
});
});
if (resetBtn) {
resetBtn.addEventListener('click', function() {
resetQuizState();
});
}
// Pre-open the first method? Keep closed for mystery.
// but we can add a small hint: maybe open first one by default? Not necessary.
// Let's open first accordion item for initial engagement
const firstMethod = document.querySelector('.method-title');
if (firstMethod) {
// trigger click after a short delay to show first method
setTimeout(() => {
if (!document.querySelector('.method-title.active')) {
firstMethod.click();
}
}, 300);
}
// Extra micro-interaction: header lamp flicker (cosmetic)
const lamp = document.querySelector('.hero-lamp i');
if (lamp) {
setInterval(() => {
lamp.style.opacity = '0.4';
setTimeout(() => lamp.style.opacity = '0.7', 80);
}, 4000);
}
// Immersive detail: randomize smoke positions slightly
const smokes = document.querySelectorAll('.smoke');
smokes.forEach((s, idx) => {
s.style.left = (10 + idx * 25 + Math.random() * 30) + '%';
});
console.log('“The game is afoot!” — Sherlock Holmes');
})();