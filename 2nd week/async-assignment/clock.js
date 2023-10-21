function updateclock() {
  var date = new Date();

  var hr = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();

  var ampm = (hr%12 == 0 ? 'am' : "pm");
  if(hr<10){hr = '0'+hr;}
  if(min<10){min = '0'+min;}
  if(sec<10){sec = '0'+sec;}

  console.log("Current time is : " + hr +":" + min + ":" + sec +" "+ ampm);
}

setInterval(updateclock,1000);
