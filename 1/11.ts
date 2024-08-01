function newFieldName(obj: Object, word: string)
{
    let i = 0;
    let j = 1;
    let result = "";    

    while (result.length < 1)
    {
        if (i < word.length)
        {
            result = word.substring(0, i+1);
           
        }
        else
        {
            result = word + (i - word.length);
        }       

        if ((result in obj))
        {
            result = "";            
        }     
        
        i++;
    }

    return result; 
}

export function task11 ()
{
    let string = "Hello, I’m a beginner in the typescript world";
    let words: string[] = string.split(" ");
    
    let obj: { [key: string]: string } = {};
    
    words.forEach(word => 
    {    
        obj[newFieldName(obj, word)] = word;
    })

    Object.keys(obj).forEach(key =>
    {
        console.log(key+": "+ obj[key]);
    })
}