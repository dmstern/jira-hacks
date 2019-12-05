import { copy2Clipboard } from './util/clipboard';
import { getIssueTitle } from './util/getIssueTitle';
import { l10n } from './util/l10n';

var title = getIssueTitle();
copy2Clipboard(title.titleString, l10n.copiedIssueTitle2Clipboard());
