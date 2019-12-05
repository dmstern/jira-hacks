function clearSelection() {
  if (window.getSelection().empty) {
    window.getSelection().empty();
  } else if (window.getSelection().removeAllRanges) {
    window.getSelection().removeAllRanges();
  }
}

export function copy2Clipboard(selectNode) {
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
}
