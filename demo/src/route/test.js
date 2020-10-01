const TestRoute = {
	route	: true,
	ctrl	: true,
	model	: true,

	POST	: [],
	GET		: [],
	PUT		: [],
	DELETE	: [],

	config	: {
		unAuth: true
	}
};
// printObject, mixObject,insertOne
TestRoute.POST.push([[""], [
	`A.printObject`,
	`A.modifyObject::
		"age" = 21,
		"address" = ("Bến Tre")`,
	`A.printObject`,
	`A.insertOne: test`

]]);


module.exports = TestRoute;