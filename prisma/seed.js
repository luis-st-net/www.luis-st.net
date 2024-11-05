import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	const countries = [
		{ countryCode: "AT", countryName: "Austria" },
		{ countryCode: "BE", countryName: "Belgium" },
		/*{ countryCode: "BA", countryName: "Bosnia and Herzegovina" },*/
		{ countryCode: "HR", countryName: "Croatia" },
		{ countryCode: "CY", countryName: "Cyprus" },
		{ countryCode: "DK", countryName: "Denmark" },
		{ countryCode: "EE", countryName: "Estonia" },
		{ countryCode: "FI", countryName: "Finland" },
		{ countryCode: "FR", countryName: "France" },
		{ countryCode: "DE", countryName: "Germany" },
		{ countryCode: "GR", countryName: "Greece" },
		{ countryCode: "IS", countryName: "Iceland" },
		{ countryCode: "IE", countryName: "Ireland" },
		{ countryCode: "IT", countryName: "Italy" },
		{ countryCode: "LI", countryName: "Liechtenstein" },
		{ countryCode: "LT", countryName: "Lithuania" },
		{ countryCode: "LU", countryName: "Luxembourg" },
		{ countryCode: "LV", countryName: "Latvia" },
		{ countryCode: "NL", countryName: "Netherlands" },
		{ countryCode: "NO", countryName: "Norway" },
		/*{ countryCode: "PL", countryName: "Poland" },*/
		{ countryCode: "PT", countryName: "Portugal" },
		/*{ countryCode: "SK", countryName: "Slovakia" },*/
		{ countryCode: "SI", countryName: "Slovenia" },
		{ countryCode: "ES", countryName: "Spain" },
		{ countryCode: "SE", countryName: "Sweden" },
		{ countryCode: "CH", countryName: "Switzerland" },
		{ countryCode: "GB", countryName: "United Kingdom" },
		{ countryCode: "CA", countryName: "Canada" },
		{ countryCode: "US", countryName: "United States" }
	];
	
	for (const country of countries) {
		const existingCountry = await prisma.countryWhitelist.findUnique({
			where: { countryCode: country.countryCode }
		});
		
		if (!existingCountry) {
			await prisma.countryWhitelist.create({
				data: country
			});
			console.log(`Country ${country.countryCode} created`);
		}
	}
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
}).finally(async () => {
	await prisma.$disconnect();
});