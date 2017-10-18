angular.module("loja-papelaria").directive("uiNumber",()=>{
	return{
		require: "ngModel",
		link:(scope,element,attrs,ctrl)=>{
			element.bind("keyup",()=>{
				ctrl.$setViewValue(scope.formatNumber(ctrl.$viewValue));
				ctrl.$render();
			});
		},
		controller : ($scope,$element,$attrs)=>{
			this._dotInsert = (value)=>{
				if(value.length > 3){
					return this._dotInsert(value.substring(0,value.length-3)) + "." + value.substring(value.length-3);
				}
				else
					return value;
			};
			this._formatNumber = (number)=>{
				number = number.replace(/[^0-9]+/g,"");
				
				number = this._dotInsert(number);
				
				return number;	
			};
			
			$scope.formatNumber = this._formatNumber;
			$scope.dotInsert =  this._dotInsert;
			/*$element.bind("keyup",()=>{
				// console.log($element[0].value);
				$element[0].value = this.formatNumber($element[0].value);
			});*/
		}
	};
});