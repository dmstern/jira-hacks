const fs = require('fs');

wrap('estimate-effort');
wrap('calculate-costs');

function wrap(file) {
  fs.readFile(`build/${file}.js`, (err, data) => {
    if (err) throw err;
    const output = `javascript:${data}`;
    fs.writeFile(`bookmark-urls/${file}`, output, 'utf8', err => {
      if (err) throw err;
    });
  });  
}
