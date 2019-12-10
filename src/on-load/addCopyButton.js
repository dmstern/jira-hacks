import copyTitle from "../util/copyTitle";
import { l10n } from "../util/l10n";

export function addCopyButton() {
  const buttonClass = "copy-issue-title-to-clipboard";
  const buttonString = `
    <button
      title="${l10n.copyClipboardButtonTitle()}"
      style="
        line-height:1em;
        float: right;
      "
      class="aui-button ${buttonClass}"
    >
      <span
        class="aui-icon aui-icon-small aui-iconfont-copy-clipboard"
      ></span>
    </button>`;

  const header = document.querySelector("#stalker .aui-page-header-main");
  header.insertAdjacentHTML("beforeend", buttonString);

  const button = document.querySelector(`.${buttonClass}`);
  button.addEventListener("click", () => {
    copyTitle();
  });
}
