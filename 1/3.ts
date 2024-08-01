export function task3()
{
    let number = 12345;
    let text = (String (number));
    let lenght = text.length;
    let result = 0;
    
    console.log("Number: " + number);
    
    for (let i = 0; i < text.length; i++)
    {
        result+= Number (text[i]);
    }
    
    console.log("Sum: " + result);
    
    result =  0;

    for (let i = lenght; i >= 0; i--)
    {              
        let value = Math.floor(number/Math.pow(10, i));        
        number -= value*Math.pow(10,i);        
        result += value;        
    }
    
    console.log("Sum: " + result);
}