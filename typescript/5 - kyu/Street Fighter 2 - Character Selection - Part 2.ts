export function superStreetFighterSelection(fighters: Array<string[]>, position: number[], moves: string[]) {
    const verLength: number = fighters.length;
    const characters: string[] = [];
  
  //   console.log(fighters);
  //   console.log(position);
  //   console.log(moves);
    
    moves.forEach(e => {
        switch(e) {
            case "up":       
                if(position[0]-1 >= 0 && fighters[position[0]-1][position[1]] != "") {
                    position[0] = position[0]-1;
                }
            break;
            
            case "down": 
                if(position[0]+1 < verLength && fighters[position[0]+1][position[1]] != "") {
                    position[0] = position[0]+1;
                }
            break;
            
            case "left":
                position[1] = getHorizonIdx(fighters[position[0]], position[1], true);
            break;
            case "right":
                position[1] = getHorizonIdx(fighters[position[0]], position[1], false);
            break;
        }
  
        characters.push(fighters[position[0]][position[1]]);
    });  

    return characters;
}
  
const getHorizonIdx = (array: string[], idx: number, isLeft: boolean) => {
    let nextIdx = isLeft ? idx-1 : idx+1;
    if(nextIdx < 0) {
        nextIdx = array.length-1;
    } else if(nextIdx >= array.length) {
        nextIdx = 0;
    }    

    if(array[nextIdx] != "") {
        return nextIdx;
    } else {
        return getHorizonIdx(array, nextIdx, isLeft);  
    }
  };