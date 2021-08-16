// Вес записан в переменную weight. Рекомендацию записывай строкой в переменную recommendation. 
// Если вес до 4 кг (не включая это значение), рекомендация – 'Пора перекусить'. 
// Если вес от 4 кг включительно до 5.5 кг включительно – 'Вес в норме'.
// Если вес больше 5.5 кг – 'Пора на тренировку'. 
// В качестве условий, используй значения weight 1, 3, 4, 5, 10. 
// Рекомендацию выводи в консоль.

var weight = 5;
var recommendation;

function currentWeight(weight) {
    if ( weight < 4 ) {
        return console.log('Time to eat');
    } else if ( weight >= 4 && weight <= 5.5 ) {
        return console.log('Everything is okay');
    } else if ( weight > 5.5) {
        return console.log('It is time to trainer');
    }
}


console.log(currentWeight(1));
console.log(currentWeight(3));
console.log(currentWeight(4));
console.log(currentWeight(5));
console.log(currentWeight(10));