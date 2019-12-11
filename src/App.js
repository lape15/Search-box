import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import {Switch, BrowserRouter, Route} from 'react-router-dom';
import routes from './routes/index'
import Header from './components/Header'

class App extends React.Component{

  render(){
    console.log(routes);
    return (
      <>
      <BrowserRouter>
      <Header/> 
      <div className="App">
          <Switch>
            {routes.map((route, key) => 
              <Route
                key={key}
                exact={route.exact}
                path={route.path}
                component={route.component}
                />
            )}
            </Switch>
            </div>
        </BrowserRouter>
      </>
    )
  }
}

export default App;
