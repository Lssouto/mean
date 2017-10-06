angular.module("loja-papelaria").factory("produtosApi",($http)=>{
	let _getProdutos = ()=>{
		return $http.get("http://localhost:3412/api/produtos");
	};
	let _postProdutos = (produto) =>{
		return $http.post("http://localhost:3412/api/produtos", produto)
	};
	return{
		getProdutos: _getProdutos,
		postProdutos: _postProdutos
	};
});