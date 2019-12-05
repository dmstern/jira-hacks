import { copy2Clipboard } from './util/clipboard';
import { getIssueTitle } from './util/getIssueTitle';

main();

function main() {
  var title = getIssueTitle();
  var selectNode = document.createTextNode(`${title.titleString}`);

  setTimeout(() => {
    copy2Clipboard(selectNode);

    // eslint-disable-next-line no-undef
    JIRA.Messages.showSuccessMsg(
      'Issue Key & Summary copied successfully to clipboard 📋.'
    );
  }, 300);
}
