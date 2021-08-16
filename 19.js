// Если число четное, преобразуйте его в двоичное. Если число нечетное, преобразуйте его в шестнадцатеричное.

// Пример кода:
//    evensAndOdds(2) => '10'
//    evensAndOdds(13) => 'd'

function numb(n) {
    let c;
    if (n % 2 == 0) {
        c = n.toString(2);
    } else {
        c = Number(n).toString(16);
    }

    return  c; 
}

numb(2);



