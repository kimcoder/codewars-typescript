export class G964 {
	public static travel = (r: string, zipcode: string) => {
		if(!zipcode) {
			return ":/";
		  }      
	
		let houseNumber: string = "";

		return r.split(",").reduce((sum: string, address: string, idx: number, array: string[]) => {
			if (address.substring(address.indexOf(zipcode)).length === zipcode.length) {
				houseNumber += (houseNumber.length === 0) ? "/":",";
				houseNumber += `${address.substr(0, address.search(/\D/))}`;
				sum += (sum.length === zipcode.length) ? ":":",";
				sum += address.substring(address.search(/\D/)+1).replace(` ${zipcode}`, "");
			} 
		
			if (idx === array.length-1) {
				sum += (sum === zipcode) ? ":/" : `${houseNumber}`;
			}
			return sum;
		}, zipcode);
	}
}

const ad = "123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432,"
  + "54 Holy Grail Street Niagara Town ZP 32908,3200 Main Rd. Bern AE 56210,1 Gordon St. Atlanta RE 13000,"
  + "10 Pussy Cat Rd. Chicago EX 34342,10 Gordon St. Atlanta RE 13000,58 Gordon Road Atlanta RE 13000,"
  + "22 Tokyo Av. Tedmondville SW 43098,674 Paris bd. Abbeville AA 45521,10 Surta Alley Goodtown GG 30654,"
  + "45 Holy Grail Al. Niagara Town ZP 32908,320 Main Al. Bern AE 56210,14 Gordon Park Atlanta RE 13000,"
  + "100 Pussy Cat Rd. Chicago EX 34342,2 Gordon St. Atlanta RE 13000,5 Gordon Road Atlanta RE 13000,"
  + "2200 Tokyo Av. Tedmondville SW 43098,67 Paris St. Abbeville AA 45521,11 Surta Avenue Goodtown GG 30654,"
  + "45 Holy Grail Al. Niagara Town ZP 32918,320 Main Al. Bern AE 56215,14 Gordon Park Atlanta RE 13200,"
  + "100 Pussy Cat Rd. Chicago EX 34345,2 Gordon St. Atlanta RE 13222,5 Gordon Road Atlanta RE 13001,"
  + "2200 Tokyo Av. Tedmondville SW 43198,67 Paris St. Abbeville AA 45522,11 Surta Avenue Goodville GG 30655,"
  + "2222 Tokyo Av. Tedmondville SW 43198,670 Paris St. Abbeville AA 45522,114 Surta Avenue Goodville GG 30655,"
  + "2 Holy Grail Street Niagara Town ZP 32908,3 Main Rd. Bern AE 56210,77 Gordon St. Atlanta RE 13000";

console.log(G964.travel(ad, "OH 43071")); 	// OH 43071:Main Street St. Louisville,Main Long Road St. Louisville/123,432
// console.log(G964.travel(ad, "AA 45522")); 	// AA 45522:Paris St. Abbeville,Paris St. Abbeville/67,670
// console.log(G964.travel(r, "NY 5643")); 	// NY 5643:/