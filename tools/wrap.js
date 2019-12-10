const fs = require("fs");

wrap("estimate-effort");
wrap("calculate-costs");
wrap("copy-key");
wrap("copy-title");

function wrap(file) {
  fs.readFile(`build/min/${file}.js`, (err, data) => {
    if (err) throw err;
    const output = `javascript:${data}`;
    const filePath = `./dist/bookmark-urls/${file}`;
    fs.writeFile(filePath, output, "utf8", err => {
      if (err) throw err;
      // eslint-disable-next-line no-console
      console.log(`created new bookmark url ${filePath}`);
    });
  });
}
