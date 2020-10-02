const TestRoute = {
	route	: true,
	ctrl	: true,
	model	: true,

	POST	: [],
	GET		: [],
	PUT		: [],
	DELETE	: [],

	config	: {
		unAuth: true,
		profiling: true,
		IgnoreModifiedAt: true,
	}
};

// joinString
TestRoute.POST.push([["/joinString"], [
	`A.printObject`,
	`A.formatString: abc\\n{{name}}^TB^TABnumber {{name2}}`,
	`A.printObject`
]]);

// A.assertObject
TestRoute.POST.push([["/assertObject"], [
	`A.mixObject :: ({
		 "num" : 2
	})`,

	// Kiểm tra existUser có tồn tại kh	ông nếu tồn tại thì tiếp tục chạy các hàm bên dưới
	`A.assertObject:::(
		num == 1,
	)
	:({
		"Value" : "Không phù hợp với điều kiện"
	})`,
	`A.printObject`
]]);

// A.checkObject
TestRoute.POST.push([["/checkObject"], [
	`A.mixObject :: ({
		 "num" :11
	})`,
	`A.checkObject:::(
		num > 10,
	)
	:({
		"Result" : "Lớn hơn 10"
	})
	:({
		"Result" : "Nhỏ hơn 10"
	})`,
	`A.printObject`
]]);
// caseObject
TestRoute.POST.push([["/caseObject"], [
	`A.caseObject: @num:
	1: ({"value" : "abc"}):
	2: ({"value" : "def"}):
	3: ({"value" : "asd"}):`
]]);
// typeObject
TestRoute.POST.push([["/typeObject"], [
	`A.typeObject: name: int`,

]]);
// sortObject
TestRoute.GET.push([["/sort"], [
	// Tìm _id ở route để delete
	`A.findAll: test`,  
	`A.sortObject:: name`,
	`A.printObject`
]]);

// printObject, modifyObject, insertOne, refactorOutput
TestRoute.POST.push([[""], [
	/*
	data gửi lên
	name : "Khoa Quốc Ngô",
	age  : 21
	*/
	
	// In body gửi từ client
	`A.printObject`,  // { name: 'Khoa Quốc Ngô' }

	
	// Verify data gửi từ client 
	`A.verifyInput: test: name!`,

	// In data sao khi verify
	`A.printObject`,  // { name: 'Khoa Quốc Ngô' }

	// thêm thuộc tính age, address vào body từ modifyObject
	`A.modifyObject::
		"age" = 20,
		"address" = ("Bến Tre")`,

	`A.printObject`, // { name: 'Khoa Quốc Ngô', age: 21, address: 'Bến Tre' }

	// insert data body vào db  
	`A.insertOne: test`,

	// Trả data về client lọai những key không cần thiết
	`A.refactorOutput: createdAt-, modifiedAt-, ...`

]]);

// findOne, printObject, refactorOutput
TestRoute.GET.push([[":_id"], [
	// find id trong db 
	`A.findById(P.route): test: _id`, // có thể viết gọn `A.findById: test`. Mặc định sẽ lấy _id trong body, route 

	// In data vừa find ở db
	`A.printObject`,
	
	// Trả data vừa find về client lọai những key không cần thiết
	`A.refactorOutput: createdAt-, modifiedAt-, ...`
	
]]);

// findAll, refactorOutput
TestRoute.POST.push([["s"], [
	// find tất cả data có trong collection test
	`A.findAll: test`,

	// Trả data vừa find về client lọai những key không cần thiết
	`A.refactorOutput: createdAt-, modifiedAt-, ...`
	
]]);

// updateOne, printObject, verifyInput
TestRoute.PUT.push([[":_id"], [
	// update config phải bật IgnoreModifiedAt : true
	/*
	data gửi lên để update
	name 	: "Minh Khoa",
	age  	: 21,
	address	: "Mỏ Cày"
	*/

	// Verify data gửi từ client 
	`A.verifyInput: test: ...`,
	
	// Update data theo _id ở route
	`A.updateOne: test`,

	// Trả data vừa update về client lọai những key không cần thiết
	`A.refactorOutput: createdAt-, modifiedAt-, ...`

]]);

// deleteOne
TestRoute.DELETE.push([[":_id"], [
	// Tìm _id ở route để delete
	`A.deleteById: test`
]]);

module.exports = TestRoute;