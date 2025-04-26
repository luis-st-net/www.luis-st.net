"use server";

export async function getContactInformation() {
	return Promise.resolve({
		name: process.env.WEBSITE_OWNER as string,
		street: process.env.OWNER_STREET as string,
		city: process.env.OWNER_CITY as string,
		country: process.env.OWNER_COUNTRY as string,
		mail: process.env.OWNER_MAIL as string,
	});
}
