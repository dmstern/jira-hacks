import { getLabels } from './util/l10n';
import {
  centsPerHourDefault,
  minutesPer,
  centsPerEuro
} from './util/constants';
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
  const estimationInHours = remainingEstimationSum / minutesPer.hour;
  const userInput = window.prompt(
    l10n.pleaseEnter(),
    centsPerHourDefault / centsPerEuro
  );
  const costPerHour = parseFloat(userInput) * centsPerEuro;

  if (isNaN(costPerHour)) {
    throw new Error(l10n.notANumber());
  }

  const costSum = ((costPerHour * estimationInHours) / centsPerEuro).toFixed(2);
  alert(l10n.costResult(costSum));
}
