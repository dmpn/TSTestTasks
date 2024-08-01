import {getRandomNumber} from "./1";

const hexCharacters = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

function getCharacter (index: number)
{
	return hexCharacters[index];
}
	
function getRandomColor ()
{
	let hexColorRep = "#";

	for (let index = 0; index < 6; index++)
	{
		const randomPosition = Math.floor (getRandomNumber(hexCharacters.length));
		hexColorRep += getCharacter (randomPosition);
	}
		
	return hexColorRep
}

export function task8 ()
{	
	console.log (getRandomColor());
}