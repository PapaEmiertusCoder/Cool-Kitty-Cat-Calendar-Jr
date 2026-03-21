

let playerMoney = setCurrencyCookie(walletAmount);

function shopping(n)
{
    playerMoney.subtractCurrency(shopObj[n].getitemCost);
    let playerMoney = getCurrencyCookie();
    updateDisplay();
    if(shopType =="Cosmetics")
    {

    }

    if(shopType =="Consumables")
    {
        
    }
}
function addMoney(bucks)
{
    playerMoney.addCurrency(bucks)
}

//list of items in the shop
var shopObj = [
    {
        itemCost : setCurrencyCookie(100),
        itemName : 'Top Hat'
    },      
    {
        shopType : "Consumables",
        itemCost : setCurrencyCookie(10),
        itemName : 'milk'
    },
    {
        shopType : "Consumables",
        itemCost : setCurrencyCookie(5),
        itemName : 'cat feed'
    }
]       

for (i =0 ; i < shopObj.length; i++)
for (property in shopObj[i]) 
    alert( 'shop ' + i + " 's property is " + property +  " and it's value is " + shopObj[i][property])