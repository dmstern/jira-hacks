import { multipiers } from './constants';

export default function(estimationCells) {
  var allEstimates = [];
  var remainingEstimationSum = 0;

  estimationCells.forEach(cell => {
    var remainingEstimation = cell.innerHTML;
    if (!remainingEstimation) {
      return false;
    }

    var parts = remainingEstimation.split(',');
    allEstimates.push(...parts);
  });

  allEstimates.forEach(timeString => {
    timeString = timeString.trim();
    if (timeString.endsWith('s')) {
      timeString = timeString.substring(0, timeString.length - 1);
    }

    var timeStringParts = timeString.split(' ');
    var value = parseInt(timeStringParts[0]);
    var multipier = multipiers[timeStringParts[1]];
    remainingEstimationSum += value * multipier;
  });

  return remainingEstimationSum;
}
