export default function getWeeks(currentDate) {
  let firstDay = new Date(new Date(currentDate).setDate(1));
  const weeks = [];
  do {
    const week = getWeek(firstDay);
    weeks.push(week);
    firstDay = new Date(new Date(week[6]).setDate(week[6].getDate() + 1));
  } while (firstDay.getMonth() === currentDate.getMonth());
  return weeks;
}

function getWeek(_date) {
  const date = _date.getDay() === 0 ?
  new Date(new Date(_date).setDate(_date.getDate() - 6)) :
  new Date(new Date(_date).setDate(_date.getDate() - _date.getDay() + 1));
  const week = [];
  week.push(new Date(date));
  for (let i = 0; i < 6; i += 1) {
    date.setDate(date.getDate() + 1);
    week.push(new Date(date));
  }
  return week;
}