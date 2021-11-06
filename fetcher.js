const request = require('request');
const fs = require('fs')

//const content = 'Some content!'

request('http://www.example.edu/', (err, response, body) => {
  
fs.writeFile('./index.html', body, err => {
    if (err) {
      console.error(err)
      return
    }
    //console.log(body);
    //file written successfully
  })
fs.appendFile('./index.html', body, err => {
  let count;
  if (err) {
    console.error(err)
    return
  }
    count = body.split("").length;
    console.log(`Downloaded and saved ${count} bytes to ./index.html`);
})


// fs.readFile('/index.html', 'utf8' , (err, data) => {
//   //let count =0;
//   if (err) {
//     console.error(err)
//     return
//   }
//   // count = data.split("").length;
//   // console.log(count);
// })

});
// INPUT: > node fetcher.js http://www.example.edu/ ./index.html
// OUTPUT: Downloaded and saved 3261 bytes to ./index.html