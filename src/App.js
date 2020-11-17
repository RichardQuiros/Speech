import React,{Fragment} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Slide from './components/sildeExample'
import Home from './components/home'
import Nosotros from './components/nosotros'
import Topic from './components/topic'
import Etd from './components/estructuraDeDatosTemas'
import GrafosArbol from './components/grafoArbol'
import Notfound from './components/404'
const App = ()=>{
  return( 
    <Fragment>
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/slide">
          <Slide/>
        </Route>
        <Route path="/nosotros">
          <Nosotros/>
        </Route>
        <Route path="/temas">
          <Topic/>
        </Route>
        <Route path="/estructuraDeDatosTemas">
          <Etd/>
        </Route>
        <Route path="/grafos-arbol">
          <GrafosArbol/>
        </Route>
        <Route component={Notfound} />
      </Switch>
    </Router>
    </Fragment>
  )
}

export default App