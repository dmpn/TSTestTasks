class Counter 
{
    private static value = 0;
    private static instance: Counter;

    private constructor()
    {
        
    }

    public static get(): number
    {        
        return this.value;
    }

    public static inc(value: number): void
    {
        this.value += value;
    }

    public static dec(value: number)
    {
        this.value -= value;
    }
}

export function task2 ()
{
    console.log (Counter.get());
    Counter.inc(1);
    Counter.inc(2);
    console.log (Counter.get());
    Counter.inc(3);
    console.log (Counter.get());
    Counter.dec(4);
    console.log (Counter.get());
}