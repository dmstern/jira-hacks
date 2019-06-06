var estimationCells = document.querySelectorAll('.aggregatetimeestimate');
var allEstimates = [];
var remainingEstimationSum = 0;
var multipiers = {
  week: 2400,
  day: 480,
  hour: 60,
  minute: 1,
};

estimationCells.forEach(cell => {
  var remainingEstimation = cell.innerHTML;
  if (!remainingEstimation) {
    return;
  }

  var parts = remainingEstimation.split(',');
  allEstimates.push(...parts);
});

allEstimates.forEach(timeString => {
  timeString = timeString.trim();
  if(timeString.endsWith('s')) {
    timeString = timeString.substring(0, timeString.length-1);
  }

  var timeStringParts = timeString.split(' ');
  var value = parseInt(timeStringParts[0]);
  var multipier = multipiers[timeStringParts[1]];
  remainingEstimationSum += value * multipier;
});

var estimationInPT = remainingEstimationSum / (60*8);
var outPutValue = estimationInPT.toFixed(1);

var output = {
  de: `Geschätzter restlicher Aufwand für angezeigte Tickets: ${outPutValue} PT.`,
  en: `Estimated remaining effort for the displayed issues: ${outPutValue} PT.`
};

alert(document.documentElement.lang in output ? output[document.documentElement.lang] : output.en);
