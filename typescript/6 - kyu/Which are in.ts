export class G964 {
    public static inArray(a1: string[], a2: string[]): string[] {
        return a1.filter((value: string) => (a2.toString().search(value) > -1))
            .sort((a: string, b: string) => a.charCodeAt(0) - b.charCodeAt(0));
    }
}


const a1 = ["arp", "live", "strong"]
const a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
console.log(G964.inArray(a1, a2), ["arp", "live", "strong"]);
