import { getLabels } from './util/l10n';
import { hoursPerWorkDay, minutesPer } from './util/constants';
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
  const estimationInPT =
    remainingEstimationSum / (minutesPer.hour * hoursPerWorkDay);
  const outputValue = estimationInPT.toFixed(1);
  alert(l10n.estimateOutput(outputValue));
}
