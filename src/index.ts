new Promise((_resolve, reject) => {
	reject("reject");
}).catch(
	(e) => console.error(e), // biome does not see me
);

console.error("biome sees me");
