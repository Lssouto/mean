angular.module("loja-papelaria").factory("produtosApi",($http,baseUrlApi)=>{
	let _getProdutos = ()=>{
		return $http.get(baseUrlApi + "/api/produtos");
	};
	let _postProdutos = (produto) =>{
		return $http.post(baseUrlApi +"/api/produtos", produto)
	};
	let _removeProdutos = (produto) =>{
		return $http.post(baseUrlApi +"/api/delProdutos", produto)
	};
	return{
		getProdutos: _getProdutos,
		postProdutos: _postProdutos,
		removeProdutos: _removeProdutos
	};
});