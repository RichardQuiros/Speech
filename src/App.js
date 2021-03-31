import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {
	Head,
	Error404,
	EstructuraDatos,
	GrafoArbol,
	Home,
	Navbar,
	Nosotros,
	Topix,
} from "./components"
import './App.css'
const App = () => {
	return (
		<Fragment>
			<Head />
			<Router>
	  <div>
	  <Navbar/>
				<Switch>
					<Route path="/" exact>
						<Home />
					</Route>
					<Route path="/nosotros">
						<Nosotros />
					</Route>
					<Route path="/temas">
						<Topix />
					</Route>
					<Route path="/estructuraDeDatosTemas">
						<EstructuraDatos />
					</Route>
					<Route path="/grafos-arbol">
						<GrafoArbol />
					</Route>
					<Route component={Error404} />
				</Switch>
	  </div>
			</Router>
		</Fragment>
	);
};

export default App;
