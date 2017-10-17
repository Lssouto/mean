angular.module("loja-papelaria").directive("uiNumber",()=>{
	return{
		controller : ($scope,$element,$attrs)=>{
			this.dotInsert = (value)=>{
				if(value.length > 3){
					return this.dotInsert(value.substring(0,value.length-3)) + "." + value.substring(value.length-3);
				}
				else
					return value;
			};
			this.formatNumber = (number)=>{
				number = number.replace(/[^0-9]+/g,"");
				
				number = this.dotInsert(number);
				
				return number;	
			};
			$element.bind("keyup",()=>{
				console.log($element[0].value);
				$element[0].value = this.formatNumber($element[0].value);
			});
		}
	};
});