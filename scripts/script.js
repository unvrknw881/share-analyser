'use strict';
const investedPrice = document.getElementById('invested-price');
const shareCount = document.getElementById('share-count');
const finalPrice = document.getElementById('final-price');
const btnAnalyse = document.getElementById('btn-analyse');
const result = document.getElementById('result');

// Functions
const showMessage = function (message) {
  result.style.display = 'block';
  result.textContent = message;
};

const shareAnalyser = function () {};

// Event Listeners
btnCheck.addEventListener('click', shareAnalyser);
