angular.module("loja-papelaria").directive("uiMoney",()=>{
	return{
		require : "ngModel",
		link: (scope,element,attrs,ctrl)=>{
			
			let _splitDecimal = (value)=>{
				value = value.replace(/[^0-9\,]+/g,"");
				
				for(let pos = value.length; pos >= 0 ; pos-- ){
					if(value[pos] == ','){
						return  {
							decimal : value.substring(pos,pos+(value.length-pos)),
							number : value.substring(0,pos) 
						}
					}
				}	
				return {
					decimal : "",
					number : value
				};
			};
				
			let _formatNumber = (number)=>{
					
				let splited = _splitDecimal(number);
				
				return scope.formatNumber(splited.number) + splited.decimal;
						
			};
			element.bind("keyup",()=>{
				ctrl.$setViewValue(_formatNumber(ctrl.$viewValue));
				ctrl.$render();
			});
		}
	};
});