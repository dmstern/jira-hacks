import { getLabels } from './util/l10n';
import sumRemainingEstimate from './util/sumRemainingEstimate';
import getEstimationCells from './util/getEstimationCells';

main();

function main() {
  const labels = getLabels(document.documentElement.lang);

  try {
    const estimationCells = getEstimationCells();
    const remainingEstimationSum = sumRemainingEstimate(estimationCells);
    
    const estimationInPT = remainingEstimationSum / (60 * 8);
    const outputValue = estimationInPT.toFixed(1);
    
    alert(labels.estimateOutput(outputValue));
  } catch(error) {
    alert(error.message);
  }
}
