import {getRandomNumber} from "./1";

function maxOfArrays (array: number[][])
{
    let result = new Set;
    let max = 0;
 
    array.forEach(element => 
    {
        element.forEach(number => 
        {
            if (number > max)
            {
                max = number;                    
            }
        });
        
        result.add(max);
        max = 0;
    });
    
        return result;
    }
export function task9()
{      
    let maxNumbers = 10;
    let maxArrays  = 10;
    let maxValue   = 1000;

    let listOfLists : number[][] = [];  
    listOfLists.length = maxArrays;   
    console.log("Arrays: ");  

    for (let i = 0; i < maxArrays; i++)
    {
        listOfLists[i] = new Array();

        for (let j = 0; j < maxNumbers; j++)
        {
            listOfLists[i].push(getRandomNumber(maxValue));                    
        }
        console.log(listOfLists[i]);
    }       
    
    let result = maxOfArrays(listOfLists);
    console.log("Max values: ");
    console.log(result);
}