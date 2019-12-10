function clearSelection() {
  if (window.getSelection().empty) {
    window.getSelection().empty();
  } else if (window.getSelection().removeAllRanges) {
    window.getSelection().removeAllRanges();
  }
}

export function copy2Clipboard(titleString, successMsg) {
  var selectNode = document.createTextNode(`${titleString}`);

  document.body.appendChild(selectNode);

  setTimeout(() => {
    var range = document.createRange();
    range.selectNode(selectNode);

    if (!window.getSelection) {
      return;
    }

    window.getSelection().addRange(range);
    document.execCommand("copy");

    clearSelection();

    // eslint-disable-next-line no-undef
    JIRA.Messages.showSuccessMsg(successMsg);

    document.body.removeChild(selectNode);
  }, 200);
}
