export default function() {
  const userIsInNavigator =
    document.querySelector('.navigator-container') !== null;
  if (!userIsInNavigator) {
    alert('Error: Please go to the Jira issue navigator.');
    return false;
  }

  const isDetailView = document.querySelector('.details-layout') !== null;
  if (isDetailView) {
    alert('Error: Please change view type to list.');
    return false;
  }

  const estimationCells = document.querySelectorAll('.aggregatetimeestimate');

  if (estimationCells.length < 1) {
    alert('Error: Please enable the column \'Σ Remaining Estimate.\'');
    return false;
  }

  return estimationCells;
}
