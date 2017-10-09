angular.module("loja-papelaria").factory("produtosApi",($http,config)=>{
	let _getProdutos = ()=>{
		return $http.get("/api/produtos");
	};
	let _postProdutos = (produto) =>{
		return $http.post("/api/produtos", produto)
	};
	let _removeProdutos = (produto) =>{
		return $http.post("/api/delProdutos", produto)
	};
	return{
		getProdutos: _getProdutos,
		postProdutos: _postProdutos,
		removeProdutos: _removeProdutos
	};
});