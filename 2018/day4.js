function calcMinutes (start, end){
    const minutes = [];
    
    for(let i = start; i <= end; i++){
        minutes.push(i);
    }
    
    return minutes;
}

module.exports.part1 = function (input){
    input = input.sort();
    
    const sleepingGuards = new Map();
    let currentGuardId = 0;
    
    for(const shiftAction of input){
        let [dateAndTime, action] = shiftAction.split(']');
        
        dateAndTime = dateAndTime.replace('[', '');
        
        let [, time] = dateAndTime.split(' ');
        
        time = time.replace(':', '');
        time = Number(time);
        
        if(action.includes('asleep')){
            const currentGuard = sleepingGuards.get(currentGuardId);
            
            sleepingGuards.set(currentGuardId, {
                totalSleeping: currentGuard.totalSleeping, 
                sleepTime: time,
                minutes: currentGuard.minutes
            });
        }else if(action.includes('wakes')){
            const currentGuard = sleepingGuards.get(currentGuardId);
            let minutes = calcMinutes(currentGuard.sleepTime, time);
            
            if(currentGuard.minutes.length){
                minutes = [...minutes, ...currentGuard.minutes];
            }
            
            sleepingGuards.set(currentGuardId, {
                totalSleeping: currentGuard.totalSleeping + (time - currentGuard.sleepTime), 
                sleepTime: 0,
                minutes
            });
        }else{
            const guardId = action.split(' ')[2].replace('#', '');
            
            if(!sleepingGuards.has(guardId)){
                sleepingGuards.set(guardId, {totalSleeping: 0, sleepTime: 0, minutes: []});
            }
            
            currentGuardId = guardId;
        }
    }
    
    const sortedGuards = Array
    .from(sleepingGuards)
    .sort((a, b) => {
      return b[1].totalSleeping - a[1].totalSleeping;
    });
    
    const minutesMap = new Map();
    
    for(const minute of sortedGuards[0][1].minutes.sort()){
        if(minutesMap.has(minute)){
            minutesMap.set(minute, minutesMap.get(minute) + 1);
        }else{
            minutesMap.set(minute, 1);
        }
    }
    
    let biggestNo = 0;
    let biggestMinute = 0;
    
    for(const [key, value] of minutesMap.entries()){
        if(value > biggestNo){
            biggestNo = value;
            biggestMinute = key;
        }
    }
    
    return Number(sortedGuards[0][0]) * biggestMinute;
};

module.exports.part2 = function (input){
    input = input.sort();
    
    const sleepingGuards = new Map();
    let currentGuardId = 0;
    
    for(const shiftAction of input){
        let [dateAndTime, action] = shiftAction.split(']');
        
        dateAndTime = dateAndTime.replace('[', '');
        
        let [, time] = dateAndTime.split(' ');
        
        time = time.replace(':', '');
        
        time = Number(time);
        
        if(action.includes('asleep')){
            const currentGuard = sleepingGuards.get(currentGuardId);
            
            sleepingGuards.set(currentGuardId, {
                totalSleeping: currentGuard.totalSleeping, 
                sleepTime: time,
                minutes: currentGuard.minutes
            });
        }else if(action.includes('wakes')){
            const currentGuard = sleepingGuards.get(currentGuardId);
            let minutes = calcMinutes(currentGuard.sleepTime, time);
            
            if(currentGuard.minutes.length){
                minutes = [...minutes, ...currentGuard.minutes];
            }
            
            sleepingGuards.set(currentGuardId, {
                totalSleeping: currentGuard.totalSleeping + (time - currentGuard.sleepTime), 
                sleepTime: 0,
                minutes
            });
        }else{
            const guardId = action.split(' ')[2].replace('#', '');
            
            if(!sleepingGuards.has(guardId)){
                sleepingGuards.set(guardId, {totalSleeping: 0, sleepTime: 0, minutes: []});
            }
            
            currentGuardId = guardId;
        }
    }
    
    for(const [guardId, props] of sleepingGuards.entries()){
        const minutesMap = new Map();
    
        for(const minute of props.minutes.sort()){
            if(minutesMap.has(minute)){
                minutesMap.set(minute, minutesMap.get(minute) + 1);
            }else{
                minutesMap.set(minute, 1);
            }
        }
        
        let biggestNo = 0;
        let biggestMinute = 0;
    
        for(const [key, value] of minutesMap.entries()){
            if(value > biggestNo){
                biggestNo = value;
                biggestMinute = key;
            }
        }
        
        props.mostMinute = biggestMinute;
        props.mostMinuteCount = biggestNo;
    }
    
    const sortedGuards = Array
    .from(sleepingGuards)
    .sort((a, b) => {
      return b[1].mostMinuteCount - a[1].mostMinuteCount;
    });
    
    console.log(sortedGuards);
    console.log(`${Number(sortedGuards[0][0])} ${sortedGuards[0][1].mostMinute}`);
    
    return Number(sortedGuards[0][0]) * sortedGuards[0][1].mostMinute;
};