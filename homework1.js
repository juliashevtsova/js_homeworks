// 1. 'number' + 3 + 3
// Кроки:
// 'number' + 3 -> "number3" 
// "number3" + 3 -> "number33" 
console.log('number' + 3 + 3); // 'number33'

// 2. null + 3
// Кроки:
// null перетворюється на 0
// 0 + 3 -> 3
console.log(null + 3); // 3

// 3. 5 && "qwerty"
// Кроки:
// Оператор && повертає останнє істинне значення
// 5 (істинне) && "qwerty" -> "qwerty"
console.log(5 && "qwerty"); // "qwerty"

// 4. +'40' + +'2' + "hillel"
// Кроки:
// +'40' -> 40 (унарний плюс перетворює рядок на число)
// +'2' -> 2
// 40 + 2 -> 42
// 42 + "hillel" -> "42hillel" (конкатенація)
console.log(+'40' + +'2' + "hillel"); // "42hillel"

// 5. '10' - 5 === 6
// Кроки:
// '10' - 5 -> 10 - 5 -> 5 (рядок перетворюється на число)
// 5 === 6 -> false
console.log('10' - 5 === 6); // false

// 6. true + false
// Кроки:
// true -> 1, false -> 0
// 1 + 0 -> 1
console.log(true + false); // 1

// 7. '4px' - 3
// Кроки:
// '4px' неможливо перетворити на число -> NaN
// NaN - 3 -> NaN
console.log('4px' - 3); // NaN

// 8. '4' - 3
// Кроки:
// '4' перетворюється на 4
// 4 - 3 -> 1
console.log('4' - 3); // 1

// 9. '6' + 3 ** 0
// Кроки:
// 3 ** 0 -> 1 (піднесення до степеня)
// '6' + 1 -> "61" (конкатенація)
console.log('6' + 3 ** 0); // "61"

// 10. 12 / '6'
// Кроки:
// '6' перетворюється на 6
// 12 / 6 -> 2
console.log(12 / '6'); // 2

// 11. '10' + (5 === 6)
// Кроки:
// 5 === 6 -> false (false перетворюється на рядок)
// '10' + 'false' -> '10false'
console.log('10' + (5 === 6)); // '10false'

// 12. null == ''
// Кроки:
// null і '' не рівні (строга рівність не виконується)
// false
console.log(null == ''); // false

// 13. 3 ** (9 / 3)
// Кроки:
// 9 / 3 -> 3
// 3 ** 3 -> 27
console.log(3 ** (9 / 3)); // 27

// 14. !!'false' == !!'true'
// Кроки:
// !!'false' -> true (рядок істинний)
// !!'true' -> true
// true == true -> true
console.log(!!'false' == !!'true'); // true

// 15. 0 || '0' && 1
// Кроки:
// 0 || '0' -> '0' (0 -> false, '0' -> істинне)
// '0' && 1 -> 1
console.log(0 || '0' && 1); // 1

// 16. (+null == false) < 1
// Кроки:
// +null -> 0
// 0 == false -> true
// true < 1 -> false
console.log((+null == false) < 1); // false

// 17. false && true || true
// Кроки:
// false && true -> false
// false || true -> true
console.log(false && true || true); // true

// 18. false && (false || true)
// Кроки:
// false || true -> true
// false && true -> false
console.log(false && (false || true)); // false

// 19. (+null == false) < 1 ** 5
// Кроки:
// +null -> 0
// 0 == false -> true
// 1 ** 5 -> 1
// true < 1 -> false
console.log((+null == false) < 1 ** 5); // false