let touchstartX = 0;
let touchendX = 0;
let lastSwipeDirection = null;
const cardInner = document.querySelector('.card__inner');

function checkDirection() {
  const currentSwipeDirection = touchendX > touchstartX ? 'right' : 'left';

  if (currentSwipeDirection !== lastSwipeDirection) {
    // Only toggle the flip when the direction changes
    cardInner.classList.toggle('is-flipped');
    lastSwipeDirection = currentSwipeDirection; // Update the last swipe direction
  }
}

cardInner.addEventListener("touchstart", (e) => {
  touchstartX = e.changedTouches[0].screenX;
});

cardInner.addEventListener("touchend", (e) => {
  touchendX = e.changedTouches[0].screenX;
  checkDirection();
});
