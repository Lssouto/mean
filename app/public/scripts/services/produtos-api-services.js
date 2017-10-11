angular.module("loja-papelaria").factory("produtosApi",($http,baseUrlApi)=>{
	let _getProdutos = ()=>{
		return $http.get(baseUrlApi + "/api/produtos");
	};
	let _postProdutos = (produto) =>{
		return $http.post(baseUrlApi +"/api/produtos", produto)
	};
	let _updateProdutos = (produto) =>{
		return $http.put(baseUrlApi +"/api/produtos", produto)
	};
	let _deleteProdutos = (produto) =>{
		return $http.delete(baseUrlApi +"/api/produtos/" + produto._id)
	};
	return{
		getProdutos: _getProdutos,
		postProdutos: _postProdutos,
		updateProdutos : _updateProdutos,
		deleteProdutos : _deleteProdutos
	};
});