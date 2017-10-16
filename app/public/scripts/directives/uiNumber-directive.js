angular.module("loja-papelaria").directive("uiNumber",()=>{
	return{
		require : "ngModel",
		link: (scope,element,attrs,ctrl)=>{
				let _formatNumber = (number)=>{
				
				number = number.replace(/[^0-9\,]+/g,"");
				
				let decimal = "";
				
				
				for(let pos = number.length; pos >= 0 ; pos-- ){
					if(number[pos] == ','){
						decimal = number.substring(pos,pos+(number.length-pos));	
						break;
					}
				}
				number = number.substring(0,(number.length-decimal.length) );
			
				
				console.log("\nNumber: " +number
				+"\nLength: " + number.length
				+"\nD: "+decimal 
				+"\ndecimal.lenght: " +decimal.length 
				+"\nsize: " + (number.length-decimal.length)
				);
				
				
				
				number = number.replace(/[^0-9]+/g,"");
				
				let _pointInsert = (value)=>{
					if(value.length > 3){
						return _pointInsert(value.substring(0,value.length-3)) + "." + value.substring(value.length-3);
					}
					else
						return value;
				};
				
				number = _pointInsert(number);
	
				return number + decimal;
						
			};
			element.bind("keyup",()=>{
				ctrl.$setViewValue(_formatNumber(ctrl.$viewValue));
				ctrl.$render();
			});
		}
	};
});