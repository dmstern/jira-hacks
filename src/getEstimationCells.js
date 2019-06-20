import { getLabels } from './l10n';

export default function() {

  const labels = getLabels(document.documentElement.lang);

  const userIsInNavigator =
    document.querySelector('.navigator-container') !== null;
  if (!userIsInNavigator) {
    throw new Error(labels.goToNavigator());
  }

  const isDetailView = document.querySelector('.details-layout') !== null;
  if (isDetailView) {
    throw new Error(labels.changeViewTypeToList());
  }

  const estimationCells = document.querySelectorAll('.aggregatetimeestimate');

  if (estimationCells.length < 1) {
    throw new Error(labels.enableRemainingEstimateColumn());
  }

  return estimationCells;
}
