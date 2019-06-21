import { getLabels } from './l10n';

export default function() {
  const selectors = {
    navigator: '.navigator-container',
    details: '.details-layout',
    estimateColumn: '.aggregatetimeestimate'
  };

  const l10n = getLabels(document.documentElement.lang);

  const userIsInNavigator =
    document.querySelector(selectors.navigator) !== null;
  if (!userIsInNavigator) {
    throw new Error(l10n.goToNavigator());
  }

  const isDetailView = document.querySelector(selectors.details) !== null;
  if (isDetailView) {
    throw new Error(l10n.changeViewTypeToList());
  }

  const estimationCells = document.querySelectorAll(selectors.estimateColumn);

  if (estimationCells.length < 1) {
    throw new Error(l10n.enableRemainingEstimateColumn());
  }

  return estimationCells;
}
