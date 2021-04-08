import React from 'react';
import ReactDOM from 'react-dom';

import { Button, DatePicker, version } from "antd";
import "antd/dist/antd.css";

import './index.css';

import App from './App';
import Clock, {Toggle} from './Clock';

import reportWebVitals from './reportWebVitals';

// /* 路由 */
// import { BrowserRouter } from "react-router-dom";
// console.log('BrowserRouter>>>', BrowserRouter);

// 2021-04-05
import RState from './component/20210405/RState';
import RToggle from './component/20210405/RToggle';
// 2021-04-06
import Numlist from './component/20210406/RListKey';
import RForm from './component/20210406/RForm'
// 2021-04-07
import Calculator from './component/20210407/stateUp';
import WelcomeDialog from './component/20210407/comInherit'


/* 错误监控 */
window.onerror = function(msg, url, lineNo, columnNo, error){
  console.log(msg, url, lineNo, columnNo, error, 1234);
}
window.addEventListener('error', e => {
  console.log('error:', e.target, e);
}, true)


ReactDOM.render(
  <React.StrictMode>
    <App />
    <Clock />
    <Toggle />

    <DatePicker />
    <Button type="primary" style={{ marginLeft: 8 }}>
      Primary Button
    </Button>
    {/* 20210405测试学习 */}
    <RState />
    <RToggle />
    {/* 2021 04 06 学习 */}
    <Numlist />
    <RForm />
    {/* 2021 04 05 状态提升 */}
    <Calculator />
    <WelcomeDialog />





  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
