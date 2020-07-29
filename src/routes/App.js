import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeProyecto from '../conteiners/HomeProyectos';
import HomeHabilidades from '../conteiners/HomeHabilidades';
import HomeInfoAdicional from '../conteiners/HomeInfoAdicional';
import Layout from '../components/Layout';
import 'normalize.css';

const App = () => (
     <>
    <BrowserRouter>
    < Layout/>
           <Switch>
                < Route exact path='/' component= {HomeProyecto} />
                < Route exact path='/0' component= {HomeHabilidades} />
                < Route exact path='/1' component= {HomeInfoAdicional} />
           </Switch>
        </BrowserRouter>
    </>
);

export default App;