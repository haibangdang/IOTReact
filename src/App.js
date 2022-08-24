import React from 'react';
import HookMqtt from './components/Hook/'
// import Dashboard from './components/Dashboard.jsx';
import PageNotFound from './components/Shared/PageNotFound/PageNotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ClientLayout from './layouts/ClientLayout';
import { clientRoutes } from './routes';


// Hook or Class
// import ClassMqtt from './components/Class/'
import './App.css';
import Dashboard from './components/Dashboard';

function App() {
  const renderRoutes = (routes, Layout) => {
      return routes.map((route, index) => {
          const { path, component, exact } = route;
          return (
              <Layout
                key={index}
                path={path}
                component={component}
                exact={exact}
              />
          );
      })
  };

  return (
      <div className="App">
          <Router>
              <Switch>
                  {/* Dành cho client */}
                  {renderRoutes(clientRoutes, ClientLayout)}

                  {/* Những cái khác */}
                  <Route path="*" component={PageNotFound} />
              </Switch>
          </Router>
      </div>
  );
}

export default App;

