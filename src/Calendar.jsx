import PropTypes from 'prop-types';
import Week from './Week'
import getWeeks from './getWeeks';

function Calendar({ date }) {

  const weeks = getWeeks(date);

  const dayNames = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
  
  return (
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">{dayNames[date.getDay()]}</div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{date.getDate()}</div>
          <div className="ui-datepicker-material-month">{getMonth(date)}</div>
          <div className="ui-datepicker-material-year">{date.getFullYear()}</div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">{getMonth(date, 'NC')}</span>&nbsp;<span className="ui-datepicker-year">{date.getFullYear()}</span>
        </div>
      </div>
      <table className="ui-datepicker-calendar">
        <colgroup>
          <col />
          <col />
          <col />
          <col />
          <col />
          <col className="ui-datepicker-week-end" />
          <col className="ui-datepicker-week-end" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col" title="Понедельник">Пн</th>
            <th scope="col" title="Вторник">Вт</th>
            <th scope="col" title="Среда">Ср</th>
            <th scope="col" title="Четверг">Чт</th>
            <th scope="col" title="Пятница">Пт</th>
            <th scope="col" title="Суббота">Сб</th>
            <th scope="col" title="Воскресенье">Вс</th>
          </tr>
        </thead>
        <tbody>
          <Week week={weeks[0]}/>
          <Week week={weeks[1]}/>
          <Week week={weeks[2]}/>
          <Week week={weeks[3]}/>
          <Week week={weeks[4]}/>
          <Week week={weeks[5]}/>
        </tbody>
      </table>
    </div>
  )
}

function getMonth(date, _case) {
  const monthNamesG = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
  const numberMonth = date.getMonth();
  if (_case != 'NC') {
    return monthNamesG[numberMonth];
  }
  if (numberMonth === 4) return 'май';
  let monthNameNC = monthNamesG[numberMonth];
  if (monthNameNC.endsWith('я')) {
    monthNameNC = monthNameNC.slice(0, -1) + 'ь';
    return monthNameNC;
  }
  monthNameNC = monthNameNC.slice(0, -1);
  return monthNameNC;
}

Calendar.propTypes = {
  date: PropTypes.object,
}

export default Calendar;
