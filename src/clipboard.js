main();

function main() {
  var summary =
    document.getElementById('summary-val') ||
    document.querySelector('.issuerow.focused > .summary');
  var key =
    document.querySelector('#key-val') ||
    document.querySelector('#issuekey-val') ||
    document.querySelector('.issuerow.focused > .issuekey');
  var keyVal = key.textContent;
  var keyNode = document.createTextNode(`${keyVal} `);

  var range = document.createRange();
  range.selectNode(summary);
  range.insertNode(keyNode);

  if (!window.getSelection) {
    return;
  }

  window.getSelection().addRange(range);
  document.execCommand('copy');

  keyNode.parentNode.removeChild(keyNode);

  clearSelection();

  // eslint-disable-next-line no-undef
  JIRA.Messages.showSuccessMsg(
    'Issue Key & Summary copied successfully to clipboard 📋.'
  );
}

function clearSelection() {
  if (!window.getSelection) {
    return;
  }

  if (window.getSelection().empty) {
    window.getSelection().empty();
  } else if (window.getSelection().removeAllRanges) {
    window.getSelection().removeAllRanges();
  }
}
