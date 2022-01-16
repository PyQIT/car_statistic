import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute} from 'react-router'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import WeightStatistic from './components/Statistic/WeightStatistic'
import CapacityStatistic from './components/Statistic/CapacityStatistic'
import AgeStatistic from './components/Statistic/AgeStatistic'
import InhabitantsStatistic from './components/Statistic/InhabitantsStatistic'
import MotorEnergyStatistic from './components/Statistic/MotorEnergyStatistic'

class Application extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path={"/home"} component={App}/>
                <Route path={"/age"} component={AgeStatistic}/>
                <Route path={"/capacity"} component={CapacityStatistic}/>
                <Route path={"/inhabitants"} component={InhabitantsStatistic}/>
                <Route path={"/motorEnergy"} component={MotorEnergyStatistic}/>
                <Route path={"/weight"} component={WeightStatistic}/>
                <Route path={"/"} component={App}/>
            </Router>
        );
    }
}

ReactDOM.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
