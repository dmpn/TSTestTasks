function dayPos (date: Date)
{
    let result = 0;
    let add    = 0;
    let month  = date.getMonth();    

    if (month < 9)
    {       
        add = Math.floor(month/2);  
    }
    else
    {
        add = Math.ceil(month/2);
    }
    
    result = (month-1) * 30 + add + date.getDate();
   
    if (month > 2)
    {
        result -= 2;
        if (date.getFullYear() == leapYear(date))
        {
            result++;            
        }
    }      

    return result;
}  

function leapYear (date: Date)
{
    let result = date.getFullYear();
    let toLeapYear = 4 - date.getFullYear() % 4;  
    
    if (toLeapYear != 4)
    {
        result  += toLeapYear;
    } 
    
    return result;
}

export function task10 ()
{
    const today = new Date();
    // today.setFullYear(2024);
    // today.setMonth(2);
    // today.setDate(29);
    
    let result = 0;
    let daysInYear = 365;
    let Feb29Pos = 60;
    let targetYear = leapYear (today);      
    
    if (today.getFullYear() === targetYear)
    {
        if (dayPos(today) < Feb29Pos)
        {
            result = Feb29Pos - dayPos(today);            
        }
        else
        {
            result = daysInYear + 1 - dayPos(today) + 3 * daysInYear + Feb29Pos;            
        }
    }
    else
    {    
        result = (targetYear - today.getFullYear() - 1) * daysInYear + Feb29Pos + daysInYear - dayPos(today);
    }
        
    console.log (result);
}