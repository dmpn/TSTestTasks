import * as fs from 'fs';

export function task13()
{
    const path = './3/1/file_12';
    fs.readFile(path, 'utf8', (err: NodeJS.ErrnoException | null, data: string) =>
    {
        if (err)
        {
            console.error('Unable to read file: ', err);
            return;
        }
        
        try
        {
            const jsonData = JSON.parse(data);
            console.log('JSON data as object:', jsonData);
        
            if (Array.isArray(jsonData.cities))
            {
                console.log('Cities with names longer than or equal to 6 characters:');
        
                jsonData.cities.forEach((city: string) =>
                {
                    if (city.length >= 6)
                    {
                        console.log(city);
                    }
                });
            }
            else
            {
                console.error('"cities" is not an array.');
            }
        }
        catch (parseError)
        {
            console.error('Error parsing JSON:', parseError);
        }
    });
}