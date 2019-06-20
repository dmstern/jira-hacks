import { getLabels } from './l10n';

export default function() {

  const labels = getLabels(document.documentElement.lang);

  const userIsInNavigator =
    document.querySelector('.navigator-container') !== null;
  if (!userIsInNavigator) {
    alert(labels.goToNavigator());
    return false;
  }

  const isDetailView = document.querySelector('.details-layout') !== null;
  if (isDetailView) {
    alert(labels.changeViewTypeToList());
    return false;
  }

  const estimationCells = document.querySelectorAll('.aggregatetimeestimate');

  if (estimationCells.length < 1) {
    alert(labels.enableRemainingEstimateColumn());
    return false;
  }

  return estimationCells;
}
