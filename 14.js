function remove(str, n) {
    return str.replace(/!/g, function (m0) {
        if (n > 0) {
            n--;
            return '';
        }
        return m0;
    });
}

remove('Hi!!!', 1);


