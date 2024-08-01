function printCurrentTimeEverySecond()
{   
    const intervalId = setInterval(() =>
    {
      const currentTime = new Date().toLocaleTimeString();
      console.log(`Current time: ${currentTime}`);
    }, 1000);
  
    setTimeout(() =>
    {
      clearInterval(intervalId);
      console.log('Stopped printing time after 30 seconds.');
    }, 30000);
}

export function task3()
{
    printCurrentTimeEverySecond();
}