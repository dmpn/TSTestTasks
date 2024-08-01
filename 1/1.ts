export function getRandomNumber(max: number)
    {
        return Math.floor(Math.random() * max);
    };

export function task1 ()
{           
    let even = false;
    let arraySize = 10;
    let numbers = new Array (arraySize);
    let evenNumbers = new Set ();
    let way = getRandomNumber(3);    

    for (let i = 0; i < arraySize;)
    {
        numbers[i] = ++i;
    }
        
    switch (way)
    {
        case 0:
            numbers.forEach ((element) => 
            {
                if (element % 2 == 0)
                    {
                        evenNumbers.add(element);                        
                    }
            })
            
            console.log (evenNumbers);
            break;
    
        case 1:
            numbers.forEach ((element) => 
            {
                if (Number.isInteger(element/2))
                {
                    evenNumbers.add(element); 
                }
            })
            
            console.log (evenNumbers);
            break;
    
        case 2:
            numbers.forEach ((element) => 
            {
                if (even)
                    {                
                        evenNumbers.add(element); 
                    }
                even = !even;
            })
            
            console.log (evenNumbers);
            break;
    }    
}




