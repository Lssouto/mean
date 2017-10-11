// Mongo
let mongodb = require('./mongodb');
let ObjectId = require('mongodb').ObjectID;

let _produtoRouter = {

	_get : (callback)=>{
		mongodb.getDadosDocumento("produtos",(result)=>{
	  		callback(result);
	  	});
	},

	_add : (data,callback)=>{
		mongodb.insertDadosDocumento("produtos",data,(result)=>{
	  		callback(result);
	  	});
	},

	_deleteOne : (data,callback)=>{
		mongodb.delDadosDocumento("produtos",{ _id: ObjectId(data) },(result)=>{
			callback(result);
		});
	},

	_delete : (data,callback)=>{
		data.forEach((pos)=>{
		  	mongodb.delDadosDocumento("produtos",{ _id: ObjectId(pos._id) },(result)=>{
		  		callback(result);
		  	});
	  	});
	},

	_update : (data,callback)=>{
		let id = data._id
		delete data['_id'];
		mongodb.updateDadosDocumento("produtos",{ _id: ObjectId(id) },data,(result)=>{
		   callback(result);
		});
	}
};

module.exports = {
	produtoRouter : _produtoRouter
};