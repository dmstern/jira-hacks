main();

function main() {
  var summary =
    document.getElementById('summary-val') ||
    document.querySelector('.issuerow.focused > .summary');
  var key =
    document.querySelector('#key-val') ||
    document.querySelector('#issuekey-val a') ||
    document.querySelector('.issuerow.focused > .issuekey');
  var keyVal = key.textContent;
  var summaryVal = summary.textContent;
  var selectNode = document.createTextNode(`${keyVal} ${summaryVal}`);

  document.body.appendChild(selectNode);

  var range = document.createRange();
  range.selectNode(selectNode);

  if (!window.getSelection) {
    return;
  }

  window.getSelection().addRange(range);
  document.execCommand('copy');

  document.body.removeChild(selectNode);

  clearSelection();

  // eslint-disable-next-line no-undef
  JIRA.Messages.showSuccessMsg(
    'Issue Key & Summary copied successfully to clipboard 📋.'
  );
}

function clearSelection() {
  if (window.getSelection().empty) {
    window.getSelection().empty();
  } else if (window.getSelection().removeAllRanges) {
    window.getSelection().removeAllRanges();
  }
}
