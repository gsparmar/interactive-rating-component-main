const submitBtn = document.querySelector('.submit');
const mainContainer = document.querySelector('.container');
const tyContainer = document.querySelector('.thank-you');

const ratings = document.querySelectorAll('.btn');
const result = document.querySelector('.result');

submitBtn.addEventListener('click', () => {
  mainContainer.classList.add('hidden');
  tyContainer.classList.remove('hidden');
  console.log('clicked');
});

ratings.forEach((rating) => {
  rating.addEventListener('click', () => {
    result.textContent = rating.textContent;
  });
});
