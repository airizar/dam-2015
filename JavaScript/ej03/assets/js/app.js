(function(){
	var par_o_impar=function(num){
		if(typeof num==='number'){
			return  (num%2===2);
		}else{
			return NaN;
		}
		
		
		};
		console.log(par_o_impar(7)===false);
		console.log(par_o_impar(2)===true);
		console.log(par_o_impar(44654)===true);
		console.log(par_o_impar(0)===true);
		console.log(par_o_impar(1)===false);
		console.log(par_o_impar()===false);
		console.log(par_o_impar("texto")===NaN);
		console.log(par_o_impar()===NaN);
		console.log(par_o_impar({})===NaN);
		console.log(par_o_impar(null)===NaN);
		console.log(par_o_impar(function(){})===NaN);
})();

