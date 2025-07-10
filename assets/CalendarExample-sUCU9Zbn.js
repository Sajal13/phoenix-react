import{PA as e,PB as r,PD as a,R1 as l}from"./index-B0Yq2HoF.js";import{C as t,F as n}from"./FullCalendar-ESp4exWi.js";const o=`
import FullCalendar from 'components/base/FullCalendar';
import CalendarProvider from 'providers/CalendarProvider';

function Calendar() {
  return (
    <CalendarProvider>
      <FullCalendar
        height={800}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        }}
        buttonText={{
          month: 'Month',
          week: 'Week',
          day: 'Day',
          today: 'Today'
        }}
      />
    </CalendarProvider>
  );
};`,i=()=>e.jsxs("div",{children:[e.jsx(r,{title:"Calendar",description:"Phoenix-React uses FullCalendar for calendar component. FullCalendar seamlessly integrates with the React JavaScript framework. It provides a component that exactly matches the functionality of FullCalendar’s standard API.",link:{text:"FullCalendar Documentation",url:"https://fullcalendar.io/docs/react"}}),e.jsxs(a,{className:"mb-4",children:[e.jsx(a.Header,{title:"Calendar Example",children:e.jsxs("p",{className:"mb-0",children:["Basic example of FullCalendar with default options in Phoenix. You can also pass any"," ",e.jsx("a",{href:"https://fullcalendar.io/docs#toc",target:"_blank",rel:"noopener noreferrer",children:"FullCalendar props"})," ","to the FullCalendar component."," ",e.jsx(l,{to:"/apps/calendar",target:"_blank",children:"See advanced implementation of fullCalendar"})]})}),e.jsx(a.Body,{code:o,scope:{FullCalendar:n,CalendarProvider:t}})]})]});export{i as default};
