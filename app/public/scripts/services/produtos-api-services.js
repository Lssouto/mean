angular.module("loja-papelaria").factory("produtosApi",($http)=>{
	let _getProdutos = function(){
		return $http.get("localhost:3412/produtosApi");
	};
	let _postProdutos = function(produto){
		return $http.post("localhost:3412/produtosApi", produto)
	};
	return{
		getProdutos: _getProdutos,
		postProdutos: _postProdutos
	};
});