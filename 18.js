// Пример кода:
//    spacey(['kevin', 'has','no','space']) => 
//    [ 'kevin', 'kevinhas', 'kevinhasno', 'kevinhasnospace']
//    spacey(['this','cheese','has','no','holes']) => 
//    ['this','thischeese','thischeesehas','thischeesehasno','thischeesehasnoholes']

function num(array) {
    array.reduce((tmp, elt, index) => {
        return array[index] = tmp + elt;
    }); 
    return array;
}

num(['kevin', 'has','no','space']); 

