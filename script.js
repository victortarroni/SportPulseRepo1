"use strict";

//#region carousel

document.addEventListener('DOMContentLoaded', function () {
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const cardsContainer = document.querySelector('.cards');
  const cards = document.querySelectorAll('.card');
  const visibleCards = 3; // Change this value according to the number of visible cards

  let currentIndex = Math.floor(cardsContainer.scrollLeft / (cards[0].offsetWidth + 10));

  function showCard(index) {
    const cardWidth = cards[0].offsetWidth + 10; // Width of card + margin-right
    const newPosition = -index * cardWidth;
    cardsContainer.style.left = newPosition + 'px';
    cards.forEach((card, i) => {
      if (i === index || i === index - 1 || i === index + 1) {
        card.classList.add('selected');
        card.style.opacity = 1;
      } else {
        card.classList.remove('selected');
        card.style.opacity = 0.3;
      }
    });
  }

  function showNextCard() {
    if (currentIndex < cards.length - visibleCards) {
      currentIndex++;
      showCard(currentIndex);
    }
    if (currentIndex === cards.length - visibleCards) {
      nextBtn.disabled = true;
    }
    prevBtn.disabled = false;
  }

  function showPrevCard() {
    if (currentIndex > 0) {
      currentIndex--;
      showCard(currentIndex);
    }
    if (currentIndex === 0) {
      prevBtn.disabled = true;
    }
    nextBtn.disabled = false;
  }

  prevBtn.addEventListener('click', showPrevCard);
  nextBtn.addEventListener('click', showNextCard);

  // Show initial cards
  showCard(currentIndex);

  // Disable prevBtn initially
  prevBtn.disabled = true;
});

//#endregion


//#region hoover effect

const dashedMenu = function(e) {
  if (e.target.classList.contains("link")) {
    const link = e.target;
    link.style.borderBottom = "1px solid #fc6a0f"
    
  }
};

const removedashedMenu = function(e){

    if (e.target.classList.contains("link")) {
      const link = e.target;
      link.style.borderBottom = "none";
    }
}

document.querySelector("#menu").addEventListener("mouseover", dashedMenu);

document.querySelector("#menu").addEventListener("mouseout", removedashedMenu);

//#endregion
