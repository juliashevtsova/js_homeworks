function pow(x, y) {
    let result = 1; 

    let isNegative = false;
    if (y < 0) {
        isNegative = true;
        y = -y;
    }

    for (let i = 0; i < y; i++) {
        result *= x; 
    }

    if (isNegative) {
        result = 1 / result;
    }

    console.log(result); 
}

pow(2, 3);  

