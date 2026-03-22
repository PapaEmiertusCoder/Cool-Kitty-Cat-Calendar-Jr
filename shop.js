
//list of items in the shop
var shopObj = [
    {
        itemCost : setCurrencyCookie(100),
        itemName : 'Top Hat'
    },      
    {
        itemCost : setCurrencyCookie(10),
        itemName : 'milk'
    },
    {
        itemCost : setCurrencyCookie(5),
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