import './App.css'
import React, { Fragment, lazy, Suspense, useState} from "react";
import ReactGA from 'react-ga'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Head =  lazy(()=> import('./components/Head_.jsx'))
const EstructuraDatos =  lazy(()=> import('./components/EstructuraDeDatosTemas_.jsx'))
const Error404 =  lazy(()=> import('./components/Eror404.jsx'))
const GrafoArbol =  lazy(()=> import('./components/GrafoArbol_.jsx'))
const Home =  lazy(()=> import('./components/Home_.jsx'))
const Navbar =  lazy(()=> import('./components/Navbar_.jsx'))
const Nosotros =  lazy(()=> import('./components/Nosotros_.jsx'))
const Topix =  lazy(()=> import('./components/Topic_.jsx'))

const renderLoader = () => <div className="h-screen w-screen grid place-items-center"> <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-1000 hover:bg-blue-500 focus:border-rose-700 active:bg-rose-700 transition ease-in-out duration-150 cursor-not-allowed" disabled>
  <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
 Speech📢
</button>
  </div>
const App = () => {
useState(()=>{
   ReactGA.initialize(process.env.GA_ID || '');
},[])
	return (
		<Fragment>
	  <Suspense fallback={renderLoader()}>
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
	  </Suspense>
		</Fragment>
	);
};

export default App;
