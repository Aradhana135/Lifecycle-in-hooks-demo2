import React from 'react';
import ReactDOM from 'react-dom/client';
import Clock from './Components/Clock';

// ReactDOM.render(
//    <React.StrictMode>
//       <Clock />
//    </React.StrictMode>,
//    document.getElementById('root')
// );
// setTimeout(() => {
//   let now=new Date()
//    ReactDOM.render(
//       <React.StrictMode>
//          <div><h1>Clock is removed from the DOM
//           { alert('clock is removed from the dom ')}</h1></div>
//       </React.StrictMode>,
//       document.getElementById('root')
//    );
// }, 4000);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Clock />
  </React.StrictMode>
);

setTimeout(() => {
    let now=new Date()
     root.render(
        <React.StrictMode>
           <div><h1>Clock is removed from the DOM.
            { alert('clock is removed from the dom ')}</h1></div>
        </React.StrictMode>,
        document.getElementById('root')
     );
  }, 4000);