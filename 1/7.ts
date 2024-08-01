function A (array: number []) : number
{
    const result = array.reduce ((sum, element) => sum + element, 0);

    return result;
}

function B (array: number []) : number
{
    const result = array.filter (num => num % 2 === 0).reduce ((sum, element) => sum + element, 0);   

    return result;
}

function sumOfEven (array: number [], callback: (array: number []) => number)
{
    return callback (array);
}

function sumOfEvenn (array: number [], callback: (array: number []) => number)
{
    return callback (array);
}

export function task7()
{
    let numbers: number [] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];   
    
    console.log (A(numbers));
    console.log (B(numbers));
    console.log ((numbers: number[]): number => B(numbers));    
}