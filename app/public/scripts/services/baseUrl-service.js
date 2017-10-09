angular.module("loja-papelaria").factory("baseUrlApi",(config,$location)=>{
	return config.protocol + $location.host() + ":" + config.port;
});