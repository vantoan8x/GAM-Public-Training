const Mongo = {
	Enable		: true,

	ServerURL	: "mongodb://gitgam:123456%3Fz@128.199.198.174:27017/oms?authSource=admin",

	CommonDB	: "test",
	UserModel	: "user",
	Extra		: {
		A: "mongodb://gitgam:123456%3Fz@128.199.198.174:27017/test?authSource=admin",
		B: "mongodb://gitgam:123456%3Fz@128.199.198.174:27017/oms?authSource=admin",
	},
	Vendor		: "mongodb",
}

module.exports = Mongo;
