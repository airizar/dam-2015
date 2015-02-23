(function(){
	var factorial=function(num){
		var factorial_num=num;
		if(typeof num === 'number'){
			if(num===0){
				return 1;
			}else if(num<0){
				return false;
			}
			else if(num>1){
				factorial_num*=factorial(num-1);
			}
		}
		else{
			 factorial_num=false;
		}

		return factorial_num;
		};
		console.log(factorial(0));
		console.log(factorial(1));
		console.log(factorial(2));
	
		console.log(factorial(0)===1);
		console.log(factorial(1)===1);
		console.log(factorial(2)===2);
		console.log(factorial(3)===6);
		console.log(factorial(4)===24);
		console.log(factorial("texto")===false);
		console.log(factorial("4")===false);
		console.log(factorial(-2)===false);
		console.log(factorial()===false);
		console.log(factorial({})===false);
		console.log(factorial(function(){})===false);
		console.log(factorial(null)===false);
})();
