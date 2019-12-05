import { copy2Clipboard } from './util/clipboard';
import { getIssueTitle } from './util/getIssueTitle';
import { l10n } from './util/l10n';

main();

function main() {
  var title = getIssueTitle();

  setTimeout(() => {
    copy2Clipboard(title.titleString, l10n.copiedIssueTitle2Clipboard());
  }, 200);
}
