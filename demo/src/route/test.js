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
		imCache: true,

	}
};
// setCookie
TestRoute.GET.push([["/setCookie"], [
	`A.setCookie(*): ({
		"a" : "b"
	}): false`,
]]);

// getView 
TestRoute.POST.push([["/getView"], [
	`A.printObject`,
	`A.getView: abc`
]]);

// handleBodyData
TestRoute.POST.push([["/handleBodyData"], [
	`A.printObject`,
	`A.handleBodyData > respData`,
	`A.printObject(x)`,
], {
	unHandleBody: true
}]);

// chmodFile
TestRoute.POST.push([["/chmodFile"], [
	`A.chownFile: @fromPath: @mode:`

]]);
// grantToken
TestRoute.POST.push([["/grantToken"], [
	`A.grantToken: token: _id: 10`

]]);

// sendDataSync
TestRoute.POST.push([["/sendDataSync"], [
	// `A.downloadRange: @a`
	`A.checkGrantToken: token: _id`,
	`A.sendData: @method: @serverUrl`

]]);

// responseObject
TestRoute.POST.push([["/responseObject"], [
	`A.mixObject > xyz ::{
		"name": "aaaaa",
		"as": "aaa",
		"respReturn": true
	}`,
	`A.printObject`,

	`A.responseObject::@xyz`,
	`A.printObject`,
	`A.refactorOutput`	

]]);

// setReqTimeout 
TestRoute.POST.push([["/setReqTimeout"], [
	`A.setReqTimeout: 1`,
	`A.sleep: 10`,
	`A.printObject`

]]);

// shellExec
TestRoute.POST.push([["/shellExec"], [
	`A.shellExec > xyz: @cmd:`

]]);

// transArrayToObject
TestRoute.POST.push([["/transarraytoobject"], [
	`A.transArrayToObject: @test: a: false`

]]);


// getDBObject
TestRoute.POST.push([["/getdb"], [
	`A.updateDBObject > xyz: test:: _id: true`,
	// `A.groupObject:@test: a`

]]);

// groupObject
TestRoute.POST.push([["/groupobject"], [
	`A.groupObject:@test: a`

]]);

// uniquizedObject
TestRoute.POST.push([["/uniquizedObject"], [
	`A.deUniquizedObject: @_id`,
	`A.printObject`

]]);

// 

// aggregate
TestRoute.POST.push([["/aggregate"], [
	`A.printObject`,
	`A.uniquizedObject`,
	`A.aggregate: test: ({"$sort": { "name" : -1}}) : ({"match": {"user" : "@name"}}): ({"limit": 2})`

]]);

// verifyObject
TestRoute.POST.push([["/verifyObject"], [
	
	`A.verifyObject: test`,
	`A.printObject`

]]);

// groupObject
TestRoute.POST.push([["/groupobject"], [
	`A.groupObject > x: @test: a: 123`,
	`A.printObject(x)`,

]]);

//selectObject
TestRoute.POST.push([["/selectobject"], [
	`A.selectObject > x: @test:a:a`,
	`A.printObject(x)`,

]]);

// Insert
TestRoute.POST.push([["/db"], [
	// `A.findAll > x: B.user`,
	// `A.findAll > y: A.test`,
	// `A.insertOne(key1): A.test`,
	`A.findAll > infor: B.test`,
	`A.populate: A.test, infor._id, _id, -, createdAt, modifiedAt`

]]);



// mergeObject
TestRoute.POST.push([["/mergeobject"], [
	`A.mergeObject: @obj1: @obj2: @obj3`,
	`A.printObject`

]]);

// trimObject
TestRoute.POST.push([["/trimobject"], [
	`A.trimObject: @name`,
	`A.printObject`

]]); 

// flatObject
TestRoute.POST.push([["/flatobject"], [
	`A.allValueObject: @name: 0`,
	`A.printObject`

]]); 

// createPassword
TestRoute.POST.push([["/createpassword"], [
	`A.checkPassword: password: pass`

]]);
// joinString
TestRoute.POST.push([["/joinString"], [
	`A.printObject`,
	`A.formatString: abc\\n{{name}}^TB^TABnumber {{name2}}`,
	`A.printObject`
]]);
// writeFile
TestRoute.POST.push([["/writeFile"], [
	`A.writeFile: @filePath: @fileContent: 5`,
	`A.printObject`
]]);

// zipFile
TestRoute.POST.push([["/zipFile"], [
	`A.zipFile: @fromPath: @toPath: @password `
]]);


// calculate
TestRoute.POST.push([["/calculate"], [
	`A.calculate: -: @a: @b: @c`
]]);

// calculates
TestRoute.POST.push([["/calculates"], [
	`A.calculates > x: max: @a: @b: @c`,
	`A.printObject(x)`
]]);


// readFile
TestRoute.POST.push([["/readFile"], [
	`A.readFile > xyz: @filePath: text`,
	`A.printObject`
	//pipeFile tương tự
]]);

// readFolder ...
TestRoute.POST.push([["/readFolder"], [
	`A.printObject`,
	`A.readFolder: @filePath`,

]]);

// 	copyFile
TestRoute.POST.push([["/copyFile"], [
	`A.copyFile: @filePath: @toPath:: true`,

]]);


// 	moveFile
TestRoute.POST.push([["/moveFile"], [
	`A.moveFile: @filePath: @toPath`,

]]);

// 	deleteFile
TestRoute.POST.push([["/deleteFile"], [
	`A.deleteFile: @fromPath`,

]]);

// fileComponent
TestRoute.POST.push([["/checkFileExist"], [
	`A.fileComponent > xyz: @filepath`,
	`A.printObject`
]]);

// checkFileExist
TestRoute.POST.push([["/checkFileExist"], [
	`A.checkFileExist > xyz: @fromPath: true`,
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
// setKValue
TestRoute.POST.push([["/setKValue"], [
	`A.setKValue: @_id: @data: 5000`


]]);
// getKValue
TestRoute.POST.push([["/getKValue"], [
	`A.getKValue > xyz: @_id`,
	`A.printObject`,

]]);

// setCacheObject
TestRoute.POST.push([["/setCacheObject"], [
	`A.printObject`,
	`A.setCacheObject: test: @_id : @infor: 600`,
	`A.printObject`

]]);
// fileInfor
TestRoute.POST.push([["/fileInfor"], [
	`A.fileInfor: @fromPath: @toPath`

]]);


// getCacheObject
TestRoute.POST.push([["/getCacheObject"], [
	`A.getCacheObject: test: @_id`,

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
		"age" = ([20,30]),
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