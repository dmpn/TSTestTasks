function tax(model: string): number
{
    let result;
    switch (model)
    {
        case "bmw":
            result = 10;
            break;
        case "mersedes":
            result = 12;
            break;
        default:
            result = 8;
            break;                               
    }    

    return result;
    }
    
function getTax(model: string): number
{
    let result = 8;

    if (model == "bmw")
    {
        result = 10;
    }
    else
    {
        if (model == "mersedes")
        {
            result = 12;
        }
    }

    return result;
}

export function task5()
{ 
    console.log("Taxes:");
    console.log(tax("bmw") + " usd for bmw");
    console.log(tax("mersedes") + " usd for mersedes");
    console.log(tax("opel") + " usd for other models");   

    console.log(getTax("bmw") + " usd for bmw");
    console.log(getTax("mersedes") + " usd for mersedes");
    console.log(getTax("opel") + " usd for other models");   
}