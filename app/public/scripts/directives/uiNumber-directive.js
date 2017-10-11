angular.module("loja-papelaria").directive("uiNumber",()=>{
	return{
		require : "ngModel",
		link: (scope,element,attrs,ctrl)=>{
				let _formatNumber = (number)=>{
				number = number.replace(/[^0-9]+/g,"");


				let _pointInsert = (numberA)=>{
					if(numberA.length > 3){
						return numberA = _pointInsert(numberA.substring(0,numberA.length-3)) + "." + numberA.substring(numberA.length-4,4);
					}
					else
						return numberA;
				};
				number = _pointInsert(number);
				/*
				for (var i = number.length - 1; i >= 0; i--) {
					if((number.length-i)%4==0 && i!= 0 || (number.length-i) ==3 )
						number = number.substring(0,i) + "." + number.substring(i); 	
				};
				*/
				/*for (var pos = 1; pos < number.length; pos++) {
					if(pos % 4 == 0 || pos == 3 ){
						number = number.substring(0,pos) + "." + number.substring(pos);
						pos ++;
					}	
				};*/		

				return number;
						
			};
			element.bind("keyup",()=>{
				ctrl.$setViewValue(_formatNumber(ctrl.$viewValue));
				ctrl.$render();
			});
		}
	};
});