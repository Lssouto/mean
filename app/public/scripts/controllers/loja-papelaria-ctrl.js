app.controller("loja-papelaria-ctrl",($scope,produtosApi)=>{

	//Vars
	$scope.titulo = "Seja bem vindo a papelaria";
	$scope.produtos = [];

	//Scope Actions
	$scope.adicionarProduto = (produto) =>{
		produtosApi.postProdutos(produto).then((valor,status) => {
			init();
			console.log(valor);
			$scope.addProduto.$setPristine();
		},(valor,status)=>{

			console.log("Ocoreu um erro na inserção");

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
		
	};
	$scope.delProdutoT = (produto)=>	{
		produtosApi.removeProduto(produto).then((valor,status)=>{
			init();
			console.log(valor.data);
		},(valor,status)=>{

			console.log("Ocorreu um error na remoção");

		});
			
	};

	$scope.atualizarProduto = (produto)=>{
		$scope.formState = true;
		produtosApi.updateProduto(produto).then((valor,status)=>{
			init();
			console.log(valor.data);
		},(valor,status)=>{
			console.log("Ocorreu um error ao atualizar");
		});
	};

	$scope.setFormProduto = (produto)=>{
		$scope.produto = produto;
		$scope.formState = false;
	};

	//Funções
	let carregarProdutos = ()=>{
	
		produtosApi.getProdutos().then((valor,status)=>{
			console.log(valor.data);
			let Jdata = valor.data;

			Jdata.forEach((pos)=>{
				$scope.produtos.push(pos);
			});

		},(valor,status)=>{
			console.log("Não foi possível carregar os dados");
		});
	};

	//Tudo que inicia no começo
	let init = ()=>{
		$scope.produtos = [];
		delete $scope.produto;
		carregarProdutos();
	};

	init();
	
});