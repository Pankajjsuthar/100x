// We have to make a counter so to make a counter what we need to do is to take an initial value
// and then increase it on a given interval and that interval we are taking as 2 seconds. This can be
// done with "setInterval or setTimeout" these takes two arguments one is call back and other one is
// the delay timme

// both are an example of async function

var count = 0;

function callback() {
  //clearTimeout(timeoutId); this will clear the timeout after 2 sec
  //   clearInterval(intervalId); this will clear the interval after 2 sec
  count++;
  console.log(count);
  setTimeout(callback,2000);
}

const timeoutId = setTimeout(callback, 2000); // 2 sec time interval

// const intervalId = setInterval(callback, 2000); // 2 sec time interval

//settimeout is a ont-time task function. It will execute a function or a piece of code once after a specified delay
//settimeinterval will execute the given function multiple times after a specified delay for infinite time.



//In summary, setTimeout is for executing a function once after a specified delay, while setInterval is 
//for executing a function at regular intervals, 
//creating a recurring task. Both functions return a numeric ID that can be used to cancel or clear the 
//scheduled task when necessary.








//to make a counter we can use setInterval for regularly updating the counter and show the results
// but to make a counter using setTimeout we have to use recursive functions and it will give the same results.