//list of items in the shop

let pawpoints = setCurrencyCookie(100);

var shopObj = [
    {
        itemCost : 100,
        itemName : 'Top Hat'
    },      
    {
        itemCost : 10,
        itemName : 'milk'
    },
    {
        itemCost : 5,
        itemName : 'cat feed'
    }
] 

//the function to buy stuff from the Prawn Shop
function shopping(n)
{
    let item = shopObj[n];
    let bought = item.subtractCurrency(item.itemCost);
    return getCurrencyCookie();
}


for (i =0 ; i < shopObj.length; i++)
for (property in shopObj[i]) 
    alert( 'shop ' + i + " 's property is " + property +  " and it's value is " + shopObj[i][property])