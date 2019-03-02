var QUESTIONS = [
	{
		number : 1,
		text : 'Квадратный корень из 100?',
		num : ['36', '50', '10', '1'],
		correct : 3
	},
	{
		number : 2,
		text : '"Культурная" столица России - это ...',
		num : ['Санкт-Петербург', 'Москва', 'Екатеринбург', 'Калининград'],
		correct : 1
	},
	{
		number : 3,
		text : 'Первый химический элемент в таблице Менделеева?',
		num : ['Fe(железо)', 'H(водород)', 'Au(золото)', 'O(кислород)'],
		correct : 2
	},
		{
		number : 4,
		text : 'Как звали питона из книги "Маугли"?',
		num : ['Рикки-Тикки-Тави', 'Каа', 'Мудрый Чо', 'Длинный Джо'],
		correct : 2
	},
		{
		number : 5,
		text : 'Две мясных котлеты гриль, \n специальный соус сыр, \n огурцы салат и лук \n все на булочке с кунжутом. \n \n Только так! И это... \n',
		num : ['Косяк', 'Дональд Дак', 'Мак-Дак', 'Биг-Мак'],
		correct : 4
	},
		{
		number : 6,
		text : '2 + 2 х 2 = ??',
		num : ['8', '4', '6', '0,5'],
		correct : 3
	}
];

var otv = 0;

var game = function (ques) {
	let play = true;
	let round = 0;

	while (play == true && round <ques.length){
		let question = generateQuestion (ques, round);
		let answer = prompt (question.questionText);
		play = check (answer, round);
		round++;
	}

	if(otv == 0){
		alert('Вы ответили на ' + otv + ' вопросов. Что-то совсем плохо...');
	}else if (1 < otv <5) {
		alert('Вы ответили на ' + otv + '. Супер!');
	}
};

var generateQuestion = function (ques, round) {

	let num = '';

	for (let i = 0; i < 4; i++) {
		num = num + (i + 1) + ' - ' + ques[round].num[i] + '\n';
	}

	let text = ques[round].text + '\n';
	let correctAnswer = ques[round].correct;

	return {
		questionText: text + num + 'Введите верный вариант',
		rightAnswer: correctAnswer
	}
};

var check = function (answer, round) {
	if (answer == QUESTIONS[round].correct){
		alert('Верно!');
		otv++;
		return true;
	}else{
		alert('Не верно!');
		return false;
	}
};
game(QUESTIONS);