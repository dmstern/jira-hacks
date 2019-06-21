import { getLabels } from './util/l10n';
import sumRemainingEstimate from './util/sumRemainingEstimate';
import { costPerHourDefault } from './util/constants';
import getEstimationCells from './util/getEstimationCells';

try {
  main();
} catch (error) {
  alert(error.message);
}

function main() {
  const l10n = getLabels(document.documentElement.lang);
  const estimationCells = getEstimationCells();
  const remainingEstimationSum = sumRemainingEstimate(estimationCells);
  const estimationInHours = remainingEstimationSum / 60;
  const userInput = window.prompt(l10n.pleaseEnter(), costPerHourDefault / 100);
  const costPerHour = parseFloat(userInput) * 100;

  if (isNaN(costPerHour)) {
    throw new Error(l10n.notANumber());
  }

  const costSum = ((costPerHour * estimationInHours) / 100).toFixed(2);
  alert(l10n.costResult(costSum));
}
