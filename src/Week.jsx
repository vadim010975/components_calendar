import PropTypes from 'prop-types';
import Day from './Day';

function Week({ week }) {
  if (!week) return;
  return (
    <tr>
      <Day day={week[0]}/>
      <Day day={week[1]}/>
      <Day day={week[2]}/>
      <Day day={week[3]}/>
      <Day day={week[4]}/>
      <Day day={week[5]}/>
      <Day day={week[6]}/>
    </tr>
  )
}

Week.propTypes = {
  week: PropTypes.arrayOf(PropTypes.object),
}

export default Week;