import { copy2Clipboard } from "./util/clipboard";
import { getIssueTitle } from "./util/getIssueTitle";
import { l10n } from "./util/l10n";

main();

function main() {
  var title = getIssueTitle();

  setTimeout(() => {
    copy2Clipboard(title.keyString, l10n.copiedIssueKey2Clipboard());
  }, 200);
}
