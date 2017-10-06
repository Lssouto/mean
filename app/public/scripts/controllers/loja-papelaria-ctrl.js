app.controller("loja-papelaria-ctrl",($scope,produtosApi)=>{
	
	$scope.titulo = "Bem vindo a papelaria";

	$scope.adicionarProduto = (produto) =>{
		console.log(produto);

			produtosApi.postProdutos(produto).then((valor) => {
				//$scope.contatos.push(contato);
				//delete $scope.contato;
				$scope.enviarProduto.$setPristine();
			});
	};

});