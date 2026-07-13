import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './component/App';
import Home from './component/Home';
// import List from './component/List';
import Event from './component/Event';
import Condition from './component/Condition';
import List1 from './component/List1';
//import Forms from './component/Forms';
import Passargu from './component/Passargu';
import Hook1 from './component/Hook1';
import Clist from './component/Clist';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const secondview = ReactDOM.createRoot(document.getElementById('root1'));
secondview.render(
  <React.StrictMode>
    <Home name ='red' price = "150000"/>
    </React.StrictMode>
);
const car_list =ReactDOM.createRoot(document.getElementById('root2'));
car_list.render(
  <React.StrictMode>
    {/* <List /> */}
    <Home name ='red' price = "30000"/>
  </React.StrictMode>
);

const tview = ReactDOM.createRoot(document.getElementById('root3'));
tview.render(
  <React.StrictMode>
  <Event />
  <Passargu />
  </React.StrictMode>
);
function Ready(){
  return <h1 id='r'>  Ready to Go!</h1>
}
function Notready(){
  return <h1 id='r'>Not Ready to go!</h1>;
}

function Status(props){
  const state = props.isReady;
  if (state) {
    return <Ready/>;
  }
  else {
    return <Notready/>
  }
}

function Goal(props){
  const isGoal = props.finalise;
  const id = props.number;
  return (
    <div> 
      { isGoal ? <Ready/> : <Notready/> }
      <h1 id='b'>No={id}</h1>
    </div>
  );
}


const root5 = ReactDOM.createRoot(document.getElementById('root5'));
root5.render(<Status isReady={true} />);

const cars = ['Ford','BMW',  'Audi'];
const root6 =ReactDOM.createRoot(document.getElementById('root6'));
root6.render(<Condition vehicle={cars} />);


const root7 = ReactDOM.createRoot(document.getElementById('root7'));
root7.render(<Goal finalise={false} number={101} />);

const root8 = ReactDOM.createRoot(document.getElementById('root8'));
root8.render(
<React.StrictMode>
<List1 />
<Clist />
</React.StrictMode>
);

const root9 = ReactDOM.createRoot(document.getElementById('root9'));
root9.render(
<React.StrictMode>
{/* <Forms /> */}
{/* <Garage /> */}
<Hook1 />
</React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals((console.log));y

