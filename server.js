const express = require('express');
const redirect = require('express-redirect');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
redirect(app);

// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname + '/dist'));

// send the user to index html page inspite of the url
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/dist'));
});

app.get('/.well-known/acme-challenge/:content', function(req, res) {
  res.send('ALV5cdt8zzb2Eyq-KoD-08mcLB9QsF-tEsQ_5fEP6QQ.HyQ2v9gIKchGp_XMb2QTqN2gBXl7ghE0kk1M-F_o_5w');
});

app.redirect('*', '/', 301);

app.listen(port);
