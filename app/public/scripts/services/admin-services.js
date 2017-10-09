angular.module("loja-papelaria").factory("adminApi",($http,baseUrlApi)=>{
	let _initData = ()=>{
		return $http.get(baseUrlApi +"/api/init");
	};
	let _dropDb = () =>{
		return $http.get(baseUrlApi +"/api/drop-db");
	};
	
	return{
		initData : _initData,
		dropDb : _dropDb
	};
});