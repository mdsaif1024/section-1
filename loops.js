for(let i=0; i<10; i++){
    console.log(i);
}

//WAP to print all numbers either divisible by 7 or 13 from 1 to 100

// and -&&
// or -||
// not -!

for(i=1; i<=100; i++){
    if(i%7==0 || i%13==0){
        console.log(i, 'yes');
    }
}
console.log('-------fibonacci series-------\n');

let[a,b] = [0,1];

console.log(a);
console.log(b);
// console.log();


for(let i=0; i<10; i++){
    let c = a+b;
    console.log(c);
    [a,b]=[b,c];

}

// WAP to find factorial of a number
//prime number
// reverse a number
//plandirom
//armstrong