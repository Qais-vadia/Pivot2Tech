import React from 'react';
import ReactDOM from 'react-dom/client';
//import App from './App';
import Card from './Card';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Card 
    imgLink="https://static.vecteezy.com/system/resources/previews/006/468/777/non_2x/astronaut-with-retrowave-background-vector.jpg"
    Name="Qais"
    Job="Radiographer"
    JobDesc="I take x-rays"
    />
  </React.StrictMode>
);


