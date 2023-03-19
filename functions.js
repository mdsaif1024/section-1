// defining the function
function addnums(a, b) {
    var c = a + b;
    console.log(c);
}

// calling the func
addnums(45, 250);
// console.log(c);

const getAvg = function (m1, m2, m3) {

    console.log(m1, m2, m3);
    let avg = (m1 + m2 + m3) / 3;
    console.log(avg);

}

getAvg(5, 6);

const prodNums = (a, b) => {
    let p = a * b;
    console.log(p);
    return p;
}

let res = prodNums(532, 235);

console.log(res);