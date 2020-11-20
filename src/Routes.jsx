import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Comics from './Pages/Comics/Index';
import Details from '../src/Pages/Details/Index';
import Store from './Pages/Store/index';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Comics}></Route>
                <Route path="/Details/:Detalhe/:id" exact component={Details}></Route>
                <Route path="/Store" exact component={Store}></Route>
            </Switch>
        </BrowserRouter>
    )
}
