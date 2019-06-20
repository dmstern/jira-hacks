import { getLabels } from './l10n';
import sumRemainingEstimate from './sumRemainingEstimate';
import { costPerHourDefault } from './constants';
import getEstimationCells from './getEstimationCells';

main();

function main() {
  const labels = getLabels(document.documentElement.lang);
  const estimationCells = getEstimationCells();
  if (estimationCells === false) return;
  const remainingEstimationSum = sumRemainingEstimate(estimationCells);
  if (remainingEstimationSum === false) return;

  const estimationInHours = remainingEstimationSum / 60;
  let costPerHour;

  costPerHour =
    parseFloat(window.prompt(labels.pleaseEnter(), costPerHourDefault / 100)) *
    100;

  if (isNaN(costPerHour)) {
    alert(labels.notANumber());
    return;
  }

  const costSum = ((costPerHour * estimationInHours) / 100).toFixed(2);

  alert(labels.costResult(costSum));
}
