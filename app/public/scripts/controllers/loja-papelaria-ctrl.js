app.controller("loja-papelaria-ctrl",($scope,produtosApi)=>{
	
	$scope.titulo = "Bem vindo a papelaria";

	$scope.produtos = [];

	$scope.adicionarProduto = (produto) =>{
		console.log(produto);

			produtosApi.postProdutos(produto).then((valor,status) => {
				carregarProdutos();
				$scope.produtos = [];
				delete $scope.produto;
				console.log(valor);
				$scope.enviarProduto.$setPristine();
			});
	};

	$scope.delProduto = (produtos)=>	{
		let del = [];

		$scope.produtos = produtos.filter((produto)=>{
			if (!produto.selecionado){
				return produto;
			}
			else{
				del.push(produto);
			}
		});
		console.log(del);
		produtosApi.removeProdutos(del).then((valor,status)=>{

			console.log(valor.data);

		},(valor,status)=>{

			console.log("Ocorreu um error");

		});
		//Atribui ao array contatos tudo aquilo que não estiver selecionado
	};

	let carregarProdutos = ()=>{
	
		produtosApi.getProdutos().then((data,status)=>{
			console.log(data.data);
			let Jdata = data.data;

			Jdata.forEach((pos)=>{
				$scope.produtos.push(pos);
			});

		},(data,status)=>{
			console.log("Não foi possível carregar os dados");
		});
	};

	carregarProdutos();
	
});