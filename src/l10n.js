export const labels = {
  en: {
    pleaseEnter: () => 'Please enter the cost per hour in €:',
    costResult: costSum => `Estimatet cost for displayed issues: ${costSum} €.`,
    notANumber: () => 'This is not a number. Please try again.',
    estimateOutput: outputValue =>
      `Estimated remaining effort for the displayed issues: ${outputValue} PT.`
  },
  de: {
    pleaseEnter: () => 'Bitte die Kosten für eine Arbeitsstunde in € eingeben:',
    costResult: costSum =>
      `Ungefähre Kosten für angezeigte Tickets: ${costSum} €.`,
    notANumber: () => 'Das ist leider keine gültige Zahl. Versuch\'s nochmal.',
    estimateOutput: outputValue =>
      `Geschätzter restlicher Aufwand für angezeigte Tickets: ${outputValue} PT.`
  }
};

export function getLabels(lang) {
  return lang in labels ? labels[lang] : labels.en;
}
