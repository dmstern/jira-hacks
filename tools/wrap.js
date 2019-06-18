const fs = require("fs");

fs.readFile("build/estimate-effort.js", (err, data) => {
  if (err) throw err;
  const output = `javascript:${data}`;
  fs.writeFile("bookmark-urls/estimate-effort.js", output, "utf8", err => {
    if (err) throw err;
  });
});
