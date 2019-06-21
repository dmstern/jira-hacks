const labels = {
  en: {
    pleaseEnter: () => 'Please enter the cost per hour in €:',
    costResult: costSum => `Estimatet cost for displayed issues: ${costSum} €.`,
    notANumber: () => 'This is not a number. Please try again.',
    estimateOutput: outputValue =>
      `Estimated remaining effort for the displayed issues: ${outputValue} PT.`,
    goToNavigator: () => 'Error: Please go to the Jira issue navigator.',
    changeViewTypeToList: () => 'Error: Please change view type to list.',
    enableRemainingEstimateColumn: () =>
      'Error: Please enable the column \'Σ Remaining Estimate.\''
  },
  de: {
    pleaseEnter: () => 'Bitte die Kosten für eine Arbeitsstunde in € eingeben:',
    costResult: costSum =>
      `Ungefähre Kosten für angezeigte Tickets: ${costSum} €.`,
    notANumber: () => 'Das ist leider keine gültige Zahl. Versuch\'s nochmal.',
    estimateOutput: outputValue =>
      `Geschätzter restlicher Aufwand für angezeigte Tickets: ${outputValue} PT.`,
    goToNavigator: () => 'Fehler: Bitte gehe zum Jira Vorgangsnavigator.',
    changeViewTypeToList: () => 'Fehler: Bitte wechsel die Anzeige zu \'Liste\'.',
    enableRemainingEstimateColumn: () =>
      'Fehler: Bitte aktiviere die Spalte \'Σ Remaining Estimate.\''
  }
};

export function getLabels(lang) {
  return lang in labels ? labels[lang] : labels.en;
}
