let newArray = ['Саша', 'Петя', 'Оксана'];
let arr = newArray.reverse();
newArray[1] = 'Олег';

arr.map(function (a) {
    return a == 'Петя' ? 'Олег' : a;
}); 

