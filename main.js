const numberContainer = document.querySelector('.rating-state__number-container');
const rateNumber = document.querySelector('.thankyou-state__result--number');
const submitBtn = document.querySelector('.rating-state__button');
const ratingState = document.querySelector('.rating-state');
const thankyouState = document.querySelector('.thankyou-state');

numberContainer.addEventListener('click', (e) => {
    const numberSelected = e.target.innerText;
    rateNumber.innerText = numberSelected;
    if (numberSelected > 0 || numberSelected < 6) {
        submitBtn.addEventListener('click', () => {
            ratingState.style.display = 'none';
            thankyouState.style.display = 'flex';
        });
    }
});

