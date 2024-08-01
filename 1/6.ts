function noPresident ()
{
    if (obj.country == "UK")
    {
        obj.president = null;
    }
}
interface Country  
{
    country : string;
    president : string;
    government : string;
    ministries: Set<string>;
    parliament : string;
}

let obj: Country = 
{
    country : "France",
    president : "Macron",
    government : "Government of the French Republic",
    ministries : new Set([
        "Ministry of the Interior.", 
        "Ministry of Justice.", 
        "Ministry for Europe and Foreign Affairs.", 
        "Ministry of Armed Forces.", 
        "Ministry for Territorial Cohesion and Relations with Local Government."]), 
    parliament : "National Assembly"
};

export function task6()
{  
    // Print to console object in the following format: <element> is <value>
    console.log();  
    console.log("***Print to console object in the following format: <element> is <value>***"); 

    (Object.keys(obj) as Array<keyof Country>).forEach(key => {
        console.log();   

        if (typeof obj[key] === "object")
        {
            console.log (`${key} is `);            

            (obj[key]as Set<string>).forEach(element => {

                console.log (element)
            });
        }
        else
        {
            console.log(`${key} is ${obj[key]}`);
        }        
      });
        
    // Print to console only country name
    console.log();
    console.log("***Print to console only country name***");

    console.log(obj.country);
    
    // Set "president" to null in case the country is UK. (do it in function)
    console.log();
    console.log("***Set \"president\" to null in case the country is UK. (do it in function)***");
    noPresident();
    console.log("President: " + obj.president);
}