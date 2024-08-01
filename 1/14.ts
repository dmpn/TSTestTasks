//14. Print Fibonacci Sequence for given number N.

export function task14(number: number)
{    
    let i = 2;
    const arr = [0, 1];

    let result: number[];

    if (number < i)
    {
        result = arr.slice(0, number);
    }
    else
    {
        number--;
        result = arr;

        for (;i <= number; i++)
        {
            result.push (result[i-2] + result [i-1]);
        }
    }

    console.log (result);

    return result;
}