function longOperation(duration: number): Promise<string>
{
    return new Promise((resolve) => 
    {
        setTimeout(() => 
        {
            resolve(`Operation completed in ${duration}ms`);
        }, duration);
    });
}

const operation1 = longOperation(2000);
const operation2 = longOperation(3000);
const operation3 = longOperation(1000);

const allOperations = Promise.all([operation1, operation2, operation3]);

allOperations.then((results) => 
{
    console.log('All operations completed:', results);
})
.catch((err) => 
{
    console.error('One of the operations failed:', err);
});

const firstOperation = Promise.race([operation1, operation2, operation3]);

firstOperation.then((result) => 
{
    console.log('First operation completed:', result);
})
.catch((err) => 
{
    console.error('One of the operations failed:', err);
});
