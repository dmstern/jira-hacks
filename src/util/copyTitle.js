import { copy2Clipboard } from "./clipboard";
import { getIssueTitle } from "./getIssueTitle";
import { l10n } from "./l10n";

export default function copyTitle() {
  var title = getIssueTitle();

  setTimeout(() => {
    copy2Clipboard(title.titleString, l10n.copiedIssueTitle2Clipboard());
  }, 200);
}
