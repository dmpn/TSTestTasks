import * as fs from 'fs';

function fileContent1(fileName: string, callback: (err: NodeJS.ErrnoException | null, data?: string) => void): void
{
    fs.readFile(fileName, 'utf8', (err: NodeJS.ErrnoException | null, data: string) =>
    {
        if (err)
        {
            return callback(err);
        }

        callback(null, data);
    });
}

function fileContent2(fileName: string): Promise<string>
{
    return new Promise((resolve, reject) =>
        {
        fs.readFile(fileName, 'utf8', (err: NodeJS.ErrnoException | null, data: string) =>
        {
            if (err)
            {
                return reject(err);
            }

            resolve(data);
        });
    });
}

function fileContent3(fileName: string): Promise<string> 
{
    return new Promise((resolve, reject) => 
    {
        fs.readFile(fileName, 'utf8', (err: NodeJS.ErrnoException | null, data: string) => 
        {
            if (err) 
            {
                return reject(err);
            }

            resolve(data);
        });
    });
}

export function task14() 
{
    fileContent1('./3/1/file_11', (err: NodeJS.ErrnoException | null, data: string) => 
    {
        if (err) 
        {
            console.error('Error reading file:', err);
        }
        else
        {
            console.log('File content using callback:', data);
        }
    });

    fileContent2('./3/1/file_11').then((data) => 
    {
        console.log('File content using promise:', data);
    })
    .catch((err) => 
    {
        console.error('Error reading file:', err);
    });
    
    try 
    {
        const data = fileContent3('./3/1/file_11');
        console.log('File content using async/await:', data);
    }
    catch (err) 
    {
        console.error('Error reading file:', err);
    }
}