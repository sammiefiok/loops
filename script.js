//no.1
// let i = 3;
// while (i) {
//     alert(i--);
// }
//the last value alerted is 1
//It is one because while(i) sets the condition to require a positive number to subtrct from


//no.2
// let i = 0;
// while (++i < 5) alert(i);
//1,2,3,4

// let i = 0;
// while (i++ < 5) alert(i);
//1,2,3,4,5

//They are not the same value


//no.3
//for (let i = 0; i < 5; i++) alert( i );
//1,2,3,4

//for (let i = 0; i < 5; ++i) alert( i );
//1,2,3,4

//They are the same value


//no.4
// for (let num = 1; num <= 10; num++) {
//     if (num % 2 == 0) {
//         alert(num)
//     }
// }


//no.5
// let i = 0;
// while (i < 3) {
//     alert(`number ${i}!`);
//     i++
// }

//no.6
// let num = 100;
// while (value < 100) {
//     let value = +prompt("Enter a number greater than 100", '');
//     if (num > value) {
//         alert('input again')
//         break;
//     }
// }
// alert('Num: ' + num);


//no.7
// let num = 50;
// outer: while (num > 20) {
//     let input = +prompt("Enter a number greater than 100", '');
//     if (input > 100) {
//         alert('success')
//         break;
//     }
//     if (!input) break outer;
//     if (input < 100) {
//         alert('input again')
//     }

// }

//no.8
// let n = 10;
// integer:
//     for (let a = 2; a <= n; a++) {
//         for (let b = 2; b < a; b++) {
//             if (a % b == 0) continue integer;
//         }
//         alert(a);
//     }