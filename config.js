//// CONFIG

const config = {
	inDevelopment: true, // defaults to false
	//
	network: {
		useOriginHostname: false, // defaults to `false` - substitute hostnames of all URLs by client origin's hostname
		//
		api_url: 'https://focusinvest.space/tax',
		requestLog: false
	},
	//
};

// BODY

Object.freeze(config);


//// EXPORT
window.config = config;

// export default config;
