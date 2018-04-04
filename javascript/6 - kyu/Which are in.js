"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class G964 {
    static inArray(a1, a2) {
        return a1.filter((value) => (a2.toString().search(value) > -1))
            .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
    }
}
exports.G964 = G964;
const a1 = ["arp", "live", "strong"];
const a2 = ["lively", "alive", "harp", "sharp", "armstrong"];
console.log(G964.inArray(a1, a2), ["arp", "live", "strong"]);
