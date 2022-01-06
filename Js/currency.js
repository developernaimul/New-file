const currency = document.querySelector(`#currency`);
const amount = document.querySelector(`#amount`);
const result = document.querySelector(`#result`);
const button = document.querySelector(`#check`)

button.addEventListener(`click`, function (b) {
    b.preventDefault();
    amount.style.border = (amount.value == '')?`1px solid red`:`1px solid green`;
    currency.style.border = (currency.value == '')?`1px solid red`:`1px solid green`;

    if ( amount.value == '' || currency.value == 'select') {
        result.innerHTML = `<p class="alert alert-danger">ALL FILEDS ARE REQUIRED</p>`;
    } else {
        result.innerHTML = bdt(amount.value, currency.value);
    } 

    amount.value = '';
    currency.value = 'select';
});