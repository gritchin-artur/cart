import { fetchFindDate } from './date-api';

const input = document.querySelector('.enter-date');
const card = document.querySelector('.cart-date')
const typeSearch = document.querySelector('.type-select')

let date = 0;
let type = '';

typeSearch.addEventListener('input', (event) => {
    type = event.target.value;
    console.log(date)
    fetchFindDate(date, type)
     .then(() => {
         input.value = '';
    })
});

input.addEventListener('input', (event) => {
    date = event.target.value;
    fetchFindDate(date, type)
    .then((result) => {
        cardText(result)
    })
        .catch((error) => {
            alert('error')
        })
});


function cardText(result) {
    console.log(result)
    card.innerHTML =
        ` <p class="result-of-serch">${result}</p>`
}