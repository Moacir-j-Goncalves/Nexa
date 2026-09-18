import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
import './Calendario.css';

function Calendario({onDataChange}) {
  const [data, setData] = useState(new Date());

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return (
    <div style={{
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}}>
      <Calendar
        onChange={(novaData)=> {setData(novaData); if (onDataChange)onDataChange(novaData);}}
        value={data}
        tileDisabled={({ date }) => {
          const d = new Date(date);
          d.setHours(0, 0, 0, 0);
          return d < today;
        }}
        tileClassName={({ date }) => {
          const d = new Date(date);
          d.setHours(0, 0, 0, 0);
          return d < today ? 'dia-passado' : null;
        }}
      />
    </div>
  );
}

export default Calendario;