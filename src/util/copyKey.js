import { copy2Clipboard } from "./clipboard";
import { getIssueTitle } from "./getIssueTitle";
import { l10n } from "./l10n";

export function copyKey() {
  var title = getIssueTitle();

  setTimeout(() => {
    copy2Clipboard(title.keyString, l10n.copiedIssueKey2Clipboard());
  }, 200);
}
