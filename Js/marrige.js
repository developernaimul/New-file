const name = document.querySelector(`#name`);
const year = document.querySelector(`#year`);
const gender = document.querySelector(`#gender`);
const result = document.querySelector(`#result`);
const button = document.querySelector(`#check`)

button.addEventListener(`click`, function (b) {
    b.preventDefault();
    name.style.border = (name.value == '')?`1px solid red`:`1px solid green`;
    year.style.border = (year.value == '' || year.value >= date.getFullYear())?`1px solid red`:`1px solid green`;
    gender.style.border = (gender.value == 'select')?`1px solid red`:`1px solid green`;

    if ( name.value == '' || year.value == '' || gender.value == 'select') {
        result.innerHTML = `<p class="alert alert-danger">ALL FILEDS ARE REQUIRED</p>`;
    } else {
        result.innerHTML = mage(name.value, year.value, gender.value);
    } 

    name.value = '';
    year.value = '';
    gender.value = 'select';
});