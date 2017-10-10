angular.module("loja-papelaria").factory("produtosApi",($http,baseUrlApi)=>{
	let _getProdutos = ()=>{
		return $http.get(baseUrlApi + "/api/produtos");
	};
	let _postProdutos = (produto) =>{
		return $http.post(baseUrlApi +"/api/produtos", produto)
	};
	let _updateProdutos = (produto) =>{
		return $http.post(baseUrlApi +"/api/updateProduto", produto)
	};
	let _removeProdutos = (produto) =>{
		return $http.post(baseUrlApi +"/api/delProdutos", produto)
	};
	let _removeProduto = (produto) =>{
		return $http.post(baseUrlApi +"/api/delProduto", produto)
	};
	return{
		getProdutos: _getProdutos,
		postProdutos: _postProdutos,
		updateProduto : _updateProdutos,
		removeProdutos: _removeProdutos,
		removeProduto: _removeProduto
	};
});