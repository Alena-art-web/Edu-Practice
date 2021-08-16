// Необходимо реализовать функцию, которая на входе принимает массив 
// с разными типами данных ==> ['a', 1, 2, false, 'b'], а возвращает 
// объект, в котором эти типы данных рассортированны по ключам.

// Пример кода:
// {
//    number: [1, 2],
//    string: ['a', 'b'],
//    boolean: [false]
// }

function obj(array) {
    let newObj = {};
    let arrStr = [];
    let arrNum = [];
    let arrBool = [];

    for ( let i = 0; i < array.length; i++ ) {
        if ( typeof array[i] === 'string' ) {
            arrStr.push(array[i]);
            newObj['string'] = arrStr;
        } else if ( typeof array[i] === 'number' ) {
            arrNum.push(array[i]);
            newObj['number'] = arrNum;
        } else if ( typeof array[i] === 'boolean' ) {
            arrBool.push(array[i]);
            newObj['boolean'] = arrBool;
        }
    }
    return newObj; 
}

obj(['a', 1, 2, false, 'b', ]);




