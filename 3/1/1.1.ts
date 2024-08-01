import * as fs from 'fs/promises';

async function readDirectory(directoryPath: string): Promise<void>
{
    try
    {
        const files = await fs.readdir(directoryPath);
        console.log('Files:', files);

        for (const file of files)
        {
            //const filePath = path.join(directoryPath, file);
            const filePath = (directoryPath + file);
            const stats = await fs.stat(filePath);

            if (stats.isFile())
            {
                const content = await fs.readFile(filePath, 'utf8');
                if (content === '')
                {
                    console.log(`File with empty content: ${file}`);
                }
            }
        }
    }
    catch (err)
    {
        console.error('Error:', err);
    }
}

export function task11()
{
    const directoryPath: string = './3/1/';
    readDirectory(directoryPath);
}

// Task 1.1 - using node 'fs' module, read directory in async function and:
//          print to console array of files;
//          print file names with empty content;