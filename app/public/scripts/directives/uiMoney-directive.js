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
				
				let _dotInsert = (value)=>{
					if(value.length > 3){
						return _dotInsert(value.substring(0,value.length-3)) + "." + value.substring(value.length-3);
					}
					else
						return value;
				};
				
				let _formatNumber = (number)=>{
					
				let splited = _splitDecimal(number);
				
				let decimal = splited.decimal;
				
				number = splited.number;
				number = number.replace(/[^0-9]+/g,"");
				number = _dotInsert(number);
				
				return number + decimal;
						
			};
			element.bind("keyup",()=>{
				ctrl.$setViewValue(_formatNumber(ctrl.$viewValue));
				ctrl.$render();
			});
		}
	};
});