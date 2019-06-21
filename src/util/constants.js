const minutesPerHour = 60;
const workDaysPerWeek = 5;

export const centsPerHourDefault = 9000;
export const centsPerEuro =  100;
export const hoursPerWorkDay = 8;
export const minutesPer = {
  week: workDaysPerWeek * hoursPerWorkDay * minutesPerHour,
  day: hoursPerWorkDay * minutesPerHour,
  hour: minutesPerHour,
  minute: 1,
};
