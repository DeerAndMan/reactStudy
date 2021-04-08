import React from 'react'
/* 路由 */

// 导入路由
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'

import About from '../views/About'
import Home from '../views/Home'

export default function Routers() {
    return (
        <Router>
            <ul>
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/About'>About</Link></li>
            </ul>
            {/*  */}
            <Switch>
                <Router path="/home">
                    <Home />
                </Router>
                <Router>
                    <About />
                </Router>
            </Switch>

        </Router>
    )
}
