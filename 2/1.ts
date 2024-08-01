class Engine 
{
    private countryOfOrigin: string;
    private fuelSystem: FuelSystem;

    constructor (countryOfOrigin: string = "Germany", fuelSystem?: FuelSystem)
    {
        this.countryOfOrigin = countryOfOrigin;
        
        if (fuelSystem !== undefined)
        {
            this.fuelSystem = new FuelSystem();
        }

        this.fuelSystem = new FuelSystem();             
    }
}

class FuelSystem
{
    private countryOfOrigin: string;

    constructor(countryOfOrigin: string = "Germany")
    {
        this.countryOfOrigin = countryOfOrigin;
    }
}

class CoolingSystem
{
    protected _canCoolSeats: boolean;

    get canCoolSeats (): boolean
    {
        return this._canCoolSeats;
    }

    constructor()
    {
        this._canCoolSeats = false;
    }
}

class CustomCoolingSystem extends CoolingSystem
{
    private countryOfOrigin: string;

    constructor()
    {
        super();
        this._canCoolSeats = true;
        this.countryOfOrigin = "Ukraine";
    }
}

class AudioSystem
{
    private brand: string;

    constructor(brand: string)
    {
        this.brand = brand;
    }
}

class BMWGermany
{
    private color: string;
    private transmission: string;
    private type: string;
    public coolingSystem: CoolingSystem;
    protected engine: Engine;
    
    constructor(color: string, transmission: string, type: string)
    {
        this.color = color;
        this.transmission = transmission;
        this.type = type;
        this.engine = new Engine();
        this.coolingSystem = new CoolingSystem();        
    }
}

class BMWUkraine extends BMWGermany
{
    audioSystem: AudioSystem = null;

    constructor(color: string, transmission: string, type: string, engine: Engine)
    {
        super(color, transmission, type);        
        this.engine = engine;
    }
}

export function task1()
{
    const customFuelSystem = new FuelSystem ("Ukraine");

    const engine = new Engine('Germany', customFuelSystem);
    
    const bmwCar = new BMWUkraine('red', 'auto', 'sedan', engine);
    
    console.log('Cooling system can cool seats: ' + bmwCar.coolingSystem.canCoolSeats);

    console.log('Creating custom...');
    const coolingSystem: CoolingSystem = new CustomCoolingSystem();
    bmwCar.coolingSystem = coolingSystem;
    console.log('Cooling system can cool seats: ' + bmwCar.coolingSystem.canCoolSeats);       
    
    const audioSystem = new AudioSystem('Focal');
    bmwCar.audioSystem = audioSystem;
    
    console.log(bmwCar);
}


