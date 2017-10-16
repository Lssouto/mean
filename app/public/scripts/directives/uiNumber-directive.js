angular.module("loja-papelaria").directive("uiNumber",()=>{
	return{
		require : "ngModel",
		link: (scope,element,attrs,ctrl)=>{
				let _dotInsert = (value)=>{
					if(value.length > 3){
						return _dotInsert(value.substring(0,value.length-3)) + "." + value.substring(value.length-3);
					}
					else
						return value;
				};
				
				let _formatNumber = (number)=>{
				number = number.replace(/[^0-9]+/g,"");
				
				number = _dotInsert(number);
				
				return number;
						
			};
			element.bind("keyup",()=>{
				ctrl.$setViewValue(_formatNumber(ctrl.$viewValue));
				ctrl.$render();
			});
		}
		
	};
});