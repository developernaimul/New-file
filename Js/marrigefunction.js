let date = new Date();
/**
 * marriage age calculator
 * @param {*} name 
 * @param {*} year 
 * @param {*} gender 
 * @returns 
 */
function mage(name, year, gender) {
    
    let age = date.getFullYear() - year;

    if (year > date.getFullYear()) {
        return `<p class="alert alert-danger">Please provide accurate information.</p>`
    }

    if ( age >= 18 && gender == 'female' ) {

        return `<p class="alert alert-success">Welcome ${ name }. You are ${ age } years old. You are old enough to get married. You can get married.</p>`

    }else if ( age >= 21 && gender == 'male' ) {

        return `<p class="alert alert-success">Welcome ${ name }. You are ${ age } years old. You are old enough to get married. You can get married.</p>`

    }else{

    return `<p class="alert alert-danger">Welcome ${ name }. You are ${ age } years old. You are not old enough to get married.</p>`

    }
};