module.exports.part1 = function (reindeers, raceSeconds){
    for(let i = 0; i <= raceSeconds; i++){
        for(const reindeer of reindeers){
            if(reindeer.isResting){
                if(reindeer.restCount <= reindeer.rest){
                    reindeer.restCount++;
                }else{
                    reindeer.restCount = 0;
                    reindeer.isResting = false;
                }
            }else{
                if(reindeer.durationCount < reindeer.duration){
                    reindeer.durationCount++;
                    reindeer.distance += reindeer.speed;
                }else{
                    reindeer.durationCount = 0;
                    reindeer.isResting = true;
                }
            }
        }
    }
    
    const sortedReindeers = reindeers.sort((a,b)=>b.distance-a.distance);
    
    console.log(sortedReindeers);
    
    return sortedReindeers[0].distance;
};