import PropTypes from 'prop-types';
import { now } from './main';

function Day({ day }) {
  if (day.getTime() === now.getTime()) {
    return (
      <td className="ui-datepicker-today">{day.getDate()}</td>
    )
  }
  if (day.getMonth() != now.getMonth()) {
    return (
      <td className="ui-datepicker-other-month">{day.getDate()}</td>
    )
  }
  return (
    <td>{day.getDate()}</td>
  )
}

Day.propTypes = {
  day: PropTypes.object,
}

export default Day;