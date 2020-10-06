import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Homepage from './pages/homepage/hompage'


import Header from './component/header/header.component'

import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
