/*Задание 1*/
console.log('-----Задание 1-----');

var anyNumber = {
	сотен: null,
	десятков: null,
	единиц: null,
}

var arg =+ prompt('Введите число от 0 до 999:');
var polymorph = function () {
	if(arg > 0 && arg <= 9 ){
		anyNumber['сотен'] = 0; 
		anyNumber['десятков'] = 0;
		anyNumber['единиц'] = arg;
	}else if (10 <= arg && arg <= 999){
		anyNumber['сотен'] = Math.floor(arg / 100 % 10); 
		anyNumber['десятков'] = Math.floor(arg / 10 % 10);
		anyNumber['единиц'] = Math.floor(arg % 10);
	}else if (arg > 999){
		console.log('Вы ввели число больше 999');
		return null;
	}else if (arg < 0){
		console.log('Вы ввели отрицательное число');
		return null;
	}
}

 polymorph();
 console.log(anyNumber);