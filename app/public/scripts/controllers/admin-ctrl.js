app.controller("admin-ctrl",($scope,adminApi)=>{
		
	$scope.reboot = ()=>{
		dropDb();
		initData();
	};

	let dropDb = () =>{
		adminApi.dropDb().then((valor,status)=>{
			console.log(valor.data);
		},(valor,status)=>{
			console.log("Erro ao remove a database!!");
		});
	};
	
	let initData = ()=>{

		adminApi.initData().then((valor,status)=>{
			console.log(valor.data);
		},(valor,status)=>{
			console.log("Erro ao recriar os dados!!");
		});
	};

	
});
