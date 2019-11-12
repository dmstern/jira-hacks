var summary = document.getElementById('summary-val');
var key = document.querySelector('#key-val') || document.querySelector('#issuekey-val');
var keyVal = key.textContent;
var keyNode = document.createTextNode(`${keyVal} `);

var range = document.createRange();
range.selectNode(summary);
range.insertNode(keyNode);

window.getSelection().addRange(range);
document.execCommand("copy");

keyNode.parentNode.removeChild(keyNode);

if (window.getSelection) {
  if (window.getSelection().empty) {
    window.getSelection().empty();
  } else if (window.getSelection().removeAllRanges) {
    window.getSelection().removeAllRanges();
  }
}

JIRA.Messages.showSuccessMsg("Issue Key & Summary copied successfully to clipboard 📋.")
