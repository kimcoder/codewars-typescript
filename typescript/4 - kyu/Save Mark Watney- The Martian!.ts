const marsRdius: number = 3390 ;

interface Location {
    x: number;   
    y: number;
}

const getLocationBy2L = (c: string): Location => {
    const isSouth: boolean = /S/.test(c);
    const isEast: boolean = /E/.test(c);
    const y: number = Number(c.replace(/[^\d,.]/g, "").split(",")[0]) + (isSouth ? 90 : 0);
    const x: number = Number(c.replace(/[^\d,.]/g, "").split(",")[1]) + (isEast ? 180 : 0);

    return { x, y };
}

const getDistanceBetweenLocation = (loc1: Location, loc2: Location): number => {
    console.log(`[getDistanceBetweenLocation] ${loc1} ${loc2}`);
    return 0;
}

export function saveMark(c1: string, c2: string): string {
    // Don't be daunted! You can do this. Believe in yourself.
    // console.log(marsRdius);
    // console.log(marsRdius/180);
    // console.log(marsRdius/360);
    // console.log(c1.substring(0, c1.indexOf("°")));
    const loc1: Location = getLocationBy2L(c1);
    const loc2: Location = getLocationBy2L(c2);
    console.log(loc1);
    console.log(loc2);
    // const latitude = marsRdius/180;
    // const longitude = marsRdius/360;
    // 위도 = 180등분
    // 경도 = 360등분
    return "";
}

console.log(saveMark("48.23° N, 89.10° E", "48.84° N, 89.40° E"), "30KM");
// console.log(saveMark('52.10° S, 56.25° W', '52.10° N, 56.25° W'), '6160KM');