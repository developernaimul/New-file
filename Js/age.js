const check_button = document.querySelector( `#agecheck` );
const name = document.querySelector(`#name`);
const year = document.querySelector(`#year`);
const result = document.querySelector(`#result`);

check_button.addEventListener( `click` , () => {
    name.style.border = (name.value == '')?`1px solid red`:`1px solid green`;
    year.style.border = (year.value == '' || year.value >= date.getFullYear())?`1px solid red`:`1px solid green`;

    if ( name.value == '' || year.value == '') {
        result.innerHTML =`<p class="alert alert-danger">All filed are required</p>`;
    } else {
        result.innerHTML = ageCal( name.value, year.value );
        name.value = '';
        year.value = '';
    }        
  
});


