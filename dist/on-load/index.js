(function () {
  'use strict';

  function clearSelection() {
    if (window.getSelection().empty) {
      window.getSelection().empty();
    } else if (window.getSelection().removeAllRanges) {
      window.getSelection().removeAllRanges();
    }
  }

  function copy2Clipboard(titleString, successMsg) {
    var selectNode = document.createTextNode(`${titleString}`);

    document.body.appendChild(selectNode);

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
  }

  function getIssueTitle() {
    var summary =
      document.getElementById("summary-val") ||
      document.querySelector(".issuerow.focused > .summary");
    var key =
      document.querySelector("#key-val") ||
      document.querySelector("#issuekey-val a") ||
      document.querySelector(".issuerow.focused > .issuekey");

    var keyVal = key.textContent;
    var summaryVal = summary.textContent;

    return {
      keyString: `${keyVal}`,
      titleString: `${keyVal} ${summaryVal}`,
    };
  }

  const labels = {
    en: {
      pleaseEnter: () => "Please enter the cost per hour in €:",
      costResult: costSum => `Estimatet cost for displayed issues: ${costSum} €.`,
      notANumber: () => "This is not a number. Please try again.",
      estimateOutput: outputValue =>
        `Estimated remaining effort for the displayed issues: ${outputValue} PT.`,
      goToNavigator: () => "Error: Please go to the Jira issue navigator.",
      changeViewTypeToList: () => "Error: Please change view type to list.",
      enableRemainingEstimateColumn: () =>
        "Error: Please enable the column 'Σ Remaining Estimate.'",
      copiedIssueTitle2Clipboard: () =>
        "Issue key & summary copied successfully to clipboard 📋.",
      copiedIssueKey2Clipboard: () =>
        "Issue key copied successfully to clipboard 📋.",
      copyClipboardButtonTitle: () => "Copy issue key and summary to clipboard",
    },
    de: {
      pleaseEnter: () => "Bitte die Kosten für eine Arbeitsstunde in € eingeben:",
      costResult: costSum =>
        `Ungefähre Kosten für angezeigte Tickets: ${costSum} €.`,
      notANumber: () => "Das ist leider keine gültige Zahl. Versuch's nochmal.",
      estimateOutput: outputValue =>
        `Geschätzter restlicher Aufwand für angezeigte Tickets: ${outputValue} PT.`,
      goToNavigator: () => "Fehler: Bitte gehe zum Jira Vorgangsnavigator.",
      changeViewTypeToList: () => "Fehler: Bitte wechsel die Anzeige zu 'Liste'.",
      enableRemainingEstimateColumn: () =>
        "Fehler: Bitte aktiviere die Spalte 'Σ Remaining Estimate.'",
      copiedIssueTitle2Clipboard: () =>
        "Ticketnummer & -zusammenfassung erfolgreich in die Zwischenablage kopiert 📋.",
      copiedIssueKey2Clipboard: () =>
        "Ticketnummer erfolgreich in die Zwischenablage kopiert 📋.",
      copyClipboardButtonTitle: () =>
        "Ticketnummer & -zusammenfassung in die Zwischenablage kopieren 📋.",
    },
  };

  const lang = document.documentElement.lang;
  const l10n = lang in labels ? labels[lang] : labels.en;

  function copyTitle() {
    var title = getIssueTitle();

    copy2Clipboard(title.titleString, l10n.copiedIssueTitle2Clipboard());
  }

  function addCopyButton() {
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

  window.onload = function() {
    addCopyButton();
  };

}());
