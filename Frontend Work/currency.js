
// set the cookie value
function setCurrencyCookie(value) {
    // Expires in 7 days
    let date = new Date();
    date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000));
    document.cookie = "myCurrency=" + value + "; expires=" + date.toUTCString() + "; path=/";
}
//get the cookie value
function getCurrencyCookie(){
    let name = "myCurrency=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++){
        let c = ca[i];
        while (c.charAt(0) === ' '){
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0){
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

//add more money to the cookie
function addCurrency(amount){
    let currentCurrency = getCurrencyCookie("currency")
    setCurrencyCookie(currentCurrency + amount)
    updateDisplay();
}
//subtract money from cookie
function subtractCurrency(amount){
    let currentCurrency = getCurrencyCookie("currency")
    setCurrencyCookie(currentCurrency - amount);
    updateDisplay();
}
//update the display of the currency
function updateDisplay(){
document.getElementById("currencyDisplay").innerHTML = getCurrencyCookie("currency");
}








