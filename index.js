const cypress = require('cypress')


passingTest = 0;
console.log('hello')

async function callTest() {
  while(passingTest < 1) {
    await cypress.run({
      spec: './cypress/integration/sample_spec.js'
    })
    .then((results) => {
      console.log(results.totalPassed)
      if(results.totalPassed > 0) {
        Email.send({
          Host : "smtp.elasticemail.com",
          Username : "success@winning.com",
          Password : "9E82128280022A0E6C6E1076B1DE330842B5",
          To : 'mayowaadeniyi@hotmail.com',
          From : "mayowaadeniyi@hotmail.com",
          Subject : "Zara Mule Loafers",
          Body : "Ready to purchase size 10 Zara Mule Loafers bro!!!"
        }).
        then(console.log);
  
        Email.send({
          Host : "smtp.elasticemail.com",
          Username : "success@winning.com",
          Password : "9E82128280022A0E6C6E1076B1DE330842B5",
          To : 'upthevolume6@hotmail.co.uk',
          From : "mayowaadeniyi@hotmail.com",
          Subject : "Zara Mule Loafers",
          Body : "Ready to purchase size 10 Zara Mule Loafers bro!!!"
        }).
        then(console.log);
  
        Email.send({
          Host : "smtp.elasticemail.com",
          Username : "success@winning.com",
          Password : "9E82128280022A0E6C6E1076B1DE330842B5",
          To : 'mynameissam6@gmail.com',
          From : "mayowaadeniyi@hotmail.com",
          Subject : "Zara Mule Loafers",
          Body : "Ready to purchase size 10 Zara Mule Loafers bro!!!"
        }).
        then(console.log);
        passingTest = results.totalPassed;
      }
    })
    .catch((err) => {
      console.log(err)
    })
  }
  console.log('Success! Buy Nowwwww')
}

callTest()