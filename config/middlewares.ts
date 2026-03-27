export default [
	"strapi::logger",
	"strapi::errors",
	{
		name: "strapi::cors",
		config: {
			origin: [
				"http://localhost:3000",
				"https://kaptured.vercel.app",
				"https://light-captain-34c8474c20.strapiapp.com",
			],
			methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "HEAD", "OPTIONS"],
			headers: ["Content-Type", "Authorization", "Origin", "Accept"],
			keepHeaderOnError: true,
		},
	},
	{
		name: "strapi::security",
		config: {
			contentSecurityPolicy: {
				useDefaults: true,
				directives: {
					"connect-src": ["'self'", "https:"],
					"img-src": [
						"'self'",
						"data:",
						"blob:",
						"res.cloudinary.com",
						"strapiapp.com",
					],
					"media-src": [
						"'self'",
						"data:",
						"blob:",
						"res.cloudinary.com",
						"strapiapp.com",
					],
					upgradeInsecureRequests: null,
				},
			},
		},
	},
	"strapi::poweredBy",
	"strapi::query",
	"strapi::body",
	"strapi::session",
	"strapi::favicon",
	"strapi::public",
];
