import { getLabels } from './l10n';
import sumRemainingEstimate from './sumRemainingEstimate';
import getEstimationCells from './getEstimationCells';

main();

function main() {
  var labels = getLabels(document.documentElement.lang);
  var estimationCells = getEstimationCells();
  var remainingEstimationSum = sumRemainingEstimate(estimationCells);

  var estimationInPT = remainingEstimationSum / (60 * 8);
  var outputValue = estimationInPT.toFixed(1);

  alert(labels.costResult(outputValue));
}
