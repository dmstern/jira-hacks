import { copy2Clipboard } from './util/clipboard';
import { getIssueTitle } from './util/getIssueTitle';
import { l10n } from './util/l10n';

main();

function main() {
  var title = getIssueTitle();
  var selectNode = title.keyNode;
  copy2Clipboard(selectNode);

  // eslint-disable-next-line no-undef
  JIRA.Messages.showSuccessMsg(l10n.copiedIssueKey2Clipboard());
}
