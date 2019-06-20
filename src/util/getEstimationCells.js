import { getLabels } from './l10n';

export default function() {

  const l10n = getLabels(document.documentElement.lang);

  const userIsInNavigator =
    document.querySelector('.navigator-container') !== null;
  if (!userIsInNavigator) {
    throw new Error(l10n.goToNavigator());
  }

  const isDetailView = document.querySelector('.details-layout') !== null;
  if (isDetailView) {
    throw new Error(l10n.changeViewTypeToList());
  }

  const estimationCells = document.querySelectorAll('.aggregatetimeestimate');

  if (estimationCells.length < 1) {
    throw new Error(l10n.enableRemainingEstimateColumn());
  }

  return estimationCells;
}
