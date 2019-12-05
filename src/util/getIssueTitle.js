export function getIssueTitle() {
  var summary =
    document.getElementById('summary-val') ||
    document.querySelector('.issuerow.focused > .summary');
  var key =
    document.querySelector('#key-val') ||
    document.querySelector('#issuekey-val a') ||
    document.querySelector('.issuerow.focused > .issuekey');
  var keyVal = key.textContent;
  var summaryVal = summary.textContent;
  return {
    keyNode: key,
    summaryNode: summary,
    titleString: `${keyVal} ${summaryVal}`
  };
}
