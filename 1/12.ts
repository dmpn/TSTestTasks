function validate (psw: string)
{    
    let upper    = false;
    let lower    = false;
    let number   = false;
    let alphanum = false;
    let result   = true;
    let length   = 6;
    let i        = 0;
    let j        = 0;
    let symbol;
    let symbols = new Array <number >()
    {35; 36; 38; 39; 40; 41; 42; 43; 44; 45; 46; 47; 59; 61; 64; 91; 93; 123; 125};

    if (psw.length < length)
    {
        result = false;
    }

    while (result && i < psw.length)
    {
        symbol = psw.charCodeAt(i);
        
        if (65 <= symbol && symbol <= 90)
        {
            upper = true;
        }
        else
        {
            if (97 <= symbol && symbol <= 122)
            {
                lower = true;
            }
            else
            {
                if  (48 <= symbol && symbol <= 57)
                {
                    number = true;
                }
                else
                {
                    while (!alphanum && j < symbols.length)
                    {
                        if (symbol == symbols[j])
                        {
                            alphanum = true;                                                        
                        }
                        
                        j++;
                    }
                    
                    result = alphanum;
                }
            }
        }  

        i++;
    }

    if (!(upper && lower && number))  
    {
        result = false;
    }

    return result;
}

export function task12 ()
{
    let psw: string = "qWer4%";

    console.log ('Password is ' + validate(psw)? " ": "in" + "valid.");
}