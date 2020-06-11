// 'use strict'

// function init() {
//     for (let i = 0; i < 10; i++) { //var gives different result in console
//         setTimeout(function () {
//             console.log(i);
//         }, i * 1000);
//     }
// }

// init();


//
//function init() {
//   
//    for (let i = 0; i < 10; i++) { //var gives different result in console
//       setTimeout(function () {
//         console.log(i);
//    }, i * 1000);
// }
//var i;
//}

init();

'use strict'

function init() {
    // for (var i = 0; i < 10; i++) {
    //     (function (j) {
    //         setTimeout(function () {
    //             console.log(j);
    //         }, i * 1000);
    //     })(i);
    // }
    for (let i = 0; i < 10; i++) {
        setTimeout(() => console.log(i), i*1000);
          
    }
}