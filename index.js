
const { Enquiry } = require('./db');

const express = require('express');
const bodyParser = require('body-parser');

// Question 1
const path = require('path');
const views = path.join(__dirname, 'views')
//

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/contact', (req, res) => {
  const enq = new Enquiry({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    message: req.body.message
  });
  enq.save().then(() => {
    res.send('All good!')
  }).catch(err => {
    res.send(err)
  });
});

// Question 1
app.get('/contact', (req, res) => {
  res.sendFile(path.join(views, 'index.html'))
});
//

// Question 2
app.get('/enquiries', async (req, res) => {
  const enquiries = await Enquiry.find()
  let html = '<table border="1">'
  for ( enq of enquiries) {
    html += `
    <tr>
      <td>${enq.name}</td>
      <td>${enq.email}</td>
      <td>${enq.phone}</td>
      <td>${enq.message}</td>
    </tr>
    `
  }
  html += '</table>'
  res.send(html)
})
// 

app.listen(9876, () => {
  console.log('Contact API listening on port 9876')
});
