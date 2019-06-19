calculateEstimate();

function calculateEstimate() {

  var l10n = {
    en: {
      pleaseEnter: () => 'Please enter the cost per hour in €:',
      costResult: costSum => `Estimatet cost for displayed issues: ${costSum} €.`,
      notANumber: () => 'This is not a number. Please try again.',
    },
    de: {
      pleaseEnter: () => 'Bitte die Kosten für eine Arbeitsstunde in € eingeben:',
      costResult: costSum => `Ungefähre Kosten für angezeigte Tickets: ${costSum} €.`,
      notANumber: () => 'Das ist leider keine gültige Zahl. Versuch\'s nochmal.',
    },
  };

  var labels = document.documentElement.lang in l10n ? l10n[document.documentElement.lang] : l10n.en;

  var userIsInNavigator = document.querySelector('.navigator-container') !== null;
  if (!userIsInNavigator) {
    alert('Error: Please go to the Jira issue navigator.');
    return;
  }

  var isDetailView = document.querySelector('.details-layout') !== null;
  if (isDetailView) {
    alert('Error: Please change view type to list.');
    return;
  }

  var estimationCells = document.querySelectorAll('.aggregatetimeestimate');

  if (estimationCells.length < 1) {
    alert('Error: Please enable the column \'Σ Remaining Estimate.\'');
    return;
  }

  var allEstimates = [];
  var remainingEstimationSum = 0;
  var costPerHourDefault = 9000;
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
  
  var estimationInHours = remainingEstimationSum / 60;
  var costPerHour;
  
  costPerHour = parseFloat(window.prompt(labels.pleaseEnter(), costPerHourDefault / 100)) * 100;

  if (isNaN(costPerHour)) {
    alert(labels.notANumber());
    return;
  }

  var costSum = ((costPerHour * estimationInHours) / 100).toFixed(2);

  alert(labels.costResult(costSum)); 
}
