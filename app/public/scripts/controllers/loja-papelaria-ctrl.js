app.controller("loja-papelaria-ctrl",($scope,produtosApi)=>{
	
	$scope.titulo = "Seja bem vindo a papelaria";

	$scope.produtos = [];
	
	$scope.formValue = {};
	
	$scope.adicionarProduto = (produto) =>{
		console.log(produto);

			produtosApi.postProdutos(produto).then((valor,status) => {
				$scope.produtos = [];
				carregarProdutos();
				delete $scope.produto;
				console.log(valor);
				$scope.enviarProduto.$setPristine();
			},(valor,status)=>{

				console.log("Ocoreu um erro na inserção")

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

			console.log("Ocorreu um error na remoção");

		});
		//Atribui ao array contatos tudo aquilo que não estiver selecionado
	};
	$scope.delProdutoT = (produto)=>	{
		produtosApi.removeProduto(produto).then((valor,status)=>{

			console.log(valor.data);
			$scope.produtos = [];
			carregarProdutos();
		},(valor,status)=>{

			console.log("Ocorreu um error na remoção");

		});
		
		
		
	};
	$scope.updateProduto = (produto)=>{
		$scope.produto = produto;
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