import { getLabels } from './l10n';
import sumRemainingEstimate from './sumRemainingEstimate';
import { costPerHourDefault } from './constants';
import getEstimationCells from './getEstimationCells';

main();

function main() {
  const labels = getLabels(document.documentElement.lang);

  try {
    const estimationCells = getEstimationCells();
    const remainingEstimationSum = sumRemainingEstimate(estimationCells);

    const estimationInHours = remainingEstimationSum / 60;
    const costPerHour =
      parseFloat(
        window.prompt(labels.pleaseEnter(), costPerHourDefault / 100)
      ) * 100;

    if (isNaN(costPerHour)) {
      alert(labels.notANumber());
      return;
    }

    const costSum = ((costPerHour * estimationInHours) / 100).toFixed(2);

    alert(labels.costResult(costSum));
  } catch (error) {
    alert(error.message);
  }
}
