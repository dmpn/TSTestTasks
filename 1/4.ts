export function task4()
{
    let string = '1 22 333 4444 22 5555 1';

    string.split(" ").forEach(element => {
        if (element.length > 3)
        {
            string = string.replace(element, "");
        }    
    });
    
    while (string.indexOf("  ") != -1)
        {
            string = string.replace("  ", " ").trim();
        }
        
    console.log(string);
}