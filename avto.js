
const text = ['Опорный вуз Костромской области был создан путем реорганизации двух вузов: ',
  'Костромского государственного университета имени Н. А. Некрасова ',
  ' и Костромского государственного технологического университета. ',
  'КГУ является одним из 11 опорных университетов России '
];

// количество обработанных строк
let line = 0;
// текущий символ в строке
let count = 0;
// тут будет храниться то, что появится на экране
let result = '';

// функция для паузы, на вход она получает миллисекунды — сколько нужно подождать
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

// функция получения случайного целого числа
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// основная функция
function typeLine() {
  // устанавливаем таймер
  let interval = setTimeout(
    () => {
      // добавляем новый символ к строке для вывода
      result += text[line][count]
      // выводим текст на экран
      document.querySelector('p').innerHTML =result +'|';
    // увеличиваем счётчик символов
    count++;
    // если мы дошли до конца строки
    if (count >= text[line].length) {
      // обнуляем счётчик
      count = 0;
      // переходим к новой строке
      line++;
      // задерживаем текст на экране на 2 секунды
      sleep(2000);
      // очищаем текст на экране
      document.querySelector('p').innerHTML = '';
      // и в переменной
      result = '';
      // если обработали все линии
      if (line == text.length) {
        // останавливаем таймер
        clearTimeout(interval);
        // выводим финальный текст
        document.querySelector('p').innerHTML ='Спасибо за внимание! ';
        // заканчиваем работу функции
        return true;
      }
    }
    // рекурсивно вызываем функцию
    typeLine();
  // задаём в таймере время появления каждого нового символа
  }, getRandomInt(getRandomInt(100*2.5)))
}
// запускаем основную функцию
typeLine();