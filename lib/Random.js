var Random = {
	//Этот модуль облегчает генерацию случайных чисел
	Float:function(min,max){
		var result = ((Math.random()*max)+min);
		return result;
	},
	Int:function(min,max){
		var result = Math.round((Math.random()*max)+min);
		return result;
	}
};
registerAPIUnit("Random", Random);