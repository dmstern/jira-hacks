import { getLabels } from './util/l10n';
import sumRemainingEstimate from './util/sumRemainingEstimate';
import { costPerHourDefault } from './util/constants';
import getEstimationCells from './util/getEstimationCells';

main();

function main() {
  const l10n = getLabels(document.documentElement.lang);

  try {
    const estimationCells = getEstimationCells();
    const remainingEstimationSum = sumRemainingEstimate(estimationCells);

    const estimationInHours = remainingEstimationSum / 60;
    const costPerHour =
      parseFloat(
        window.prompt(l10n.pleaseEnter(), costPerHourDefault / 100)
      ) * 100;

    if (isNaN(costPerHour)) {
      alert(l10n.notANumber());
      return;
    }

    const costSum = ((costPerHour * estimationInHours) / 100).toFixed(2);

    alert(l10n.costResult(costSum));
  } catch (error) {
    alert(error.message);
  }
}
