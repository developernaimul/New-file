/**
 * Age Calculate
 * @param {*} name 
 * @param {*} year 
 * @returns 
 */
 let date = new Date();
function ageCal(name,year) {
    
    let age = date.getFullYear() - year;

    let ageStatus = checkageStatus(age);
    
    if (year > date.getFullYear()) {
        return `<p class="alert alert-danger">Please provide accurate information.</p>`
    }
    
    return`<p class="alert alert-${ ageStatus.statuscolor }">welcome ${ name } you are ${ age } years old and you are a ${ ageStatus.statusname }.</p>`;
};

function checkageStatus(age) {
    if ( age > 0 && age <10 ) {
        return {
            statusname : `babu`,
            statuscolor : `success`
        }
    }else if ( age >= 10 && age <18 ) {
        return {
            statusname : `kishor`,
            statuscolor : `info`
        }
    }else if ( age >= 18 && age <35 ) {
        return {
            statusname : `jobok`,
            statuscolor : `primary`
        }
    }else if ( age >= 35 && age <55 ) {
        return {
            statusname : `boyosko`,
            statuscolor : `secondary`
        }
    }else if ( age >= 55 && age <150 ) {
        return {
            statusname : `breddho`,
            statuscolor : `dark`
        }
    }else if ( age >= 150) {
        return {
            statusname : `jin/bhot`,
            statuscolor : `warning`
        }
    }
};