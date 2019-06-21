import { getLabels } from './util/l10n';
import sumRemainingEstimate from './util/sumRemainingEstimate';
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
  const estimationInPT = remainingEstimationSum / (60 * 8);
  const outputValue = estimationInPT.toFixed(1);
  alert(l10n.estimateOutput(outputValue));
}
