import './App.css';
import Calendar from './Calendar';
import { now } from './main';

function App() {
  return (
    <Calendar date={now} />
  )
}

export default App;
