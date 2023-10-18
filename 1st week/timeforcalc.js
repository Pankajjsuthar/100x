/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
    var start_time = new Date().getTime();

    var i = 1;
    var x = 0;
    for(;i<=n;i++){
        x+=i;
    }

    var end_time = new Date().getTime();

    var elapsed_time = (end_time-start_time)/1000; 
    // ms to sec change

    return elapsed_time;
}

console.log("Time take to calculate from 1 to 1000 is", calculateTime(1000) );
console.log("Time take to calculate from 1 to 1000000 is", calculateTime(1000000) );
console.log("Time take to calculate from 1 to 1000000000 is", calculateTime(1000000000) );


