import { getLabels } from './l10n';
import sumRemainingEstimate from './sumRemainingEstimate';
import { costPerHourDefault } from './constants';
import getEstimationCells from './getEstimationCells';

main();

function main() {
  var labels = getLabels(document.documentElement.lang);
  var estimationCells = getEstimationCells();
  if (estimationCells === false) return;
  var remainingEstimationSum = sumRemainingEstimate(estimationCells);
  if (remainingEstimationSum === false) return;

  var estimationInHours = remainingEstimationSum / 60;
  var costPerHour;

  costPerHour =
    parseFloat(window.prompt(labels.pleaseEnter(), costPerHourDefault / 100)) *
    100;

  if (isNaN(costPerHour)) {
    alert(labels.notANumber());
    return;
  }

  var costSum = ((costPerHour * estimationInHours) / 100).toFixed(2);

  alert(labels.costResult(costSum));
}
