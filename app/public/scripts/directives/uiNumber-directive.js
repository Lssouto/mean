angular.module("loja-papelaria").directive("uiNumber",()=>{
	return{
		require : "ngModel",
		link: (scope,element,attrs,ctrl)=>{
				let _formatNumber = (number)=>{
					
			//	let decimal =  number.split(",");
				
			//	number = number.substring(0,number.length-decimal.length);
				
				number = number.replace(/[^0-9]+/g,"");
				

				let _pointInsert = (numberA)=>{
					if(numberA.length > 3){
						return _pointInsert(numberA.substring(0,numberA.length-3)) + "." + numberA.substring(numberA.length-3);
					}
					else
						return numberA;
				};
				number = _pointInsert(number);
	
				return number;
						
			};
			element.bind("keyup",()=>{
				ctrl.$setViewValue(_formatNumber(ctrl.$viewValue));
				ctrl.$render();
			});
		}
	};
});