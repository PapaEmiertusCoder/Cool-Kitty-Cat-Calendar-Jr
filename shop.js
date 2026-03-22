if(getCurrencyCookie() == "") {
            setCurrencyCookie(100);
        }

    if(getCurrencyCookie() == "") {
            setCurrencyCookie(100);
    }

        //list of items in the shop
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
        alert("You clicked the buy button for " + n + "!");
        let item = shopObj[n];
        currentBalance = Number(getCurrencyCookie());
        if(currentBalance >= item.itemCost)
        {   
            subtractCurrency(item.itemCost);
            document.getElementById("pawpoints-display").innerHTML = getCurrencyCookie();
            alert("You bought " + item.itemName + " for " + item.itemCost + " paw points! You have " + getCurrencyCookie() + " paw points left.");
            if(n == 0){
                document.getElementById("the-top-hat").classList.remove("hidden-hat");
            }
        }
        else{
            alert("You don't have enough paw points to buy" + item.itemName + "!" + "Do your daily tasks!");
        }
        return getCurrencyCookie();
    }


        for (i =0 ; i < shopObj.length; i++)
        for (property in shopObj[i]) 
        alert( 'shop ' + i + " 's property is " + property +  " and it's value is " + shopObj[i][property])