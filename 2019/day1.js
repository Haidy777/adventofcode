function part1 (input) {
let totalFuel = 0;

	for(const mod of input){
		totalFuel += Math.floor(mod / 3) - 2;
	}

	return totalFuel;
}

module.exports.part1 = part1;

module.exports.part2 = function (input){
	let totalFuel = 0;

	for(const mod of input){
		let currentModFuel = part1([mod]);
		let modFuel = currentModFuel;

		while(currentModFuel >0){
			currentModFuel = part1([currentModFuel]);

			if(currentModFuel > 0){
				modFuel += currentModFuel;
			}	
		}

		totalFuel += modFuel;
	}

	return totalFuel;
}