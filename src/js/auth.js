var request = require('request');

var options = { method: 'POST',
  url: 'https://sandbox.apihub.citi.com/gcb/api/clientCredentials/oauth2/token/mx/gcb',
  headers:
   { 'content-type': 'application/x-www-form-urlencoded',
     authorization: 'Basic MjkyMGE0NmEtYzQ1NS00ZTliLWFlMWEtYzk1MTM3NjFiNWJjOkQ3aEI3cUU3a1M4cE0wa1k3dVg0Zks3aUY0cFMyZFkwYVUwdUMyd0k1eUE2eE03a0cx',
     accept: 'application/json' },
  form: { grant_type: 'afof', scope: 'sulavuf' } };

request(options, function (error, response, body) {
  if (error) return console.error('Failed: %s', error.message);

  console.log('Success: ', body);
});
