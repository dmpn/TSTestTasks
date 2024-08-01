import * as fs from 'fs';

function getFileNames(directoryPath: string, callback: (err: NodeJS.ErrnoException | null, fileList?: string[]) => void): void
{
    fs.readdir(directoryPath, (err: NodeJS.ErrnoException | null, fileList: string[]) =>
    {
        if (err)
        {
            return callback(err);
        }

        callback(null, fileList);
    });
}

export function task12()
{
    const directoryPath = './3/1/';
    getFileNames(directoryPath, (err, fileList) =>
    {
        if (err)
        {
            return console.error('Unable to scan directory: ' + err);
        }
        
        console.log('Files and folders in the directory:', fileList);
    });
}