


/**
 * bdt converter
 * @param {*} currency 
 * @returns 
 */
function converter(amount){

    if( currency.value == `usd`){
        return 85 * amount;
    }else if( currency.value == `cad`){
        return 90 * amount;
    }else if( currency.value == `pound`){
        return 95 * amount;
    }else if( currency.value == `euro`){
        return 100 * amount;
    }else if( currency.value == `gbp`){
        return 105 * amount;
    }
};
/**
 * RETURN RESULT
 * @param {*} amount 
 * @param {*} currency 
 * @returns 
 */
function bdt(amount, currency) {

    return `<p class="alert alert-success">Welcome, ${ converter(amount, currency) } BDT</p>`

};